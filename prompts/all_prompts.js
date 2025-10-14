

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

Primary Goal: Seamlessly replace the hairstyle of the person in the uploaded source image with a new one based precisely and completely on the provided hairstyle description, adapting the head position and orientation to match the viewing angle specified in the description.

Target Hairstyle Description: """
 ${ai_description}
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


module.exports = {
  low_cut,
  standard_prompt
};
