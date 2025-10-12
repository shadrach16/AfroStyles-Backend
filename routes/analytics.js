const express = require('express');
const { body, validationResult } = require('express-validator');
const Analytics = require('../models/Analytics');
const Generation = require('../models/Generation');
const Payment = require('../models/Payment');
const User = require('../models/User');
const {protect} = require('../middleware/auth');

const router = express.Router();

// Track event
router.post('/track', [
  body('eventName').notEmpty().withMessage('Event name is required'),
  body('eventData').optional().isObject(),
  body('sessionId').optional().isString()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { eventName, eventData = {}, sessionId } = req.body;

    const analyticsEvent = new Analytics({
      userId: req.user?._id || null,
      eventName,
      eventData,
      sessionId,
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip,
      referrer: req.get('Referer'),
      page: eventData.page || req.get('Referer'),
      timestamp: new Date()
    });

    await analyticsEvent.save();

    res.json({
      success: true,
      message: 'Event tracked successfully'
    });

  } catch (error) {
    console.error('Track event error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track event'
    });
  }
});

// Get user analytics dashboard
router.get('/dashboard', protect, async (req, res) => {
  try {
    const userId = req.user._id;
    const { period = '30' } = req.query; // days
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(period));

    // Get user's generation stats
    const generationStats = await Generation.aggregate([
      { $match: { userId, createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get user's payment stats
    const paymentStats = await Payment.aggregate([
      { $match: { userId, createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    // Get daily activity
    const dailyActivity = await Analytics.aggregate([
      { $match: { userId, timestamp: { $gte: startDate } } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
          },
          events: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Get popular hairstyles for this user
    const popularHairstyles = await Generation.aggregate([
      { $match: { userId, createdAt: { $gte: startDate } } },
      { $lookup: { from: 'hairstyles', localField: 'hairstyleId', foreignField: '_id', as: 'hairstyle' } },
      { $unwind: '$hairstyle' },
      {
        $group: {
          _id: '$hairstyleId',
          name: { $first: '$hairstyle.name' },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Get total stats
    const totalGenerations = await Generation.countDocuments({ userId });
    const totalPayments = await Payment.countDocuments({ userId, status: 'success' });
    const totalSpent = await Payment.aggregate([
      { $match: { userId, status: 'success' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    res.json({
      success: true,
      data: {
        period: parseInt(period),
        totals: {
          generations: totalGenerations,
          payments: totalPayments,
          spent: totalSpent[0]?.total || 0,
          credits: req.user.totalCredits
        },
        generationStats,
        paymentStats,
        dailyActivity,
        popularHairstyles
      }
    });

  } catch (error) {
    console.error('Get analytics dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get analytics data'
    });
  }
});

// Get user activity timeline
router.get('/timeline', protect, async (req, res) => {
  try {
    const userId = req.user._id;
    const { page = 1, limit = 20 } = req.query;

    const events = await Analytics.find({ userId })
      .sort({ timestamp: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('eventName eventData timestamp');

    const total = await Analytics.countDocuments({ userId });

    res.json({
      success: true,
      data: events,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });

  } catch (error) {
    console.error('Get activity timeline error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get activity timeline'
    });
  }
});

module.exports = router;