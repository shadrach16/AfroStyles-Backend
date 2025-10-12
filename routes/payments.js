const express = require('express');
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const Payment = require('../models/Payment');
const User = require('../models/User');
const {protect} = require('../middleware/auth');
const { trackEvent } = require('../utils/analytics');
const crypto = require('crypto');

const router = express.Router();

// Paystack configuration
const PAYSTACK_BASE_URL = 'https://api.paystack.co';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Credit packs configuration (prices are in Kobo)
const CREDIT_PACKS = {
  quick_start: { credits: 2, price: 200, name: 'Quick Start Pack' },
  starter: { credits: 25, price: 2250, name: 'Starter Pack' },
  value: { credits: 100, price: 8000, name: 'Value Pack' },
  stylist: { credits: 250, price: 17500, name: 'Stylist Pack' }
};



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