const express = require('express');
const crypto = require('crypto');
const User = require('../models/User');
const Payment = require('../models/Payment');

const router = express.Router();

// --- CONFIGURATION ---

// Copy this object from your routes/payments.js file.
// It MUST match your RevenueCat Product IDs.
const CREDIT_PACKS = {
  'credits_10': { id: 'credits_10', name: 'Novies Pack', credits: 3 },
  'credits_25': { id: 'credits_25', name: 'Starter Pack', credits: 25 },
  'credits_100': { id: 'credits_100', name: 'Essential Pack', credits: 100 },
  'credits_250': { id: 'credits_250', name: 'Stylist Pack', credits: 250 },
  'Unlimited': { id: 'Unlimited', name: 'Unlimited Access (VIP)', credits: 99999 }, // Or handle as subscription
};

const REVENUECAT_WEBHOOK_TOKEN = process.env.REVENUECAT_WEBHOOK_TOKEN;


// --- 1. RevenueCat Webhook Handler ---
// This route uses express.json() which we'll apply in server.js
router.post('/revenuecat', express.json(), async (req, res) => {
  // 1. Verify Authorization Header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token || token !== REVENUECAT_WEBHOOK_TOKEN) {
    console.warn('[RC Webhook] Unauthorized request');
    return res.status(401).send('Unauthorized');
  }

  const { event } = req.body;

  // 2. Acknowledge the event immediately
  res.status(200).send('OK');

  // 3. Process the event asynchronously
  try {
    // We only care about consumable purchases
    if (event.type !== 'CONSUMABLE_PURCHASE') {
      console.log(`[RC Webhook] Skipping event type: ${event.type}`);
      return;
    }

    const { app_user_id, product_id, transaction_id, id: event_id, price_in_purchased_currency, currency } = event;

    // 4. Check for duplicate event
    const existingPayment = await Payment.findOne({
      $or: [
        { 'revenueCat.transactionId': transaction_id },
        { 'revenueCat.eventId': event_id }
      ]
    });

    if (existingPayment) {
      console.log(`[RC Webhook] Duplicate event ${event_id}, skipping.`);
      return;
    }

    // 5. Find the user
    const user = await User.findById(app_user_id);
    if (!user) {
      console.error(`[RC Webhook] User not found: ${app_user_id}`);
      return;
    }

    // 6. Get credit pack details
    const pack = CREDIT_PACKS[product_id];
    if (!pack || !pack.credits) {
      console.error(`[RC Webhook] Credit pack not found or has 0 credits: ${product_id}`);
      return;
    }

    // 7. Grant Credits & Log Payment
    await user.addCredits(pack.credits);

    await Payment.create({
      user: user._id,
      type: 'credit_pack',
      itemId: product_id,
      itemName: pack.name,
      amount: price_in_purchased_currency,
      currency: currency || 'USD',
      credits: pack.credits,
      status: 'success',
      revenueCat: {
        transactionId: transaction_id,
        eventId: event_id
      },
      webhookData: event // Store the whole event for debugging
    });

    console.log(`[RC Webhook] Success: User ${user.email} credited with ${pack.credits} credits.`);

  } catch (error) {
    console.error(`[RC Webhook] Error processing event: ${error.message}`, error);
  }
});

 

module.exports = router;