const express = require('express');
const crypto = require('crypto');
const User = require('../models/User');
const Payment = require('../models/Payment');

const router = express.Router();

// --- CONFIGURATION ---

// Copy this object from your routes/payments.js file.
// It MUST match your RevenueCat Product IDs.
const CREDIT_PACKS = {
  'credits3': { id: 'credits3', name: 'Beginners Pack', credits: 3 },
  'credits10': { id: 'credits10', name: 'Novies Pack', credits: 10 },
  'credits25': { id: 'credits25', name: 'Starter Pack', credits: 25 },
  'credits100': { id: 'credits100', name: 'Essential Pack', credits: 100 },
  'credits250': { id: 'credits250', name: 'Stylist Pack', credits: 250 },
  'unlimited': { id: 'unlimited', name: 'Lifetime Access (VIP)', credits: 9999999 }, // Or handle as subscription
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
    

    const { app_user_id, product_id, transaction_id, id: event_id, price_in_purchased_currency, currency } = event;
  console.log('revenuelog',event.type,app_user_id,product_id)

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



// --- 1. Dodo Webhook Handler ---
// This route uses express.json() which we'll apply in server.js
router.post('/dodo', express.json(), async (req, res) => {
 
 console.log(req.body)

  // 2. Acknowledge the event immediately
  res.status(200).send('OK');


  // 3. Process the event asynchronously
  try {

    const app_user_id = req.body.data.customer.email
    product_id = req.body.data.metadata.product_id
    transaction_id = req.body.data.business_id
    event_id = req.body.data.brand_id
    price_in_purchased_currency = req.body.data.settlement_amount
    currency = req.body.data.settlement_currency


    // 4. Check for duplicate event
    const existingPayment = await Payment.findOne({
      $or: [
        { 'dodoPayment.transactionId': transaction_id },
        { 'dodoPayment.eventId': event_id }
      ]
    });

    if (existingPayment) {
      console.log(`[RC Webhook] Duplicate event ${event_id}, skipping.`);
      return;
    }

    // 5. Find the user
    const user = await User.findOne({email:app_user_id});
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
      dodoPayment: {
        transactionId: transaction_id,
        eventId: event_id
      },
      webhookData: req.body.data // Store the whole event for debugging
    });

    console.log(`[RC Webhook] Success: User ${user.email} credited with ${pack.credits} credits.`);

  } catch (error) {
    console.error(`[RC Webhook] Error processing event: ${error.message}`, error);
  }
});


module.exports = router;