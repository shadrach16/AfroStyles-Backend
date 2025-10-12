const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');


// @route   POST /api/webhooks/paystack
// @desc    Handle incoming Paystack webhook events
// @access  Public (but secured by signature verification)
router.post('/paystack', webhookController.handlePaystackWebhook);


// @route   POST /api/webhooks/cryptopay
// @desc    Handle incoming crypto webhook events
// @access  Public (but secured by signature verification)
router.post('/cryptopay', webhookController.handleCryptoWebhook);


module.exports = router;