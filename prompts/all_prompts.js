

const low_cut = (ai_description)=>{

	return `Act as an expert digital artist specializing in photorealistic in-painting and image editing, with a focus on precision for short and low cut hairstyles.

Primary Goal: Seamlessly and photorealistically replace the entire scalp hairstyle of the person in the uploaded source image with a new low cut hairstyle, based precisely and completely on the provided hairstyle description, while strictly maintaining the original head position, orientation, and viewing angle of the source image. The new hairstyle should be crafted as if the original hairstyle were not present, ensuring no influence or artifacts from the previous hair.

Target Hairstyle Description: """ ${ai_description} """

Critical Constraints (Highest Priority - Do Not Deviate)
    1. Low Cut Hairstyle Fidelity (Primary Priority & Blank Slate Rule): The target low cut hairstyle description is paramount and must be replicated with complete accuracy. Every specific detail—including hair type, texture, fade specifications (e.g., skin fade, taper, drop fade), length measurements (e.g., guard numbers, specific lengths), parting patterns, precise line-ups, color, sheen, and styling direction—must be faithfully rendered. The new low cut hairstyle must be generated as if the original scalp hair were completely absent (a blank canvas), ensuring no influence or artifacts from the previous hair on the final result. The hairstyle's shape, volume, structure, and all described features are non-negotiable. IMPORTANT: Only the hair on the head (scalp hair) should be replaced. All other aspects of the original image must remain unchanged.
    2. Strict Original Perspective and Position Preservation:
        ◦ The subject's head position, orientation, and the entire image's viewing angle must be maintained exactly as they are in the source image.
        ◦ Ignore any references in the hairstyle description that mention head position, viewing angles (e.g., "three-quarter view," "side profile"), or rotation/tilt.
    3. Strict Original Image Preservation (Inviolable): The following elements from the source image are INVIOLABLE and must remain 100% identical to the original:
        ◦ Facial hair (beard, mustache, goatee, sideburns): Use EXACTLY what appears in the original image, regardless of what the hairstyle description mentions. Pay particular attention to how the new low cut (especially fades/tapers) seamlessly transitions with existing sideburns/beard lines.
        ◦ Facial features: Eyes, nose, mouth, ears, facial structure (maintaining their exact appearance).
        ◦ Skin tone and texture: All facial skin characteristics, markings, blemishes, moles, pimples, scars.
        ◦ Expression: The exact facial expression.
        ◦ Clothing: All garments and accessories.
        ◦ Body positioning: Shoulders, neck, posture.
        ◦ Background: Complete background and environmental elements must be maintained.
        ◦ Lighting conditions: Existing light direction, intensity, and color temperature on the face and body.
    4. Adaptive Head Morphology (Subtle Adjustment Only): To achieve realistic integration of the low cut hairstyle while maintaining its authentic structure and precise lines, you are permitted to make subtle, natural adjustments ONLY to:
        ◦ The person's head shape above the hairline.
        ◦ Scalp contour and cranial proportions (especially critical for realistic fades and tapers).
        ◦ These modifications must allow the low cut hairstyle to fit naturally and realistically on the subject from the original viewing angle.
        ◦ DO NOT affect the face, facial hair, or any features below the hairline.
    5. Scalp Hair Only Modification: Your editing scope is LIMITED EXCLUSIVELY to:
        ◦ Hair growing from the scalp (top, sides, and back of head).
        ◦ The hairline and its edges where scalp hair begins (including precise line-ups).
        ◦ Any areas naturally covered or revealed by the new hairstyle's positioning (especially the scalp exposed by short cuts/fades).
        ◦ DO NOT modify, generate, or alter: Facial hair, eyebrows, any hair below the traditional hairline, or core facial features.
    6. Photorealistic Lighting Match: The new low cut hairstyle must be rendered to perfectly match the source image's existing lighting conditions:
        ◦ Light direction, shadow intensity, color temperature, and highlights must be consistent with the lighting on the original subject's face and body.
        ◦ Pay meticulous attention to how light interacts with very short hair, skin fades, and visible scalp. The texture of the short hair and the subtle sheen of the scalp should appear authentic to the lighting.
        ◦ The lighting on the new hair must appear as if it was captured in the same photographic session as the original image.
    7. Seamless Integration: The blend between the new low cut hairstyle and the subject's original features must be undetectable and photorealistic:
        ◦ The new hairline must integrate naturally and sharply with the original forehead.
        ◦ Side hair, fades, and precise line-ups must transition flawlessly to the original sideburns and facial hair.
        ◦ The nape must blend naturally with the original neck, considering any neck tapers or clean-ups described.
        ◦ All edges where new hair meets original skin must be imperceptible and razor-sharp where appropriate for the low cut style.
    8. Prioritization Hierarchy: When conflicts arise between constraints, follow this priority order:
        ◦ First: Low Cut Hairstyle accuracy and Blank Slate Rule (Constraint 1).
        ◦ Second: Original image preservation (Constraint 3) - facial hair, facial features, and all non-scalp-hair elements.
        ◦ Third: Realistic integration through adaptive morphology (Constraint 4).
        ◦ Fourth: Lighting and photorealism (Constraint 6).
    9. Facial Hair Description Override Rule: If the hairstyle description includes any mention of facial hair (beard, mustache, goatee, etc.), IGNORE those portions completely. Always default to and preserve the exact facial hair as it appears in the original source image.

Execution Philosophy: Give this person a new low cut hairstyle from the description, using a blank slate approach on the scalp and keeping absolutely everything else from their original photograph intact. The final output must be a single, indistinguishable, authentic photograph of the exact same person, naturally wearing the meticulously replicated target low cut hairstyle, and looking in the same direction as the original image.
`
}



const standard_prompt = (ai_description)=> `
Act as an expert digital artist specializing in photorealistic in-painting and image editing.

Primary Goal: Seamlessly replace the hairstyle of the person in the uploaded source image with a new one based precisely on the provided hairstyle description. The new hairstyle must be realistically adapted to fit the subject's original head position and orientation as seen in the source image.

Target Hairstyle Description: """ ${ai_description} """

Critical Constraints (Highest Priority - Do Not Deviate from these principles):
    
    1. Hairstyle Fidelity (Adapted to Pose): The target hairstyle description is paramount. You must render the hairstyle as described, but only as it would naturally and realistically appear from the source image's fixed viewing angle.
        ◦ Every specific visible detail—including hair type, texture, length, parting, fades, and color—must be faithfully rendered.
        ◦ If a feature of the described hairstyle is not visible from the original pose (e.g., a detail on the back of the head in a frontal photo), render only the visible portions of the hairstyle.
        ◦ Do not try to "show" hidden parts or alter the pose to make them visible. The hairstyle's shape, volume, and structure must be adapted to fit realistically onto the subject's head in its original, unchanged position. The final image must be a physically plausible depiction from the original perspective.
    
    2. Strict Original Image Preservation (Highest Priority): The following elements from the source image are INVIOLABLE and must remain 100% identical to the original:
        ◦ Head Position and Orientation: The subject's head, face, and neck must not be rotated, tilted, or moved in any way.
        ◦ Body Positioning: Shoulders, neck, and posture must remain exactly as in the original image.
        ◦ Facial hair (beard, mustache, goatee, sideburns): Use EXACTLY what appears in the original image.
        ◦ Facial features: Eyes, nose, mouth, ears, and facial structure.
        ◦ Skin tone and texture: All facial skin characteristics, markings, blemishes, moles, pimples, and scars.
        ◦ Expression: The exact facial expression.
        ◦ Clothing: All garments and accessories.
        ◦ Background: The complete background and all environmental elements.
        ◦ Lighting conditions: Existing light direction, intensity, and color temperature.
    
    3. Viewing Angle Description Override Rule: If the hairstyle description includes any mention of a viewing angle, head position, or orientation (e.g., "photographed from three-quarter view," "facing forward," "turned 30° left," "side profile," "head tilted back"), you must IGNORE those portions completely. The hairstyle must be rendered onto the person's head as it appears in the original source image's pose.
    
    4. Facial Hair Description Override Rule: If the hairstyle description includes any mention of facial hair (beard, mustache, goatee, stubble, etc.), IGNORE those portions completely. Always default to and preserve the exact facial hair as it appears in the original source image.
    
    5. Adaptive Head Morphology (Not Position): To achieve realistic integration of the hairstyle while maintaining its authentic structure on the original pose, you are permitted to make subtle, natural adjustments ONLY to:
        ◦ The person's head shape above the hairline
        ◦ Scalp contour and cranial proportions
        ◦ Forehead height if necessary for hairline placement
       These modifications must:
        ◦ Allow the hairstyle to fit naturally and realistically on the subject's existing head pose.
        ◦ Maintain the hairstyle's intended volume and characteristics.
        ◦ Appear as natural variations in head shape, not distortions or position changes.
        ◦ NOT affect the face, facial hair, head position, or any features below the hairline.
    
    6. Scalp Hair Only Modification: Your editing scope is LIMITED EXCLUSIVELY to:
        ◦ Hair growing from the scalp (top, sides, and back of head)
        ◦ The hairline and its edges where scalp hair begins
        ◦ Any areas naturally covered or revealed by the new hairstyle's positioning
        ◦ DO NOT modify, generate, or alter:
            ▪ Head or body position
            ▪ Facial hair of any kind
            ▪ Eyebrows
            ▪ Core facial features
            ▪ Background or clothing
    
    7. Photorealistic Lighting Match: The new hairstyle must be rendered to perfectly match the source image's existing lighting conditions.
        ◦ Light direction, shadow intensity, color temperature, and highlights must be consistent with the lighting on the subject's face and body.
        ◦ The hair must match the overall image grain and photographic quality.
    
    8. Seamless Integration: The blend between the new hairstyle and the subject's original features must be undetectable and photorealistic from the original viewing angle:
        ◦ The new hairline must integrate naturally with the original forehead and temples.
        ◦ Side hair and fades must transition seamlessly to the original sideburns and facial hair.
        ◦ The nape must blend naturally with the original neck (if visible).
        ◦ All edges where new hair meets original skin must be imperceptible.
    
    9. Prioritization Hierarchy: When conflicts arise between constraints, follow this priority order:
        ◦ First: Strict Original Image Preservation (Constraint #2) - especially Head Position, Body Position, and Facial Hair.
        ◦ Second: Override Rules (Constraint #3 & #4) - Ignore all viewing angle and facial hair descriptions.
        ◦ Third: Hairstyle Fidelity (Constraint #1) - Replicate the described hairstyle as it would be visible from the original pose.
        ◦ Fourth: Realistic Integration & Photorealism (Constraints #5, #7, #8).

Execution Philosophy: Your task is to give this person a new scalp hairstyle, adapting it to fit their head in its original, static position. Keep absolutely everything else from their original photograph intact. The person's head position, face, facial hair, expression, body, clothing, and environment must remain 100% untouched. The final output should be a single, authentic photograph of the exact same person from the original image, now naturally wearing the meticulously replicated target hairstyle on their head in the original pose.
 
` 


module.exports = {
  low_cut,
  standard_prompt
};
