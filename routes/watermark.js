// routes/watermark.js
const express = require('express');
const watermarkController = require('../controllers/watermarkController');
const { protect } = require('../middleware/auth'); 

const router = express.Router();

// This route must be protected so only logged-in users can use it
router.post(
  '/create-premium',
  protect, // 👈 Ensures user is logged in
  watermarkController.createPremiumWatermark
);

module.exports = router;