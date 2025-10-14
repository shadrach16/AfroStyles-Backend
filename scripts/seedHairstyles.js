const mongoose = require('mongoose');
const Hairstyle = require('../models/Hairstyle');
require('dotenv').config();

// Sample hairstyles data with Replicate model IDs
const hairstyles = [
  {
    name: 'Low Drop-Fade with Sharp Line-Up and V-Shape Temple Detail',
    description: ' ',
     ai_description: `Title: Low Drop-Fade with Sharp Line-Up and V-Shape Temple Detail

I. Architectural Foundation and Visual Description
A professional studio portrait photograph of a dark-skinned man showcasing an ultra-low drop-fade with a crisp line-up and a distinct V-shape design element at the temple, photographed from a three-quarter view.
    • Core Style: This is not a uniform haircut but a low drop-fade. The hair on the crown is a low, uniform length, which gradually shortens down the sides and back to the skin (zero). The overall aesthetic is sharp and clean, heavily defined by the razor-sharp line-up and the fade transition.
    • Length Specification: The bulk of the hair on the top and upper sides appears to be cut to a maximum length corresponding to a Clipper Guard #2 (6-7 mm) or a very tight Clipper Guard #1.5 (4-5 mm). The length on top is uniform, but the sides exhibit a rapid, low-set gradient (fade).
    • Texture Appearance (Inferred): The natural hair texture (Type 4C) presents as a tight coil pattern at the shortest length, transitioning to a textured carpet at the longer length on the crown.
    • Key Visual Feature: The structure is defined by three elements: (1) The low drop-fade that follows the occipital bone curvature, (2) the razor-sharp line-up around the forehead and beard, and (3) the precise V-shape design carved into the frontal hairline/temple area.

II. Replication Blueprint: Cut Methodology
To replicate this ultra-low cut with a drop-fade and design, the following technical steps must be executed with precision:
Step 1: Establishing Primary Length (The Top and Blending Guide)
    • Tool: Use the Clipper Guard #2 (i.e., 6-7 mm).
    • Technique: Cut the entire crown area to this single length. Use this length as the longest point of the blend.
    • Blend Mark: Establish the highest point of the fade (the blend line) very low, approximately 1-1.5 inches above the ear and dropping sharply behind the earlobe (a "drop-fade").
Step 2: Executing the Low Drop-Fade
    • Initial Guideline: Using a clipper with no guard (open lever, ~0.5 mm), establish a clean baseline around the entire perimeter of the head, following the low, dropping curvature behind the ear.
    • Gradation: Work up from the baseline in small 0.5-inch sections, using successive guards (e.g., #0.5, #1, #1.5) to blend into the bulk (Guard #2) on top. Lever-play (closing the lever to shorten the cut) is crucial for a seamless transition.
    • Finish: The fade should rapidly transition to a bald or razor finish at the lowest point, particularly around the perimeter.
Step 3: Perimeter Treatment (Nape and Detailing)
    • Nape Finish: Define the neckline boundary using trimmers. The neckline is to be finished as Rounded/Tapered into the neck hair, following the skin fade line. No Blocked finish is used here.
    • Sideburns: The sideburns are faded out and then precisely defined into the beard line using a sharp trimmer.

III. Replication Blueprint: Hairline and Precision Line-Up
The precise Line-Up (Edge-Up) and the V-shape design are the most crucial elements for defining the final look:
Step 4: Defining the Hairline Geometry and Design
    • Tool: Use sharp-bladed trimmers or a straight razor for maximum sharpness.
    • Frontal Line: Establish a dead-straight line across the forehead, ensuring perfect symmetry.
    • V-Shape Temple Detail: Before carving the corner, execute the distinct design element. A precise V-shape is carved into the hair mass just above the temple and within the initial blend line. This requires extreme control and may be done with the corner of the trimmer or a razor.
    • Corners/C-Cup: After the V-shape, the frontal line transitions to the side perimeter as a squared corner leading into the side of the head, sharply meeting the top of the fade.
    • Beard Line: Define the upper cheek and neck beard lines with a razor-sharp line, mirroring the sharpness of the hairline. The beard is faded slightly from the sideburn into the cheek hair.
Step 5: Finishing and Detailing
    • Contrast Enhancement: Apply a shining product (e.g., light holding oil or holding spray) to the Line-Up area and throughout the beard to enhance the contrast between the dark hair and the light skin/bare skin fade. The hair itself may be lightly sprayed or oiled to define the texture.

IV. Adaptive Context and Maintenance
    • Position-Aware Visibility: The current three-quarter view emphasizes the dramatic V-shape design and the tightness of the drop-fade. The execution confirms the high technical skill necessary for this combination of a clean fade, a complex line-up, and a design element.
    • Maintenance Requirements: To maintain this look, the client would require a high-maintenance schedule, specifically:
        ◦ Line-Up & Design Refresh: Every 3-5 days to prevent the hairline and V-shape from losing their razor-sharp definition.
        ◦ Full Cut Refresh: Every 7-10 days to maintain the integrity of the ultra-low fade and blend.

`,
    category: 'Low Cut', // ['LowCut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1760418732/Hairstyles/1%20Credits/Gemini_Generated_Image_4o8rx94o8rx94o8r_aqysae.jpg',
    price: 1,
    popularity: 0,
    isActive: true,
  },
   
];

async function seedHairstyles() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

 
    // Insert new hairstyles
    const insertedHairstyles = await Hairstyle.insertMany(hairstyles);
    console.log(`✅ Inserted ${insertedHairstyles.length} hairstyles`);

    console.log('🎉 Hairstyles seeded successfully!');
    
    // Display seeded hairstyles
    console.log('\n📋 Seeded Hairstyles:');
    insertedHairstyles.forEach((style, index) => {
      console.log(`${index + 1}. ${style.name} (${style.category}, ${style.gender}) - ${style.price} credit(s)`);
    });

    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding hairstyles:', error);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  seedHairstyles();
}

module.exports = { seedHairstyles, hairstyles };