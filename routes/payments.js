const express = require('express');
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const Payment = require('../models/Payment');
const User = require('../models/User');
const {protect} = require('../middleware/auth');
const { trackEvent } = require('../utils/analytics');
const crypto = require('crypto');
const { auth } = require('google-auth-library');
const { google } = require('googleapis');



const router = express.Router();

// Paystack configuration
const PAYSTACK_BASE_URL = 'https://api.paystack.co';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Credit packs configuration (prices are in Kobo)
const CREDIT_PACKS = {
  credits_10: { credits: 10, price: 20000, name: '10 Credits' }, // Example for Google Play ID match
  credits_25: { credits: 25, price: 225000, name: '25 Credits' },
  credits_100: { credits: 100, price: 800000, name: '100 Credits' },
  // Ensure IDs match Google Play Product IDs
};




router.post('/verify-google-play', protect, [
    body('productId').notEmpty().withMessage('Product ID is required'),
    body('purchaseToken').notEmpty().withMessage('Purchase token is required'),
    body('packageName').notEmpty().withMessage('Package name is required') // Get this from your app config
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Invalid input", errors: errors.array() });
    }

    const { productId, purchaseToken, packageName } = req.body;
    const user = req.user;

    try {
        // --- 1. Verify with Google ---
        // Load service account credentials (store securely, e.g., env vars or secret manager)
        // You need to create a service account in Google Cloud Console with Play Developer API access
        const client = auth.fromJSON({
            type: "service_account",
            project_id: process.env.GOOGLE_PROJECT_ID,
            private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Handle newline characters
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            // ... other service account details
        });
        client.scopes = ['https://www.googleapis.com/auth/androidpublisher'];

        const androidPublisher = google.androidpublisher({
            version: 'v3',
            auth: client,
        });

        const verification = await androidPublisher.purchases.products.get({
            packageName: packageName,
            productId: productId,
            token: purchaseToken,
        });

        if (!verification.data || verification.data.purchaseState !== 0) { // 0 = PURCHASED
            console.error("Google Play Verification Failed:", verification.data);
            // Optionally save failed attempt
            await Payment.create({
                user: user._id,
                type: 'credit_pack',
                itemId: productId,
                itemName: CREDIT_PACKS[productId]?.name || productId,
                amount: 0, // Amount might not be known here, or fetch from product details
                currency: 'USD', // Assuming USD for Play Store
                credits: 0,
                status: 'failed',
                'paystack.reference': `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`, // Create a pseudo-reference
                failureReason: `Google verification failed. State: ${verification.data?.purchaseState ?? 'unknown'}`,
                webhookData: verification.data // Store Google's response
            });
            return res.status(400).json({ success: false, message: "Purchase verification failed with Google." });
        }

        // --- 2. Check if purchaseToken was already processed ---
        const existingPayment = await Payment.findOne({
            'googlePlay.purchaseToken': purchaseToken,
            status: 'success' // Look only for successfully processed tokens
        });

        if (existingPayment) {
            console.warn(`Google Play Purchase Token already processed: ${purchaseToken}`);
            // Return success because the user *did* pay, even if we already credited them.
            // The frontend should call .finish() regardless.
            return res.json({ success: true, message: "Purchase already processed.", creditsGranted: 0 });
        }

        // --- 3. Grant Credits ---
        const creditsToAdd = CREDIT_PACKS[productId]?.credits || 0;
        if (creditsToAdd <= 0) {
            console.error(`Invalid productId or credits not found for ${productId}`);
            return res.status(400).json({ success: false, message: `Invalid product ID: ${productId}` });
        }

        await user.addCredits(creditsToAdd);

        // --- 4. Record Successful Payment ---
        await Payment.create({
            user: user._id,
            type: 'credit_pack',
            itemId: productId,
            itemName: CREDIT_PACKS[productId]?.name || productId,
            amount: verification.data.priceAmountMicros ? verification.data.priceAmountMicros / 1000000 : 0, // Convert micros
            currency: verification.data.priceCurrencyCode || 'USD',
            credits: creditsToAdd,
            status: 'success',
            'paystack.reference': `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`, // Pseudo-reference
            // Add a specific field for Google Play data if needed in your Payment model
            // For now, storing token in webhookData for idempotency check
            'googlePlay.purchaseToken': purchaseToken, // Requires adding this field to Payment model
            webhookData: verification.data // Store Google's response
        });

        console.log(`User ${user.email} credited with ${creditsToAdd} credits for Google Play purchase ${productId}`);
        res.json({ success: true, message: "Purchase verified and credits added!", creditsGranted: creditsToAdd });

    } catch (error) {
        console.error('Google Play verification error:', error);
        // Log detailed error from Google API if available
        if (error.response?.data?.error) {
            console.error('Google API Error:', error.response.data.error);
        }
        await Payment.create({
            user: user._id,
            type: 'credit_pack',
            itemId: productId,
            itemName: CREDIT_PACKS[productId]?.name || productId,
            amount: 0,
            currency: 'USD',
            credits: 0,
            status: 'failed',
            'paystack.reference': `gp_${purchaseToken.substring(0, 10)}_${Date.now()}`,
            failureReason: `Server error during verification: ${error.message}`,
            'googlePlay.purchaseToken': purchaseToken,
             webhookData: error.response?.data // Store error response if possible
        });
        next(error); // Pass to global error handler
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
        priceUSD: Math.round(pack.price / 1500) // Approximate conversion
      })),
      subscriptions: Object.entries(SUBSCRIPTION_PLANS).map(([id, plan]) => ({
        id,
        ...plan,
        priceNGN: plan.price,
        priceUSD: Math.round(plan.price / 1500) // Approximate conversion
      }))
    }
  });
});

module.exports = router;