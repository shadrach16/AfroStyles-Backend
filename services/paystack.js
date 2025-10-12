const axios = require('axios');
const crypto = require('crypto');

const PAYSTACK_BASE_URL = 'https://api.paystack.co';
const SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Create Paystack headers
const getHeaders = () => ({
  Authorization: `Bearer ${SECRET_KEY}`,
  'Content-Type': 'application/json'
});

// Initialize transaction
exports.initializeTransaction = async (email, amount, reference, metadata = {}) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/transaction/initialize`,
      {
        email,
        amount: amount * 100, // Convert to kobo
        reference,
        currency: 'NGN',
        metadata,
        callback_url: `${process.env.FRONTEND_URL}/payment/callback`
      },
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack initialization error:', error.response?.data || error.message);
    throw new Error('Failed to initialize payment');
  }
};

// Verify transaction
exports.verifyTransaction = async (reference) => {
  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack verification error:', error.response?.data || error.message);
    throw new Error('Failed to verify payment');
  }
};

// Create customer
exports.createCustomer = async (email, firstName, lastName, phone = null) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/customer`,
      {
        email,
        first_name: firstName,
        last_name: lastName,
        phone
      },
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack customer creation error:', error.response?.data || error.message);
    throw new Error('Failed to create customer');
  }
};

// Create subscription plan
exports.createPlan = async (name, amount, interval = 'monthly') => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/plan`,
      {
        name,
        amount: amount * 100, // Convert to kobo
        interval,
        currency: 'NGN'
      },
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack plan creation error:', error.response?.data || error.message);
    throw new Error('Failed to create subscription plan');
  }
};

// Create subscription
exports.createSubscription = async (customerCode, planCode, authorization) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/subscription`,
      {
        customer: customerCode,
        plan: planCode,
        authorization
      },
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack subscription creation error:', error.response?.data || error.message);
    throw new Error('Failed to create subscription');
  }
};

// Cancel subscription
exports.cancelSubscription = async (subscriptionCode) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/subscription/disable`,
      {
        code: subscriptionCode,
        token: subscriptionCode
      },
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack subscription cancellation error:', error.response?.data || error.message);
    throw new Error('Failed to cancel subscription');
  }
};

// Get subscription
exports.getSubscription = async (subscriptionCode) => {
  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/subscription/${subscriptionCode}`,
      { headers: getHeaders() }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack get subscription error:', error.response?.data || error.message);
    throw new Error('Failed to get subscription');
  }
};

// Verify webhook signature
exports.verifyWebhookSignature = (payload, signature) => {
  const hash = crypto
    .createHmac('sha512', SECRET_KEY)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return hash === signature;
};

// Get payment plans configuration
exports.getPaymentPlans = () => {
  return {
    creditPacks: [
      {
        id: 'starter',
        name: 'Starter Pack',
        credits: 25,
        price: 1500, // NGN 15.00
        description: '25 credits for trying out hairstyles'
      },
      {
        id: 'value',
        name: 'Value Pack',
        credits: 100,
        price: 5000, // NGN 50.00
        description: '100 credits with 20% savings',
        popular: true
      },
      {
        id: 'stylist',
        name: 'Stylist Pack',
        credits: 250,
        price: 10000, // NGN 100.00
        description: '250 credits with 33% savings'
      }
    ],
    subscriptions: [
      {
        id: 'pro',
        name: 'Pro Stylist',
        price: 3000, // NGN 30.00/month
        creditsPerMonth: 150,
        features: [
          '150 credits per month',
          'Priority processing',
          'HD quality exports',
          'No watermarks',
          'Style history'
        ]
      },
      {
        id: 'salon',
        name: 'Salon Professional',
        price: 8000, // NGN 80.00/month
        creditsPerMonth: 500,
        features: [
          '500 credits per month',
          'API access',
          'Bulk processing',
          'Commercial license',
          'Priority support'
        ]
      }
    ]
  };
};