// controllers/watermarkController.js
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const catchAsync = require('../utils/catchAsync'); // Assuming you have this utility
const AppError = require('../utils/appError'); // Assuming you have this

// Set the path to the installed FFmpeg binary
ffmpeg.setFfmpegPath(ffmpegPath);

/**
 * ======================================================================
 * IMPORTANT: FILE PREPARATION
 * ======================================================================
 * You MUST prepare these files on your server for this to work.
 *
 * 1. Create a directory: `/assets/animations/`
 * - Add your Lottie animation, pre-rendered as a 3-second,
 * looping .mp4 file with a transparent background (or green screen).
 * - Let's call it: `lion-holo.mp4`
 *
 * 2. Create a directory: `/assets/fonts/`
 * - Add the font file for the text (e.g., Poppins-Regular.ttf).
 * - Download it from Google Fonts: `Poppins-Regular.ttf`
 *
 * 3. Create a temporary directory (and add to .gitignore): `/temp/`
 * - This is where files will be processed.
 *
 * 4. Create a public directory to serve files: `/public/renders/`
 * - This is where the final video will be saved so the user can
 * download it.
 */

// Define file paths
const ANIMATION_PATH = path.join(__dirname, '../assets/animations/lion-holo.mp4');
const FONT_PATH = path.join(__dirname, '../assets/fonts/Poppins-Regular.ttf');
const TEMP_DIR = path.join(__dirname, '../temp');
const OUTPUT_DIR = path.join(__dirname, '../public/renders');

exports.createPremiumWatermark = catchAsync(async (req, res, next) => {
  const { imageUrl, artistName } = req.body;
  
  if (!imageUrl || !artistName) {
    return next(new AppError('Missing imageUrl or artistName', 400));
  }

  const uniqueId = `${req.user.id}-${Date.now()}`;
  const baseImagePath = path.join(TEMP_DIR, `${uniqueId}_base.jpg`);
  const outputPath = path.join(OUTPUT_DIR, `${uniqueId}_premium.mp4`);
  
  // Ensure directories exist
  await fs.ensureDir(TEMP_DIR);
  await fs.ensureDir(OUTPUT_DIR);

  try {
    // === Step 1: Download the user's generated image ===
    console.log(`[FFmpeg]: Downloading image: ${imageUrl}`);
    const response = await axios({
      url: imageUrl,
      responseType: 'stream',
    });
    const writer = fs.createWriteStream(baseImagePath);
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
    console.log(`[FFmpeg]: Image saved to ${baseImagePath}`);

    // === Step 2: Run the FFmpeg command ===
    // This command overlays the lion animation AND the dynamic text.
    console.log(`[FFmpeg]: Starting video render for ${uniqueId}`);
    
    // NOTE: Gold/Holographic text is extremely complex with ffmpeg.
    // For this example, we'll use WHITE text.
    // The "Premium" feel comes from the animated LION.
    const textToDraw = `${artistName} x Hair Studio`;
    
    await new Promise((resolve, reject) => {
      ffmpeg()
        .input(baseImagePath) // Input 0: The static image
        .loop(3) // Loop the static image for 3 seconds
        .input(ANIMATION_PATH) // Input 1: The lion animation
        
        .complexFilter([
          // Scale the lion animation (input 1) to 40x40
          '[1:v] scale=40:40 [lion]', 
          
          // Overlay the scaled lion [lion] onto the image [0:v] at top-center
          // x=(main_w-overlay_w)/2  -> center horizontally
          // y=10                    -> 10px from the top
          '[0:v][lion] overlay=(main_w-overlay_w)/2:10 [base_with_lion]',
          
          // Draw the artist text onto the [base_with_lion] output
          {
            filter: 'drawtext',
            options: {
              fontfile: FONT_PATH,
              text: textToDraw,
              fontsize: 16,
              fontcolor: 'white',
              x: '(w-text_w)/2', // center text horizontally
              y: '55', // Position 55px from top (below the 40px lion + 10px padding)
              shadowcolor: 'black@0.5',
              shadowx: 2,
              shadowy: 2,
            },
            inputs: 'base_with_lion',
            outputs: 'output', // Final output stream
          },
        ])
        
        .map('[output]') // Map the final stream to the output
        .outputOptions([
          '-t 3', // Total duration of 3 seconds
          '-pix_fmt yuv420p', // Codec for high compatibility (web, mobile)
        ])
        .save(outputPath) // Save the final MP4
        .on('end', () => {
          console.log(`[FFmpeg]: Render complete! ${outputPath}`);
          resolve();
        })
        .on('error', (err) => {
          console.error('[FFmpeg]: Error:', err);
          reject(new AppError('Failed to render premium video.', 500));
        });
    });

    // === Step 3: Return the URL to the frontend ===
    // This URL must be publicly accessible!
    const finalFileUrl = `${process.env.BACKEND_URL}/renders/${path.basename(outputPath)}`;

    res.status(200).json({
      status: 'success',
      data: {
        animatedFileUrl: finalFileUrl,
      },
    });

  } catch (err) {
    console.error('Error in createPremiumWatermark:', err);
    return next(new AppError('An error occurred during video creation.', 500));
    
  } finally {
    // === Step 4: Cleanup (Don't wait for this) ===
    fs.unlink(baseImagePath).catch(err => console.warn(`Failed to delete temp image: ${err.message}`));
    // Optional: You could keep the final render for 24h or delete it.
    // For this example, we'll leave it. Add a cron job to clean /public/renders/
  }
});