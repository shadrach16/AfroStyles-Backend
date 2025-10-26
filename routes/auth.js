const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const Analytics = require('../models/Analytics');

const router = express.Router();

// Generate JWT Token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Send token response
const sendTokenResponse = (user, statusCode, res, message = 'Success') => {
  const token = signToken(user._id);

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  res.status(statusCode)
    .cookie('token', token, options)
    .json({
      status: 'success',
      message,
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          isPro: user.isPro,
          credits: user.credits,
          totalCredits: user.totalCredits,
          remainingTrialCredits: user.remainingTrialCredits,
          subscription: user.subscription,
          freeTrialExpiry: user.freeTrialExpiry,
          lastLogin: user.lastLogin
        },token
      }
    });
};

// @desc    Google OAuth login/register
// @route   POST /api/auth/google
// @access  Public
router.post('/google', async (req, res, next) => {
  try {
    const { googleId, email, name, avatar,referralCode } = req.body;

    if (!googleId || !email || !name) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide googleId, email, and name'
      });
    }

    let user = await User.findOne({ 
      $or: [{ googleId }, { email }] 
    });

    if (user) {
      // Update existing user
      user.googleId = googleId;
      user.name = name;
      user.avatar = avatar;
      user.isActive = true;
      user.lastLogin = new Date();
      await user.save();

      // Track login
      await Analytics.trackEvent('user_signed_in', {
        method: 'google',
        returning_user: true
      }, user._id);

      sendTokenResponse(user, 200, res, 'Welcome back!');
    } else {
      // Create new user
      user = await User.create({
        googleId,
        email,
        name,
        avatar,
        lastLogin: new Date(),
        isActive:true
      });


if (referralCode) {
        try {
          const referrer = await User.findOne({ referralCode });
          if (referrer && referrer.id !== user.id) {
            user.referredBy = referrer._id;
            await user.save();

            // Grant 3 credits to the referrer
            referrer.credits += 3;
            await referrer.save();

            // Track events
            await Analytics.trackEvent('referral_success', {
              referrerId: referrer._id,
              newUserId: user._id,
              creditsAwarded: 3
            }, referrer._id);
            await Analytics.trackEvent('user_referred', {
              referrerId: referrer._id,
            }, user._id);
          }
        } catch (referralError) {
          // Fail silently, don't block signup
          console.error('Referral processing error:', referralError);
        }
      }


      // Track registration
      await Analytics.trackEvent('user_registered', {
        method: 'google',
        trial_credits: user.credits
      }, user._id);

      sendTokenResponse(user, 201, res, 'Account created successfully!');
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
router.get('/me', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          isPro: user.isPro,
          credits: user.credits,
          totalCredits: user.totalCredits,
          remainingTrialCredits: user.remainingTrialCredits,
          subscription: user.subscription,
          freeTrialExpiry: user.freeTrialExpiry,
          lastLogin: user.lastLogin,
          createdAt: user.createdAt
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
router.put('/profile', protect, async (req, res, next) => {
  try {
    const { name, preferences } = req.body;

    const fieldsToUpdate = {};
    if (name) fieldsToUpdate.name = name;
    if (preferences) fieldsToUpdate.preferences = preferences;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      fieldsToUpdate,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
});




// Get payments reward ads 
router.post('/reward_ad', protect, async (req, res, next) => {
  try {

   const user = await User.findById(
      req.user.id
      )
   if (!user){
      return res.status(400).json({
        status: 'error',
        message: 'No user found'
      });

   }

    user.credits = user.credits+0.1;
    user.save();

   res.status(200).json({
      status: 'success',
      message: '1 Credit added successfully',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
});


// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
router.post('/logout', protect, async (req, res, next) => {
  try {
    // Track logout
    await Analytics.trackEvent('user_signed_out', {}, req.user.id);

    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });

    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully'
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete user account
// @route   DELETE /api/auth/account
// @access  Private
router.delete('/account', protect, async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { isActive: false });

    // Track account deletion
    await Analytics.trackEvent('user_account_deleted', {}, req.user.id);

    res.status(200).json({
      status: 'success',
      message: 'Account deactivated successfully'
    });
  } catch (error) {
    next(error);
  }
});


router.get('/referral-info', protect, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const referralCode = req.user.referralCode;

    // Calculate stats
    const referralCount = await User.countDocuments({ referredBy: userId, isActive: true });
    const creditsEarned = referralCount * 3; // 3 credits per referral

    res.status(200).json({
      status: 'success',
      data: {
        referralCode,
        referralCount,
        creditsEarned
      }
    });
  } catch (error) {
    next(error);
  }
});



router.post('/update-device-token', protect, async (req, res, next) => {
  try {
    const { deviceToken } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.deviceToken = deviceToken;
         await user.save();
 

    res.status(200).json({
      status: 'success',
      message: 'Device token updated successfully',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
});




router.get('/account/delete', (req, res) => {
  res.status(200).json({
    status: 'info',
    message: 'To delete your account, you must log in to the app and use the "Delete Account" feature inside the settings or profile section. This ensures your identity is verified before permanent deletion.'
  });
});


// @desc    Delete user account
// @route   DELETE /api/auth/account/delete
// @access  Private
router.delete('/account/delete', protect, async (req, res, next) => {
  try {
    const user = req.user;
    
    // Deactivate user instead of hard deleting (better for data integrity)
    await User.findByIdAndUpdate(user.id, { isActive: false, deviceToken: null });

    // Track account deletion
    await Analytics.trackEvent('user_account_deleted', {}, user.id);

    // Clear the token cookie
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });

    res.status(200).json({
      status: 'success',
      message: 'Account deactivated successfully. All associated data will be removed within 30 days.'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;