const express = require('express');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const { GoogleGenAI } = require('@google/genai');
const Generation = require('../models/Generation');
const Hairstyle = require('../models/Hairstyle');
const User = require('../models/User');
const {protect} = require('../middleware/auth');
const { trackEvent } = require('../utils/analytics');
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

    const prompt = [
      { 
        text: `
Act as an expert digital artist specializing in photorealistic in-painting and image editing.

Primary Goal: Seamlessly replace the hairstyle of the person in the uploaded source image with a new one based precisely and completely on the provided hairstyle description, adapting the head position and orientation to match the viewing angle specified in the description.

Target Hairstyle Description: """
 ${hairstyle.ai_description}
 """

Critical Constraints (Highest Priority - Do Not Deviate from these principles):

1. **Hairstyle Fidelity (Primary Priority)**: The target hairstyle description is paramount and must be replicated with complete accuracy. Every specific detail—including hair type, texture, braid count, thickness measurements, length, parting patterns, fade specifications, color, sheen, and styling direction—must be faithfully rendered. The hairstyle's shape, volume, structure, and all described features are non-negotiable. **IMPORTANT: Only the hair on the head (scalp hair) should be replaced. All other aspects of the original image must remain unchanged.**

2. **Adaptive Head Position and Orientation**: If the hairstyle description specifies a particular viewing angle or head position (e.g., "photographed from three-quarter view," "facing forward," "turned 30° left," "side profile," "head tilted back"):
   - **Adjust the subject's head position and orientation** to match the specified angle in the description
   - Maintain natural neck positioning and anatomically correct head-to-body relationships
   - Ensure the rotation/tilt appears natural and doesn't create distorted proportions
   - The head movement should feel organic, as if the person naturally turned or tilted their head for the photograph
   - If no specific viewing angle is mentioned in the description, maintain the original head position from the source image

3. **Strict Original Image Preservation**: The following elements from the source image are INVIOLABLE and must remain 100% identical to the original (accounting for natural perspective changes if head position is adjusted):
   - **Facial hair (beard, mustache, goatee, sideburns)**: Use EXACTLY what appears in the original image, regardless of what the hairstyle description mentions
   - **Facial features**: Eyes, nose, mouth, ears, facial structure (maintaining their exact appearance from the new viewing angle)
   - **Skin tone and texture**: All facial skin characteristics, markings, blemishes, moles, pimples, scars
   - **Expression**: Exact facial expression (may be viewed from different angle but expression remains the same)
   - **Clothing**: All garments and accessories (adjusted for perspective if head position changes)
   - **Body positioning**: Shoulders, neck, posture (naturally adjusted if head rotates/tilts)
   - **Background**: Complete background and environmental elements must be maintained.
   - **Lighting conditions**: Existing light direction, intensity, and color temperature on the face and body

4. **Adaptive Head Morphology**: To achieve realistic integration of the hairstyle while maintaining its authentic structure, you are permitted to make subtle, natural adjustments ONLY to:
   - The person's head shape above the hairline
   - Scalp contour and cranial proportions
   - Forehead height if necessary for hairline placement
   - Head orientation and viewing angle to match the description's specified perspective
   
   These modifications should:
   - Allow the hairstyle to fit naturally and realistically on the subject from the specified viewing angle
   - Maintain the hairstyle's intended volume, length, and dimensional characteristics as described
   - Appear as natural variations in head shape and natural head movements (not distortions)
   - Preserve overall human proportions and anatomical plausibility
   - **NOT affect the face, facial hair, or any features below the hairline** (except for natural perspective adjustments)

5. **Scalp Hair Only Modification**: Your editing scope is LIMITED EXCLUSIVELY to:
   - Hair growing from the scalp (top, sides, and back of head)
   - The hairline and its edges where scalp hair begins
   - Any areas naturally covered or revealed by the new hairstyle's positioning
   - Head position and orientation adjustment to match the description's viewing angle
   
   **DO NOT modify, generate, or alter:**
   - Facial hair of any kind (even if mentioned in the description)
   - Eyebrows
   - Any hair below the traditional hairline
   - Core facial features (though their visible angles may change with head position)
   - Background and environmental elements

6. **Photorealistic Lighting Match**: The new hairstyle must be rendered to perfectly match the source image's existing lighting conditions, accounting for the head's new orientation if adjusted:
   - Light direction as it appears on the original subject's face and body, applied consistently to the new hair from the adjusted angle
   - Shadow intensity and placement consistent with existing shadows and the new head position
   - Color temperature matching the overall image
   - Highlights and reflections appropriate to the hair type, finish, and viewing angle
   - Overall image grain and photographic quality
   
   The lighting on the new hair must appear as if it was captured in the same photographic session as the original image, with the subject naturally positioned at the described viewing angle.

7. **Seamless Integration with Position Awareness**: The blend between the new hairstyle and the subject's original features must be undetectable and photorealistic from the specified viewing angle:
   - The new hairline must integrate naturally with the original forehead and temples as viewed from the described angle
   - Side hair and fades must transition seamlessly to the original sideburns and facial hair, accounting for which sides are visible from the new perspective
   - The nape must blend naturally with the original neck (if visible from the viewing angle)
   - All edges where new hair meets original skin must be imperceptible
   - The result should appear as if this hairstyle naturally grew from this person's scalp and they naturally positioned their head at the described angle

8. **Viewing Angle Interpretation**: When processing the hairstyle description's viewing angle specifications:
   - **"Front view" or "facing forward"**: Position head directly facing camera, neutral orientation
   - **"Three-quarter view" or "turned [X]° left/right"**: Rotate head by specified degrees while maintaining natural neck alignment
   - **"Side profile" or "profile view"**: Position head at 90° angle showing complete side view
   - **"Back view"**: Rotate head to show back of head (if anatomically reasonable given body position)
   - **"Tilted back/forward/left/right"**: Apply specified tilt while maintaining natural posture
   - **Multiple descriptors**: Apply all specified position adjustments (e.g., "three-quarter view with head tilted back")

9. **Prioritization Hierarchy**: When conflicts arise between constraints, follow this priority order:
   - **First**: Hairstyle accuracy and viewing angle match (constraints #1 and #2) - replicate the exact hairstyle from the exact viewing angle described
   - **Second**: Original image preservation (constraint #3) - facial hair, facial features, and all non-scalp-hair elements
   - **Third**: Realistic integration through adaptive morphology (constraint #4) - head shape and position adjustments
   - **Fourth**: Lighting and photorealism (constraint #6) - accounting for new viewing angle
   - **Fifth**: Seamless integration (constraint #7) - from the specified perspective

10. **Facial Hair Description Override Rule**: If the hairstyle description includes any mention of facial hair (beard, mustache, goatee, stubble, etc.), **IGNORE those portions completely**. Always default to and preserve the exact facial hair as it appears in the original source image, whether that's a full beard, clean-shaven, stubble, or any other state.

Execution Philosophy: Your task is to give this person a new scalp hairstyle while positioning their head at the viewing angle specified in the hairstyle description, keeping absolutely everything else from their original photograph intact. The person's face, facial features, facial hair, expression, body, clothing, and environment remain untouched (except for natural perspective changes due to head repositioning). Make whatever subtle head shape and position adjustments are necessary to accommodate both the new hairstyle and the specified viewing angle realistically. The person must remain fully recognizable with all their original characteristics intact except for their scalp hair and head orientation. The final output should present a single, indistinguishable, authentic photograph of the exact same person from the original image, now naturally wearing the meticulously replicated target hairstyle on their head, viewed from the exact angle specified in the description.
 
` 
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

console.error('response',JSON.stringify(response))
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
