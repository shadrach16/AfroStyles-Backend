const express = require('express');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const { GoogleGenAI } = require('@google/genai');
const Generation = require('../models/Generation');
const Hairstyle = require('../models/Hairstyle');
const User = require('../models/User');
const {protect} = require('../middleware/auth');
const { trackEvent } = require('../utils/analytics');
const { low_cut,standard_prompt } = require('../prompts/all_prompts');
const fs = require('fs');
const path = require('path');
const { uploadToCloudinary } = require('../utils/cloudinary'); // 👈 Import Cloudinary utility

 
 

const router = express.Router();

const ai = new GoogleGenAI({
    apiKey:  process.env.GEMINI_API_KEY,
  });


 function getMimeTypeFromBase64(base64String) {
  const match = base64String.match(/^data:(.*?);base64,/);
  if (!match || match.length < 2) {
    return null;
  }
  return match[1];
}


const upload = multer({ storage: multer.memoryStorage(), /* ...limits */ });



 async function generateHairstyleWithGemini(imageBuffer, hairstyle,mimeType) {
  try {
    const base64Image = imageBuffer.toString('base64');
    let prompt_text = null;

    switch (hairstyle.category) {
    case 'Default':
        prompt_text = low_cut(hairstyle.ai_description);
        break;  
    default:
        prompt_text = standard_prompt(hairstyle.ai_description);
        break;  
  }


    const prompt = [
      { 
        text: prompt_text
      },
      {
        inlineData: {
          mimeType: mimeType, 
          data: base64Image,
        },
      },
    ];

 const response = await ai.models.generateContent({
   model: "gemini-2.5-flash-image" , //gemini-2.5-flash-image
      contents: prompt,
    });

    // Extract the generated image from response
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
        return {
          success: true,
          imageData: part.inlineData.data,
          mimeType: part.inlineData.mimeType
        };
      }
    }


    throw new Error('No image generated in response');
  } catch (error) {
    console.error('Gemini AI generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

 

 

// Generate hairstyle
router.post('/generate', protect, upload.single('image'), [
  body('hairstyleId').isMongoId().withMessage('Valid hairstyle ID is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { hairstyleId,mimeType } = req.body;
    const user = req.user;

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image file is required' });
    }

    const hairstyle = await Hairstyle.findById(hairstyleId);

    if (!hairstyle) {
      return res.status(404).json({ success: false, message: 'Hairstyle not found' });
    }
    hairstyle.generationCount = hairstyle.generationCount+1
    hairstyle.save()

    if (user.credits < hairstyle.price) {
      return res.status(400).json({ success: false, message: 'Insufficient credits' });
    }
    
    // 1. Upload the original image to Cloudinary FIRST
    // const originalImageUpload = await uploadToCloudinary(req.file.buffer, 'original_images');

 const originalImageDataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;



    // 2. Create the generation record with the CORRECT schema fields
    const generation = new Generation({
      user: user._id,
      hairstyle: hairstyle._id,
      'originalImage.url': originalImageDataUrl,
      'originalImage.publicId': null,
      creditsUsed: hairstyle.price,
      status: 'processing',
       metadata: {
        userAgent: req.get('User-Agent'),
        ipAddress: req.ip,
        deviceType: req.get('User-Agent')?.includes('Mobile') ? 'mobile' : 'desktop'
      }
    });
    await generation.save();

    await user.useCredits(hairstyle.price);
     await trackEvent('generation_started', {
      userId: user._id,
      generationId: generation._id,
      hairstyleId,
      creditsUsed: hairstyle.price
    }, req);

    res.json({
      success: true,
      data: {
        generationId: generation._id,
        status: 'processing',
      }
    });

    // 3. Process generation asynchronously
    (async () => {
      try {
        const result = await generateHairstyleWithGemini(req.file.buffer, hairstyle,mimeType);
        
        if (result.success) {
          const generatedImageUrl = `data:${result.mimeType};base64,${result.imageData}`;
          
          
          // 4. Upload the GENERATED image to Cloudinary
          const generatedImageUpload = await uploadToCloudinary(generatedImageUrl, 'generated_images');

          // 5. Update the record with the Cloudinary URL
          generation.status = 'completed';
          generation.generatedImage = {
            url: generatedImageUpload.secure_url,
            publicId: generatedImageUpload.public_id,
          };
          await generation.save();

          await hairstyle.incrementGeneration();
           await trackEvent('generation_completed', {
            userId: user._id,
            generationId: generation._id,
            hairstyleId,
            processingTime: 0
          });

        } else {
          generation.status = 'failed';
          generation.errorMessage = String(result.error.message || 'AI generation failed').slice(0,20);
          await generation.save();
               await trackEvent('generation_failed', {
            userId: user._id,
            generationId: generation._id,
            hairstyleId,
            error: result.error
          });
        }
      } catch (error) {
        console.error('Async generation processing error:', error);
        generation.status = 'failed';
        generation.errorMessage = 'Processing failed: ' + error.message;
        await generation.save();
      }
    })();

  } catch (error) {
    console.error('Generate hairstyle error:', error);
    res.status(500).json({ success: false, message: 'Failed to start generation' });
  }
});

// 68df4b0a2020ae0acd9afcb5 new ObjectId("68defd641eb7424fd9917b07")
// Get generation status
router.get('/:id/status', protect, async (req, res) => {
  try {
    console.log(req.params.id,req.user._id )
    const generation = await Generation.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('hairstyle', 'name');

    if (!generation) {
      return res.status(404).json({
        success: false,
        message: 'Generation not found'
      });
    }

    res.json({
      success: true,
      data: {
        id: generation._id,
        status: generation.status,
        generatedImageUrl: generation.generatedImage.url,
        processingTime: generation.processingTime,
        errorMessage: generation.errorMessage,
        hairstyle: generation.hairstyleId,
        createdAt: generation.createdAt
      }
    });

  } catch (error) {
    console.error('Get generation status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get generation status'
    });
  }
});



// Get user generations history
router.get('/history', protect, async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;

    const generations = await Generation.find({ userId: req.user._id })
      .populate('hairstyleId', 'name thumbnail category')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Generation.countDocuments({ userId: req.user._id });

    res.json({
      success: true,
      data: generations,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });

  } catch (error) {
    console.error('Get generations history error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get generations history'
    });
  }
});

module.exports = router;
