const express = require('express');
const { body, validationResult } = require('express-validator');
const Payment = require('../models/Payment');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const { google } = require('googleapis');

const axios = require('axios');
const { trackEvent } = require('../utils/analytics');
const crypto = require('crypto');





const router = express.Router();

// Credit packs configuration matching frontend
const CREDIT_PACKS = {
  'credits_3': {
    id: 'credits_3',
    name: 'Novies Pack',
    credits: 3,
    price: 300
  },
  'credits_25': {
    id: 'credits_25',
    name: 'Starter Pack',
    credits: 25,
    price: 2250
  },
  'credits_100.0': {
    id: 'credits_100.0',
    name: 'Value Pack',
    credits: 100,
    price: 8000
  },
  'credits_250': {
    id: 'credits_250',
    name: 'Stylist Pack',
    credits: 250,
    price: 17500
  },
};

router.post('/verify-google-play', protect, [
  body('productId').notEmpty().withMessage('Product ID is required'),
  body('purchaseToken').notEmpty().withMessage('Purchase token is required'),
  body('packageName').notEmpty().withMessage('Package name is required')
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid input", 
      errors: errors.array() 
    });
  }

  const { productId, purchaseToken, packageName } = req.body;
  const user = req.user;

  try {
    // --- 1. Check if purchaseToken was already processed (Early check) ---
    const existingPayment = await Payment.findOne({
      'googlePlay.purchaseToken': purchaseToken,
      status: 'success'
    });

    if (existingPayment) {
      console.warn(`Google Play Purchase Token already processed: ${purchaseToken}`);
      return res.json({ 
        success: true, 
        message: "Purchase already processed.", 
        creditsGranted: 0 
      });
    }

    // --- 2. Initialize Google Auth Client ---
    let client;
    try {
      // Validate required environment variables
      if (!process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
        throw new Error('Missing Google service account credentials in environment variables');
      }

      client = new google.auth.JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/androidpublisher']
      });

      await client.authorize();
    } catch (authError) {
      console.error('Google Auth initialization error:', authError);
      throw new Error('Failed to initialize Google authentication');
    }

    // --- 3. Verify with Google Play API ---
    const androidPublisher = google.androidpublisher({
      version: 'v3',
      auth: client,
    });

    let verification;
    try {
      verification = await androidPublisher.purchases.products.get({
        packageName: packageName,
        productId: productId,
        token: purchaseToken,
      });
    } catch (googleError) {
      console.error('Google Play API error:', googleError.message);
      
      // Log detailed error for debugging
      if (googleError.response?.data) {
        console.error('Google API Error Details:', googleError.response.data);
      }

      // Create failed payment record
      await Payment.create({
        user: user._id,
        type: 'credit_pack',
        itemId: productId,
        itemName: CREDIT_PACKS[productId]?.name || productId,
        amount: 0,
        currency: 'USD',
        credits: 0,
        status: 'failed',
        paystack: {
          reference: `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`
        },
        googlePlay: {
          purchaseToken: purchaseToken
        },
        failureReason: `Google API error: ${googleError.message}`,
        webhookData: googleError.response?.data || { error: googleError.message }
      });

      return res.status(400).json({ 
        success: false, 
        message: "Failed to verify purchase with Google Play." 
      });
    }

    // --- 4. Validate Purchase State ---
    // purchaseState: 0 = PURCHASED, 1 = CANCELED, 2 = PENDING
    if (!verification.data || verification.data.purchaseState !== 0) {
      console.error("Google Play Verification Failed - Invalid purchase state:", verification.data);
      
      await Payment.create({
        user: user._id,
        type: 'credit_pack',
        itemId: productId,
        itemName: CREDIT_PACKS[productId]?.name || productId,
        amount: 0,
        currency: 'USD',
        credits: 0,
        status: 'failed',
        paystack: {
          reference: `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`
        },
        googlePlay: {
          purchaseToken: purchaseToken
        },
        failureReason: `Invalid purchase state: ${verification.data?.purchaseState ?? 'unknown'}`,
        webhookData: verification.data
      });

      return res.status(400).json({ 
        success: false, 
        message: "Purchase verification failed - invalid purchase state." 
      });
    }

    // --- 5. Check for consumption state (optional but recommended) ---
    // consumptionState: 0 = YET_TO_BE_CONSUMED, 1 = CONSUMED
    if (verification.data.consumptionState === 1) {
      console.warn(`Purchase token already consumed: ${purchaseToken}`);
      return res.json({ 
        success: true, 
        message: "Purchase already consumed.", 
        creditsGranted: 0 
      });
    }

    // --- 6. Validate Product ID ---
    const creditsToAdd = CREDIT_PACKS[productId]?.credits || 0;
    if (creditsToAdd <= 0) {
      console.error(`Invalid productId or credits not found for ${productId}`);
      return res.status(400).json({ 
        success: false, 
        message: `Invalid product ID: ${productId}` 
      });
    }

    // --- 7. Grant Credits ---
    await user.addCredits(creditsToAdd);

    // --- 8. Record Successful Payment ---
    const payment = await Payment.create({
      user: user._id,
      type: 'credit_pack',
      itemId: productId,
      itemName: CREDIT_PACKS[productId].name,
      amount: verification.data.priceAmountMicros 
        ? verification.data.priceAmountMicros / 1000000 
        : CREDIT_PACKS[productId].price / 100, // Fallback to local price
      currency: verification.data.priceCurrencyCode || 'USD',
      credits: creditsToAdd,
      status: 'success',
      paystack: {
        reference: `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`
      },
      googlePlay: {
        purchaseToken: purchaseToken
      },
      webhookData: verification.data
    });

    console.log(`User ${user.email} credited with ${creditsToAdd} credits for Google Play purchase ${productId}`);
    
    res.json({ 
      success: true, 
      message: "Purchase verified and credits added!", 
      creditsGranted: creditsToAdd 
    });

  } catch (error) {
    console.error('Google Play verification error:', error);
    
    // Attempt to log failed payment (but don't fail if this fails)
    try {
      await Payment.create({
        user: user._id,
        type: 'credit_pack',
        itemId: productId,
        itemName: CREDIT_PACKS[productId]?.name || productId,
        amount: 0,
        currency: 'USD',
        credits: 0,
        status: 'failed',
        paystack: {
          reference: `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`
        },
        googlePlay: {
          purchaseToken: purchaseToken
        },
        failureReason: `Server error during verification: ${error.message}`,
        webhookData: { error: error.message, stack: error.stack }
      });
    } catch (logError) {
      console.error('Failed to log payment error:', logError);
    }
    
    // Return error response
    res.status(500).json({
      success: false,
      message: 'Server error during purchase verification. Please contact support.'
    });
  }
});



// VERIFY PAYMENT (Called by the frontend's polling logic)
router.post('/verify', protect, [
  body('reference').notEmpty().withMessage('Payment reference is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  
  try {
    const { reference } = req.body;
    const user = req.user;

    // 1. Find the payment record in the database with a single query
    const payment = await Payment.findOne({ 'paystack.reference': reference });

    // 2. If the record doesn't exist yet, it's still processing
    if (!payment) {
        return res.json({ 
            success: false, 
            message: 'Payment record not found, still processing.',
            data: { status: 'pending' }
        });
    }

    // 3. Security Check: Ensure the payment belongs to the user
    if (payment.user.toString() !== user._id.toString()) {
        return res.status(403).json({ success: false, message: 'Unauthorized to verify this payment.' });
    }

    // 4. Check the status set by the webhook and respond accordingly
    if (payment.status === 'success') {
        // The webhook worked! Send a success response.
        const updatedUser = await User.findById(user._id);
        return res.json({
            success: true,
            message: 'Payment confirmed!',
            data: {
                status: payment.status,
                creditsAdded: payment.credits,
                newCreditBalance: updatedUser.credits
            }
        });
    } else {
        // The webhook has not processed this yet. Tell the frontend it's pending.
        return res.json({
            success: false,
            message: 'Payment is still processing.',
            data: {
                status: payment.status // e.g., 'pending' or 'failed'
            }
        });
    }

  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during payment verification.' });
  }
});



// PAYSTACK WEBHOOK HANDLER (Called by Paystack's servers)
router.post('/webhook', async (req, res) => {
    // 1. Verify the webhook signature from Paystack
    const hash = crypto.createHmac('sha512', PAYSTACK_SECRET_KEY).update(JSON.stringify(req.body)).digest('hex');

    if (hash !== req.headers['x-paystack-signature']) {
        return res.status(400).send('Invalid signature');
    }

    // 2. Acknowledge receipt of the event immediately
    res.sendStatus(200);

    const event = req.body;
    console.log(`Paystack Webhook event received: ${event.event}`);

    // 3. Process only successful charge events
    if (event.event === 'charge.success') {
        const { reference, amount, metadata, customer } = event.data;

        // Make sure metadata from the transaction is valid
        if (!metadata || !metadata.user_id || !metadata.credits_to_add) {
            console.error(`Webhook Error: Incomplete metadata for reference: ${reference}`);
            return;
        }

        try {
            // 4. Find the payment using the correct nested path in your new model
            const payment = await Payment.findOne({ 'paystack.reference': reference });

            // 5. IMPORTANT: Check if payment was already processed to prevent double-crediting
            if (payment && payment.status === 'success') {
                console.log(`Webhook Info: Payment reference ${reference} already processed.`);
                return;
            }

            // 6. Find the user by the ID saved in the transaction metadata
            const user = await User.findById(metadata.user_id);
            if (!user) {
                console.error(`Webhook Error: User not found with ID: ${metadata.user_id}`);
                return;
            }
            
            // This is a robust way to handle the payment record. 
            // It finds an existing 'pending' record or creates a new one if it doesn't exist.
            const paymentRecord = await Payment.findOneAndUpdate(
                { 'paystack.reference': reference },
                {
                    user: user._id,
                    type: 'credit_pack',
                    itemId: metadata.pack_id,
                    itemName: CREDIT_PACKS[metadata.pack_id]?.name || 'Credit Pack',
                    amount: amount/100,
                    currency: 'NGN',
                    credits: metadata.credits_to_add,
                    'paystack.reference': reference,
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );

            // 7. Use the model method to mark the transaction as successful
            await paymentRecord.markAsSuccess(event.data);

            // 8. Add the credits to the user's account
            await user.addCredits(metadata.credits_to_add);

            console.log(`Webhook Success: User ${user.email} was credited with ${metadata.credits_to_add} credits.`);

        } catch (error) {
            console.error(`Webhook Processing Error for reference ${reference}:`, error);
        }
    }
});


// Get payment history
router.get('/history', protect, async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;

    const payments = await Payment.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-paystackResponse'); // Don't expose sensitive data

    const total = await Payment.countDocuments({ userId: req.user._id });

    res.json({
      success: true,
      data: payments,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });

  } catch (error) {
    console.error('Get payment history error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get payment history'
    });
  }
});

// Get pricing plans
router.get('/plans', (req, res) => {
  res.json({
    success: true,
    data: {
      creditPacks: Object.entries(CREDIT_PACKS).map(([id, pack]) => ({
        id,
        ...pack,
        priceNGN: pack.price,
        priceUSD: Math.round(pack.price) // Approximate conversion
      })),
      subscriptions: Object.entries(SUBSCRIPTION_PLANS).map(([id, plan]) => ({
        id,
        ...plan,
        priceNGN: plan.price,
        priceUSD: Math.round(plan.price) // Approximate conversion
      }))
    }
  });
});

module.exports = router;