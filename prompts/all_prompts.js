

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

const analysis_prompt = ()=> `
## System Instructions
You are an elite hairstyle analyst and technical descriptor with expertise in barbering and hair styling of "intricate dreadlocks styled in a modern, voluminous updo" and photographic analysis. When given an image of a person, generate an exhaustive, multi-layered professional analysis describing their hairstyle with forensic-level technical specifications that are adaptable to different head positions, angles, and viewing perspectives.

## Input
[See this Uploaded Person image]

## Output Format
Generate a comprehensive technical analysis following this hierarchical structure (only output the analysis applicable to the image):

### Title: [Hairstyle Name/Style Combination]

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a [ethnicity/skin tone] [man/woman/person] with a [hairstyle name] hairstyle, photographed from [viewing angle: front view/three-quarter view/side profile/back view]. 

**Core Style:** [Primary styling technique] on top, integrated with [fade/taper/undercut description] on the sides and back. The overall aesthetic is [clean/edgy/textured/contemporary/traditional/etc.].
**Hair Texture (Inferred):** The natural hair appears to be [straight/wavy/curly/coily/kinky] (Type [1A-4C] classification), which provides [describe how texture supports the style - density, curl pattern, hold capability].
**Product Use (Inferred):** The hair displays [sheen level/texture definition/hold characteristics], suggesting the use of [specific product types - gel, pomade, mousse, cream, oil] to [secure, define, moisturize, provide shine, minimize frizz]. The [tightness/looseness/texture] at the root indicates [tension/technique] was applied during styling.
**[Style Type] Details:** [Specific technical description of the primary styling method - two-strand twists, cornrows, box braids, etc.], where [explain the technique mechanics].
**Parting & Density:** [Describe parting pattern, section sizes, coverage area]. The [high/medium/low] density of the [twists/braids/locs] ensures [minimal/moderate/high] scalp visibility."

### II. Arrangement and Placement of the [Primary Style Element]
"The [braids/twists/locs/curls] are meticulously placed to create a [describe overall visual effect]:

**Location:** [Specify exact zones - horseshoe section, full head, top only, sides included, etc.]. The [specify which areas] hair is [fully faded/tapered/undercut/left natural].
**Directional Flow (The Curve/Pattern):** This is the precise placement detail:
   - **Front Row/Section:** The [style elements] in the first row, along the [forehead/temple] hairline, are styled to [hang forward/sweep back/angle diagonally]. They are positioned to [overlap the forehead/frame the face/create height], forming a [heavy/light/textured/smooth] [fringe/crown/silhouette] that sits [positional description relative to facial features].
   - **Crown/Middle Rows:** The rows of [style elements] running from the [crown/center/back] to the [front/sides] are directed [forward/backward/radially]. This intentional placement [forces volume toward/away from] the face, [preventing/encouraging] [specific visual effects], thus creating the [describe the resulting silhouette].
   - **Side Perimeter/Lateral Sections:** The [style elements] immediately adjacent to the [fade/taper/natural hair] on the left and right sides are [twisted/braided/styled] to [hang straight down/angle inward/curve outward], creating a [clean/soft/defined] [vertical/diagonal/curved] border against the [short sides/long sides/natural texture]. This is the transition point where the [style elements] [describe how they transition].
**Individual [Braid/Twist/Loc] Arrangement:** Each [unit] is uniformly [secured/formed/styled] from the root, giving it a [tight/loose/rope-like/coiled/smooth] appearance. The [consistent/varied] length allows [describe how the arrangement creates uniformity or intentional variation].

**Section Dimensions:**
   - Count: [X-Y range] individual [braids/twists/locs] across the entire head
   - Thickness: [X-Y mm] diameter per individual unit
   - Length: [X-Y mm] measured from root to tip
   - Part width: [X mm] between sections"

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The [shaved/tapered/faded] area provides the architectural support and [sharp/soft] contrast for the [primary style]:

**Hairline (The Edge-Up/Line-Up):** The hairline is [placed/carved/shaped] using precise [trimmers/clippers/razors].
   - **Front:** A [straight/curved/natural] [hard/soft] line is placed across the [forehead/temples], marking the boundary of the [scalp/hairline].
   - **C-Cup/Temple Arch/Corner:** A [sharp/gentle] [semicircular/angular/curved] [shape] is meticulously placed to connect the [front hairline] with the start of the [side fade/natural hairline], creating a [highly visible/subtle] [defined/soft] corner. This placement is [critical/complementary] for the [crispness/naturalness] of the entire look.
   - **Temporal Line:** [Describe how the line extends from temple area]
   - **Nape/Back:** [Describe back hairline treatment - tapered, blocked, natural]

**Fade/Taper Transition:** The fade starts [low/mid/high] on the head, meaning the transition from [skin-level (0/clipper-closed)] to [full hair length] is kept [very short and tight/gradual and blended/natural], primarily focused on the area [above the ear/around the parietal ridge/at the occipital bone/around the neckline]. This [low/mid/high] placement [maximizes/balances/minimizes] the canvas for the [dense/textured/voluminous] [style] above.

**Fade Technical Specifications:**
   - Type: [eg. Taper Fade/Drop Fade/Burst Fade/Skin Fade/Shadow Fade]
   - Starting Point: [eg. Anatomical landmark - temporal line/parietal ridge/occipital bone]
   - Fade Range: [Starting length] to [ending length] (e.g., 8mm to skin, or guard #2 to 0)
   - Transition Zone: [Height in mm or anatomical description]
   - Circumference: [Describe how fade wraps around entire head]
   - Technique: [Describe blending method - clipper-over-comb, fading technique, etc.]"

### IV. The Hardness, Texture, and Physical Characteristics
"**Firmness/Tension (The "Hardness"):** The [style] appears [tight/medium/loose] and [firm/soft/flexible], particularly near the roots. This indicates [significant/moderate/minimal] tension was applied during [installation/styling] to ensure [longevity/natural movement/specific aesthetic]. The texture is [dense and rope-like/soft and flowing/coiled and springy]—not [soft/rigid/etc.]—contributing to their [neat/natural/dramatic] structure and [uniform/varied] hang.
**Physical Feel (Inferred):** Based on visual analysis, the hair would feel [smooth/textured/coarse/silky] to touch, with [high/medium/low] density and [firm/flexible/soft] hold at the root.
**Movement Characteristics:** The style demonstrates [static hold/natural movement/dynamic flow] with the hair [maintaining position/responding to gravity/showing intentional directional styling]."

### V. Hairline Definition and Precision Edge Work
"**The Hairline ("Edge-Up"/"Line-Up"):** The [front/temple/nape] hairline is executed with [exceptional/moderate/natural] precision, a technique known as [Edge-Up/Line-Up/Natural Edge].

**Shape & Geometry:**
   - **Frontal Hairline:** Features a [highly defined/softly shaped/natural] [straight line/curved line/widow's peak], [almost surgical/naturally blended] in execution
   - **C-Cup/Corner Arch:** [If present] A [sharp/gentle] [C-Cup/temple arch/side arch] that carves a [sharp/soft] [crescent/angular] shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade
   - **Temporal Points:** [Describe how corners/points are shaped]

**Execution Details:**
   - Tool: Cut with [sharp-bladed clippers/trimmers/razors/foil shavers]
   - Line Quality: Creates an [absolutely straight/naturally curved/geometrically precise] line across the [forehead/temple/nape]
   - Contrast: [Sharp/subtle] contrast with the [coily/textured/smooth] hair above it
   - Skill Level: This precision is a signature of [high-skill barbering/natural styling/professional technique]"

### VI. Hair Condition, Color, and Finish
"**Color Profile:**
   - Base Color: [Natural black/brown/blonde/gray/custom color]
   - Color Variations: [Uniform/highlights/lowlights/ombré/balayage]
   - Color Distribution: [Consistent across all sections/varies by placement]

**Finish Quality:**
   - Sheen Level: [Matte/semi-gloss/high shine/natural luster]
   - Texture Definition: [Highly defined/softly defined/naturally textured]
   - Frizz Control: [Completely smooth/minimal frizz/natural texture showing]

**Health Indicators:**
   - Overall Condition: [Well-maintained/healthy/moisturized/dry/damaged]
   - Product Buildup: [None visible/slight sheen/heavy coating]
   - Elasticity (Inferred): [Good/moderate/compromised] based on [visual tension/curl definition/breakage]"

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a [close-up/medium shot/full portrait], [viewing angle] of the subject, with the light source [highlighting/casting shadows on] the [front/side/back] of the head.

**Current View Analysis:**
   - **Primary Visibility:** The viewer's angle makes the [specific features - C-Cup hairline, fade transition, braid pattern, etc.] on the [left/right/front/back] side of the head the most visually dominant technical elements.
   - **Focal Points:** The [specific element - curve of the C-Cup, forward flow of twists, fade transition] is the primary focal point of the [haircut's/style's] precision.

**[Style Element] Arrangement in Current View:**
   - **Overhang/Projection:** The [forward/backward/lateral]-directed flow of the [front/side/crown] [style elements] creates a [soft/defined/dramatic] [bang-like/fringe/silhouette] effect, specifically [describe spatial relationship to facial features]. This [forward/backward/upward] styling is deliberate to [frame the face/create height/establish balance].
   - **Volume Distribution:** The bulk and volume of the [styled] hair are concentrated on the [crown/front-top/sides/back] of the head, contrasting with the [completely bare/short/textured] [skin/hair] of the [low fade/sides/nape]. The hair's length is utilized for [downward drape/upward height/lateral spread] rather than [alternative direction].

**Parting Visibility:** Due to the [dense/sparse] arrangement and the angle, the individual [square/rectangular/diagonal/curved] parts at the root are [largely concealed/clearly visible/partially visible] by the surrounding [style elements], [enhancing/revealing] the [full/structured/natural] look of the style. The primary visible lines are the [shaved hard lines/natural parts/styled sections], not [what's hidden].
**360° Structure Reference:** While [front/back/sides] are not visible in this view, the overall style indicates [describe how unseen sections would appear based on visible evidence]."

### VIII. Photography Context and Technical Presentation
   "**Lighting Analysis:**
      - Light Source: [Bright/soft/dramatic] [outdoor/studio/natural] lighting
      - Light Direction: [Front-lit/side-lit/back-lit/rim-lit]
      - Effect on Style: The lighting [enhances/reveals/creates shadows on] the [product sheen/texture/definition], making the [rope-like/coiled/smooth] texture appear [shiny/matte/dimensional] and [well-moisturized/natural/textured]
      - Contrast Enhancement: The [sharp/soft] lighting [emphasizes/softens] the precise contrast between the [dark/light] [textured/smooth] [style] and the [smooth/textured] skin of the [fade/scalp]

   **Styling Execution:**
      - **Setting Method (Inferred):** The [slight separation/tight coiling/smooth definition] and [defined/soft] [tips/edges] suggest [specific styling technique - set with mousse and dryer/natural air-dry/blow-out/flat-iron]
      - **Adaptive Styling:** The styling is adaptively [crisp/natural/dramatic]—meaning it is styled to [maximize definition/maintain natural texture/create movement] and [lay flat against gravity/stand upright/flow naturally] where desired ([the hairline/crown/sides]) and [hang freely/maintain structure/show movement] where [length/texture/design] permits

   **Photographic Technique:**
      - **Focus:** The depth of field is [shallow/deep/medium], placing the sharpest focus on [subject's face/hairstyle/specific style elements] and the primary hair elements ([hanging twists/sharp hairline/fade transition]), while the background is [blurred (bokeh effect)/in focus/partially visible]
      - **Image Quality:** [High resolution/sharp detail/professional color grading]
      - **Composition:** This [isolates/emphasizes/frames] the hairstyle as a [key feature/complementary element/focal point] of the portrait

   **Head Position:**
      - Position: [Facing forward/turned 30° left or right/profile/tilted back/looking up or down]
      - Impact: This positioning [reveals/conceals/emphasizes] [specific style elements]"

### IX. Accessories and Additional Elements (If Present)
   "**Hair Accessories:**
      - Type: [Beads/cuffs/bands/wraps/clips/ties]
      - Placement: [Specific location on style]
      - Material: [Metal/wood/plastic/fabric]
      - Color: [Matching/contrasting/complementary]
      - Function: [Decorative/functional/securing]

### X. Cultural Context and Style Classification (Optional)
"**Style Category:** [Traditional/Contemporary/Protective/Natural/Loc'd/Relaxed/etc.]
**Cultural Significance (If Applicable):** [Brief note on cultural origins or significance if relevant to the style]
**Maintenance Requirements (Inferred):** [Time investment, product needs, touch-up frequency]"
## Adaptive Description Strategy by Viewing Angle

### For Forward-Facing views, when analyzing front-facing images, prioritize:
   - **Front Hairline Emphasis:** Detail the edge-up, C-cup placement, straightness of frontal hairline, and temple definition
   - **Part Patterns:** Describe part patterns visible on crown and front sections, noting geometric arrangements and spacing
   - **Braid/Style Arrangement:** Document frontal perspective of braid/twist/loc patterns, directional flow toward or away from face
   - **Side Fade Appearance:** Describe how side fades/tapers appear from frontal view, noting symmetry and visible transition points
   - **Length Presentation:** Document how length hangs from this view - does it frame the face, fall forward, or sweep back
   - **Complete Style Reference:** Reference back sections as part of complete style structure, noting overall crown-to-nape flow even if not visible
   - **Facial Framing:** Analyze how the hairstyle frames facial features from this direct angle

### For Three-Quarter Views, when analyzing three-quarter angle images, prioritize:
   - **Prominent Side Detail:** Provide comprehensive description of the visible side - from temple through parietal ridge to occipital area
   - **Opposite Side Reference:** Note what's partially visible on the opposite side, describing enough to indicate complete wraparound structure
   - **Front-to-Back Transition:** Include detailed transition analysis from front hairline through crown to back sections
   - **Contour Wrapping:** Highlight and describe how the style wraps around visible head contours, noting how braids/twists/cuts follow the cranial shape
   - **Dimensional Perspective:** Emphasize the three-dimensional nature visible in this angle - volume, layering, and depth
   - **Fade Arc Visibility:** Document how fades curve around the head from this angle, showing the arc from temple to nape
   - **Profile Elements:** Note which elements from both front and side views are simultaneously visible

### For Profile views, when analyzing side profile images, prioritize:
   - **Complete Side Documentation:** Detail the visible side comprehensively from temple through parietal ridge to nape
   - **Vertical Structure:** Describe length and fall from this perpendicular angle, emphasizing how gravity affects the style
   - **Front-Back Boundaries:** Reference front hairline and back sections as contextual boundaries that frame the visible profile
   - **Layering Emphasis:** Highlight vertical structure and layering visible in profile - how sections stack, overlap, or cascade
   - **Fade Progression:** Document the complete fade progression visible from ear to crown in profile
   - **Temporal-to-Occipital Flow:** Trace the style's flow from front to back along the visible side
   - **Length Measurement:** Profile views are ideal for accurate length measurements - document hair length relative to facial features (ear, jaw, shoulder)

### For Back views, when analyzing back view images, prioritize:
   - **Nape Focus:** Concentrate on nape area, occipital region, and back sections of the style
   - **Back Pattern Structure:** Describe how braiding/twisting patterns conclude at the back or how cuts finish at the nape
   - **Crown-to-Nape Flow:** Document how crown patterns flow into and conclude at back sections
   - **Back-Specific Elements:** Highlight any back-specific design elements - patterns, tapering, length variations
   - **Symmetry Assessment:** Back views reveal symmetry - note if sides match or if there's intentional asymmetry
   - **Complete Circumference:** Reference how fade/taper wraps completely around the back of the head
   - **Neckline Treatment:** Detail neckline shape - blocked, tapered, natural, or designed

## Measurement Guidelines
   - Use millimeters (mm) for all precision measurements under 100mm
   - Use centimeters (cm) for lengths 100-300mm
   - Use guard numbers alongside mm measurements for clipper work (e.g., "guard #2 (6mm)")
   - Provide ranges (e.g., 25-30 braids) when exact count isn't critical, exact numbers when precision matters
   - Reference anatomical landmarks consistently (parietal ridge, occipital bone, temporal line, crown, vertex, temples, nape, hairline)
   - Describe measurements that account for the entire head, not just visible sections
   - Use relative positioning (anterior, posterior, lateral, medial, superior, inferior) for professional precision

## Critical Analysis Principles
   1. **Forensic-Level Detail:** Approach each hairstyle as if documenting it for precise replication. Every technical specification should be measurable or inferable.
   2. **Layered Information Architecture:** Structure information from broad overview to microscopic detail, allowing readers to grasp both the overall aesthetic and the technical execution.
   3. **Universal Applicability:** Descriptions should enable recreation of the exact hairstyle on any person regardless of head position or viewing angle. Always reference the complete 360° structure while being explicit about current viewing perspective.
   4. **Inference and Professional Judgment:** When certain details aren't fully visible, use professional knowledge to make informed inferences, always marking them as "(Inferred)" or "appears to be."
   5. **Technique Documentation:** Don't just describe what you see—explain HOW it was achieved (tension application, product use, cutting technique, styling method).
   6. **Adaptive Perspective:** Always acknowledge the viewing angle and explain how it affects what's visible versus what exists in the complete style.
   7. **View-Specific Optimization:** Tailor your analysis emphasis based on the viewing angle, extracting maximum information from what's visible while inferring the complete structure.

## Example Output Tone
Maintain an authoritative, technical tone similar to master barber documentation, forensic photography analysis, or professional cosmetology textbooks. Be exhaustively detailed, technically precise, and analytically objective. Use professional terminology correctly and consistently. The goal is to create a document that serves as both a visual analysis and a technical blueprint for replication. 
` 


module.exports = {
  low_cut,
  standard_prompt,
  analysis_prompt
};
