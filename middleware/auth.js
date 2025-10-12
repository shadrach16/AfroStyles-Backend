// backend/middleware/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - require authentication
exports.protect = async (req, res, next) => {
  try {
    let token;

    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no token provided'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id);

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User not found'
        });
      }

      if (!req.user.isActive) {
        return res.status(403).json({
          success: false,
          message: 'User account is deactivated'
        });
      }

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, token failed'
      });
    }
  } catch (error) {
    next(error);
  }
};

// Optional authentication - don't require token but decode if present
exports.optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
      } catch (err) {
        // Invalid token, but continue without user
        req.user = null;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Restrict to certain roles/subscription levels
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (roles.includes('pro') && !req.user.isPro && !req.user.hasActiveSubscription()) {
      return res.status(403).json({
        success: false,
        message: 'This feature requires a Pro subscription'
      });
    }

    next();
  };
};

// Check if user has enough credits
exports.checkCredits = (requiredCredits = 1) => {
  return (req, res, next) => {
    if (!req.user.canGenerate(requiredCredits)) {
      return res.status(402).json({
        success: false,
        message: 'Insufficient credits',
        data: {
          required: requiredCredits,
          available: req.user.totalCredits,
          credits: req.user.credits,
          trialCredits: req.user.remainingTrialCredits
        }
      });
    }

    next();
  };
};