const Analytics = require('../models/Analytics');

const trackEvent = async (eventName, eventData = {}, req = null) => {
  try {
    const analyticsEvent = new Analytics({
      userId: eventData.userId || null,
      eventName,
      generationId:eventData.generationId,
      hairstyleId:eventData.hairstyleId,
      creditsUsed:eventData.creditsUsed, 

      timestamp: new Date()
    });

    await analyticsEvent.save();
    return true;

  } catch (error) {
    console.error('Track event error:', error);
    return false;
  }
};

module.exports = {
  trackEvent
};