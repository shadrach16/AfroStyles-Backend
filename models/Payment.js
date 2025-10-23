const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['credit_pack', 'subscription'],
    required: true
  },
  itemId: {
    type: String,
    required: true // e.g., 'starter', 'pro', 'salon'
  },
  itemName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'NGN',
    enum: ['NGN', 'USD']
  },
  credits: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'success', 'failed', 'cancelled'],
    default: 'pending'
  },
  paystack: {
    reference: {
      type: String,
      unique: true,
      required: true
    },
    accessCode: String,
    authorizationUrl: String,
    transactionId: String,
    customerCode: String,
    subscriptionCode: String
  },
  googlePlay: { // Or just add purchaseToken at the top level
    purchaseToken: {
        type: String,
        unique: true,
        sparse: true // Allows multiple nulls but only one of each token
    }
},
  metadata: {
    userAgent: String,
    ipAddress: String,
    source: String
  },
  failureReason: String,
  refundStatus: {
    type: String,
    enum: ['none', 'requested', 'processing', 'completed', 'rejected'],
    default: 'none'
  },
  refundAmount: {
    type: Number,
    default: 0
  },
  refundReason: String,
  webhookData: mongoose.Schema.Types.Mixed
}, {
  timestamps: true
});

// Indexes
paymentSchema.index({ user: 1, createdAt: -1 });
paymentSchema.index({ 'paystack.reference': 1 });
paymentSchema.index({ status: 1 });
paymentSchema.index({ type: 1 });

// Static method to get user payments
paymentSchema.statics.getUserPayments = function(userId, page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  return this.find({ user: userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
};

// Static method to get revenue analytics
paymentSchema.statics.getRevenueAnalytics = function(startDate, endDate) {
  return this.aggregate([
    {
      $match: {
        status: 'success',
        createdAt: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
          type: '$type'
        },
        totalAmount: { $sum: '$amount' },
        totalTransactions: { $sum: 1 },
        totalCredits: { $sum: '$credits' }
      }
    },
    {
      $sort: { '_id.year': 1, '_id.month': 1 }
    }
  ]);
};

// Method to mark as success
paymentSchema.methods.markAsSuccess = function(transactionData) {
  this.status = 'success';
  this.paystack.transactionId = transactionData.id;
  if (transactionData.customer) {
    this.paystack.customerCode = transactionData.customer.customer_code;
  }
  this.webhookData = transactionData;
  return this.save();
};

// Method to mark as failed
paymentSchema.methods.markAsFailed = function(reason) {
  this.status = 'failed';
  this.failureReason = reason;
  return this.save();
};

module.exports = mongoose.model('Payment', paymentSchema);