const Replicate = require('replicate');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Available hairstyle models on Replicate
const HAIRSTYLE_MODELS = {
  'box-braids': {
    model: 'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478',
    version: '27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478'
  },
  'cornrows': {
    model: 'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478',
    version: '27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478'
  },
  'afro': {
    model: 'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478',
    version: '27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478'
  },
  'fade-with-twists': {
    model: 'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478',
    version: '27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478'
  }
};

// Generate hairstyle using Replicate
exports.generateHairstyle = async (imageUrl, hairstyleId, hairstyleName) => {
  try {
    const modelConfig = HAIRSTYLE_MODELS[hairstyleId];
    
    if (!modelConfig) {
      throw new Error(`Hairstyle model not found for: ${hairstyleId}`);
    }

    // Create the prompt for the hairstyle transformation
    const prompt = `A professional portrait photo of a person with ${hairstyleName} hairstyle, high quality, detailed, realistic, good lighting, clear face`;
    
    const input = {
      image: imageUrl,
      prompt: prompt,
      negative_prompt: "blurry, low quality, distorted, cartoon, anime, painting, sketch",
      num_inference_steps: 20,
      guidance_scale: 7.5,
      strength: 0.8,
      width: 512,
      height: 512
    };

    console.log('Starting Replicate prediction for:', hairstyleId);
    
    const prediction = await replicate.predictions.create({
      version: modelConfig.version,
      input: input
    });

    return {
      id: prediction.id,
      status: prediction.status,
      urls: prediction.urls
    };
  } catch (error) {
    console.error('Replicate generation error:', error);
    throw error;
  }
};

// Check prediction status
exports.checkPredictionStatus = async (predictionId) => {
  try {
    const prediction = await replicate.predictions.get(predictionId);
    
    return {
      id: prediction.id,
      status: prediction.status,
      output: prediction.output,
      error: prediction.error,
      logs: prediction.logs
    };
  } catch (error) {
    console.error('Error checking prediction status:', error);
    throw error;
  }
};

// Cancel prediction
exports.cancelPrediction = async (predictionId) => {
  try {
    const prediction = await replicate.predictions.cancel(predictionId);
    return prediction;
  } catch (error) {
    console.error('Error canceling prediction:', error);
    throw error;
  }
};

// Get available models
exports.getAvailableModels = () => {
  return Object.keys(HAIRSTYLE_MODELS);
};

// Validate hairstyle ID
exports.validateHairstyleId = (hairstyleId) => {
  return HAIRSTYLE_MODELS.hasOwnProperty(hairstyleId);
};