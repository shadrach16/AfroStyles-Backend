const mongoose = require('mongoose');
const Hairstyle = require('../models/Hairstyle');
const User = require('../models/User');
require('dotenv').config();

const admin = require('firebase-admin');


const serviceAccount = require('./hair-studio-a9654-firebase-adminsdk-fbsvc-d632781b15.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const hairstyles = [
  {
    name: 'Defined Coil Out on Short Natural Hair',
    
     ai_description: `### Title: Defined Coil Out on Short Natural Hair

---

### I. Style Foundation and Overall Structure
"A professional portrait photograph of a *Black woman* with a *Defined Coil Out (Twist Out variation)* on short to medium-length natural hair, photographed from a *front view/slightly upward three-quarter view*.

*Core Style:* *Coil Out/Twist Out* technique applied to create highly defined, tight, spiral curls on the entire head, integrated with the hair's natural growth pattern. The overall aesthetic is *textured, voluminous, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *high density, significant volume potential, and excellent hold capability* to maintain the defined coil pattern after unraveling the initial twists.
*Product Use (Inferred):* The hair displays *high sheen and tight texture definition, suggesting the use of **moisturizing creams, styling gels, or butter/oil blends* to *clump, define, moisturize, and minimize frizz* before twisting. The *tightness* at the root indicates *moderate-to-high tension* was applied during the two-strand twisting (or similar technique) to ensure maximum definition.
*Coil Out Details:* The style is achieved by first creating *small to medium two-strand twists* on damp, product-coated hair. Once fully dry, the twists were *carefully unraveled (picked out only at the root for volume)* to separate the hair into its individual coiled strands, creating the *defined, springy curl pattern* visible. The ends of the curls appear neatly *tucked and coiled*.
*Parting & Density:* *No defined visible parts* are present; the curls cover the scalp completely. The *high density* of the resulting curls ensures *minimal* scalp visibility, leading to a *full, voluminous* silhouette."

---

### II. Arrangement and Placement of the Defined Curls
"The *defined coils/curls* are meticulously placed to create a *rounded, voluminous silhouette that frames the face*:

*Location:* *Full head coverage, extending from the front hairline to the nape, and down to the lateral side perimeters. The hair on the sides and back is **left natural and fully coiled*, not faded, undercut, or tapered.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The curls in the first row, along the *forehead/temple* hairline, are styled to *hang slightly forward and laterally to frame the face. They are positioned to **slightly overlap the forehead/frame the face* and create a *textured/soft* *fringe/silhouette* that sits *at eyebrow level and below the temples*.
   - *Crown/Middle Rows:* The bulk of the curls at the *crown/center* are directed *upward and slightly outward* due to the natural shrinkage of the coils. This intentional placement *forces volume toward* the face and upward, *preventing* a flat look, thus creating the *high-volume, rounded, symmetrical* silhouette.
   - *Side Perimeter/Lateral Sections:* The curls on the left and right sides *hang straight down* and are allowed to *spring/coil naturally* to the length of the shortest cut layer, creating a *soft/defined* *rounded* border against the skin. This area is the transition point where the *curls maintain full natural density* down to the perimeter."

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"There is *no visible fade, taper, or shaved area. The architectural foundation is a **layered cut* that supports the voluminous coiled style:

*Hairline (The Edge-Up/Line-Up):* The hairline is *left natural/softly shaped* with no hard-lined edge-up visible, allowing the coils to begin directly at the growth line.
   - *Front:* A *natural/soft* line is placed across the *forehead*, allowing the short, defined curls to tumble directly over the forehead.
   - *C-Cup/Temple Arch/Corner:* *No C-Cup* or sharp corner is visible. The curls transition *naturally and softly* at the temple area.
   - *Temporal Line:* *Natural transition* where the curls begin.
   - *Nape/Back:* (Inferred) The hair is likely *left natural/cut to match the length of the side perimeters* for a uniform, voluminous shape.

*Fade/Taper Transition:* *Not applicable.* The entire cut is maintained at a uniform, short to medium length, which is then styled for volume and definition."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The style appears *medium-tight* and *firm/springy, particularly along the hair strands, not at the root (which has been fluffed slightly). This indicates **moderate-to-significant* product application and tension during the initial twisting stage to ensure *longevity and specific coil movement. The texture is **dense and tightly coiled/springy—not **soft or limp—contributing to their **neat, uniform, and voluminous* structure and *consistent* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured, coarse, and highly defined* to touch, with *high* density and *springy/flexible* hold throughout the strands.
*Movement Characteristics:* The style demonstrates *static hold with springy movement; the hair **maintaining position* due to product hold and coiling, but individual strands would *respond to minor movement* with a signature spring-back action."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine* (indicative of moisturizing oils/butters)
   - Texture Definition: *Highly defined* (each coil/curl is distinct)
   - Frizz Control: *Minimal frizz* is visible, indicating high-quality product use and proper drying/unraveling technique.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible*; a slight, healthy sheen suggests product is fully absorbed or thinly coated."

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up/medium shot, **front view/slightly upward three-quarter view* of the subject, with the light source *highlighting* the *front and crown* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *defined coil pattern, the volume, and the soft, natural hairline* the most visually dominant technical elements.
   - *Focal Points:* The *overall rounded silhouette and the consistent, tight coil definition* are the primary focal points of the style's execution.

*Coil Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and upward-directed flow of the **front-top* coils creates a *soft, volumetric* *silhouette* effect, specifically *framing the face and forehead. This **upward/outward* styling is deliberate to *create height and establish a balanced, circular shape*.
   - *Volume Distribution:* The bulk and volume of the styled hair are concentrated *evenly across the crown and top-sides, contrasting with **no shaved areas. The hair's length is utilized for **upward height and lateral spread* to achieve maximum volume.

*Parting Visibility:* Due to the *dense* arrangement and the style's focus on volume, the individual parts at the root are *largely concealed* by the surrounding *curls, **enhancing* the *full* look of the style. The primary visible texture is the *coil definition*, not the underlying sectioning.
*360° Structure Reference:* While *back/nape* are not visible in this view, the overall style indicates a *symmetrical, rounded structure* would be maintained across the entire head."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft* *natural* lighting, possibly supplemented with a fill light.
      - Light Direction: *Front-lit/slightly diffused*
      - Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **coiled, springy* texture appear *dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *soft* lighting *softens* the contrast between the *dark, textured* style and the skin.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling and defined tips* suggest the hair was *set with a curl defining product (e.g., gel/custard) and allowed to air dry completely or dried using a diffuser on low heat* before unraveling.
      - *Adaptive Styling:* The styling is adaptively *crisp/defined—meaning it is styled to **maximize definition* and *stand upright/flow naturally* where desired (the crown/sides) to achieve the overall circular shape.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the coils closest to the camera, while the background is **partially visible/slightly blurred (minimal bokeh)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait.

   *Head Position:*
      - Position: *Facing forward/slightly tilted back*
      - Impact: This positioning *emphasizes* the *upward volume and the frontal coil definition*."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Natural/Protective* (Twist Out/Coil Out)
*Cultural Significance (If Applicable):* The twist-out/coil-out is a fundamental and widely-used *natural hair styling technique within the African diaspora* to enhance and define the natural curl pattern without using heat or chemicals.
*Maintenance Requirements (Inferred):* *Medium investment. Requires daily spritzing with a moisturizing refresher, nightly protection (bonnet/silk scarf), and re-twisting approximately **every 7-10 days* for longevity and definition."
`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/c_thumb,w_200,g_face/v1762827089/Hairstyles/WhatsApp_Image_2025-11-08_at_02.50.05_4d7ddd87_opyjly.jpg',
    price: 2,
    popularity: 0,
    isActive: true,
  },
  {
    name: 'Full Cornrow Set - All Back Straight Stitch',
    
     ai_description: `## Title: Full Cornrow Set - All Back Straight Stitch

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *Black/Brown-skinned* *person* with a *Full Cornrow Set* hairstyle, photographed from *viewing angle: front view, looking down*.

*Core Style:* *Precision cornrows* braided from the hairline to the nape, utilizing the *natural hair texture* (likely with extension hair added for length/neatness, though only the root is visible) on top, seamlessly integrated with *extremely neat, slicked-back edges* on the sides and front. The overall aesthetic is *clean, classic, and extremely neat*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification, based on typical hair texture for this style and the tightness of the root growth), which provides *excellent density and hold capability* crucial for maintaining the precise structure and tension of the cornrows.
*Product Use (Inferred):* The hair displays a *high sheen level* and *smooth, high texture definition, suggesting the use of a **strong-hold gel or pomade* to *secure the clean parts, smooth the edges, and minimize frizz. The **tightness* at the root indicates *significant tension and a careful 'stitch' technique* was applied during styling.
*Cornrow Details:* *Classic straight-back cornrows* (also known as All Back Weaving or Ghana Braids at the root), where the *hair is tightly braided to the scalp, incorporating hair from the section as the braid progresses*. The braids are extremely uniform in width and tension.
*Parting & Density:* *Straight, clean, central linear parting* from front to back, dividing the head symmetrically, with *straight linear partings* defining each individual cornrow. The *high density of the cornrows* (minimal space between each braid) ensures *minimal* scalp visibility, giving a very full, smooth appearance."

---

### II. Arrangement and Placement of the Cornrows
"The *cornrows* are meticulously placed to create a *unified, symmetrical, and tightly structured pattern*:

*Location:* *Full head* coverage, running uniformly from the front hairline to the nape. The perimeter hair around the edges is *left slicked down and smoothed with product* to create a sharp transition into the cornrows.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *braids* in the first row are initiated directly at the *forehead* hairline and styled to *sweep back* in a uniform, straight-line path toward the crown and back. They are positioned to *show maximum scalp tension and sleekness, forming a **smooth* *silhouette* that sits *flat against the scalp*.
   - *Crown/Middle Rows:* The rows of *cornrows* running from the *center/front* to the *back* are directed *straight backward, following the natural contour of the head. This intentional placement **forces volume away from* the face, *preventing* a bulky front, thus creating the *classic, elongated 'all back' silhouette*.
   - *Side Perimeter/Lateral Sections:* The *cornrows* immediately adjacent to the hairline on the left and right sides are *braided* to *angle slightly inward* toward the center-back as they progress, creating a *clean, defined* *curved* border against the *slicked-down edges. This is the transition point where the **braids maintain uniform width and tension*.
*Individual Cornrow Arrangement:* Each *braid* is uniformly *secured* from the root, giving it a *tight, rope-like, and smooth* appearance. The *consistent* size allows *the arrangement to create near-perfect uniformity across the entire head*.

*Section Dimensions (Inferred):*
   - Count: *14-18* individual *cornrows* across the entire head (based on visible top section)
   - Thickness: *4-6 mm* diameter per individual unit (very thin, precise braids)
   - Length: *Not visible* (braids extend past the frame, but are likely long, 25+ cm, due to the protective style context)
   - Part width: *2-3 mm* between sections (very narrow and clean parts)"

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *longevity and the specific neat aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang (inferred).
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and firm* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* and *laying flat against the scalp* due to the technique and product."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *laying the edges*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped/natural* hairline that is meticulously smoothed with product to create a *slick, curved* look, *naturally blended* in execution. *Baby hairs* are *delicately swirled/brushed/styled* along the perimeter, adding a soft, decorative element to the otherwise tight style.
   - *C-Cup/Corner Arch/Temporal Line:* The hair along the *temporal line* is also highly defined and smoothed, creating a *seamless* transition from the cornrows to the skin.

*Execution Details (Inferred):*
   - Tool: Styled with a *fine-toothed comb or brush and gel*
   - Line Quality: Creates a *smooth, continuous* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *rope-like* cornrow texture above it
   - Skill Level: This precision is a signature of *high-skill styling and meticulous product application*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black* (or very dark brown)
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss* (indicates oil or heavy gel/pomade)
   - Texture Definition: *Highly defined* (each braid and each swirled edge is distinct)
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *Slight sheen/minimal visible buildup*
   - Elasticity (Inferred): *Good* based on *tight, defined appearance*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up* shot, *front view, looking down* of the subject, with the light source *highlighting* the *front* of the head and the sheen of the product.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *central straight part, the uniformity of the cornrow pattern, and the precision of the slicked-down edges* on the *front* of the head the most visually dominant technical elements.
   - *Focal Points:* The *straightness of the central parting line* and the *tightness/uniformity of the individual braids* are the primary focal points of the *style's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward-directed flow of the **front-top* *cornrows* creates a *defined* *silhouette* effect, specifically *laying flat against the scalp and flowing away from the face. This **backward* styling is deliberate to *create a smooth crown and sleek profile*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *braid rope/extension hair (which is not in frame), contrasting with the **completely smooth* *scalp* of the front and sides. The hair's length is utilized for *downward drape (inferred)* rather than upward height.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *straight-line* parts at the root are *clearly visible* by the contrasting skin tone, *enhancing* the *structured* look of the style. The primary visible lines are the *natural parts*, not the hair itself.
*360° Structure Reference:* While *the back* is not visible in this view, the overall style indicates a *consistent, straight-back pattern flowing to a finished end (either gathered, tied, or left to hang)* at the nape."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Front-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *shiny* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *cornrows* and the *smooth* skin of the *scalp/hairline*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined edges* suggest the style was *set with strong-hold gel/pomade*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and lay flat against gravity* where desired (*the hairline/crown/sides) and **maintain structure* where length permits.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on the **hairstyle and the subject's forehead, while the background is **partially visible*
      - *Composition:* This *emphasizes* the hairstyle as a *focal point* of the portrait

   *Head Position:*
      - Position: *Looking down*
      - Impact: This positioning *reveals/emphasizes* the *straightness of the front-to-back pattern and the cleanliness of the roots/parts*"

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Protective/Traditional/Braided*
*Cultural Significance (If Applicable):* Cornrows are a *traditional and historically significant African and African Diaspora hairstyle, often worn as a **protective style* to encourage hair health and growth while minimizing manipulation. The 'All Back' style is a common, classic pattern.
*Maintenance Requirements (Inferred):* *Moderate time investment* (to keep the scalp moisturized and reduce frizz at the root/along the partings), *product needs* (light oil/braid spray/edge control), *touch-up frequency* (every 4-8 weeks for a fresh install or root maintenance).`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/c_thumb,w_200,g_face/v1762827513/Hairstyles/WhatsApp_Image_2025-11-08_at_03.03.13_59323f6e_aiaa8b.jpg',
    price: 1,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Textured Taper with Crisp Line-Up (High-Low Blend)',
    
     ai_description: `## Title: Textured Taper with Crisp Line-Up (High-Low Blend)

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black* man with a *short textured taper* hairstyle, photographed from *three-quarter view (left side dominant)*.

*Core Style:* *Short, uniformly textured* hair on top, integrated with a *low skin fade/taper* on the sides and back. The overall aesthetic is *clean, contemporary, and highly defined* through precision edge work.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification, possibly 4B), which provides *excellent density, tight curl pattern, and natural volume* for the short, even texture on top.
*Product Use (Inferred):* The hair displays a *natural luster/semi-gloss sheen* and *highly defined texture, suggesting the use of a **light moisturizing cream or natural oil blend* to *moisturize, define the natural coils, and provide a healthy, clean finish. The **tightness* at the root indicates *minimal tension* was applied, allowing the natural coil pattern to form immediately.
*Parting & Density:* The short length of the textured top provides *high hair density, ensuring **minimal* scalp visibility. The hair is cut to a uniform length across the top.

---

### II. Arrangement and Placement of the Primary Style Element (Textured Top)
The *short, coily hair* is meticulously cut to create a *uniform, dense texture*:

*Location:* The textured hair occupies the *horseshoe section (top)* of the head. The *sides and back* hair is *fully tapered/faded to skin*.
*Directional Flow (The Curve/Pattern):*
   - *Front Row/Section:* The textured hair along the forehead hairline is styled to *lay forward/stand mostly upright. It is positioned to **form a dense, soft, low fringe/crown silhouette* that sits *just above the transition into the frontal line-up*.
   - *Crown/Middle Rows:* The hair across the top is directed *primarily upright with a slight, natural forward angle, maintaining **uniform height and density* across the entire area. This intentional placement *maximizes texture and prevents* a completely flat look, thus creating the *soft, rounded box* silhouette.
   - *Side Perimeter/Lateral Sections:* The texture immediately above the parietal ridge transitions smoothly into the *low skin fade, creating a **clean, defined vertical border* against the short sides. This is the transition point where the *texture length diminishes rapidly* over a short distance.

*Section Dimensions:*
   - Length: *Approximately 5-10 mm* measured from root to tip across the top, maintaining a nearly uniform length.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *low skin fade* provides the architectural support and *sharp contrast* for the *textured top*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers/razors*.
   - *Front:* An *absolutely straight, hard line* is placed across the *forehead, marking the boundary of the **scalp/hairline. The line is **crisp and horizontally level*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed at the temporal point to connect the *front hairline* with the start of the *side fade's vertical line, creating a **highly visible, defined corner. This placement is **critical* for the *crispness* of the entire look. The vertical portion of the Line-Up (the C-Cup) is placed *directly in front of the ear arch*.
   
   - *Temporal Line:* The line extends *vertically* downward from the frontal corner arch before blending into the fade line.
   
   - *Nape/Back:* (Inferred) The back hairline would likely be *tapered or finished with a sharp, blocked edge* to maintain the overall precision.

*Fade/Taper Transition:* The fade starts *low* on the head, meaning the transition from *skin-level (clipper-closed/shaved)* to *full hair length (5-10mm)* is kept *very short and tight (high contrast), primarily focused on the area **below the parietal ridge and above the ear. This **low* placement *maximizes* the canvas for the *dense, textured* top above.

*Fade Technical Specifications:*
   - Type: *Low Skin Fade/Low Taper Fade*
   - Starting Point: *Immediately above the ear and at the temporal line* (a true skin-level start)
   - Fade Range: *Skin (0)* to *~10mm* (top length)
   - Transition Zone: *~10-15mm vertical height*—a very tight, rapid transition zone.
   - Circumference: The fade *wraps around the entire head* at the low level.
   - Technique: *Freehand/Clipper-over-comb* blending in the transition zone, executed with *exceptional precision* to maintain the low level.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, surgically straight line* across the forehead.
   - *C-Cup/Corner Arch:* A *sharp, angular corner* just above the temple area that carves a *precisely defined* shape, perfectly connecting the frontal hairline to the vertical line of the fade.
   - *Temporal Points:* The corners are *crisp 90-degree angles*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*.
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead and temple*.
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it.
   - Skill Level: This precision is a signature of *high-skill barbering*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-gloss*
   - Texture Definition: *Highly defined, visible individual coil pattern*
   - Frizz Control: *Completely smooth* on the faded skin, *minimal frizz* on the coily texture.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view (left side dominant)* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *crisp frontal hairline (Line-Up), the sharp C-Cup hairline, and the low skin fade transition* the most visually dominant technical elements.
   - *Focal Points:* The *absolutely straight line of the frontal edge-up* and the *tightness of the low skin fade* are the primary focal points of the *haircut's precision*.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *forward-directed* flow of the *front-top textured hair* creates a *soft, low-volume fringe-like* effect, sitting *just above the frontal line-up. This **forward* styling is deliberate to *frame the face and maximize texture definition*.
   - *Volume Distribution:* The bulk and volume of the *textured* hair are concentrated on the *crown and front-top* of the head, contrasting sharply with the *completely bare* *skin* of the *low fade* below the parietal ridge. The hair's length is utilized for *upward height and forward flow* rather than *lateral spread*.

*360° Structure Reference:* While the back is not fully visible in this view, the overall style indicates a *consistent low skin fade* wrapping from the visible left side to the right side, with the *uniform textured top* continuing across the crown.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, directional* *studio/natural* lighting
      - Light Direction: *Front-lit and subtly side-lit*, illuminating the visible side.
      - Effect on Style: The lighting *enhances* the *texture definition* and the *semi-gloss sheen, making the **coiled* texture appear *dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* top and the *smooth, lighter-toned* skin of the *fade/scalp*.

   *Head Position:*
      - Position: *Turned approximately 30° left*, with the face looking slightly down.
      - Impact: This positioning *emphasizes* the *sharp frontal hairline and the tight low fade* on the visible left side, providing a clear view of the Line-Up's geometry.`,
    category: 'Low Cut', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/c_thumb,w_200,g_face/v1762827673/Hairstyles/WhatsApp_Image_2025-11-08_at_05.37.26_c66cb938_kvzfn5.jpg',
    price: 1,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Mid Skin Fade with Textured Top and Precision Edge-Up',
    
     ai_description: `## Title: Mid Skin Fade with Textured Top and Precision Edge-Up

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown skin tone man* with a *Mid Skin Fade with Textured Top* hairstyle, photographed from *side profile* (specifically the right side).

*Core Style:* *Short, closely cropped waves/coils* on top, integrated with a *Mid Skin Fade (Bald Fade)* on the sides and back. The overall aesthetic is *clean, sharp, contemporary*, and meticulously groomed.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4B/4C classification), which provides **high density, excellent coil definition, and natural volume/cushion* for the short, even top length.
*Product Use (Inferred):* The hair displays a *semi-gloss to high shine* finish and *highly defined waves/coils* on top, suggesting the use of *light pomade, hair oil, or holding cream* to *enhance moisture, provide definition, and maximize sheen,* particularly visible along the hairline.
*Parting & Density:* The hair on the top section is of *high density* and cut to a *short, uniform length* (likely guard #2-3) to create a *subtle wave pattern* effect, ensuring *minimal* scalp visibility.

---

### II. Arrangement and Placement of the Textured Top
The short, textured top is meticulously cut and styled to create a *uniform, dense cushion* that contrasts with the sharp sides.

*Location:* The textured length is maintained within the *horseshoe/parietal ridge* section of the head. The hair *below the parietal ridge* on the sides and back is *fully faded* to the skin.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The short hair along the front hairline is styled to *stand upright/angle slightly forward* to complement the *sharp, boxy shape* of the edge-up. It is positioned to *create a highly defined, straight border* against the forehead.
   - *Crown/Middle Rows:* The hair running from the front through the crown is uniformly cut to the same short length, allowing the natural *coiled texture* to create a *velvet-like, dense surface* that provides a *low to moderate height* silhouette.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the fade transition is *blended seamlessly* into the shortest guard length of the fade, ensuring a *clean, defined, and gradual* border.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *skin fade* provides a *sharp contrast* and the *architectural foundation* for the cut.

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/razors* to a *"hard line"* aesthetic.
   - *Front:* A *perfectly straight, hard line* is placed across the *forehead* hairline.
   - *C-Cup/Temple Arch/Corner:* A *sharp, almost right-angle corner* is meticulously placed at the temporal point, then continues into a very *gentle, tight curve* (C-Cup) that connects the front hairline to the vertical line of the sideburn. This creates a *highly visible, geometrically defined* corner.
   - *Temporal Line:* The line extends vertically downwards along the natural sideburn area.
   - *Nape/Back:* (Inferred) The back hairline would typically be a *tapered or blended skin fade* mirroring the sides.

*Fade/Taper Transition:* The fade starts at a *Mid* placement, meaning the initial transition line from *skin-level (0/clipper-closed)* is set around *15-20mm* above the ear's apex. The transition is *gradual and blended* using the *skin-to-length* method, primarily focused on the area *above the ear and below the parietal ridge. This **mid* placement *maximizes* the canvas for the sharp transition and the dense top length.

*Fade Technical Specifications:*
   - Type: *Mid Bald Fade (Skin Fade)*
   - Starting Point: *Mid-head/approximately 15-20mm above the ear*
   - Fade Range: *Skin (0/razor-shave) to guard #2 (6mm) or #3 (9mm)* on the parietal ridge area.
   - Transition Zone: The zone of blending appears to be approximately *20-25mm in height*, showing a masterful gradation.
   - Technique: *Freehand clipper fading and blade/foil shaver at the bottom.*

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair on top appears *medium* firm and *dense, maintaining its short structure. The roots near the edge-up have **moderate* tension from the use of products and trimmers, ensuring *longevity and a highly defined aesthetic. The texture is **dense and tightly coiled* contributing to the *uniform and crisp* structure.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch on top, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* across all sections, with the hair *maintaining position* and showing a *velvet-like, soft texture* on the top layer.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, perfectly straight line* across the forehead, *almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, angular corner* where the front line meets the side line, transitioning into a *tight C-Cup* that precisely defines the temple arch.
   - *Temporal Points:* The corners are *crisp and squared off*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and likely a razor/foil shaver* for the lowest skin-level.
   - Line Quality: Creates an *absolutely straight and geometrically precise* line.
   - Contrast: *Sharp* contrast with the *coily* hair above it and the bare skin below.
   - Skill Level: This precision is a signature of *high-skill barbering technique* (known as 'crisp lining' or 'getting pushed back').

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/very dark brown*
   - Color Variations: *Uniform*
*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine* visible, especially on the sharply lined edges and goatee.
   - Texture Definition: *Highly defined* short coils/waves on top.
   - Frizz Control: *Completely smooth* and controlled.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and highly moisturized*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up* shot, *side profile (right side)* of the subject, with the light source *highlighting* the *sharp edges and product sheen* on the right side of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *Mid Skin Fade transition, the precise C-Cup/Corner hairline, and the uniform texture of the top* the most visually dominant technical elements.
   - *Focal Points:* The *crispness of the temporal (side) hairline and the smooth gradation of the fade* are the primary focal points of the haircut's precision.

*Fade Progression in Current View:*
   - *Overhang/Projection:* The short hair on the top is styled to maintain a *uniform, low-profile cushion* effect, creating a subtle *box-like* silhouette.
   - *Volume Distribution:* The bulk is on the *top/crown* area, contrasting with the *completely bare (shaved)* skin of the side fade.
   - *Fade Arc Visibility:* The profile view clearly documents the *upward and slightly backward curving* arc of the fade as it progresses from the sideburn to the parietal ridge. The blending is flawless and appears to reach its maximum length at or just below the parietal ridge.
*360° Structure Reference:* While the left side and back are not visible, the overall style strongly indicates a *symmetrical Mid Skin Fade* wrapping the entire head perimeter.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *studio/professional* lighting
      - Light Direction: *Side-lit* from the right and potentially *front-lit*, resulting in the high sheen and clear detail.
      - Effect on Style: The lighting *enhances* the *product sheen* and *texture definition, making the **tightly coiled* texture appear *dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* top hair and the *smooth* skin of the fade.

   *Styling Execution:*
      - *Setting Method (Inferred):* The defined waves/coils suggest a *sponge or brushing technique* was used on the short hair to achieve the uniform texture, followed by product application for shine and hold.
      - *Adaptive Styling:* The styling is adaptively *crisp, styled to **maximize definition* and *lay flat against gravity* at the hairline and sides, while the top maintains its natural coil structure.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **hairstyle* and the *subject's profile/goatee, while the background is slightly **blurred (bokeh effect)*.
      - *Composition:* This *emphasizes* the sharp geometry and technical precision of the haircut as the *focal point* of the portrait.

   *Head Position:*
      - Position: *Profile* view (90° turn)
      - Impact: This positioning *reveals* the complete *vertical progression and arc of the Mid Skin Fade* from the sideburn to the crown.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Precision Barbering/Textured Top*
*Maintenance Requirements (Inferred):* *High* maintenance required due to the need for a *line-up/edge-up touch-up every 1-2 weeks* to maintain the surgical precision and a *fade touch-up every 2-3 weeks*. Requires consistent moisturizing product use for the textured top.`,
    category: 'Low Cut', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/c_thumb,w_200,g_face/v1762827807/Hairstyles/WhatsApp_Image_2025-11-08_at_06.08.36_d4d31d56_bn8gwx.jpg',
    price: 1,
    popularity: 2,
    isActive: true,
  },  {
    name: 'Intricate Zig-Zag Cornrow Pattern with Feed-In Braids',
    
     ai_description: `## Title: Intricate Zig-Zag Cornrow Pattern with Feed-In Braids

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *person with a medium-to-dark skin tone* with a *Zig-Zag Cornrow* hairstyle, photographed from a *three-quarter top-down view*.

*Core Style:* *Precision cornrows* styled in a *complex geometric pattern* on the top/front horseshoe section of the head, integrated with *straight, tight cornrows* on the sides and back (inferred). The overall aesthetic is *clean, geometric, and exceptionally neat*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent density, strong hold capability, and minimal slippage* under high tension, making it ideal for tight cornrowing and achieving clean parts.
*Product Use (Inferred):* The hair displays a *high sheen level* and *exceptional texture definition* and *minimal frizz, suggesting the liberal use of **braiding gel, edge control, and a finishing oil/spray* to *secure the parts, define the braids, minimize frizz, and provide a polished, high-shine finish. The **extreme tightness* at the root indicates *significant tension* was applied during styling for longevity and definition.
*Cornrow Details:* *Small-to-medium-sized cornrows* are created using the *underhand braiding technique (or similar feed-in method), where the hair is braided flat against the scalp. The **unique aspect is the non-linear, geometrically angled path* the parts and braids take, forming an interlocking V-shape or *zig-zag pattern* across the crown.
*Parting & Density:* *Exceedingly sharp, angular, and uniform parting* is used. Section sizes are *medium and consistent. The **high density* of the *braids* ensures *minimal* scalp visibility, especially in the areas between the main design rows.

---

### II. Arrangement and Placement of the Cornrows
The *braids* are meticulously placed to create a *high-contrast, dimensional, geometric relief pattern*:

*Location:* The intricate zig-zag design covers the *frontal/crown section (the 'canvas' area)* of the head, primarily from the anterior hairline back to the parietal ridge/vertex. The lower side sections transition into *smaller, straight rows* angled toward the back (inferred).
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *braid elements* in the first row, along the *forehead* hairline, are styled to *sweep back* at a *shallow curve* following the hairline. They are positioned to *frame the face, forming a **smooth, defined* *border* that is held *tightly against the scalp*.
   - *Crown/Middle Rows:* The main rows of *cornrows* are directed *backward and radially. They employ **sharply angled changes in direction (approximately 90-120° angles), creating **interlocking V-shapes* that run parallel to each other across the crown. The lines of the parts themselves create a secondary zig-zag pattern between the braids. This intentional placement *maximizes the visual impact* of the pattern, thus creating the *sculpted, dimensional silhouette*.
   - *Side Perimeter/Lateral Sections:* The *cornrows* immediately adjacent to the main pattern on the right side (visible) are *smaller, straight, and braided* to *angle inward/backward* toward the nape, creating a *clean, vertical* border against the edges. This is the transition point where the *pattern shifts from geometric to linear*.
*Individual Braid Arrangement:* Each *unit* is uniformly *secured* from the root with *extremely high tension, giving it a **tight, rope-like, and smooth* appearance. The *consistent* size and direction allows *the pattern to be the focus*, creating a highly uniform structure.

*Section Dimensions (Estimated):*
   - Count: *10-15* main rows visible in the primary design area, plus smaller perimeter rows.
   - Thickness: *3-5 mm* diameter per individual unit (small-to-medium).
   - Length: *300+ mm* (estimated total length of extensions/braids not fully visible).
   - Part width: *2-4 mm* between sections (very tight spacing).

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *natural hairline and edges* provide the architectural support and *sharp* contrast for the *cornrows*. (No discernible clipper-cut fade is visible).

*Hairline (The Edge-Up/Line-Up):* The hairline is *shaped/cleaned* using precise *edge control and trimmers* to define the natural perimeter.
   - *Front:* A *natural/softly curved* *soft* line is placed across the *forehead/temples, meticulously cleaning the boundary of the **scalp/hairline*.
   - *C-Cup/Temple Arch/Corner:* A *gentle* *curved clean-up* is meticulously applied to connect the *front hairline* with the start of the *side cornrows, creating a **subtle* *defined* corner. This placement is *complementary* for the *neatness* of the entire look.

*Fade/Taper Transition:* Not applicable. The hair is *fully cornrowed* from the edges up, with the natural hairline defining the lowest point.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *extremely tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *maximum longevity and a sculpted aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang (where the extended hair falls).
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and firm* to touch at the scalp, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* due to the tight braiding and tension.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *moderate* precision, a technique known as *Natural Edge clean-up* enhanced with edge control.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped, natural* curve, *naturally blended* in execution.
   - *Temporal Points:* The hair at the temples is laid *flat and smooth* with edge control, forming a *soft curve* leading into the side cornrows.

*Execution Details:*
   - Tool: Cleaned with *trimmers* and shaped with *edge control/gel*.
   - Line Quality: Creates a *naturally curved* line across the *forehead* boundary.
   - Contrast: *Sharp* contrast is achieved between the *tightly controlled smooth* edges and the *skin*.
   - Skill Level: This precision indicates *professional technique* in edge work and styling.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/very dark brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and highly moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *visual tension* and smooth appearance.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter top-down view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *intricate zig-zag braid pattern and the clean parts* on the *front/top* of the head the most visually dominant technical elements.
   - *Focal Points:* The *geometric sharpness of the interlocking V-shapes* is the primary focal point of the *style's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward-directed flow of the **front/crown* *cornrows* creates a *defined* *sculpted* effect, sitting *tightly against the scalp. This **backward* styling is deliberate to *create a smooth, pattern-focused canvas*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are *flat against the scalp* on the crown, with the length flowing down the back and sides (out of frame). The hair's length is utilized for *downward drape* (inferred finish) rather than *upward height*.

*Parting Visibility:* Due to the *tight* arrangement and the angle, the individual *sharply angled, geometric* parts at the root are *clearly visible, **enhancing* the *structured* look of the style. The primary visible lines are the *styled sections*, not what is hidden.
*360° Structure Reference:* While *the full length and back* are not visible in this view, the overall style indicates the main cornrows would likely *converge toward the nape* or be *gathered into a ponytail/bun* at the back of the head.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting (inferred).
      - Light Direction: *Front-lit/side-lit*, casting slight shadows to the lower right.
      - Effect on Style: The lighting *enhances* the *high product sheen and texture definition, making the **rope-like* texture appear *very shiny and dimensional*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark textured cornrows* and the *smooth skin* of the scalp/parts.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* and *defined edges* suggest the style was set with *braiding gel/mousse* and may have been finished with a *brief low-heat dryer setting* for added sheen and hold.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* where desired (the entire cornrow pattern).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **hairstyle* and the primary hair elements (*braid pattern and roots*), while the lower portion of the image is slightly softer.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature/focal point* of the portrait.

   *Head Position:*
      - Position: *Turned 30-45° right and tilted slightly down*.
      - Impact: This positioning *reveals* the *three-quarter perspective of the complex geometric pattern* across the crown.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:*
   - None visible in the hair itself.
*Other Accessories:*
   - Small, circular *diamond/crystal stud earring* is visible on the right earlobe.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Protective/Contemporary*
*Cultural Significance (If Applicable):* Cornrows are an ancient and foundational *African/African Diaspora protective style, here elevated by a **modern, geometrically complex design* achieved through precision braiding.
*Maintenance Requirements (Inferred):* *Low daily maintenance* required; *high product needs* for initial installation; *scalp oiling* is necessary; *touch-up frequency* is typically every 4-8 weeks depending on hair growth/tightness maintenance.
`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762827960/Hairstyles/WhatsApp_Image_2025-11-08_at_07.00.01_02ec3aa7_svprhi.jpg',
    price: 1,
    popularity: 5,
    isActive: true,
  },  {
    name: 'Feed-In Cornrows with Box Braid Body and Defined Curled Ends (Lob Length)',
    
     ai_description: `## Title: Feed-In Cornrows with Box Braid Body and Defined Curled Ends (Lob Length)

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown skin tone woman* with a *Feed-In Cornrows with Box Braid Body and Defined Curled Ends* hairstyle, photographed from a *three-quarter view/front view*.

*Core Style:* *Feed-in cornrows* on top and along the sides, transitioning into *small-to-medium-sized box braids* that hang past the shoulders. The overall aesthetic is *neat, highly textured, and contemporary*, combining tight root work with flowing length and defined curls.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent density and texture* for securing the tight root cornrows and providing a robust base for the braided extensions.
*Product Use (Inferred):* The style displays *semi-gloss sheen* and *highly defined texture, suggesting the use of a **braiding gel or edge control product* to *secure the cornrows, minimize flyaways, and create the clean partings, combined with a **mousse or light oil* on the braid shafts and curled ends for *shine and definition. The **tightness* at the root indicates *significant tension and precise technique* was applied during styling.
*Cornrow/Braid Details:* This is a combination style. The top section features *curved, asymmetric feed-in cornrows* originating at the hairline and flowing toward the crown/back. These cornrows transition into *uniform, free-hanging box braids* from approximately the parietal ridge downwards. The free ends feature a distinct, *barrel-curled* finish.
*Parting & Density:* *Geometric and curved parting* is utilized for the cornrows on the scalp. The sections for the free-hanging braids are *small-to-medium in size, ensuring **moderate* scalp visibility between the tracks.

---

### II. Arrangement and Placement of the Primary Style Element
The *cornrows and braids* are meticulously placed to create a *high-contrast, directional structure* on the scalp that transitions to a *voluminous, shoulder-length bob silhouette*:

*Location:* *Full head* coverage, utilizing the feed-in technique for the tracks on the scalp. The hair is *fully braided/styled* with no shaved or tapered areas visible.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The cornrows in the first row, along the *forehead/temple* hairline, are styled to *curve diagonally backward and towards the center part, creating an **asymmetric, sweeping effect. The pattern above the forehead consists of two parallel rows curving toward the center, forming a **V-shape pattern* that sits *just above the eyebrow arch and frames the face*.
   - *Crown/Middle Rows:* The rows of cornrows running from the front hairline are directed *radially and backward* toward the crown, maintaining an *intricate, curving track pattern* that separates different head zones. This intentional placement *forces volume toward the face and shoulders* once the braids hang freely, thus creating the *Lob (long bob) silhouette*.
   - *Side Perimeter/Lateral Sections:* The rows on the side flow *diagonally upward and backward* along the temple line, joining the main body of the cornrows. The free-hanging box braids then *drape straight down, creating a **defined, vertical* border against the face.
*Individual Braid Arrangement:* Each *braid/cornrow track* is uniformly *tightly secured* from the root, giving it a *smooth, rope-like* appearance. The *consistent length and thickness* below the cornrow tracks allows the free-hanging portion to create a *uniform, medium-density* silhouette.

*Section Dimensions (Estimated):*
   - Count: *5-7* primary cornrow tracks visible on the crown/forehead, transitioning into an estimated *60-80* individual box braids.
   - Thickness: *3-5 mm* diameter per individual free-hanging braid unit.
   - Length: *20-25 cm* (approximately chin to shoulder length, or Lob length) measured from the base of the cornrow to the curled tip.
   - Part width: *3-4 mm* between cornrow sections.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The style features *no shaved or faded areas; the architectural foundation is provided entirely by the **tight cornrow track placement* and the *length/shape of the hanging braids*.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight and firm* near the roots. This indicates *significant tension* was applied during *installation* to ensure *longevity and hold. The texture is **smooth and rope-like* on the braid shaft, transitioning to a *coiled and springy* texture at the tips, contributing to their *neat, structured* look and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the cornrow tracks and braid shafts would feel *smooth and firm* to touch, with *high* density and *firm* hold at the root. The curled ends would feel *textured/coiled*.
*Movement Characteristics:* The cornrows maintain a *static hold* at the scalp, while the free-hanging braids demonstrate *natural movement/dynamic flow, responding to gravity and body movement, especially the **curled tips*.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal* hairline is executed with *moderate* precision, appearing to follow the natural line.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *naturally curved* hairline that is *softly shaped* in execution. The primary geometry is established by the *curved cornrow tracks* that originate here.
   - *C-Cup/Corner Arch:* *Not applicable/not present*; the style relies on the cornrow flow rather than a hard-line edge-up.
*Execution Details:*
   - Line Quality: Creates a *naturally curved* line across the *forehead*
   - Skill Level: This precision is a signature of *professional technique* in protective styling.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/dark brown* (apparent natural hair and most of the extension length)
   - Color Variations: *Ombré effect* (appears to be a blend of dark red/auburn/burgundy)
   - Color Distribution: *Consistent highlights/ombré* concentrated on the *bottom third/curled tips* of the free-hanging braids.

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* on the cornrow tracks and at the curled tips, *smoothly defined* on the braid shafts.
   - Frizz Control: *Completely smooth/minimal frizz* on the cornrows, indicating excellent product use.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized* (inferred from sheen and clean look)
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on the visual tension and curl definition.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *intricate, curving cornrow pattern* on the scalp and the *volume/texture* of the free-hanging, colored, curled tips the most visually dominant technical elements.
   - *Focal Points:* The *asymmetric flow and geometry of the cornrow tracks* is the primary focal point of the style's precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *downward* flow of the *braided body and curled tips* creates a *soft but defined bob/lob silhouette* effect. This *downward* styling is deliberate to *frame the face and emphasize the length*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *free-hanging length* below the ears, contrasting with the *tightly secured* cornrows on the scalp. The hair's length is utilized for *downward drape* and *lateral spread* at the base.

*Parting Visibility:* Due to the *tight, smooth* arrangement and the angle, the individual *geometric/curved* parts at the root are *clearly visible, **revealing* the *structured* look of the style. The primary visible lines are the *intricate cornrow tracks*.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
   - Light Source: *Bright* *studio* lighting
   - Light Direction: *Front-lit* (with possible secondary fill light)
   - Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **rope-like* texture appear *shiny/dimensional* and *well-moisturized*.
   - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *braids* and the natural skin of the scalp.

*Styling Execution:*
   - *Setting Method (Inferred):* The *defined curls* and *smooth definition* at the tips suggest a technique like *dipping the ends in hot water* or *setting with foam/mousse and heat* (such as a steamer or hooded dryer).
   - *Adaptive Styling:* The styling is adaptively *crisp* at the root and *textured/defined* at the ends—meaning it is styled to *maximize definition and secure hold* at the scalp and *create structured curls/movement* at the length.

*Photographic Technique:*
   - *Focus:* The depth of field is *medium, placing the sharpest focus on the **subject's face and the primary hairstyle elements* (cornrow pattern and curled tips), while the background is *softly blurred (bokeh effect)*.
   - *Image Quality:* *High resolution/sharp detail/professional color grading*
   - *Composition:* This *emphasizes* the intricate hairstyle as a *focal point* of the portrait.

*Head Position:*
   - Position: *Turned approximately 15°-20° right (three-quarter view)* and *tilted slightly down*
   - Impact: This positioning *reveals and emphasizes* the *curving cornrow design* on the scalp and the overall *Lob-length silhouette*.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:* *None visible* in the hair itself, though the subject is wearing small earrings and a bracelet.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary Protective Style (Braids/Cornrows/Extension Braids)*
*Cultural Significance (If Applicable):* This style is a modern variation of *traditional African hair braiding techniques (cornrows and box braids)*, utilizing the "feed-in" method for a seamless scalp transition and enhanced presentation. It serves a functional purpose as a protective style for natural hair while also being a significant aesthetic choice.
*Maintenance Requirements (Inferred):* *Moderate time investment* for installation; product needs include *edge control/gel* for upkeep and light *oil/mousse* for the braid body; touch-up frequency (re-braiding the edges) is typically *4-6 weeks*.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828108/Hairstyles/WhatsApp_Image_2025-11-08_at_07.09.03_b49b3b32_f3vqxy.jpg',
    price: 72,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Goddess Feed-In Cornrows with Knotless Extensions and Laid Edges',
    
     ai_description: `## Title: Goddess Feed-In Cornrows with Knotless Extensions and Laid Edges

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of an *African-American woman* with a *Goddess Feed-In Cornrows* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Feed-in cornrows* (braids applied by adding small amounts of hair at each pass to create a natural, flat foundation) on top, transitioning into *three-strand knotless box braids* for the length. The overall aesthetic is *clean, textured, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent grip, density, and natural hold capability* for a secure base to the feed-in technique.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *highly defined* texture, suggesting the use of *braiding gel or edge control (for the roots and parts)* and a *light oil or serum (for the lengths)* to *secure, define, moisturize, minimize frizz, and provide shine. The **tightness* at the root indicates *significant tension and precise product application* was applied during styling to achieve longevity and neatness.
*Feed-In Cornrows Details:* The style is built upon *seven large, symmetrical, downward-flowing cornrows* that start small at the hairline and progressively increase in thickness as more hair (both natural and extended) is added. This technique creates a *smooth, flat transition* from the natural scalp to the bulk of the braids.
*Parting & Density:* The main parting pattern is *geometric and asymmetrical on the crown, utilizing a **large central V-shape* parting that serves as the apex for the surrounding braids. The section sizes are *large (approximately 30-40mm wide at the scalp), and the **low density* of the main braids ensures *minimal* scalp visibility once the hair is styled down. The visible parts are *crisp and straight*.

---

### II. Arrangement and Placement of the Cornrows/Braids
The *braids* are meticulously placed to create a *balanced, face-framing, and voluminous drape*:

*Location:* The cornrows cover the *entire head (full head style). The hair on the sides and back is fully incorporated into the large cornrows; there is **no fade, taper, or undercut*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The braids in the front row, starting just behind the *frontal hairline, are styled to **sweep back and angle diagonally. The first main cornrow begins with a **diagonal curve* at the temple and flows *down and back*.
   - *Crown/Middle Rows:* The *seven primary cornrows* originate from a *central, high-point apex* on the crown, defined by *sharp, angular, and curved partings* (including the inverted V-parting over the vertex). The braids are directed *radially and symmetrically toward the perimeter, following the cranial shape before hanging straight down. This intentional placement **forces volume away from* the face in the front, and allows the length to *drape* over the shoulders, thus creating a *streamlined and voluminous silhouette*.
   - *Side Perimeter/Lateral Sections:* The braids immediately adjacent to the side hairline are styled to *angle slightly inward* as they flow back, creating a *defined, thick, and clean* border. This is the transition point where the *feed-in technique is most critical* to achieve the smooth, flat integration.
*Individual Braid Arrangement:* Each *braid* is uniformly *secured and formed* from the root, transitioning from a flat cornrow (feed-in) to a round, *rope-like* three-strand braid (knotless extension) at approximately the parietal ridge. The *consistent, long length (estimated at 60-70cm)* allows the arrangement to create uniformity and a dramatic downward drape.

*Section Dimensions:*
   - Count: *7* individual main cornrows across the entire head (plus minor perimeter segments).
   - Thickness: *20-25 mm* diameter per individual unit (after the feed-in point).
   - Length: *60-70 cm* measured from root to tip.
   - Part width: *2-3 mm* between sections (defining the neat, visible lines).

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
*N/A.* This is a full-head braided style that incorporates all hair; there is no fade, taper, or undercut visible. The only precision edge work is on the natural hairline (The Edge-Up/Line-Up) and the baby hairs.

*Hairline (The Edge-Up/Line-Up):* The hairline is *left natural but meticulously smoothed* to control baby hairs ("laid edges").
   - *Front:* The baby hairs (vellus hair) along the forehead and temples are styled into *small, delicate, and tightly secured S-curves and swoops* using an edge control product and a fine-tooth comb/brush. This is a *soft line* achieved by styling, not cutting.
   - *C-Cup/Temple Arch/Corner:* The natural hairline is maintained but defined by the *precise styling of the baby hairs* in the temporal region, creating a *subtle, curved* frame for the face.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *longevity* and a *clean, flat aesthetic. The length of the braids is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and dense* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* at the root and *dynamic flow* in the lengths, with the braids *responding to gravity* in a smooth, voluminous downward drape.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal and temple* hairline is executed with *exceptional* precision in the form of *laid edges*—a precise styling technique.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped, natural* hairline that is defined by the *intricate S-curves and swoops* of the styled baby hairs.
   - *C-Cup/Corner Arch:* The *soft C-Cup* is formed by the *curved flow of the styled baby hairs* just above the temple area, perfectly connecting the frontal hairline to the side perimeter of the cornrows.

*Execution Details:*
   - Tool: Styled with *fine-tooth brush/comb* and *edge control product*
   - Line Quality: Creates a *soft, undulating, and artistic line* across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *smooth* skin of the forehead and the *tightly braided* hair above it
   - Skill Level: This precision is a signature of *professional, high-skill natural hair styling*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black* (likely a Level 1 or 2, darkest black/brown)
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss* (a healthy luster from product use)
   - Texture Definition: *Highly defined* (the braid pattern is crisp)
   - Frizz Control: *Completely smooth* at the root, with *minimal frizz* throughout the lengths.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *Slight sheen visible* from edge control/braiding product
   - Elasticity (Inferred): *Good* based on the visual tension and neatness of the roots.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/medium shot, **three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *intricate cornrow partings, the curved pattern of the braids, and the precisely laid baby hairs* the most visually dominant technical elements.
   - *Focal Points:* The *central V-parting* and the *fluid S-curves of the laid edges* are the primary focal points of the *style's* precision.

*Braid Arrangement in Current View:*
   - *Overhang/Projection:* The *backward/lateral-directed flow of the **front* cornrows creates a *defined, elevated* silhouette near the crown, while the lengths are *draping heavily* over the chest. This *backward* styling is deliberate to *allow the clean-parted roots to be visible* and *establish balance* with the long lengths.
   - *Volume Distribution:* The bulk and volume of the *braided* hair are concentrated in the *lengths that hang past the shoulders, contrasting with the **smooth, flat cornrow foundation* on the scalp. The hair's length is utilized for *downward drape* rather than *upward height*.

*Parting Visibility:* Due to the *large* arrangement, the individual *angular/curved* parts at the root are *clearly visible, **revealing* the *structured* look of the style. The primary visible lines are the *straight, geometric parts* that separate the braids.
*360° Structure Reference:* While the *back* is not visible in this view, the overall style indicates the main cornrows would continue to flow *down and back to the nape, maintaining **full coverage* and *symmetry* across the occipital area.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio/outdoor* lighting (appears diffused)
      - Light Direction: *Front-lit* (slightly off-center)
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *braids* and the *smooth* skin of the *scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *smooth definition* of the roots suggest *set with braiding gel and a warm dryer/natural air-dry*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* where desired (*the crown/roots) and **hang freely* where *length/design* permits

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow/medium, placing the sharpest focus on the **subject's face and the intricate partings/laid edges* and the primary hair elements, while the background is *blurred (bokeh effect)/partially visible*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *focal point* of the portrait

   *Head Position:*
      - Position: *Turned 30° right and tilted slightly down*
      - Impact: This positioning *emphasizes* the *fluid curve of the cornrow pattern* and the *precision of the laid edges* on the visible side.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:*
    - *N/A* (No beads, cuffs, or ties visible)

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Protective/Contemporary Braiding*
*Cultural Significance (If Applicable):* This style is a modern, large-scale rendition of *traditional African cornrow braiding, executed with the contemporary technique of **'feed-ins'* for a seamless look and *'knotless'* extensions for tension reduction on the hair length.
*Maintenance Requirements (Inferred):* Requires *low daily maintenance* on the lengths, but *regular application of edge control/mousse* for the roots and edges, and *touch-ups/re-braiding of the entire style* typically every *4-8 weeks* for longevity.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/c_thumb,w_200,g_face/v1762828203/Hairstyles/WhatsApp_Image_2025-11-08_at_07.14.59_bdb31b76_mixggp.jpg',
    price: 2,
    popularity: 45,
    isActive: true,
  },  {
    name: 'Sleek Asymmetrical Bob/Side-Part Wavy Blend',
    
     ai_description: `### Title: Sleek Asymmetrical Bob/Side-Part Wavy Blend

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown skin tone woman* with a *Sleek Asymmetrical Bob* hairstyle, photographed from a *three-quarter view (slightly turned to the left)*.

*Core Style:* *Sleek, straight-to-subtly-wavy hair* styled in a *sharp, angled bob* with a deep side part. The overall aesthetic is *clean, sophisticated, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4A-4C* classification, inferred), which has been chemically or heat-processed (likely a *wig, weave, or relaxed/silk-pressed) to achieve a **straight/wavy* texture (approximating Type *1C/2A). This processed texture provides **high density* and *significant volume/body* but is styled for a *smooth, defined hang*.
*Product Use (Inferred):* The hair displays a *semi-gloss/high sheen level* and a *smooth, uniform texture definition, suggesting the use of a **lightweight serum, pressing oil, or finishing spray* to *provide shine, minimize frizz, and maintain the sleek, flat press. The **lack of visible frizz* at the root indicates *high tension and heat technique* were applied (e.g., hot comb or flat iron pressing).
*Sleek Bob Details:* This is a classic bob cut, characterized by a *blunt perimeter* that is *shorter in the back* and *angles forward* towards the jawline. The hair is styled with a *deep, dramatic side part, which creates **significant frontal sweep and volume* on the longer side.
*Parting & Density:* A *deep, slightly curved part* is located high on the *left parietal ridge/temple area. The **high density* of the hair, coupled with the styling technique, ensures *minimal to zero scalp visibility* except along the defined part line itself.

---

### II. Arrangement and Placement of the Style Element
The sleek hair is meticulously placed to create a *smooth, voluminous drape* with a *defined, asymmetrical silhouette*:

*Location:* The hair covers the *full head* down to the perimeter. There is *no visible fade, taper, or undercut. The structure is based entirely on the **length, cut angle, and parting*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section (Left Side):* The hair from the large section is styled to *sweep back and down* away from the deep part, *overlapping the forehead* and temple area before curving sharply to *frame the face. It forms a **heavy, smooth fringe/crown* that sits *below the brow bone* and runs down to the jaw.
   - *Front Row/Section (Right Side - Shorter Section):* The hair from the small section is combed *flat and tucked behind the ear (inferred)* or swept *directly down* following the head shape. This placement *minimizes volume* on the short side, emphasizing the asymmetry.
   - *Crown/Middle Rows:* The hair running from the crown *is directed primarily backward and laterally, allowing it to fall into the **angled bob shape. This intentional placement **forces volume toward the face and chin* on the long side, creating a *defined, A-line silhouette*.
   - *Side Perimeter/Lateral Sections:* The hair drapes *smoothly and vertically* along the sides, following the sharp *forward-leaning angle of the cut*.
*Individual Hair Arrangement:* The strands are *uniformly smooth and straight/wavy, styled to lay **flat at the root* before gaining volume and movement at the mid-lengths and ends, giving it a *smooth, silky* appearance. The length variation is *intentional* to create the bob's classic angle.

*Section Dimensions:*
   - *Length (Long Side - near chin):* *~180-200 mm* (18-20 cm) measured from the root, ending near the jawline/chin.
   - *Length (Back/Short Side):* *~100-120 mm* (10-12 cm) measured from the nape, angled up towards the parietal ridge.
   - *Part Position:* Deeply offset, approximately *50-60 mm* lateral from the center line.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The architectural foundation is a *precise, layered bob cut*, not a fade:

*Hairline (The Edge-Up/Line-Up):* The natural hairline is *concealed or naturally maintained* by the hair.
   - *Front:* The styling is based on the *part placement, which allows the hair to **cover the frontal hairline* on the large side, creating a *soft boundary*.
   - *C-Cup/Temple Arch/Corner:* Not applicable/Visible.

*Bob Cut Technical Specifications:*
   - *Type:* *Asymmetrical/Angled Bob*
   - *Perimeter:* *Blunt cut* with internal layering (inferred) to promote movement and body.
   - *Angle:* The cut runs from a shorter length at the back/nape to a significantly longer length at the front/chin, creating an *A-line angle* of approximately *10-15 degrees*.
   - *Length Progression:* Gradual increase from the occipital bone to the anterior-most point near the chin.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair appears *medium tension* and *firmly styled* near the root to secure the deep part, but *soft and flexible* through the body and ends. This indicates *moderate tension* was applied to ensure the *sleek, flat root profile* and *smooth hang. The texture is **smooth and flowing—not **rigid—contributing to its **polished and natural movement*.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and silky* to touch, with *high density* and *flexible* hold through the body.
*Movement Characteristics:* The style demonstrates *natural movement* with the hair *responding to gravity* while maintaining the *intentional directional styling* (sweeping forward/down from the part).

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* Not applicable, as the hair conceals the natural hairline except for the defined part.

*Shape & Geometry:*
   - *Part Line:* A *clean, precise, slightly curved line* achieved with a tail comb, delineating the deep side part.
   - *Bob Perimeter:* The bottom line of the bob is *crisp and clean, indicating a **highly skilled, sharp cut*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black* (Level 1-2)
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine*, indicating excellent moisture and product application.
   - Texture Definition: *Highly defined, smooth, and uniform* (minimal flyaways).
   - Frizz Control: *Completely smooth*.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized* (inferred from shine/smoothness).
   - Product Buildup: *None visible* (clean, light finish).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter viewing angle* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *deep side part, the sleek volume, and the forward-sweeping flow* of the long side the most visually dominant technical elements.
   - *Focal Points:* The *defined, sharp angle of the perimeter* and the *high sheen of the hair* are the primary focal points of the style's precision and polish.

*Style Arrangement in Current View:*
   - *Overhang/Projection:* The *lateral-forward* directed flow of the front hair creates a *soft, volumetric sweep, sitting **just below the eye level* and framing the cheekbone and jawline. This *forward* styling is deliberate to *frame the face and create the signature asymmetrical volume*.
   - *Volume Distribution:* The bulk and volume are concentrated on the *crown/front-top* (due to the deep part) and along the *perimeter, contrasting with the **flat root area. The hair's length is utilized for **downward drape and lateral spread* to define the bob's A-line shape.

*Parting Visibility:* Due to the *smooth, flat styling* and the direct angle, the *clean part line* is *clearly visible, **enhancing* the structured look of the style.
*360° Structure Reference:* While the back is not visible, the overall style indicates the back section is *shorter and slightly stacked or straight-cut* to support the sharp, forward angle.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *studio/indoor* lighting
      - Light Direction: *Front-lit/slightly off-center*, creating soft definition.
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **smooth* texture appear *shiny and dimensional*.
      - Contrast Enhancement: The *soft* lighting *emphasizes* the texture of the hair against the skin tone.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *smooth definition* and *defined edges* suggest a *flat-iron/pressing technique* followed by a *light serum* application.
      - *Adaptive Styling:* The styling is adaptively *crisp and polished—it is styled to **maximize definition and lay flat against gravity* at the root, and *flow naturally* through the lengths.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the hairstyle's body, while the background is **partially visible/softly blurred (incidental bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait.

   *Head Position:*
      - Position: *Facing forward, turned ~15° to the left (three-quarter view)*, with the head held upright.
      - Impact: This positioning *emphasizes* the *sweeping volume* of the long side of the bob and the *asymmetrical profile*.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Sleek/Relaxed*
*Cultural Significance (If Applicable):* The sleek bob, often achieved through wigs, weaves, or heat/chemical processing (like the 'silk press'), is a *popular, high-fashion protective or transitional style* within Black hair culture, emphasizing polish and structure.
*Maintenance Requirements (Inferred):* *Medium* time investment; requires *high-quality finishing serums/oils* for shine and frizz control, and *regular maintenance/wrap setting* to preserve the sleek, flat root and defined shape.`,
    category: 'Bob', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828375/Hairstyles/WhatsApp_Image_2025-11-08_at_07.30.50_55b1ea29_ibsaua.jpg',
    price: 2,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Sculpted Natural Taper Fade with Crisply Defined Line-Up',
    
     ai_description: `### Title: Sculpted Natural Taper Fade with Crisply Defined Line-Up

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black* man with a *Sculpted Natural Taper Fade* hairstyle, photographed from a *side profile* (right side).

*Core Style:* *Short, uniformly textured natural curls* on top, integrated with a *low to mid-taper fade* on the sides and back. The overall aesthetic is *clean, precise, and contemporary*, balancing natural texture with high-skill architectural shaping.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification with a very tight coil pattern), which provides *high density, excellent volume potential, and firm hold capability* when cut short. The uniform texture on the crown suggests a low-setting sponge or brush technique was applied to enhance curl definition.
*Product Use (Inferred):* The hair displays a *natural luster/semi-gloss sheen* and *highly defined texture, suggesting the use of a **moisturizing cream, light holding pomade, or curl-defining product* to *moisturize, minimize frizz, and provide sheen*.
*Parting & Density:* The density of the hair on the crown is *high, with minimal scalp visibility, ensuring a **full, uniform surface* for the short, textured style.

---

### II. Arrangement and Placement of the Curls/Natural Texture
The short, natural curls are meticulously placed to create a *uniform, dense surface* that serves as the transition point for the fade:

*Location:* The textured hair is concentrated on the *horseshoe section (top). The hair below the parietal ridge and temporal line is **taper faded* to the skin.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The curls in the front row are styled to *sit naturally and uniformly* across the frontal hairline, providing a *lightly textured* border that is then precisely outlined by the edge-up.
   - *Crown/Middle Rows:* The texture is *consistent and short* across the entire crown, directing the overall volume *upward* and slightly *radially. This intentional placement **forces volume toward* the center, *preventing* a flat appearance, thus creating the *dense, rounded silhouette*.
   - *Side Perimeter/Lateral Sections:* The shortest textured hair immediately adjacent to the taper fade creates a *softly defined* vertical border against the short sides. This is the transition point where the *short curls (approx. 8-10mm)* blend seamlessly into the longest point of the taper.
*Individual Curl Arrangement:* Each coil is *tightly and naturally formed* due to the texture and short length, giving it a *coiled and springy* appearance. The *consistent* length allows for *complete uniformity* across the entire top surface.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *taper fade* area provides the architectural support and *sharp* contrast for the natural texture:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/razors*.
   - *Front:* An *absolutely straight* *hard* line is placed across the *forehead, marking the boundary of the **skin/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp* *semicircular/curved* *shape* (the C-Cup) is meticulously placed to connect the *front hairline* with the start of the *side fade/natural hairline* near the ear, creating a *highly visible* *defined* corner. This placement is *critical* for the *crispness* of the entire look and dramatically frames the temple area.
   
   - *Temporal Line:* The line extends from the temple area as a precise vertical line that drops into the fade transition.
   
   - *Nape/Back:* (Inferred) The back hairline would likely be a *tapered* neckline, blending the low fade into the skin at the nape for a clean finish.

*Fade/Taper Transition:* The fade starts *low/mid* on the head, following the *temporal line* and curving around the ear. The transition from *skin-level (0/clipper-closed)* to *full hair length (approx. 8-10mm)* is kept *gradual and blended* but primarily focused on the area *around the ear and into the neckline. This **low/mid* placement *maximizes* the canvas for the *dense, textured* hair above.

*Fade Technical Specifications:*
   - Type: *Low-Mid Taper Fade*
   - Starting Point: *Temporal Line* and *above the ear*
   - Fade Range: *Skin (0)* to *guard #2 (6mm)* (or equivalent blend up to 8-10mm at the top)
   - Transition Zone: *30-40mm* height from the skin line to the blend line at the parietal ridge
   - Circumference: The taper wraps around the side of the head, connecting the temple C-Cup to the back of the head.
   - Technique: *Freehand clipper-over-comb and/or fading technique* utilizing multiple guards to achieve a seamless, clean gradient.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp* *C-Cup* that carves a *crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The vertical line connecting the C-Cup to the fade is *perfectly straight*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight, geometric* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it and the smooth skin below
   - Skill Level: This precision is a signature of *high-skill barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth/minimal frizz* at the textured top
*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, moisturized*

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **side profile* of the subject, with the light source *highlighting* the *side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline* and the *taper fade transition* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *curve and sharpness of the C-Cup* is the primary focal point of the *haircut's* precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The short textured hair on top maintains a *static hold/upright* position due to its short length and natural texture. This styling is deliberate to *create height and volume* on the crown, balancing the very tight sides.
   - *Volume Distribution:* The bulk and volume of the *textured* hair are concentrated on the *crown/front-top* of the head, contrasting sharply with the *skin-level* hair of the *taper fade*.
*360° Structure Reference:* While the left side and back are not fully visible, the overall style indicates *high-precision, symmetrical execution* on all sides, typical of a well-executed line-up and taper.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio/natural* lighting
      - Light Direction: *Side-lit*, primarily illuminating the right profile
      - Effect on Style: The lighting *enhances* the *product sheen/definition* and *sharpness* of the hairline, making the texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* top and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined* texture suggest a short natural style maintained with a *curl-enhancing cream and possible sponge/brush technique*.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* at the hairline and *stand upright* on the crown.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on the **entire visible hairstyle* and the subject's face.
      - *Image Quality:* *High resolution/sharp detail*
      - *Composition:* This *emphasizes* the precise detailing of the hairline and fade.

   *Head Position:*
      - Position: *Profile* (right side)
      - Impact: This positioning *reveals* the *full progression of the C-Cup and Taper Fade* on the side.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary Natural/Barbering Masterpiece*
*Cultural Significance (If Applicable):* This style is a popular, high-precision variation of the classic *Taper Fade* or *High-Top Fade* aesthetic, particularly within Black culture, valuing crisp lines and defined natural texture.
*Maintenance Requirements (Inferred):* *High*; requires a professional Line-Up/Edge-Up and Fade touch-up every 1-2 weeks to maintain the razor-sharp geometric precision.`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828606/Hairstyles/WhatsApp_Image_2025-11-08_at_08.03.46_244024b1_ennhyo.jpg',
    price: 2,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Polished Waves Buzz Cut with Precision Edge-Up and High Taper Fade',
    
     ai_description: `### Title: Polished Waves Buzz Cut with Precision Edge-Up and High Taper Fade

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/African-American man* with a *Polished Waves Buzz Cut* hairstyle, photographed from *side profile*.

*Core Style:* *Very short, closely cropped waves* on top, integrated with a *high, tight skin taper fade* on the sides and back. The overall aesthetic is *clean, sharp, and highly defined*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification), which provides *excellent density and tight curl pattern* necessary to form the signature waves pattern when brushed/styled to a very short length.
*Product Use (Inferred):* The hair displays *high sheen/semi-gloss* and *well-defined, set wave pattern, suggesting the use of **pomade, wave grease, or moisturizing oil* to *lay down the texture, enhance the wave definition, and provide a polished shine. The **tight coiling* at the root indicates *brushing and compression* was applied during styling (the 'wolfing' or 'wave' technique).
*[Style Type] Details:* The texture on the crown is maintained at an extremely short length, allowing the natural curl pattern to be compressed and trained into *concentric, ripple-like waves* through consistent brushing.
*Parting & Density:* No specific parting is visible due to the extremely short length. The *high density* of the hair is essential to the formation of the close-knit wave pattern, ensuring *zero* scalp visibility on the crown.

---

### II. Arrangement and Placement of the [Primary Style Element]
"The very short, brushed waves are meticulously placed to create a *uniform, ripple-like texture* across the top:

*Location:* The wave pattern covers the *entire horseshoe section* of the crown. The hair in the *side and back perimeter* is *faded aggressively to skin level*.
*Directional Flow (The Curve/Pattern):* The waves exhibit a *subtle, consistent flow* that generally follows the cranial curvature, likely brushed *forward and down* toward the perimeter on the side visible.
   - *Front Row/Section:* The waves begin immediately behind the *crisp, straight frontal hairline (Edge-Up), presenting a tight, **compressed texture* that sits *low against the scalp, forming a **sharp* silhouette.
*Individual [Braid/Twist/Loc] Arrangement:* Not Applicable - Wave style.

*Section Dimensions:*
   - Count: Not Applicable
   - Thickness: Not Applicable
   - Length: *1-3 mm* (approximate, guard #0.5 to #1 or lower) measured from root to tip on the crown
   - Part width: Not Applicable"

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *aggressively tapered skin fade* provides the architectural support and *high-contrast, sharp* look:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/razors*.
   - *Front:* A *perfectly straight, hard line* is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   - *C-Cup/Temple Arch/Corner:* A *sharp, defined angular corner* is meticulously placed at the temporal point, connecting the *front hairline* with the start of the *side fade/taper, creating a **highly visible, crisp corner. This placement is **critical* for the *crispness* of the entire look.
   - *Temporal Line:* The line drops *vertically* from the corner point, initiating the aggressive side taper.
   - *Nape/Back:* (Inferred) Likely a *tapered or blocked skin fade* at the back neckline.

*Fade/Taper Transition:* The fade is best described as a *high taper fade* beginning at the level of the *upper temple/mid-parietal ridge* and dropping behind the ear. The transition from *skin-level (0/clipper-closed/foil)* to *full hair length (1-3mm)* is kept *very short and tight, primarily focused on the area **above and around the ear. This **high* placement *maximizes* the canvas for the *dense, textured* waves above.

*Fade Technical Specifications:*
   - Type: *Skin Taper Fade*
   - Starting Point: *High temporal line/upper ear corner*
   - Fade Range: *1-3mm* (top length) to *skin-level (0)*
   - Transition Zone: *6-10 mm* in vertical height
   - Circumference: The aggressive taper is clearly visible from the side profile, wrapping around the temporal and mastoid process.
   - Technique: *Clipper-over-skin/blending* technique to create a smooth, rapid graduation.

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The texture appears *extremely tight and firm* against the scalp, particularly near the roots. This indicates *significant compression/brushing* was applied during styling to ensure *longevity and the formation of the wave pattern. The texture is **dense and finely coiled—not **soft—contributing to its **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and conditioned* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold, with the hair **maintaining position* due to product use and short length."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, perfectly straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp angular corner* defines the temporal point, creating a *geometrically precise* intersection just above the temple area, perfectly connecting the front hairline to the vertical line of the side taper.
   - *Temporal Points:* The corner is shaped with a *crisp 90-degree angle*, establishing a strong architectural boundary.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight* line across the *forehead* and a *vertical* drop at the temple
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss*
   - Texture Definition: *Highly defined* (waves pattern)
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, moisturized*
   - Product Buildup: *Slight sheen* suggesting light to moderate product for shine/hold
   - Elasticity (Inferred): *Good* based on *tight curl definition/lack of breakage*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up* *side profile* of the subject, with the light source *highlighting* the *side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup/corner hairline definition* and the *high skin taper transition* the most visually dominant technical elements.
   - *Focal Points:* The *crispness of the edge-up* and the *clean, fast fade transition* is the primary focal point of the *haircut's* precision.

*[Style Element] Arrangement in Current View:*
   - *Overhang/Projection:* The very short length on top ensures *no overhang. The texture lays **flat against gravity* creating a *defined* silhouette effect.
   - *Volume Distribution:* The bulk and volume are *minimal, with a small increase in hair density concentrated on the **crown, contrasting sharply with the **completely bare/shaved* *skin* of the *high taper* on the side visible. The hair's length is utilized for *texture and definition* rather than *height or spread*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, no parts are visible, *enhancing* the *full/structured* look of the style. The primary visible line is the *shaved hard line (Edge-Up)*.
*360° Structure Reference:* While the back and opposite side are not visible in this view, the overall style indicates a *consistent high skin taper fade* wrapping around the entire head, with the *uniform wave pattern* covering the entire crown."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Side-lit* with a primary light source from the right side of the subject (visible side)
      - Effect on Style: The lighting *enhances* the *product sheen/definition, making the **coiled* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *waves* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* suggests the use of a *wave brush and pomade/oil/wave grease* to compress the natural texture.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and lay flat against gravity* at the hairline and crown.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on the **hairstyle/specific style elements* (the sharp hairline and fade transition).
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *focal point* of the portrait

   *Head Position:*
      - Position: *Profile* (facing left, showing right side of the head)
      - Impact: This positioning *reveals* the *entire side fade progression and the temporal corner/C-Cup definition*."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Contemporary/Natural/Barbering Masterpiece*
*Cultural Significance (If Applicable):* This style is a classic example of a *precision cut* prevalent in Black male grooming, showcasing mastery of the *Edge-Up (Line-Up)* and *Skin Fade* techniques, often associated with a clean, professional aesthetic.
*Maintenance Requirements (Inferred):* *High maintenance* at the perimeter due to the need for a *bi-weekly Edge-Up and Fade refresh, coupled with **daily wave brushing and product application* for the crown texture.`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828711/Hairstyles/WhatsApp_Image_2025-11-08_at_08.21.51_61f6fd76_zbefg9.jpg',
    price: 1,
    popularity: 0,
    isActive: true,
  },  {
    name: 'The Afro-Textured High-Top Taper Fade with Line-Up',
    
     ai_description: `## The Afro-Textured High-Top Taper Fade with Line-Up

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *dark-skinned Black man* with an *Afro-Textured High-Top Taper Fade* hairstyle, photographed from a *front view/slight three-quarter view (head slightly turned to the left)*.

*Core Style:* *Natural, tightly coiled Afro-textured hair* left with significant, yet managed, length and volume on top (High-Top style), integrated with a *low-to-mid Taper Fade* on the sides and back. The overall aesthetic is *clean, contemporary, and geometrically precise*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C or high-density 4B* classification), which provides *maximum density, substantial vertical lift/volume, and a tight, uniform curl pattern* essential for the compact silhouette of the high-top.
*Product Use (Inferred):* The hair displays a *natural luster/semi-gloss sheen* and *highly defined texture* with minimal visible frizz, suggesting the use of a *moisturizing cream or natural oil/light pomade* to *define the coils, minimize frizz, and provide a healthy sheen. The **tight coiling* at the root indicates *minimal tension* was applied, relying on the hair's natural texture for the shape.
*Coil Definition Details:* The texture on top is *picked or gently manipulated* to achieve controlled volume and a relatively *uniform surface level*, not entirely free-form, but capitalizing on the natural coil pattern.
*Parting & Density:* No distinct parts are visible on the top section. The *high density* of the natural Afro texture ensures *zero* scalp visibility on the crown, creating a solid, voluminous mass.

---

### II. Arrangement and Placement of the [Primary Style Element]
The *natural coils* are meticulously placed to create a *compact, box-like silhouette on the crown*:

*Location:* The longer, voluminous hair is restricted to the *horseshoe section (from temple to temple across the crown). The hair inferior to the parietal ridge is **tapered and faded*.
*Directional Flow (The Curve/Pattern):*
- *Front Row/Section:* The natural hair at the frontal hairline is styled to *hang slightly forward/stand upright* before being abruptly cut to form the sharp *line-up (edge-up). It is positioned to **form a strong, vertical border, creating a **crisp, dense, and geometrically straight fringe/frontal plane* that sits *just above the forehead*.
- *Crown/Middle Rows:* The hair running from the *center of the crown to the front* is directed *upward and slightly forward, utilizing the hair's natural lift to **maximize the height and verticality* of the high-top, thus creating the *compact, voluminous block silhouette*.
- *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the *mid-taper fade* on the left and right sides is styled to *stand upright, forming a **clean, defined vertical border* against the very short hair of the fade. This is the transition point where the *full texture above transitions directly down* into the shortest fade length.
*Individual Coil Arrangement:* The hair on the top is *highly defined and uniformly coiled, giving it a **springy, dense, and cohesive* appearance. The *consistent length (approximately 2-3 cm)* allows the arrangement to create a uniform surface level.

*Section Dimensions:*
- Length: *~20-30 mm* measured from root to tip on the longest sections.
- Volume: *~20-25 mm* of vertical projection above the frontal hairline.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *taper fade* area provides the architectural support and *sharp* contrast for the *textured high-top*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers/razors*.
- *Front:* A *straight, hard line* is placed across the *forehead, marking the boundary of the **scalp/hairline*.
- *C-Cup/Temple Arch/Corner:* A *sharp, almost angular corner* is meticulously placed at the temple to connect the *front hairline* with the start of the *side fade/vertical side line, creating a **highly visible, defined corner. This placement is **critical* for the *crispness* of the entire look.

*Fade/Taper Transition:* The fade starts *low-to-mid* on the head, meaning the transition from *skin-level (clipper-closed/foil shaver)* to *full hair length* is kept *gradual and blended, primarily focused on the area **above the ear and around the parietal ridge. This **low-to-mid* placement *balances* the canvas for the *dense, textured, voluminous* style above.

*Fade Technical Specifications:*
- Type: *Taper Fade/Skin Taper (Low-to-Mid)*
- Starting Point: *Around the bottom of the ear and temporal line*
- Fade Range: *Skin (0)* to *~12mm (guard #4)*
- Transition Zone: *~15-20 mm in height* for the blend, particularly above the ear.
- Circumference: The taper wraps around the sides and back, creating a consistent, clean boundary for the top section.
- Technique: *Clipper-over-comb/fading technique* was used for a seamless blend.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Shape-Up*.

*Shape & Geometry:*
- *Frontal Hairline:* Features a *highly defined, surgically straight line* across the *forehead, **almost surgical* in execution.
- *C-Cup/Corner Arch:* A *sharp, angular/block corner* that carves a *precise 90-degree corner* just above the temple area, perfectly connecting the frontal hairline to the vertical line of the side taper.
- *Temporal Points:* The points are *squared and blocked*, not rounded.

*Execution Details:*
- Tool: Cut with *sharp-bladed trimmers/razors* (inferred).
- Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead/temple*.
- Contrast: *Sharp* contrast with the *coily/textured* hair above it.
- Skill Level: This precision is a signature of *high-skill barbering/professional technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
- Base Color: *Natural black/dark brown*
- Color Variations: *Uniform*
*Finish Quality:*
- Sheen Level: *Semi-gloss/natural luster*
- Texture Definition: *Highly defined* coiling
- Frizz Control: *Minimal frizz*

*Health Indicators:*
- Overall Condition: *Well-maintained, healthy, and moisturized*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up portrait, **front/slight three-quarter view* of the subject, with the light source *highlighting* the *front* of the head and the precision of the line-up.

*Current View Analysis:*
- *Primary Visibility:* The viewer's angle makes the *frontal line-up, the C-Cup corner, and the dense texture of the high-top* the most visually dominant technical elements. The *blend of the mid-taper* on the left side is also clearly visible.
- *Focal Points:* The *crispness of the frontal line-up and the angular C-Cup* is the primary focal point of the haircut's precision.

*Style Element Arrangement in Current View:*
- *Overhang/Projection:* The *upward-directed flow of the **front-top* hair creates a *defined, blocky silhouette, specifically **standing vertically and slightly overhanging the frontal hairline. This **upward* styling is deliberate to *create height and establish a strong geometric balance*.
- *Volume Distribution:* The bulk and volume of the *coiled* hair are concentrated on the *crown and front-top* of the head, contrasting sharply with the *skin-level* hair of the *taper fade* on the sides.

*Parting Visibility:* Due to the *dense* arrangement and the angle, no parts are visible, *enhancing* the *full, structured* look of the high-top. The primary visible lines are the *shaved hard lines*.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
- Light Source: *Bright* *studio/professional* lighting
- Light Direction: *Front-lit*
- Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **coiled* texture appear *dimensional* and *well-moisturized*.
- Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured high-top* and the *smooth, faded* skin of the taper.

*Styling Execution:*
- *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *stand upright* where desired (*the hairline/crown*).

*Photographic Technique:*
- *Focus:* The depth of field is *medium, placing the sharpest focus on **the hairstyle, face, and the primary hair elements* (sharp hairline and fade transition).
- *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait.

*Head Position:*
- Position: *Facing forward/turned ~10° left*
- Impact: This positioning *reveals* the *frontal line-up and the start of the side fade* on the left temple.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Natural/High-Top Fade*
*Cultural Significance (If Applicable):* The High-Top Fade is an *iconic and foundational haircut* in Black culture, symbolizing neatness, structure, and contemporary style. The *precision line-up* is a high-skill barbering technique.
*Maintenance Requirements (Inferred):* *Medium-High. Requires **regular (1-2 week)* barber visits for fade and line-up maintenance and daily *moisturizing/styling* for the top section.`,
    category: 'Afros', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828810/Hairstyles/WhatsApp_Image_2025-11-08_at_08.30.33_71a3d222_fvzxhk.jpg',
    price: 2,
    popularity: 0,
    isActive: true,
  },  {
    name: 'High Top Textured Crop with Razor-Sharp Edge-Up and Mid-Taper Fade',
    
     ai_description: `## Title: High Top Textured Crop with Razor-Sharp Edge-Up and Mid-Taper Fade

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/dark-skinned man* with a *High Top Textured Crop* hairstyle, photographed from *three-quarter view/side profile*.

*Core Style:* *Natural coily/kinky texture (#4C classification)* is maintained in a *voluminous, slightly rounded crop* on top, integrated with a *mid-taper skin fade* on the sides and back, and a *razor-sharp Line-Up/Edge-Up. The overall aesthetic is **clean, contemporary, and highly defined, emphasizing **architectural precision* and *natural texture contrast*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4C classification), which provides **maximum density and volume hold capability, making it ideal for maintaining the **crisp silhouette* and *upright texture* of the High Top crop.
*Product Use (Inferred):* The hair displays a *natural luster/semi-matte sheen* and *highly defined texture, suggesting the use of a **moisturizing cream, light pomade, or texture paste* to *define the natural curl/coil pattern, provide light hold, and minimize frizz. The **tight coiling* at the root indicates *minimal tension* was applied, relying primarily on the hair's natural texture.
*Textured Crop Details:* The hair on the superior (top) section is cut to a *uniform, medium length* (approximately 25-35 mm), allowing the natural *coiled texture* to create a *soft, slightly rounded, but structured silhouette*.
*Parting & Density:* The hair density is *high, which is essential for the **full, voluminous appearance* of the crop. No visible parting pattern is used, with the hair left to stand in its natural, coiled arrangement.

---

### II. Arrangement and Placement of the Textured Crop
The cropped hair is meticulously placed to create a *structured, medium-height top* that contrasts sharply with the faded sides:

*Location:* The hair mass is concentrated on the *horseshoe section/top only, extending from the front hairline to the posterior crown/vertex. The hair on the **sides and back* (inferior to the parietal ridge) is *fully skin-faded/tapered*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The natural texture at the front hairline is styled to *stand slightly upright* and *angle marginally forward, forming a **textured, dense* *fringe/silhouette* that sits *just above the frontal hairline/edge-up*.
   - *Crown/Middle Rows:* The hair running from the *crown/vertex* to the *front* is directed *upward/standing, maintaining a **consistent, uniform height* to create the *structured, box-like (softened)* silhouette.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the *fade/Line-Up* on the visible side is styled to *stand upright, creating a **clean, defined* *vertical* border against the *short sides/skin fade. This is the **transition point* where the *textured length meets the sharp Line-Up and blend of the fade*.
*Individual Curl Arrangement:* Each individual coil is uniformly *defined and separated, giving it a **springy/coiled/textured* appearance. The *consistent length* allows the arrangement to create *overall uniformity in height and volume*.

*Section Dimensions (Inferred/Estimated):*
   - Length: *25-35 mm* measured from root to tip on the top section
   - Height: The top stands approximately *20-30 mm* above the visible Line-Up

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *mid-taper fade* and precision edge-up provide the architectural support and *sharp contrast* for the textured top:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers and a razor* (or foil shaver) for maximum definition.
   - *Front:* A *straight, hard line* is placed across the *forehead, marking the **absolutely crisp* boundary of the scalp/hairline.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed at the *anterior temple/corner of the forehead Line-Up, transitioning vertically into the **side Line-Up, creating a **highly visible, geometrically defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* A *vertical, sharp line* extends *inferiorly* from the C-Cup/corner, following the *anterior temple area* before transitioning into the side fade.
   
   - *Nape/Back (Inferred):* Likely a *tapered or blocked* finish with a sharp Line-Up at the nape to maintain consistency.

*Fade/Taper Transition:* The fade starts *mid* on the head, meaning the transition from *skin-level (0/foil-shaved)* to *full hair length (25-35mm)* is kept *very short and tight* at the lower perimeter, primarily focused on the area *above and around the ear (temporal and mastoid process). This **mid* placement *balances* the canvas for the *dense/textured/voluminous crop* above.

*Fade Technical Specifications:*
   - Type: *Mid-Taper Fade/Skin Taper*
   - Starting Point: *Temporal line/superior to the ear (mid-level)*
   - Fade Range: *Skin (foil shaver/razor)* to *3mm-6mm (Guard #1 - #2)* before blending into the top
   - Transition Zone: *Tight, high-contrast blend* focused on the lowest 10-15 mm above the visible skin
   - Circumference: *Tapering* is clearly visible from the anterior temple line wrapping around the ear.
   - Technique: *Freehand/clipper-over-comb and guard work* for a clean, sharp blend.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional precision, a technique known as **Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, perfectly straight line* across the *forehead, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, angular* *corner* (not a C-Cup arch) that creates a *crisp, defined* *90-degree angle* just above the temple area, perfectly connecting the front hairline to the vertical line of the fade/sideburn area.
   - *Temporal Points:* The side line that runs along the temple/sideburn is *perfectly vertical* and *razor-sharp*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors/foil shavers*
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/very dark brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-gloss*
   - Texture Definition: *Highly defined* (crisp coiling)
   - Frizz Control: *Minimal frizz* is visible, indicating effective product use.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *tight curl definition and lack of breakage*

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter view/profile* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup corner, Line-Up precision, and fade transition* on the *visible side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *razor-sharp corner/vertical Line-Up* connecting the forehead and side fade is the primary focal point of the *haircut's* precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *upright/slightly forward-directed flow of the **front-top* hair creates a *defined, high-volume* *silhouette, specifically **standing well clear of the forehead. This **upward* styling is deliberate to *create height and establish contrast*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *front-top/crown* of the head, contrasting with the *smooth, skin-level* *skin* of the *mid-taper fade. The hair's length is utilized for **upward height* rather than downward drape.

*Parting Visibility:* Due to the *dense* arrangement and the *coiled texture, no parting lines are visible in the top section, **enhancing* the *full/natural textured* look of the style. The primary visible lines are the *shaved hard lines* of the Edge-Up.
*360° Structure Reference:* While the back is not fully visible, the overall style indicates a *consistent mid-taper fade wrapping around the entire head* and a *uniform length crop* maintained on the horseshoe section.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Side-lit/Front-lit*, with a slight highlight on the cheek/side of the face
      - Effect on Style: The lighting *enhances/reveals* the *texture/definition and product sheen, making the **coiled* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *crop* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined texture* suggest a *texture defining cream/sponge technique* to maximize the natural curl pattern.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *stand upright* where desired (*the crown/top) and **lay flat against the head* at the perimeter (*the hairline/sides*).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **hairstyle/specific style elements (the Edge-Up and texture), while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned approximately 30-45° left*, showing the right side profile/three-quarter view
      - Impact: This positioning *reveals/emphasizes* the *full geometry of the Line-Up, the beard transition, and the sharp fade progression*

---

### IX. Accessories and Additional Elements
*Facial Hair Integration:* The short, sharply lined beard/goatee is *expertly blended* with the haircut. It is *defined* with a *razor Line-Up/Edge-Up* along the cheek and neck, matching the precision of the main haircut's Line-Up. The *sideburn/side taper* smoothly *connects* the hair on the side of the head with the facial hair, maintaining a *consistent skin-level taper* down to the beard length.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/Natural/Textured*
*Cultural Significance (If Applicable):* This is a highly popular and refined contemporary style in *Black barbering*, representing the mastery of natural texture, fade techniques, and razor precision.
*Maintenance Requirements (Inferred):* *High* maintenance required for weekly/bi-weekly *Line-Up/Edge-Up touch-ups* and regular moisturizing/texture definition product application.`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762828892/Hairstyles/WhatsApp_Image_2025-11-08_at_08.53.46_c9a8b6ac_rp93am.jpg',
    price: 2,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Goddess Box Braids with Loose Curl Extensions',
    
     ai_description: `### Title: Goddess Box Braids with Loose Curl Extensions

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *tan/light brown skin tone person* with a *Goddess Box Braids* hairstyle, photographed from a *front view* with a slight tilt (approx. *10° to 15°*) to the subject's left.

*Core Style:* *Individual box braids/single braids* starting from the root, transitioned into *loose, synthetic/human hair curl extensions* from a mid-point, integrated across the full head. The overall aesthetic is *textured, voluminous, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent grip and density* for secure braid installation and maintaining the necessary root tension.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *highly defined texture* at the root, suggesting the use of *braiding gel, edge control, and light oil/sheen spray* to *secure the parts, minimize frizz, and provide a polished shine. The **tightness* at the root indicates *significant tension* was applied during styling to ensure neatness and longevity.
*Box Braid Details:* *Medium-sized box braids* were executed using a *three-strand braiding technique* on the natural hair, with extensions added near the base to create the full length and volume. The *goddess effect* is achieved by incorporating free-hanging, *deep/water wave curl bundles* from various points along the length of the braids.
*Parting & Density:* *Rectangular/square* parting pattern, with *medium section sizes* across the visible top and front perimeter, ensuring *minimal* scalp visibility once the style is complete. The *medium-to-high* density of the *braids* ensures a *full, voluminous* overall silhouette."

---

### II. Arrangement and Placement of the Goddess Box Braids
"The *braids and free-hanging curls* are meticulously placed to create a *high-volume, cascading waterfall effect*:

*Location:* *Full head coverage*, starting from the perimeter and extending through the crown and back. The hair on all sections is utilized for the braids; no taper or fade is present.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *braids* in the first row, along the *forehead/temple* hairline, are styled to *hang slightly forward and sweep back* away from the face near the temples. They are positioned to *frame the face, forming a **light, textured silhouette* that sits *just below the collarbone* in length.
   - *Crown/Middle Rows:* The rows of *braids* running from the *crown/center* to the *front/sides* are directed *downward/radially* from the center point. This intentional placement *forces volume laterally and downward, **encouraging* the *cascading free curls* to blend with the braided structure, thus creating the *maximum possible length and volume*.
   - *Side Perimeter/Lateral Sections:* The *braids* immediately adjacent to the natural hairline on the left and right sides are *braided* to *hang straight down and slightly angle outward* towards the shoulders, creating a *soft, flowing* border against the skin. This is the transition point where the *braids/curls* *flow from the root to the long, loose extension ends*.
*Individual Braid Arrangement:* Each *unit* is uniformly *secured/formed* from the root, giving it a *tight, smooth, rope-like* appearance near the scalp and transitioning into a *soft, coiled/wavy* texture along the length. The *consistent very long* length allows *the arrangement to create a uniform, dramatic drape*.

*Section Dimensions (Inferred):*
   - Count: *120-160* individual *braids* across the entire head (based on medium-small size)
   - Thickness: *4-6 mm* diameter per individual unit at the base
   - Length: *70-85 cm* (28-34 inches) measured from root to tip (extended length)
   - Part width: *5-7 mm* between sections (square part sides)"

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"*Not Applicable:* The style utilizes *full length braids* and does not incorporate a fade, taper, or undercut. The architectural foundation relies on the *precise parting and tension of the braids*."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *braids* appear *tight/medium* and *firm/flexible, particularly near the roots. This indicates **moderate-to-significant* tension was applied during *installation* to ensure *longevity and a neat, clean aesthetic. The texture is **dense and rope-like* at the braided portion and *soft and flowing* in the curled sections—not *rigid—contributing to their **neat/dramatic* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the braided hair would feel *smooth/textured* near the root, while the curled extensions would feel *silky/soft* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *natural movement/dynamic flow* with the hair *responding to gravity* and the length allowing for *significant sway*."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Swoop*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, curved swoop/baby hair* design along the forehead and temples, *artfully sculpted* in execution.
   - *C-Cup/Corner Arch:* A *sharp* *side arch* is meticulously smoothed with edge control just above the temple area, perfectly connecting the front hairline to the vertical line of the ear/side of the face, creating a *highly visible defined* corner. This placement is *critical* for the *crispness* of the entire look.

*Execution Details:*
   - Tool: Styled with *edge control product* and possibly a *razor/clipper* for the perimeter cleanup.
   - Line Quality: Creates an *artificially defined and smoothed* line across the *forehead/temple* by laying the natural perimeter hair flat.
   - Contrast: *Sharp* contrast with the *smooth* skin and the *tightly braided* hair above it."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black (1B)*
   - Color Variations: *Uniform* across all braided and curled sections.
   - Color Distribution: *Consistent across all sections.*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine* (suggesting product application)
   - Texture Definition: *Highly defined* at the root (braid part) and *softly defined* in the curls.
   - Frizz Control: *Completely smooth* at the root and braids; *minimal frizz* on the loose curls.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible; a **clear sheen* is present."

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up portrait, **front view* of the subject, with the light source *highlighting* the *front* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *frontal part line, the swoop/baby hair detail, and the blend of tight braids with loose curls* the most visually dominant technical elements.
   - *Focal Points:* The *long, flowing length and the contrasting textures* (smooth braid vs. defined curl) are the primary focal point of the *style's* aesthetic.

*Goddess Braid Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and downward-directed flow of the **front and side* *braids/curls* creates a *soft, draping, voluminous silhouette* effect, specifically *cascading past the shoulders. This **downward* styling is deliberate to *frame the face and maximize the dramatic length*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are distributed *evenly throughout the length, with a very full appearance. The hair's length is utilized for **downward drape* rather than *upward height*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *square* parts at the root are *clearly visible* by the surrounding *braids, **revealing* the *structured* look of the style. The primary visible lines are the *cleanly defined parts* and the *sculpted hairline*.
*360° Structure Reference:* While the back is not visible in this view, the overall style indicates *uniform, cascading braids of the same length* would continue across the back and nape."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft* *studio/natural* lighting
      - Light Direction: *Front-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *shiny/dimensional* and the curls *well-moisturized*
      - Contrast Enhancement: The *soft* lighting *emphasizes* the texture contrast between the *dark* *textured* *braids/curls* and the smooth skin of the scalp and forehead.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* and *defined edges* suggest a *braiding technique incorporating pre-curled extension hair, with the natural hairline set firmly using **edge control*.
      - *Adaptive Styling:* The styling is adaptively *dramatic and polished—meaning it is styled to **maximize definition and length* and *lay flat against gravity* at the root, but *hang freely and show movement* in the length.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the top/front portion of the hairstyle, while the background is **simple/blurred*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait, highlighting the extreme length and volume.

   *Head Position:*
      - Position: *Facing forward/turned 10-15° left/slightly tilted down*
      - Impact: This positioning *emphasizes* the voluminous front and the precise execution of the frontal hairline and partings."

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* *None visible* in the hair itself, though the subject wears a *chunky metal choker/necklace* that draws attention to the length of the hair resting on the chest."

---

### X. Cultural Context and Style Classification
"*Style Category:* *Protective/Contemporary/Box Braids*
*Cultural Significance (If Applicable):* The style is a modern variation of *traditional African braiding techniques, known as **Goddess Braids* due to the incorporation of loose, flowing curls for a softer, voluminous look. This is a common and popular protective style for textured hair.
*Maintenance Requirements (Inferred):* *Moderate* time investment; requires regular moisturizing of the scalp and braids, product (oil sheen, mousse) for the curls/frizz control, and touch-ups (re-braiding the perimeter and partings) every *4-8 weeks*.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829030/Hairstyles/WhatsApp_Image_2025-11-08_at_09.18.12_803a4116_jbdail.jpg',
    price: 3,
    popularity: 35,
    isActive: true,
  },  {
    name: 'Short Tapered Crop with Highly Textured Red Coil and Precision C-Cup',
    
     ai_description: `## Title: Short Tapered Crop with Highly Textured Red Coil and Precision C-Cup

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of an *Afro-textured (Black)* *woman* with a *Short Tapered Crop with Highly Textured Red Coil* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Highly defined, short, textured coiling* on top, integrated with a *medium skin fade/taper* on the sides and back, featuring a prominent *carved line (razor part)* above the visible side perimeter. The overall aesthetic is *edgy, contemporary, and highly polished*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification, expertly manipulated), which provides *high density, excellent hold capability, and natural volume* for the short, upright coil.
*Product Use (Inferred):* The hair displays a *semi-gloss to high sheen level* and *exceptional texture definition, suggesting the use of **light-hold defining gel and a finishing oil/pomade* to *define the coils, secure the short length, minimize frizz, and provide shine. The **tightness* at the root indicates *significant tension and a setting technique* (finger coils, curl sponge, or comb coiling) was applied during styling.
*Coil/Texture Details:* The primary styling method involves *finger or comb coiling* of the extremely short hair, where *small, uniform sections of hair are tightly coiled to stand upright*, creating a dense, structured, highly visible pattern.
*Parting & Density:* The individual parts are *concealed by the density and height of the coils* but the overall hair density is *high, which ensures **minimal* scalp visibility on the crown. The visible side features a *carved, clean line* to separate the top coil from the tapered side.

---

### II. Arrangement and Placement of the Highly Textured Coil
"The *coils* are meticulously placed to create a *uniform, dense, textured layer of upright hair*:

*Location:* The textured coil covers the *horseshoe section (the top)* only. The hair inferior to the parietal ridge is *tapered/faded* to skin level.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The coils along the *forehead hairline* are styled to *stand upright or angle slightly forward, maintaining the overall height and density. They are positioned to **sit directly above the hairline, forming a **highly textured and uniform* *silhouette* that sits *vertically* relative to the forehead.
   - *Crown/Middle Rows:* The majority of the coils are directed *radially and vertically, creating **maximum, even volume and height* across the top of the head. This intentional placement *forces volume upward, **preventing* a flat or loose appearance, thus creating the *high-density, uniform* silhouette.
   - *Side Perimeter/Lateral Sections:* The coils immediately adjacent to the *fade/taper* are kept *uniformly short, creating a **sharp, defined* transition point where the *coils maintain their upright structure right to the edge of the carved line and taper*.
*Individual Coil Arrangement:* Each *coil unit* is uniformly *formed/styled* from the root, giving it a *tightly coiled, rope-like* appearance. The *consistent* length allows *the arrangement to create near-perfect visual uniformity and a highly structured texture*.

*Section Dimensions (Inferred):*
   - Count: High number, estimated *80-120* individual coils (units) across the entire top section
   - Thickness: *2-3 mm* diameter per individual coil unit
   - Length: *5-10 mm* measured from root to tip (due to coiling and shrinkage)
   - Part width: *Minimal/Unclear* due to dense packing of coils (est. 1-2 mm between sections)

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *tapered/faded* area provides the architectural support and *sharp* contrast for the *red coil style*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers/razors* and is the focal point of the cut.
   - *Front:* A *straight, hard* line is placed across the *forehead/temples, marking the boundary of the **skin/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, meticulous* *semicircular (C-Cup)* *shape* is meticulously placed to connect the *front hairline* with the start of the *side fade, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends from the temple area, *angling sharply down and back* towards the ear, maintaining the *high-definition edge*.
   
   - *Nape/Back:* (Inferred) Likely a *tight taper* or *skin fade* to maintain the clean aesthetic seen on the sides.

*Fade/Taper Transition:* The fade starts *mid to high* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *full hair length (the coil base)* is kept *very short and tight, primarily focused on the area **above the ear and around the temporal line. This **mid/high* placement *maximizes* the canvas for the *textured, voluminous* *coil style* above.

*Fade Technical Specifications:*
   - Type: *Skin Fade (Tight Taper Fade)*
   - Starting Point: *Temporal line/just above the ear*
   - Fade Range: *Skin (0)* to *approx. 3mm* (base length of the coil)
   - Transition Zone: *Very short, approximately **10-15 mm* in height
   - Circumference: (Inferred) Wraps around the entire head perimeter from temple to temple.
   - Technique: *Clipper-over-comb and/or multiple guard fading technique* to achieve a smooth, rapid blend.

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *coils* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *styling* to ensure *longevity and specific aesthetic (upright structure). The texture is **dense and rope-like—not **soft—contributing to their **neat, dramatic* structure and *uniform* hang (stand).
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* due to the natural texture, but *smooth and product-coated* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* and showing *intentional directional styling (vertical)*.

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Edge-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, straight line, **almost surgical* in execution
   - *C-Cup/Corner Arch:* A *sharp, perfect* *C-Cup* that carves a *sharp crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade
   - *Temporal Points:* The points are shaped *crisply and exactly* to define the corner before the C-Cup begins.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the *forehead and temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Uniform, vibrant red (likely a warm, cherry or copper red)*
   - Color Variations: *Uniform* across the entire styled section. The natural hair visible in the fade is *dark brown/black*.
   - Color Distribution: *Consistent* across all coiled sections, providing a high-impact, statement look.

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss*, indicative of a finishing oil or pomade.
   - Texture Definition: *Highly defined* with every coil distinctly visible.
   - Frizz Control: *Completely smooth* on the coil surface, indicating excellent product use and setting.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*, despite the vibrant color process.
   - Product Buildup: *Slight sheen* visible, consistent with styling products for hold and shine.
   - Elasticity (Inferred): *Good* based on the tight, well-formed coil definition and lack of visible breakage.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the sharp fade transition, and the uniform texture of the red coils* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp, curved execution of the C-Cup* and the *vibrant color/texture contrast* is the primary focal point of the *haircut's* precision and style impact.

*Coil Arrangement in Current View:*
   - *Overhang/Projection:* The *vertically-directed* flow of the *front and crown* coils creates a *dense, textural* *silhouette* effect, sitting *directly above the forehead. This **upward* styling is deliberate to *create height and maximize the visual impact of the uniform texture*.
   - *Volume Distribution:* The bulk and volume of the *coiled* hair are concentrated on the *entire top (horseshoe section)* of the head, contrasting sharply with the *skin-level* *skin* of the *mid/high skin fade* on the sides. The hair's length is utilized for *upward height and density* rather than downward drape or lateral spread.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual parts at the root are *largely concealed* by the surrounding *coils, **enhancing* the *full, structured* look of the style. The primary visible lines are the *shaved hard lines* on the perimeter, not the internal parts.
*360° Structure Reference:* The visible structure is consistent and symmetrical; therefore, the style indicates that the *unseen back section would feature the same tight skin fade/taper and crisp nape line* to match the visible sides.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft* *outdoor/natural* lighting (implied by background bokeh).
      - Light Direction: *Front-lit/slightly side-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **rope-like/coiled* texture appear *shiny/dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *vibrant red textured* *coil style* and the *smooth* skin of the *fade/scalp*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest a technique like *finger coiling or comb coiling* set with a strong-hold, defining product (gel/mousse).
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and maintain a uniform upright structure* where desired (the coil) and *lay flat against gravity* at the hairline for maximum crispness.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the hairstyle, while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*.
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 30° left* (viewer's right side is visible).
      - Impact: This positioning *reveals/emphasizes* the *C-Cup, the curve of the fade, and the uniformity of the coil texture* to the viewer.

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* None are present, emphasizing the clean lines and striking color of the cut itself.

---

### X. Cultural Context and Style Classification
"*Style Category:* *Contemporary/Natural/Textured Crop*
*Cultural Significance (If Applicable):* This short, highly textured style is a modern, high-fashion adaptation of a natural hair aesthetic, popular in Black hair styling, often referred to as a *Tapered TWA (Teeny Weeny Afro)* or *Finger Coils Cut*, amplified by the vibrant color.
*Maintenance Requirements (Inferred):* *High* for color (touch-up frequency for roots/fade every 2-3 weeks) and *Moderate* for style (re-coiling/refreshing the texture every few days and daily product application for shine and definition).`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829109/Hairstyles/WhatsApp_Image_2025-11-08_at_09.23.13_920e0e8b_wl0zr7.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Sleek High Ponytail with Styled Edges (High Structured Pony)',
    
     ai_description: `### Title: Sleek High Ponytail with Styled Edges (High Structured Pony)

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of an *African/Black woman* with a *Sleek High Ponytail with Styled Edges* hairstyle, photographed from a *three-quarter view (right side dominant)*.

*Core Style:* *Sleek, heavily slicked-back base* integrated with a *voluminous, waved ponytail extension/weft* secured at the crown. The overall aesthetic is *clean, polished, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4B-4C classification), which provides **high density, excellent hold capability, and volume* at the base for the tension required for the slicked-back look. The texture of the ponytail itself is *softly waved (Type 2B-2C, or artificially induced)*.
*Product Use (Inferred):* The base hair displays an *extremely high sheen level and smooth, flat texture definition, suggesting the use of **strong-hold gel, pomade, and setting spray* to *secure all flyaways, flatten the hair close to the scalp, and provide a glassy shine. The **extreme tightness and lack of texture* at the root indicates *significant tension* was applied during styling to achieve the signature *"snatched"* look.
*Style Details:* The hair has been *brush-styled and product-laid flat* against the scalp, culminating in a *high, tightly secured bun/ponytail base* at the *vertex/crown. **Intricate, stylized "S-wave" baby hairs (edges)* have been meticulously laid along the frontal hairline.
*Parting & Density:* There is *no defined part line* on the visible sections of the slicked-back base. The high density of the natural hair is *completely compressed* by product and tension, ensuring *zero scalp visibility* across the visible head.

---

### II. Arrangement and Placement of the Primary Style Element
The *slicked-back base and ponytail* are meticulously placed to create a *smooth, gravity-defying, and elegant silhouette*:

*Location:* The hair from the *entire frontal, temporal, and lateral sections* (and inferred from the back) is *slicked back tightly* into a single focal point at the *high crown/vertex* of the head.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section (The Edges):* The *baby hairs* along the frontal and temple hairline are styled to *sweep diagonally and curve inward* toward the face, forming *three distinct, overlapping "S" or "C" wave patterns* just above the temporal line and sideburn area. They are positioned to *frame the upper face and temples, forming a **smooth and delicate, yet highly defined* aesthetic border that sits *just above the ear* on the right side.
   - *Crown/Middle Rows:* The hair running from the forehead/front to the crown is *directed backward with extreme tension, lying **perfectly flat* against the contour of the skull. This intentional placement *forces all volume upward* into the ponytail, *preventing* any lift or puffiness, thus creating the *high-tension, smooth silhouette*.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the temple and ear is *pulled taut and flat, creating a **sharp, clean, vertical* border where the skin meets the hair. This is the transition point where the *flat hair* leads directly into the *sculpted edge work*.
*Individual Ponytail Arrangement:* The attached hair/extension is *uniformly waved/curled* with a *medium barrel size (approx. 30-35mm)* and directed to *hang freely* over the occipital area and shoulder. The *consistent length and defined curl pattern* allows the ponytail to appear *voluminous and dynamic*.

*Section Dimensions (Focusing on Edge Work):*
   - Edge Piece Thickness: *0.5-1.0 mm* per individual strand group
   - Wave Count: *3-4* distinct "S-waves" visible from the temple/sideburn area
   - Length of Slicked Hair: *0 mm* visible length from root to ponytail base (completely flattened)

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The hairstyle does not feature a traditional fade or cut; instead, it uses the natural hairline and styling technique as its architectural foundation:

*Hairline (The Edge-Up/Line-Up):* The *natural hairline* is the canvas for the precise edge work.
   - *Front:* A *soft, natural line* is maintained across the forehead, but the *baby hairs are pulled forward and sculpted* over this line.
   
   - *C-Cup/Temple Arch/Corner:* A *gentle, natural semi-circular* shape is maintained at the temple arch, over which the *stylized "S" wave of the edge work* is meticulously placed. This placement is *critical* for the *sleekness and feminine precision* of the entire look.
   
   - *Temporal Line:* The hair is *cleanly laid and defined* down to the *top of the ear* and slightly past the temple.
   
   - *Nape/Back:* (Inferred) The nape hairline is likely also *slicked and secured* into the high ponytail base.

*Fade/Taper Transition:* Not applicable. The entire perimeter is a *sharp transition from laid hair to skin*, with the exception of the deliberate baby hair placement.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair appears *extremely tight* and *firm/rigid* across the entire scalp base. This indicates *significant tension* was applied during *styling* to ensure *maximum longevity and a flat aesthetic. The base texture is **extremely dense and smooth/glassy—not **soft or flexible—contributing to its **immaculate structure and uniform lack of movement*.
*Physical Feel (Inferred):* Based on visual analysis, the slicked hair would feel *smooth, product-coated, and hard/rigid* to touch, with *extremely high density* and *firm hold* at the root. The ponytail hair would feel *soft and silky* with a *flexible* hold.
*Movement Characteristics:* The base demonstrates *static hold/zero movement, with the hair **maintaining a perfectly flat position* against the skull. The ponytail demonstrates *dynamic flow* with the waves responding to gravity and appearing soft.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal and temporal* hairline is executed with *exceptional* precision, a technique known as *Edge Styling/Baby Hair Sculpting*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped, natural line* beneath the sculpted edges.
   - *C-Cup/Corner Arch:* A *gentle C-Cup/temple arch* is the anchor point for the *sculpted "S" waves* that carve a *sharp, stylized crescent* shape, perfectly connecting the front hairline to the vertical line above the ear.
   - *Temporal Points:* The hair is *pulled back sharply*, leaving a clean, flat plane for the edge styling.

*Execution Details:*
   - Tool: Styled with a *fine-tooth comb/edge brush* and product (gel/pomade)
   - Line Quality: Creates *geometrically precise and flowing curved lines* with the baby hairs against the skin.
   - Contrast: *Sharp* contrast with the *smooth, dark, product-laid* hair above it.
   - Skill Level: This precision is a signature of *high-skill styling/professional technique* demanding significant dexterity.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black (Level 1-2)*
   - Color Variations: *Uniform* across the slicked base. The ponytail extension appears to be a consistent Level 1-2 color.
   - Color Distribution: *Consistent* across all sections.

*Finish Quality:*
   - Sheen Level: *Extremely high shine/glass-like finish* on the slicked base; *semi-gloss/natural luster* on the ponytail waves.
   - Texture Definition: *Completely smooth and flattened* on the base; *highly defined and uniform* waves on the ponytail.
   - Frizz Control: *Completely smooth/zero frizz* on the base; *minimal frizz* visible on the ponytail.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy* hair inferred by the shine.
   - Product Buildup: *Heavy coating* of product is visible/intentional for the finish.
   - Elasticity (Inferred): *Compromised* at the root due to *extreme, necessary tension* for the style.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view (right side dominant)* of the subject, with the light source *highlighting* the *front and right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *high-tension slicked base, the sculpted "S" wave edge work, and the volume/wave pattern of the ponytail* the most visually dominant technical elements.
   - *Focal Points:* The *precise curve and flow of the sculpted baby hairs* is the primary focal point of the *style's* precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *backward and upward* flow of the *frontal and temporal* hair creates a *sharp, defined* silhouette that *pulls features taut. The ponytail extends **backward and slightly over the shoulder, creating a counter-balance of soft texture. This **upward* styling is deliberate to *create height and lift* at the crown.
   - *Volume Distribution:* The bulk and volume are *zero* on the scalp base, which is contrasted by the *high volume and density* of the *ponytail* concentrated on the *crown/back-top* of the head.
*Parting Visibility:* Due to the *heavy product use and extreme tension, the individual hair parts at the root are **completely concealed* by the surrounding flattened hair, *enhancing* the *full/structured/smooth* look of the style. The primary visible lines are the *sculpted baby hairs* and the *natural hairline transition*.
*360° Structure Reference:* While the back and left side are not visible in this view, the overall style indicates the *slicked-back base* is *uniform* across the entire circumference, leading to a single, high ponytail point. The left side would feature the same *precise edge work*.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, directional studio* lighting
      - Light Direction: *Front-lit and side-lit (rim-lit)* from the right
      - Effect on Style: The lighting *enhances* the *extreme product sheen and definition* on the slicked base, making the *smooth* texture appear *glassy and dimensional. It also **highlights* the soft texture of the ponytail.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, smooth, product-rigid* base and the *lightly textured* skin of the hairline/temple.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* and *defined tips* of the baby hairs suggest a *setting technique using strong-hold gel/pomade and an edge brush, followed by **setting spray/light heat* to maintain the structure. The ponytail waves were likely set with a *curling iron/roller set*.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and lay flat against gravity* on the hairline/crown, and *hang freely* where length permits (the ponytail).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the hairstyle's core elements* (the laid edges, the smooth base, and the volume of the ponytail).
      - *Image Quality:* *High resolution/sharp detail/professional color grading*.
      - *Composition:* This *emphasizes* the hairstyle as a *key feature and focal point* of the portrait, balancing the clean structure with the feminine waves.

   *Head Position:*
      - Position: *Turned approximately 30° right* (a three-quarter profile) and *tilted very slightly down*.
      - Impact: This positioning *reveals and emphasizes* the *precision of the edge work* on the right side and the *high placement* of the ponytail.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/Protective/Slick/Extension-Enhanced*
*Cultural Significance (If Applicable):* The *High Ponytail* is a classic style, but the *meticulous, heavily sculpted "laid edges"* are a signature element deeply rooted in *Black hair culture* and often considered a hallmark of *high-skill styling and meticulous grooming* in that context.
*Maintenance Requirements (Inferred):* *High* initial time investment for the slicked base and edge work; daily touch-ups with gel/pomade/edge brush for maintenance; potential use of a scarf/wrap for sleeping to preserve the flatness.`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829311/Hairstyles/WhatsApp_Image_2025-11-08_at_09.34.32_d3040580_oujb7s.jpg',
    price: 3,
    popularity: 8,
    isActive: true,
  },  {
    name: 'Micro-Braided Front with Voluminous Curled Mid-Length Extension Style',
    
     ai_description: `## Micro-Braided Front with Voluminous Curled Mid-Length Extension Style

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *medium brown-skinned woman* with a *Micro-Braided Front with Voluminous Curled Mid-Length Extension Style* hairstyle, photographed from a *three-quarter view (slightly from the right)*.

*Core Style:* *Micro-braids (cornrows)* on the anterior-superior section of the head (the front hairline and crown) integrated with *voluminous, pre-curled, heat-set extensions* on the remaining mid-top and lateral/posterior sections. The overall aesthetic is *soft, contemporary, and textured*, blending intricate braiding with a free-flowing wave pattern.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B/4C* classification), which provides *excellent grip and hold* at the root for securing the fine braids and extensions without slippage.
*Product Use (Inferred):* The hair displays a *medium, healthy sheen* and *minimal frizz* on the braided sections, suggesting the use of *light styling cream or oil-based product* to *moisturize the scalp and define the braid work, and potentially **mousse or setting spray* on the loose curled extensions for *shine and curl retention. The **tightness* at the root of the braids indicates *moderate tension* was applied during styling for longevity.
*Braid Details:* The style utilizes *small, tight cornrows (braids)* across the front hairline that transition into *individual box braids* which then connect to the pre-curled extensions. The transition from the natural root to the extension material is *seamlessly blended (Inferred)*.
*Parting & Density:* *Clear, straight diagonal partings* are visible across the front section. The sections are *small to medium, creating a **medium density* of braids/twists that ensures *moderate* scalp visibility, showcasing the neatness of the part work.

---

### II. Arrangement and Placement of the Style Elements
The braids and extensions are meticulously placed to create a *forward-sweeping crown and framing effect* with maximum visual movement:

*Location:* *A horseshoe-shaped section* across the front hairline and the anterior portion of the crown is styled with the tight micro-braids/cornrows. The remaining *mid-top, lateral, and posterior* hair is styled with the loose, curled extensions, providing the style's *volume and length*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *braids* in the first row, along the *forehead* hairline, are styled to *sweep slightly back and diagonally* toward the crown. They are positioned to *sit just behind the natural hairline and angle slightly toward the visible ear, forming a **textured* *fringe/crown* that sits *flat to the scalp* but feeds into the voluminous curl.
   - *Crown/Middle Rows:* The rows of *braids* running from the *center* to the *sides* are directed *radially/diagonally backward. This intentional placement **forces volume away from* the immediate forehead area but *concentrates volume on the sides and top, thus creating the **soft, voluminous silhouette*.
   - *Side Perimeter/Lateral Sections:* The *extensions* immediately adjacent to the natural hairline on the sides hang *straight down/curve slightly inward, creating a **soft, diffused* border against the face. This is the transition point where the *individual box braids integrate with the pre-curled synthetic/human extension material* (Inferred).
*Individual Braid/Extension Arrangement:* Each *braid/extension unit* is uniformly *secured* from the root. The *consistent medium length* allows *the arrangement to create a uniform, shoulder-grazing cascade of curls*.

*Section Dimensions (Inferred from visible front section):*
   - Count: *10-15* distinct front braids (across the visible frontal section)
   - Thickness: *3-5 mm* diameter per individual braid unit (micro to small)
   - Length: *250-350 mm* (shoulder length) measured from root to tip of the curls
   - Part width: *3-5 mm* between sections (small, precise parting)

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The architectural foundation consists of the *precise parting and braid work* rather than a cut/fade:

*Hairline (The Edge-Up/Line-Up):* The natural hairline is *maintained and respected* with the front braids following the natural curve.
   - *Front:* A *natural* *soft* line is maintained across the *forehead, marking the boundary of the **scalp/hairline*. The braid sections begin immediately posterior to this line.
*Transition:* The transition from the natural hairline to the start of the front braids is *clean and minimal*. The front braids provide the structural definition.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *braids* appear *medium to tight* and *firm, particularly near the roots. This indicates **moderate* tension was applied during *installation* to ensure *longevity and neatness. The texture of the **extensions* is *soft and flowing* with a distinct *coiled/ringlet curl pattern—not **rigid—contributing to their **natural and dramatic* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth* on the loose curled section and *textured/rope-like* on the braided sections to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow* in the curled sections with the hair *responding to gravity and head movement, contrasting with the **static hold* of the tightly secured front braids.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal* hairline is left *natural*, allowing the braid installation to define the shape.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *naturally curved line, **blended* in execution. The first row of braids serves as the main line of definition, styled to lay *flat* against the scalp.
*Execution Details:*
   - Tool: Primarily *hand-braided/twisted*
   - Line Quality: Creates *geometrically precise* diagonal part lines across the *forehead* section
   - Contrast: *Sharp* contrast between the *smooth* scalp (in the parts) and the *tightly braided* hair sections
   - Skill Level: This precision in part-work is a signature of *high-skill technique*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Bright Copper/Red-Orange* (Custom Color)
   - Color Variations: *Uniform* across all visible extension sections, with the visible natural root being *dark brown/black*.
   - Color Distribution: *Consistent across all extension sections*, creating a striking and vibrant look.

*Finish Quality:*
   - Sheen Level: *High shine/natural luster* on the extensions; *semi-gloss* on the scalp/braided sections (suggesting product use).
   - Texture Definition: *Highly defined* ringlet curls in the extensions; *tightly defined* ropes in the braids.
   - Frizz Control: *Minimal frizz* visible on the braids; *completely smooth* in the loose curls, suggesting a high-quality, pre-curled extension.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized* (inferred from sheen and lack of flyaways).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/medium shot, **three-quarter view* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *precise diagonal part pattern and the tight braid work* on the front-right section, along with the *voluminous, highly-curled copper extensions*, the most visually dominant technical elements.
   - *Focal Points:* The *contrast between the intricate flat braiding and the free-flowing, bright curled extensions* is the primary focal point of the style's composition.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *downward and lateral-directed* flow of the *front and side* *curled extensions* creates a *soft, voluminous* *silhouette* that *frames the face* and rests on the shoulders (Inferred). This *downward/lateral* styling is deliberate to *maximize the appearance of length and movement* and *establish balance* with the flat front section.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *lateral sides and back* of the head, contrasting with the *flat/tightly braided* *front* section. The hair's length is utilized for *downward drape* and *lateral spread* rather than *upward height*.

*Parting Visibility:* Due to the *sparse* arrangement of the front braids and the angle, the individual *diagonal* parts at the root are *clearly visible, **revealing* the *structured* look of the front style. The primary visible lines are the *natural parts/styled sections*, not the loose extension body.
*360° Structure Reference:* While the back is not fully visible in this view, the overall style indicates *the same voluminous, curled extension material extends across the crown, sides, and nape (full head extension)*.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *natural/studio* lighting
      - Light Direction: *Side-lit/Front-lit* (as seen by highlights and shadows on the face)
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **coiled* texture appear *shiny/dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *bright* lighting *emphasizes* the precise contrast between the *dark* natural hair root/scalp and the *vibrant copper/red-orange* extensions.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest the extensions were either *purchased pre-curled and set (heat-set)* or *curled and set with rods/rollers and heat after installation*.
      - *Adaptive Styling:* The styling is adaptively *crisp* in the front and *natural/dramatic* in the body—meaning it is styled to *lay flat against gravity* at the hairline (the braids) and *hang freely/maintain structure/show movement* in the body (the curls).

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the immediate hairstyle elements* (front braids and nearby curls), while the background is *partially visible/softly blurred*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading* (enhancing the copper color).
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait due to the vibrant color and dramatic volume.

   *Head Position:*
      - Position: *Turned approximately 30° left* (a three-quarter view)
      - Impact: This positioning *reveals/emphasizes* the *full volume and length* of the style on the left side, while clearly showcasing the intricate *frontal braid pattern* and precise part-work.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:* *Two small, dark hair wraps or ties* are subtly visible within the tight micro-braids on the front section, used as *functional/securing elements* where the braids may transition or stop.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary Protective Style* (Braids/Box Braids/Twists with Hair Extensions)
*Cultural Significance (If Applicable):* This style is a modern and popular iteration of a protective style, utilizing the traditional technique of braiding/cornrowing for the foundation while incorporating bold color and a modern curl pattern via extensions.
*Maintenance Requirements (Inferred):* *Moderate* time investment; requires *scalp oil/moisturizing spray* for the exposed roots and light maintenance to *preserve the curl pattern* (e.g., sleeping with a bonnet/wrap); touch-up frequency likely *4-8 weeks* for re-braiding the front/perimeter.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829420/Hairstyles/WhatsApp_Image_2025-11-08_at_09.45.07_4d82355b_gvmojv.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Intricate Cornrow Base with Box Braid Extensions and High Bun Updo',
    
     ai_description: `## 👑 Hairstyle: Intricate Cornrow Base with Box Braid Extensions and High Bun Updo

---

### I. Style Foundation and Overall Structure
A professional portrait photograph of a *Black/Melanated woman* with an *Intricate Cornrow and Box Braid Updo* hairstyle, photographed from a *front view/slight three-quarter view*.

*Core Style:* *Precision cornrows* on the superior (top/front) half of the scalp, integrated with *medium-sized, long box braid extensions* on the inferior (lower/back) half and as free-hanging elements. The majority of the cornrow ends are gathered and secured into a *high top knot/bun. The overall aesthetic is **clean, highly textured, and contemporary*, displaying high-skill protective styling.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent grip, density, and natural volume* for the cornrow foundation and secure anchoring of the braiding extensions.
*Product Use (Inferred):* The roots and partings display a *high sheen and neat alignment, suggesting the use of a **braiding gel, wax, or edge control* to *secure the natural hair, provide shine, minimize frizz, and achieve the clean, defined parting and tight root tension.*
*Cornrow Details:* A complex pattern of *small-to-medium-sized cornrows* is executed on the crown and frontal sections. The rows are braided *close to the scalp (on-the-scalp)*, with some rows directed backward and others angled diagonally.
*Parting & Density:* *Geometric, clean, and highly visible straight partings* define the cornrow grid. The cornrows cover a *high-density* area, primarily the top and front, ensuring *minimal* scalp visibility except for the clear, intentional part lines.

---

### II. Arrangement and Placement of the Braids
The *cornrows transition into box braids* and are meticulously placed to create a *defined dual-texture aesthetic with concentrated height*:

*Location:* The *cornrow foundation* covers the area from the *frontal hairline to approximately the parietal ridge/upper crown. The hair from this section is directed **upward* towards the vertex to form the *high bun. The remaining lower sections transition into **free-hanging box braids*.
*Directional Flow (The Curve/Pattern):* This style uses distinct directional patterns:
   - *Front Row/Section:* The cornrows in the first row along the forehead hairline *angle diagonally* away from a central frontal parting (a defined 'c-part' or 'heart part' is visible slightly off-center). Two free-hanging, decorative box braids are styled to *hang forward*, overlapping the forehead and framing the face.
   - *Crown/Middle Rows:* The main rows of cornrows running from the front and sides are directed *radially and backward, converging at the **vertex* (highest point) of the head. This intentional placement *forces volume toward* the crown, *creating significant height* in the bun silhouette.
   - *Lateral Sections:* The cornrows on the sides are smoothly transitioned toward the crown, maintaining the tension and clean flow. The transition point into the *free-hanging box braids* starts below the parietal ridge, with these braids designed to *hang straight down*, creating a dense, vertical border.
*Individual Braid Arrangement:* The cornrows are *tightly and uniformly* secured from the root. The free-hanging box braids are *rope-like* and *smooth, exhibiting a consistent, high-tension hold. The **consistent length* of the hanging braids and the braids in the bun allows for a uniform, dense aesthetic.

*Section Dimensions (Inferred):*
   - Count (Cornrows): *20-30* individual cornrow rows (Estimate for visible and concealed sections)
   - Count (Hanging Braids): *30-40+* individual box braids hang freely (Estimate)
   - Thickness: Cornrows *4-6 mm* width; Box Braids *6-8 mm* diameter
   - Length: Box Braids *45-60 cm* (extending below the chest)
   - Part width: *2-4 mm* between sections for cornrows

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The cornrow foundation appears *tight and firm, particularly near the roots. This indicates **significant tension* was applied during *installation* to ensure *longevity and the smooth, pulled-up aesthetic. The texture is **dense and rope-like* for the extensions, contributing to their *neat, structured* hang and *uniform* fall.
*Physical Feel (Inferred):* The cornrow foundation would feel *smooth and firm* due to the technique and product. The extensions would feel *smooth/textured* with *high density* and *firm* hold at the root.
*Movement Characteristics:* The cornrows exhibit *static hold* toward the vertex. The long box braids show *natural movement* and respond to gravity, creating a *dynamic flow* contrasted by the *static bun* structure.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Jet Black (1 or 1B)*, consistent with most synthetic braiding hair.
   - Color Variations: *Uniform* across all sections.
   - Color Distribution: *Consistent* across all sections.

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss* at the scalp/partings, transitioning to a *moderate, synthetic luster* on the extensions.
   - Texture Definition: *Highly defined* cornrow lines and *smooth, rope-like* extension texture.
   - Frizz Control: *Completely smooth* at the root and foundation, *minimal frizz* on the extension body.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy* appearance, with visible *moisturization/product application* at the scalp.
   - Product Buildup: *None visible*, only a slight, intentional sheen.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/medium shot, **front view/slight three-quarter view* of the subject, with the light source *highlighting* the *front and top* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *geometric cornrow pattern, the high knot, and the long, free-hanging front braids* the most visually dominant technical elements.
   - *Focal Points:* The *complex, clean parting of the cornrow base* and the *voluminous, tightly wound top knot bun* are the primary focal points of the style's precision and aesthetic.

*Braid Arrangement in Current View:*
   - *Upward Directional Flow:* The vast majority of the cornrows are directed *upward* toward the crown, creating a *smooth, defined, lifted* silhouette from the forehead to the bun.
   - *Fringe/Face-Framing Elements:* The two long, free-hanging box braids at the front are deliberately styled to *drape forward, creating a **soft fringe-like* effect that perfectly frames the face and contrasts with the upward-sweeping main body.
   - *Volume Distribution:* The volume is highly concentrated in the *high top knot/bun* at the vertex, contrasting with the flat, tightly braided cornrow base.

*Parting Visibility:* Due to the *clean technique and sharp definition, the individual **straight, geometric partings* at the root are *clearly visible, revealing the skill of the stylist. The primary visible lines are the **clean part lines* that segment the cornrows.
*360° Structure Reference:* While the back/nape are not visible, the overall style strongly indicates that the remaining hair on the back of the head is also either *braided into the top knot (concealed)* or *continues as free-hanging box braids* similar to those seen below the bun, maintaining a dense, uniform structure.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
   - Light Source: *Bright* *studio/ring lighting*
   - Light Direction: *Front-lit*
   - Effect on Style: The lighting *enhances* the *product sheen* on the scalp and *texture/definition* of the cornrows, making the *rope-like* texture appear *dimensional* and *well-moisturized*.
   - Contrast Enhancement: The lighting *emphasizes* the *sharp contrast* between the *dark, smooth, braided texture* and the skin of the clean part lines.

*Styling Execution:*
   - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and secure hold* at the roots to *lay flat against gravity* and direct the hair *upward* into the structured bun.

*Photographic Technique:*
   - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **hairstyle and face, while the background is slightly **blurred (bokeh effect)*.
   - *Composition:* This *isolates/emphasizes* the intricate hairstyle as the *focal point* of the portrait.

---

### IX. Accessories and Additional Elements
*Hair Accessories:*
   - Type: A *braided/wrapped tie* (likely using extension hair) is securing the voluminous *high top knot/bun*.
   - Placement: *Around the base and body of the bun*.
   - Function: *Securing* the updo structure.

---

### X. Cultural Context and Style Classification
*Style Category:* *Protective/Contemporary* - A highly stylized adaptation of traditional braiding techniques.
*Cultural Significance (If Applicable):* This style is a modern example of *African/Diasporic braiding tradition, utilizing cornrows for a foundation and box braids for length and volume, serving as a **low-manipulation protective style* for natural hair.
*Maintenance Requirements (Inferred):* *Low* daily manipulation; *medium* product needs (mousse/light oil/edge control); *touch-up frequency* typically every 4-8 weeks for the cornrows/edges.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829501/Hairstyles/WhatsApp_Image_2025-11-08_at_09.56.13_e561f847_xlgypd.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Asymmetrical Pixie Cut with High Taper Fade and Deep Side Part',
    
     ai_description: `### Title: Asymmetrical Pixie Cut with High Taper Fade and Deep Side Part

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of an *African-American woman* with a *deep-parted asymmetrical pixie cut* hairstyle, photographed from a *three-quarter view* (slightly favoring the left side).

*Core Style:* *Smooth, sweeping, and defined styling* on the elongated top section, seamlessly integrated with a *high taper fade (skin fade)* on the sides and back. The overall aesthetic is *crisp, contemporary, and highly polished*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification, relaxed or naturally smoothed), which provides *excellent density* and allows the hair to be *molded and held flat* for the deep, defined side part and smooth finish.
*Product Use (Inferred):* The hair displays a *high sheen* and *immaculate definition* along the part and edges, suggesting the use of *high-hold pomade, styling gel, and a finishing oil/sheen spray* to *secure the smooth silhouette, provide mirror-like shine, and minimize flyaways. The **tightness* at the root indicates *significant heat and tension* were applied during styling (e.g., molding, wrapping, or flat-ironing/thermal styling).
*Pixie Cut Details:* The style is an *asymmetrical, rounded pixie* where the majority of the length is concentrated on the *top-front section, designed to **sweep dramatically across the forehead* from a deep side part.
*Parting & Density:* A *deep, surgically precise diagonal part* is carved from the left parietal ridge down toward the temple. The *high density* of the hair is effectively controlled by the cut and styling, ensuring a *full, opaque* silhouette on top with *zero* scalp visibility outside of the shaved sections.

---

### II. Arrangement and Placement of the Styled Top
The styled hair is meticulously placed to create a *dynamic, smooth, asymmetrical flow* that sharply contrasts with the skin fade:

*Location:* The length is isolated to the *horseshoe section/front-top* of the head. The hair below the parietal ridge on both sides and the nape is completely faded to the skin.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Section:* The hair in the elongated front section is styled to *sweep diagonally across the forehead* from the deep side part on the left. It is positioned to *lightly overlap the forehead/temple area* before curving slightly inward near the right temple, forming a *heavy, smooth, rounded silhouette* that sits just *above the eyebrow level*.
   - *Crown/Middle Section:* The hair running from the *crown/vertex* forward is directed *smoothly forward and laterally* toward the right side. This intentional placement *forces volume/bulk toward the face and opposite side, **preventing* height and instead encouraging a *sleek, low-profile dome shape*.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the fade on both the left and right sides is *molded/wrapped* to *lay completely flat and angle inward* against the fade, creating an *ultra-clean, defined* border at the parietal ridge. This is the transition point where the *smoothly styled top meets the sharp, short fade*.
*Individual Hair Arrangement:* The hair is *uniformly smoothed and set* from the root using thermal and chemical styling methods, giving it a *smooth, defined, helmet-like* appearance.

*Section Dimensions (Top Length):*
   - Length: *60-80 mm* (6-8 cm) at the longest point (front-right).
   - Height: The styled hair maintains a low profile, projecting no more than *15-20 mm* (1.5-2 cm) from the scalp at its highest point (the center part).

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *high skin fade* provides the architectural support and *ultra-sharp contrast* for the smooth top style:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers and a razor, demonstrating *master-level precision*.
   - *Front:* A *clean, slightly curved hard line* is placed across the *forehead* and extends to the temples, marking the boundary of the scalp and the start of the fade.
   
   - *C-Cup/Temple Arch/Corner:* An *exceptionally sharp, semicircular C-Cup* is meticulously placed to connect the *front hairline* with the start of the *side fade, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look. The C-Cup on the visible left side is a prime focal point.
   
   - *Temporal Line:* The line extends straight and sharp from the C-Cup, transitioning directly into the high point of the fade.
   
   - *Nape/Back:* (Inferred) The back hairline is likely either a *tight taper fade* or a *crisp blocked/tapered line* that matches the sharpness of the sides.

*Fade/Taper Transition:* The fade starts *high* on the head, meaning the transition from *skin-level (0/foil-shaved)* to the *full hair length* is kept *very short and tight (low gradient), focused primarily on the area **above the ear* and along the parietal ridge. This *high* placement *maximizes* the canvas for the *smooth, dense* style above and provides maximum visual contrast.

*Fade Technical Specifications:*
   - Type: *High Taper/Skin Fade*
   - Starting Point: *Parietal ridge/Superior temple line*
   - Fade Range: *Skin (0)* to *Guard #2 (6mm)* (at the parietal ridge)
   - Transition Zone: *Very tight and rapid, occurring in a zone of approximately **10-15 mm* in height.
   - Circumference: The fade *wraps tightly* around the entire visible head, creating a bald/shaved perimeter.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Edge-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, crisp line* that follows the natural hairline but is *sharpened, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp C-Cup* that carves a *precise crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The points are *perfectly squared/defined* where the line meets the fade.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and likely finished with a straight razor* for the skin-level smoothness.
   - Line Quality: Creates an *absolutely straight and precise* line across the forehead and temples.
   - Contrast: *Sharp* contrast with the *smooth, dark* top hair.
   - Skill Level: This precision is a signature of *high-skill barbering/cosmetology technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black* (likely a deep *Level 1* or heavily colored)
   - Color Variations: *Uniform* (Solid, dark color with no visible variations)

*Finish Quality:*
   - Sheen Level: *High shine/Mirror-like gloss*
   - Texture Definition: *Completely smoothed and highly defined*
   - Frizz Control: *Completely smooth* with zero visible frizz or flyaways.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and exceptionally moisturized*
   - Product Buildup: *None visible*, only a clean sheen.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up three-quarter view* of the subject, with the light source *highlighting* the *front and visible side* (left) of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *deep side part, the smooth, sweeping style, and the extremely sharp C-Cup hairline/fade transition* on the *left side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *curve and definition of the C-Cup* and the *smooth, molded flow* of the hair from the part are the primary focal points of the hairstyle's precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and lateral* flow of the *front-top* hair creates a *defined, low-slung fringe* effect that dramatically covers the forehead on the non-parted side. This *forward/lateral* styling is deliberate to *frame the face and create a soft balance* to the severely cropped sides.
   - *Volume Distribution:* The bulk and volume are *low and concentrated* on the *front-top* of the head, contrasting sharply with the *skin-level* hair of the fade. The hair's length is utilized for *lateral/downward drape* rather than upward height.

*Parting Visibility:* The deep side part is *clearly visible* as a *razor-sharp, straight line* that separates the molded hair.
*360° Structure Reference:* While the back and far side are not fully visible, the overall style indicates a *consistent high skin fade* that wraps entirely around the head, meeting the smoothly molded top layer at the parietal ridge for a *uniform architectural structure*.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, directional studio* lighting
      - Light Direction: Predominantly *front-lit* and slightly from the side
      - Effect on Style: The lighting *enhances* the *high product sheen and definition, making the **smooth* texture appear *highly dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the *precise contrast* between the *dark, smooth* top hair and the *smooth* skin of the fade/scalp.

   *Head Position:*
      - Position: *Facing forward* but with a slight turn to the *right, creating a **three-quarter view* that prominently features the left temple/side.
      - Impact: This positioning *reveals and emphasizes* the *deep side part and the curve of the C-Cup fade* on the visible side.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary, High-Fashion Pixie Cut (often called a 'Molded/Wrapped Pixie')*
*Maintenance Requirements (Inferred):* *High* maintenance. Requires regular touch-ups for the fade/line-up (every 1-2 weeks) and regular thermal/molding/wrapping for the top section's smooth finish.`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829578/Hairstyles/WhatsApp_Image_2025-11-08_at_10.03.27_0eb01012_tjjemq.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Silky Body Wave Weave with Invisible Part',
    
     ai_description: `## Silky Body Wave Weave with Invisible Part

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/African-American* *woman* with a *Silky Body Wave Weave* hairstyle, photographed from *front view/slightly three-quarter view*.

*Core Style:* *Loose, voluminous body waves* achieved via a weave or extensions, integrated with a *flat, natural-looking installation* at the crown. The overall aesthetic is *polished, sleek, and high-volume*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification) underneath, which provides *a secure base* for the extension installation. The extension hair itself is a *smooth, soft wavy* texture (likely a relaxed 2C-3A equivalent or a high-quality human hair weave product), providing *maximum movement and sheen*.
*Product Use (Inferred):* The hair displays *high shine/semi-gloss sheen* and *minimal frizz, suggesting the use of a **lightweight serum or finishing oil* on the length to *provide shine, minimize frizz, and enhance wave definition. The **flatness and definition* at the roots indicate *minimal product/gel* was used for the hairline "baby hairs."
*Weave/Extension Details:* The style is based on *sew-in extensions or a wig/frontal application, where the natural hair is **braided underneath* (Inferred). The most prominent technical element is the *invisible/simulated middle part* at the center crown.
*Parting & Density:* A *straight, clean middle part* is created for a length of approximately *4-6 cm* at the crown, with the hair falling symmetrically on both sides. The *high density* of the extension hair ensures *zero* scalp visibility outside of the part line.

---

### II. Arrangement and Placement of the Loose Body Wave
The *waves* are meticulously placed to create a *symmetrical, voluminous cascade*:

*Location:* The style covers the *full head, with the entire bulk and length of the hair directed **downward and slightly forward* over the shoulders.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The hair immediately adjacent to the part line is styled to *gently sweep away from the face* at the temples, creating a *soft, face-framing curve. They are positioned to **frame the face/contour the cheekbones, forming a **soft, voluminous* *silhouette* that sits *just below the collarbone* at its shortest point.
   - *Crown/Middle Rows:* The hair falls *vertically downward* from the crown with *a soft, uniform body wave pattern. This intentional placement **forces volume laterally and downward, **encouraging* the soft wave effect, thus creating the *high-volume, cascading* silhouette.
   - *Side Perimeter/Lateral Sections:* The hair flows *straight down* and then curls slightly inward at the tips, creating a *soft and uniform* border. This is the transition point where the *length blends seamlessly* into the overall volume.
*Individual Wave Arrangement:* The waves are *large and loose, giving a **smooth, flowing, and uniform* appearance. The *consistent* length allows *maximum volume and a dramatic drape*.

*Section Dimensions (Inferred):*
   - Count: Not applicable (full head weave/wig)
   - Thickness: *~5-8 mm* diameter per individual wave cluster
   - Length: *~50-55 cm* (approximately 20-22 inches) measured from root to tip, falling well past the shoulders.
   - Part width: *~1-2 mm* for the defined, straight part line

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The architectural foundation is focused on the precision of the part line and frontal hairline definition:

*Hairline (The Edge-Up/Line-Up):* The natural hairline is *meticulously shaped* using precise *styling techniques* (often referred to as 'baby hairs' or 'laying the edges').
   - *Front:* A *softly curved, natural* *soft* line is placed across the *forehead/temples, marking the boundary of the **skin/hairline. The small, styled wisps of hair are directed **slightly inward* toward the temple.

*Fade/Taper Transition:* Not applicable, as this is a long, full-coverage style.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The style appears *medium* and *flexible, particularly in the length. This indicates **moderate* tension was applied during *styling* to ensure *a clean part and defined waves. The texture is **soft and flowing—not **rigid—contributing to their **natural and dramatic* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *silky and smooth* to touch, with *high* density and *flexible* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow/natural movement* with the hair *responding to gravity* and showing *intentional wave definition*.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *moderate* precision, a technique known as *Laying Edges*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped* *curved line, **naturally blended* in execution. The "baby hairs" are styled into *two small, gentle, symmetrical swirls* on the outer edge of each temple area.
   - *C-Cup/Corner Arch:* Not applicable for the cut, but the *hairline is carefully sculpted* in the temporal region.

*Execution Details:*
   - Tool: Styled with *a small brush/comb and light edge control product*.
   - Line Quality: Creates an *softly curved* line across the *forehead/temple*.
   - Contrast: *Subtle* contrast with the *smooth* hair above it.
   - Skill Level: This precision is a signature of *skilled styling technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/deepest brown (Level 1-2)*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss*
   - Texture Definition: *Highly defined* (waves) and *completely smooth* (at the root)
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Excellent/well-maintained/healthy/moisturized*
   - Product Buildup: *None visible/slight sheen*
   - Elasticity (Inferred): *Good* based on *wave definition and drape*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **front view/slightly three-quarter view* of the subject, with the light source *highlighting* the *front* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *middle part, wave definition, and face-framing layers* on the *front* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *clean middle part* and the *soft, voluminous waves* are the primary focal points of the *style's* aesthetic.

*Body Wave Arrangement in Current View:*
   - *Overhang/Projection:* The *downward-directed flow of the **entire length* creates a *soft, voluminous* *silhouette* effect, specifically *cascading over the shoulders and chest. This **downward* styling is deliberate to *frame the face/establish balance* and maximize the hair's length.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *full length and sides/back* of the head. The hair's length is utilized for *downward drape and lateral spread* rather than *upward height*.

*Parting Visibility:* Due to the *smooth* arrangement and the angle, the *straight middle part* is *clearly visible, **enhancing* the *structured/sleek* look of the style. The primary visible line is the *defined center part, not **hidden sections*.
*360° Structure Reference:* While *the back* is not visible in this view, the overall style indicates *a continuation of the same length and wave pattern* would be present on the occipital and nape area.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Front-lit* with slight emphasis on the front-top
      - Effect on Style: The lighting *enhances* the *product sheen/definition, making the **wavy* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *smooth* *hair* and the *smooth* skin of the hairline

   *Styling Execution:*
      - *Setting Method (Inferred):* The *smooth definition* and *defined* *waves* suggest *set with rollers/curling iron* and then *brushed out or finger-combed* to achieve the loose body wave.
      - *Adaptive Styling:* The styling is adaptively *crisp and soft—meaning it is styled to **maximize definition/create movement* and *lay flat against gravity* at the crown and *hang freely* where *length/texture* permits

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on **subject's face/hairstyle* and the primary hair elements (*cascading waves), while the background is **dark and non-distracting*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes/frames* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Facing forward/slightly tilted back*
      - Impact: This positioning *emphasizes* the *long length and face-framing layers/edges*"

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* *None visible*

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Protective/Extension Style*
*Cultural Significance (If Applicable):* This style is a popular, modern interpretation of long, flowing hair achieved using *protective styling methods* common in *Black hair culture*.
*Maintenance Requirements (Inferred):* *Medium/High* (Regular oiling of natural hair underneath, light product/heat for wave maintenance, periodic touch-up/reinstallation of the weave/wig, edge control touch-ups).`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829631/Hairstyles/WhatsApp_Image_2025-11-08_at_10.16.06_4e86b58e_vxvmnu.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: ' Voluminous Defined Afro-Kinky Curly Wig/Weave with Center Part',
    
     ai_description: `### Title: Voluminous Defined Afro-Kinky Curly Wig/Weave with Center Part

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Melanated* *woman* with a *Voluminous Defined Afro-Kinky Curly* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Defined natural-textured curls, likely achieved using a **wig, weave, or high-definition permanent curl set, with a clean, short **center part* on top. The overall aesthetic is *textured, voluminous, and contemporary*.
*Hair Texture (Inferred):* The hair displays a *coily/kinky* texture (Type *4A-4B* classification), which provides *immense density, significant shrinkage, and excellent volume potential* to support the large silhouette of the style. The tight curl pattern appears uniform.
*Product Use (Inferred):* The hair displays a *medium sheen and high texture definition, suggesting the use of **moisturizing creams, curl defining mousse, and/or oil* to *define, moisturize, and minimize frizz, while adding natural luster. The texture at the root indicates **minimal tension* was applied, suggesting a free-flowing, natural style or a wig/weave application.
*Style Details:* The style is an *open, free-hanging curl pattern* where the hair is cut and shaped to achieve maximum volume and a rounded, face-framing silhouette. The individual curl units appear highly defined, likely set with a *rod set, twist-out, or steamer treatment* prior to the photograph.
*Parting & Density:* A *straight, short center part* is present at the front crown. The *high* density of the *curls* ensures *minimal* scalp visibility, contributing significantly to the style's overall volume.

---

### II. Arrangement and Placement of the Defined Curls
The *curls* are meticulously placed to create a *large, rounded, and dynamic silhouette*:

*Location:* The style covers the *full head* area, maintaining significant volume and length across the top, sides, and back.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The curls in the front row, along the *forehead* hairline, are styled to *hang slightly forward and laterally, achieving a cascading effect. They are positioned to **frame the face, forming a **heavy, voluminous, and textured* *silhouette* that sits *at cheekbone and jawline level*.
   - *Crown/Middle Rows:* The bulk of the hair running from the *crown/center* radiates *outward* in all directions. This intentional placement *forces volume away from* the center line and *outward* to create the *maximal rounded-triangular silhouette* where volume is widest around the ear/jawline area.
   - *Side Perimeter/Lateral Sections:* The curls on the left and right sides are styled to *hang straight down and slightly outward, creating a **soft, but defined* border. The length extends *past the shoulders* on the sides and back, though the high volume makes the effective visual length shorter.
*Individual Curl Arrangement:* Each *curl unit* is uniformly *coiled and springy* from the root, giving it a *coiled and highly textured* appearance. The *consistent* length allows *maximal outward projection* and *minimal layering* to create a voluminous, uniform structure.

*Section Dimensions (Inferred from Visible Hair Mass):*
   - Count: The hair consists of *hundreds to thousands* of individual curl units
   - Thickness: *3-5 mm* diameter per individual curl unit
   - Length: *15-20 cm* measured from root to tip (prior to shrinkage)
   - Part width: *~1 mm* short, clean part line visible at the front apex

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The hair features a *defined overall shape/cut, but **no clipper fade or taper* is present. The style is one of volume and texture.

*Hairline (The Edge-Up/Line-Up):* The natural hairline is *visible and left natural* with some baby hair definition, but *no razor-sharp line-up* is used.
   - *Front:* A *natural* soft line is placed across the *forehead/temples*, with minimal styling of the baby hairs.

*Fade/Taper Transition:* *N/A. The style is characterized by its **long, voluminous, uniform length* throughout the head, with no contrasting short/shaved sections.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *style* appears *medium* and *flexible* with significant *springiness. This indicates **minimal* tension was applied during *styling/application, allowing for **natural movement/flexibility. The texture is **coiled and springy, with a **dense and highly textured* feel, contributing to the *voluminous* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *soft, highly textured, and springy* to touch, with *high* density and *flexible* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow* and *springy movement, with the hair **responding to gravity* and showing the natural *curl memory* and *coiling* of the texture.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal* hairline is executed with *natural* precision, focusing on a *soft, natural transition* rather than a sharp line-up.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *natural* shape, *softly blended* in execution. *Baby hairs* are laid down with a *light gel or edge control product* to create a subtle, curved, polished finish along the perimeter.
   - *C-Cup/Corner Arch:* *Not present. The style maintains a **natural* hairline curve.

*Execution Details:*
   - Tool: Styled with *a brush or comb* and *light holding product*
   - Line Quality: Creates a *softly curved, natural* line across the *forehead/temple*
   - Contrast: *Subtle* contrast with the *coily/textured* hair above it
   - Skill Level: This demonstrates *skilled natural hair/wig/weave styling technique* focusing on a natural perimeter finish.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Minimal frizz*, well-defined coils visible throughout

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *Slight sheen* visible
   - Elasticity (Inferred): *Good* based on *tight curl definition and springy appearance*

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up* shot, *three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *high volume, defined curl pattern, and natural hairline* the most visually dominant technical elements.
   - *Focal Points:* The *center part* and the *rounded silhouette* of the voluminous coils are the primary focal points of the *style's* structure.

*Curl Arrangement in Current View:*
   - *Overhang/Projection:* The *lateral and downward* flow of the *front-top* curls creates a *soft, voluminous* *silhouette* effect, specifically *framing the cheeks and jawline. This **lateral/downward* styling is deliberate to *frame the face and establish balance*.
   - *Volume Distribution:* The bulk and volume of the *coiled* hair are concentrated on the *crown and sides* of the head, contrasting with the *neatly styled* natural hairline. The hair's length is utilized for *lateral spread and downward drape* rather than *upward height*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the center part at the apex is *clearly visible* but short, *enhancing* the *structured* look of the style.
*360° Structure Reference:* While the back and far side are not fully visible in this view, the overall style indicates the back section would maintain the *uniform length, high volume, and defined coiling* observed on the front and sides, completing a *large, rounded, uniform silhouette*.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, soft* *studio* lighting
      - Light Direction: *Front-lit* with a subtle fill from the side
      - Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **coiled* texture appear *semi-glossy/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *soft* lighting *softens* the contrast between the *dark* *textured* *style* and the skin, focusing on *texture and volume*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest the hair was *set with a defining product and fully dried* (e.g., set with perm rods or a small twist-out and separated).
      - *Adaptive Styling:* The styling is adaptively *voluminous—meaning it is styled to **maximize definition* and *maintain natural texture* and *hang freely* where length and texture permits.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on **subject's face and the hairstyle* and the primary hair elements (*defined coils), while the background is **partially visible* but out of focus.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned 30° to the right* and slightly tilted down
      - Impact: This positioning *emphasizes* the volume and length on the visible (left) side while *revealing* the clean center part line.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:*
   - *N/A* (No accessories are visible in the hair)

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary, Protective* (Likely Wig/Weave application), *Natural Texture*
*Cultural Significance (If Applicable):* The style celebrates the natural coil and volume of Afro-kinky textures, a popular aesthetic within Black hair culture.
*Maintenance Requirements (Inferred):* *Medium* (Regular moisturizing, light product application to maintain curl definition, and careful storage if a wig).`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829691/Hairstyles/WhatsApp_Image_2025-11-09_at_02.49.39_a4162463_djcgje.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Passion Twists/Kinky Curly Braids Voluminous Half-Up Style',
    
     ai_description: `## Title: Passion Twists/Kinky Curly Braids Voluminous Half-Up Style

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *mixed-ethnicity/medium skin tone* *woman* with a *Passion Twists/Kinky Curly Braids* hairstyle, photographed from a *three-quarter view* (slightly to the right).

*Core Style:* *Kinky/Coily Two-Strand Twists* (commonly referred to as Passion Twists or Free-Tress water wave braids) installed using the *Crochet/Knotless Braiding* technique on top and sides, integrated into a *voluminous half-up bun/ponytail* at the crown. The overall aesthetic is *textured, soft, contemporary,* and *voluminous*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification) or a highly textured curl pattern (Type 3C), which provides *excellent grip for the twist installation and blend* while supporting the *high density and voluminous* appearance of the synthetic hair.
*Product Use (Inferred):* The hair displays a *high sheen/natural luster, suggesting the use of **light oil or moisturizing foam/mousse* to *seal the natural hair, minimize frizz, and provide a healthy shine* to the synthetic/blended hair. The *tightness and definition* at the root indicate *moderate tension* was applied during the initial braiding/crochet installation.
*Passion Twist/Braids Details:* *Two-strand twists* with a *loose, coily, and highly textured* synthetic hair (likely a water wave or deep wave texture) are used. The installation technique involves securing the twisted hair to the natural hair *close to the scalp (crochet method or knotless), where the **twist is initially tight and gradually loosens* into the highly textured, coiled length.
*Parting & Density:* *Square/rectangular* parting pattern is inferred across the head, particularly visible at the front hairline. The *high density* of the *twists* ensures *minimal scalp visibility* except at the initial part lines."

---

### II. Arrangement and Placement of the Passion Twists
"The *passion twists* are meticulously placed to create a *high-volume, dual-textured* look:

*Location:* The twists cover the *full head. The hair is styled into a **half-up/half-down arrangement, where the entire **horseshoe section (from temple to temple, wrapping the crown)* is *gathered high into a voluminous updo/ponytail/bun hybrid. The hair below the parietal ridge and the lower back section is left to **hang freely*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The twists in the first row, along the *forehead/temple* hairline, are styled to *frame the face, with a few individual twists deliberately styled as **face-framing tendrils/curls* that *sweep back softly* from the hairline. They are positioned to *softly frame the face and slightly overlap the forehead at the temples, forming a **light, textured silhouette* that sits *just below the ears*.
   - *Crown/Middle Rows:* The majority of the twists in the upper two-thirds of the head are *smoothly directed upward* toward the vertex/crown and secured into a *large, looped, and voluminous updo. This intentional placement **forces volume upward and away from* the face, *preventing a heavy look, thus creating the **high, dramatic silhouette*.
   - *Side Perimeter/Lateral Sections:* The twists immediately adjacent to the temple/ear area are *twisted/styled* to *hang straight down, creating a **soft, textured* border against the face/neck. This is the transition point where the *free-hanging twists meet the secured updo section* (the line of the half-up style).
*Individual Twist Arrangement:* Each *twist unit* is uniformly *formed* from the root, transitioning from a *tight* installation point into a *loose, coiled, and springy* appearance along the length. The *consistent* length allows *the free-hanging section to drape heavily and the updo to have cohesive volume*.

*Section Dimensions (Inferred):*
   - Count: *70-100* individual *twists* across the entire head (high-density install)
   - Thickness: *4-6 mm* diameter per individual unit (medium thickness)
   - Length: *50-60 cm* (approx. mid-back length) measured from root to tip
   - Part width: *6-8 mm* (standard section size for medium twists)"

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *twists* appear *medium/firm* and *flexible, particularly along the hanging lengths. This indicates **moderate* tension was applied during *installation* to ensure *longevity and a neat root appearance. The texture is **soft and flowing/coiled and springy—not **rigid—contributing to their **natural and dramatic* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow* with the hair *responding to gravity* in the free-hanging section and *showing intentional directional styling* in the gathered updo."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Dark Natural Brown* (approx. Level 2-3)
   - Color Variations: *Uniform* dark color
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* due to the coily synthetic hair
   - Frizz Control: *Minimal frizz* at the roots, natural texture showing in the main body of the twists

*Health Indicators:*
   - Overall Condition: *Well-maintained/moisturized* (inferred from shine)
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *curl definition/springiness*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front and right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *face-framing tendrils/curls, the **parting pattern near the hairline, and the **voluminous height* of the updo the most visually dominant technical elements.
   - *Focal Points:* The *soft curve of the face-framing twists* and the *high-volume gathered section* are the primary focal points of the *style's* aesthetic.

*Passion Twist Arrangement in Current View:*
   - *Overhang/Projection:* The *downward-directed flow of the **front* *twists* creates a *soft, bang-like* effect, specifically *draping softly just past the cheekbones. The **upward* styling of the crown twists is deliberate to *create height and establish balance* between the high volume and the long, loose lengths.
   - *Volume Distribution:* The bulk and volume of the *twisted* hair are concentrated on the *crown* (in the updo) and the *lower back/sides* (in the free-hanging section). The hair's length is utilized for *upward height and downward drape* rather than a compact structure.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *square/rectangular* parts at the root are *clearly visible* at the very front hairline (partially visible) and *largely concealed* by the surrounding *twists* elsewhere, *enhancing* the *full* look of the style. The primary visible lines are the *styled sections*, not excessive part lines.
*360° Structure Reference:* While the *back* is not clearly visible in this view, the overall style indicates the twists would *continue to hang long and loose, likely past the shoulder blades*, in the lower back section."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *natural* lighting (likely afternoon sun)
      - Light Direction: *Side-lit* with strong direct light from the right side of the subject (visible shadow lines on the wall)
      - Effect on Style: The lighting *enhances* the *product sheen/texture/definition, making the **coiled/rope-like* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the texture contrast between the *dark textured style* and the *soft, illuminated skin*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* suggests the use of *pre-twisted/pre-coiled* synthetic hair (a key component of Passion Twists) and the application of a *setting or styling foam/mousse* on the roots/parts.
      - *Adaptive Styling:* The styling is adaptively *natural and dramatic—meaning it is styled to **maximize definition and maintain natural texture* and *stand upright/flow naturally* where desired (the updo section) and *hang freely* where length permits (the sides/back).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on **subject's face and the front sections of the hairstyle, while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait, highlighting the texture and volume.

   *Head Position:*
      - Position: *Facing forward/turned slightly right*
      - Impact: This positioning *emphasizes* the *face-framing elements and the height* of the style."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Contemporary Protective Style* (specifically using highly textured synthetic hair for a signature look).
*Cultural Significance (If Applicable):* Protective styles like twists and braids are historically and culturally significant in many African and diasporic communities for hair health and styling versatility.
*Maintenance Requirements (Inferred):* *Moderate* time investment, requires *moisturizing oil and styling mousse/foam* to maintain neatness and shine, with *touch-up frequency* typically every 4-8 weeks to re-twist/re-braid the hairline."`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829800/Hairstyles/WhatsApp_Image_2025-11-09_at_03.27.12_f3b2b033_tiz6ns.jpg',
    price: 3,
    popularity: 5,
    isActive: true,
  },  {
    name: 'Short Layered Bob with Full Fringe and Top Knot Updo',
    
     ai_description: `## Title: Short Layered Bob with Full Fringe and Top Knot Updo

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *light-skinned woman* with a *Short Layered Bob with Full Fringe and Top Knot Updo* hairstyle, photographed from a *three-quarter view (right side dominant)*.

*Core Style:* *Precision-cut, texturized bob* with a *full, blunt fringe* on top, styled into a *small, high top knot* updo on the crown, integrated with the remaining length *hanging naturally* around the sides and back. The overall aesthetic is *contemporary, textured, and subtly edgy*.
*Hair Texture (Inferred):* The natural hair appears to be *straight* (Type *1A-1B* classification), which provides *natural sheen and smooth density, allowing for a sharp cut line while holding the soft curves of the bob. The texture supports the style's **volume* and *definition*.
*Product Use (Inferred):* The hair displays a *semi-gloss to natural luster* finish, with a *soft, piecey separation* in the layers and fringe, suggesting the use of a *light styling cream, dry texturizing spray, or a light-hold pomade* to *enhance texture, provide light hold, and minimize flyaways. The **tightness* at the root of the top knot indicates *moderate tension* was applied during styling to secure the updo.
*Style Details:* The style is built on a *short, blunt bob* (approximately jaw-length) with *internal layering* and heavily textured ends to create movement. The fringe is cut *straight across* the forehead just above the eyebrows, complementing the bob's defined line.
*Parting & Density:* The main parting for the base cut is likely a *center or shallow side part* (not visible under the updo). The hair density appears *medium-high, which ensures **full coverage* and *significant volume* in the bob and fringe.

---

### II. Arrangement and Placement of the Style Elements
The haircut's elements are meticulously placed to create a *dynamic, dual-texture effect (smooth bob vs. textured updo)*:

*Location:* The base cut covers the *full head, extending from a heavy fringe at the front to a straight line (likely slightly shorter at the nape) around the perimeter. The top knot is isolated to the **high crown/vertex area* (horseshoe section). The remaining length is *left natural and styled straight*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Fringe/Front Section:* The hair in the front is cut to form a *heavy, straight fringe* that is styled to *hang forward, sitting **just above or grazing the eyebrows. It is positioned to **overlap the forehead, forming a **heavy, blunt* fringe that sits *just below the middle of the forehead*.
   - *Crown/Updo Section:* The hair running from the *front hairline (behind the fringe)* and *crown* is *pulled upward and slightly backward* into a *small, textured top knot/bun. This intentional placement **forces volume upward* away from the face, *preventing* the bob from appearing too heavy, thus creating the *high, compact silhouette* of the updo.
   - *Side Perimeter/Lateral Sections:* The bob length immediately adjacent to the temple/ear on the visible side is styled to *angle slightly inward* toward the face, creating a *soft, defined* border against the jawline. This is the transition point where the *top knot section* transitions sharply into the *hanging bob length*.
*Individual Unit Arrangement (Updo):* The top knot is *uniformly twisted/coiled and secured* from the root, giving it a *compact, round bun* appearance with *subtle texture/strands* visible within the knot structure. The *consistent length* of the hair in the updo allows for *uniformity and compactness*.

*Section Dimensions (Inferred):*
   - Base Length: *~120-150 mm* (Jaw-length/chin-length)
   - Fringe Length: *~50-60 mm* (Eyebrow-skimming)
   - Top Knot Diameter: *~40-50 mm* (Compact size)

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *top knot* appears *tight* and *firm, particularly near the roots and securing point. This indicates **moderate tension* was applied during *styling* to ensure *longevity and hold. The texture of the **hanging bob* is *soft and flowing, contributing to its **neat structure* and *uniform hang*.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth/silky* with *high* density and *firm* hold at the updo's base.
*Movement Characteristics:* The *bob length and fringe* demonstrate *natural movement* with the hair *responding to gravity* with a *slight curve inward, while the **top knot* is *static hold* and maintaining its position.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Dark, cool-toned brown* (appears close to a Level 3-4)
   - Color Variations: *Uniform* base color with possible *subtle, warm lowlights or natural variation* giving dimension, especially visible under the studio lighting.
   - Color Distribution: *Consistent* across all sections.

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Softly defined* with *piecey separation* in the fringe and layered ends.
   - Frizz Control: *Completely smooth* on the hanging length; *minimal frizz* on the updo.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible*; slight sheen suggests light product use.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up portrait, **three-quarter view (right-dominant)* of the subject, with the light source *highlighting* the *side* of the face and the *hair texture*.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *texture and movement of the fringe and the clean line of the side bob* on the *right* side of the head the most visually dominant technical elements, along with the *compact form of the top knot*.
   - *Focal Points:* The *crisp, straight cut of the fringe* and the *high placement of the top knot* are the primary focal points of the style's architecture.

*Style Arrangement in Current View:*
   - *Overhang/Projection:* The *forward-directed flow of the **fringe* creates a *heavy, blunt, bang-like* effect, specifically *covering the top part of the forehead. This **forward* styling is deliberate to *frame the face and emphasize the eyes*.
   - *Volume Distribution:* The bulk and volume of the cut are distributed *laterally* in the bob and *frontally* in the fringe, with a strong *upward concentration* in the small top knot on the crown. The hair's length is utilized for *downward drape (bob)* and *upward height (updo)*.

*Parting Visibility:* Due to the *smooth, dense* styling, the underlying part is *concealed* by the fringe and the updo. The primary visible lines are the *clean perimeter cut line* and the *soft, texturized edges*.
*360° Structure Reference:* While the back is not visible, the overall style indicates the bob's perimeter would be a *straight or softly curved line* at the nape, matching the uniformity of the visible side and front.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
   - Light Source: *Soft, bright studio* lighting (possibly a large softbox or beauty dish)
   - Light Direction: *Front-lit and subtly side-lit* (from the right/camera-side).
   - Effect on Style: The lighting *enhances* the *natural luster/product sheen and texture definition, making the **straight/smooth* sections appear *shiny/dimensional*.
   - Contrast Enhancement: The *soft* lighting *emphasizes* the precise contrast between the *dark* *smooth* *hair* and the *skin* of the face, and the shadow cast by the subject against the background adds depth.

*Styling Execution:*
   - *Setting Method (Inferred):* The *smooth definition* and *slight internal curve* of the bob suggest the hair was likely *blow-dried smooth* or *flat-ironed* and then styled with a *light texturizing product*.
   - *Adaptive Styling:* The styling is adaptively *crisp/defined* in the cut lines and *structured* in the top knot—meaning it is styled to *maximize definition and clean lines* and *lay flat against gravity* (fringe/sides) and *stand upright* (updo).

*Photographic Technique:*
   - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the hairstyle's texture, while the background is a **smooth, uniform mid-gray*.
   - *Image Quality:* *High resolution/sharp detail/professional color grading*.
   - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* of the portrait, highlighting the contrast between the short, sharp cut and the styled updo.

*Head Position:*
   - Position: *Turned approximately 30-45° to the left* (away from the camera), with the chin slightly elevated.
   - Impact: This positioning *emphasizes* the *line and curve of the bob* on the visible right side and the *high, compact profile* of the top knot.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Fashion/Precision Cut*
*Maintenance Requirements (Inferred):* *Moderate maintenance*; requires regular trims (every 4-6 weeks) to maintain the sharp perimeter and fringe line, and daily styling (blow-drying/flat-ironing and product application) for the smooth finish and texture. The updo is a daily or occasion-specific style.`,
    category: 'Bob', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829913/Hairstyles/WhatsApp_Image_2025-11-09_at_03.49.12_910258a7_ucvtro.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Box Braid Mid-Length Dreads with Mid-Skin Fade',
    
     ai_description: `## Title: Box Braid Mid-Length Dreads with Mid-Skin Fade

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *dark-skinned Black man* with a *Box Braid Mid-Length Dreads* hairstyle, photographed from *three-quarter view/downward angle*, with the subject looking down.

*Core Style:* *Medium-sized box braids* on the horseshoe section (top), integrated with a *clean, tightly executed mid-skin fade* on the sides and back. The overall aesthetic is *clean, textured, and contemporary, demonstrating highly **precise geometric sectioning*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent grip, density, and natural volume* for the secure and neat formation of the box braids.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *minimal frizz, suggesting the use of **light pomade, styling gel, or natural oil* during the braiding process to *secure, define, moisturize, and minimize flyaways. The **tightness* at the root indicates *significant, professional tension* was applied during sectioning and braiding.
*Box Braid Details:* *Individual box braids* are formed using the *three-strand braiding technique* from the root, creating a *tight, rope-like structure. The length appears to be the **natural hair length* or *very minimal extension* used primarily to feed the ends, with the ends of the braids left *natural and blunt/unbraided*.
*Parting & Density:* The style features *highly precise, uniform square/box parting* across the entire crown. The *medium-high density* of the braids ensures *moderate scalp visibility* only along the part lines, emphasizing the *geometric integrity* of the sectioning."

---

### II. Arrangement and Placement of the Box Braids
"The *box braids* are meticulously placed to create a *cleanly structured, uniform cascade*:

*Location:* The braids cover the *entire top section* of the head, beginning just above the *parietal ridge* and extending to the *front hairline. The hair **inferior to the parietal ridge* is shaved into the fade.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The braids in the first row, along the *forehead hairline, are styled to **hang slightly forward/straight down, **overlapping the forehead slightly* due to the subject's downward gaze. They are positioned to *frame the upper face, forming a **textured fringe* that sits *just above the eyebrows* or at the *top of the forehead*.
   - *Crown/Middle Rows:* The majority of the braids are styled to *hang straight down, primarily influenced by gravity. This intentional placement **forces volume downward* along the sides of the head and *prevents significant height, thus creating a **clean, symmetrical silhouette* that complements the sharp fade.
   - *Side Perimeter/Lateral Sections:* The braids immediately adjacent to the fade on the left and right sides are styled to *hang straight down, creating a **defined, vertical border* against the *short sides. This is the transition point where the **braids abruptly meet the skin-fade*.
*Individual Braid Arrangement:* Each *unit* is uniformly *secured and formed* from the root, giving it a *tight, consistent, rope-like* appearance. The *consistent length* allows for a *uniform hang and presentation* of the overall style.

*Section Dimensions (Inferred):*
   - Count: *25-35* individual box braids across the entire head (estimated)
   - Thickness: *4-5 mm* diameter per individual unit
   - Length: *80-100 mm (8-10 cm)* measured from root to tip (mid-neck/collarbone length not yet reached)
   - Part width: *4-5 mm* between sections, creating a square section base approximately *9x9 mm*"

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *mid-skin fade* provides the architectural support and *sharp, high-contrast* foundation for the *box braids*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers.
   - *Front:* A *straight, hard line* is placed across the *forehead*, marking the precise boundary of the style.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed at the temporal point, connecting the front hairline with the start of the side fade. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends vertically downwards from the corner to the top of the ear.
   
   - *Nape/Back:* (Not fully visible, but inferred to be a *tapered or blocked* hairline to match the mid-fade aesthetic)

*Fade/Taper Transition:* The fade starts *mid-way* on the head, meaning the transition from *skin-level (clipper-closed/razor)* to the full hair length of the braids is kept *gradual and blended, primarily focused on the area **around the ear and up to the parietal ridge. This **mid* placement *maximizes* the canvas for the *dense, textured box braids* above.

*Fade Technical Specifications (Inferred):*
   - Type: *Mid-Skin Fade/Mid-Bald Fade*
   - Starting Point: *Mid-point* between the ear and the parietal ridge
   - Fade Range: *Skin (razor/foil shaver)* to *~10 mm (guard #3)*, blending into the length of the braids at the parietal ridge
   - Transition Zone: Approximately *30-40 mm* high, showing a clean, progressive blend of lengths.
   - Circumference: The fade *wraps consistently* around the entire head.
   - Technique: High-skill *clipper-over-comb and skin-fading technique* for a seamless blend."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *braids* appear *tight and firm, particularly near the roots. This indicates **significant tension* was applied during *installation* to ensure *longevity and a neat, structured aesthetic. The texture is **dense and rope-like—not soft—contributing to their **neat structure* and *uniform hang*.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and tightly coiled/braided* to touch, with *high density* and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* at the root and *natural movement* along the length, with the braids *responding to gravity* in a uniform downward flow."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional precision, a technique known as **Line-Up/Edge-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, geometrically straight line* across the *forehead, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, angular* *corner* is visible at the temple, carving an *L-shaped* boundary that connects the front hairline to the vertical temporal line, perfectly defining the space where the hair is cut shortest.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/clippers* followed by a razor/foil shaver for absolute smoothness.
   - Line Quality: Creates an *absolutely straight and precise* line across the *forehead and temple*.
   - Contrast: *Sharp contrast* with the *textured braids* above it.
   - Skill Level: This precision is a signature of *high-skill barbering* and *professional technique*."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* at the parts and along the individual braids
   - Frizz Control: *Minimal frizz* at the root, suggesting product application and high tension.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on the *tight, structured definition* and lack of visible breakage."

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up shot, **three-quarter view/downward angle* of the subject, with the light source *highlighting* the *front/right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *geometric part lines, the sharpness of the C-Cup hairline, and the mid-skin fade transition* on the *right side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *intersection of the front hairline and the sharp temporal corner (C-Cup)* is the primary focal point of the *haircut's precision*.

*Box Braid Arrangement in Current View:*
   - *Overhang/Projection:* The *downward-directed flow of the **front and side* box braids creates a *defined, fringed* effect, specifically *draping along the upper cheek/temple area* (exaggerated by the downward gaze). This *downward* styling is deliberate to *allow the braids to hang naturally* and *show off their length*.
   - *Volume Distribution:* The bulk and volume of the *braided* hair are concentrated on the *entire top section, contrasting sharply with the **skin-level* hair of the *mid-skin fade. The hair's length is utilized for **downward drape* rather than *upward height*.

*Parting Visibility:* Due to the *precise and medium-sized* arrangement, the individual *square parts* at the root are *clearly visible, **enhancing* the *structured* look of the style. The primary visible lines are the *shaved hard lines* and the *natural parts* of the box braids.
*360° Structure Reference:* While the back is not visible, the overall style indicates a *consistent mid-skin fade* that *wraps around the back of the head* and that the *box braid pattern continues symmetrically* across the crown."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Front-lit/side-lit* (slightly from the right/above)
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *dimensional and well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured braids* and the *smooth skin* of the *fade/scalp*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined edges* suggest the style was *installed with a precise parting technique* and potentially *set with a light product* to maintain neatness.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* at the roots and edges and *hang freely* where length permits.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **frontal hair elements* (hanging twists/sharp hairline) and the *subject's upper face, while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 15° right* and *tilted moderately down*
      - Impact: This positioning *emphasizes* the *sharp frontal hairline* and the *vertical flow/length* of the braids by allowing them to *drape forward*."

---

### X. Cultural Context and Style Classification
"*Style Category:* *Protective/Contemporary/Loc'd Transition*
*Cultural Significance (If Applicable):* Box braids are a style of *African origin, traditionally serving as a **protective style* for natural hair, minimizing manipulation, and facilitating length retention. In this contemporary form, they also represent a popular stage in the *freeform loc/dreadlock journey* or a standalone style.
*Maintenance Requirements (Inferred):* *Moderate time investment* (installation time), *low daily product needs* (light oil/spray), and *moderate touch-up frequency* (re-braiding the front/perimeter every *4-6 weeks* to maintain the crisp hairline and neat roots)."`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762829995/Hairstyles/WhatsApp_Image_2025-11-09_at_04.38.46_7e8ddf7f_g2rukl.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Two Cornrow Braids with High Skin Fade and Edge-Up',
    
     ai_description: `## Title: Two Cornrow Braids with High Skin Fade and Edge-Up

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *light-skinned/multiracial man* with a *two-cornrow-braid top and high skin fade* hairstyle, photographed from a *three-quarter view (slightly looking down)*.

*Core Style:* *Symmetrical, thick, flat cornrow braids* on the horseshoe section (top), integrated with a *high skin fade* on the sides and back. The overall aesthetic is *clean, contemporary, sharp, and highly defined*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/tightly curled (Type 3C-4A classification), which provides **high density, excellent root grip/hold capability, and robust structure* to support the sharp edge-up and tight braiding.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *extreme texture definition/smoothness* on the braided and faded sections, suggesting the use of *pomade, styling gel, or moisturizing cream* to *secure flyaways, provide a clean sectioning, minimize frizz, and provide a polished finish. The **tightness* at the root indicates *high tension* was applied during styling to ensure maximum longevity and neatness.
*Cornrow Details:* *Two very thick, deep, symmetrical cornrow braids* that start at the frontal hairline and track backward toward the crown/occipital area. The braids are executed using the *underhand (reverse) braiding technique* to make them *stand up and appear prominently (3D)* against the scalp.
*Parting & Density:* *Two distinct, sharp, parallel horizontal parts* create three sections for the braids (the middle braid section and the two surrounding scalp sections). *Clear, straight parting lines* are a signature feature. The *medium-to-high* density of the underlying hair is utilized for *maximal braid thickness, ensuring **minimal* scalp visibility except along the razor-sharp part lines.

---

### II. Arrangement and Placement of the Cornrow Braids
The *cornrows* are meticulously placed to create a *clean, symmetrical, and prominent central ridge*:

*Location:* The braids occupy the *entire horseshoe section* (from the frontal hairline, approximately 20mm above the temporal line, up to the parietal ridge/crown). The hair *below the parietal ridge* is *fully faded to skin*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The braids start directly at the *frontal hairline/edge-up* and are directed *straight backward* along the sagittal plane. They are positioned to *create height and linear flow, forming a **heavy, rope-like* silhouette that sits *high and central* on the head.
   - *Crown/Middle Rows:* The two rows of braids run *parallel and straight* from the *front* to the *back. This intentional placement **forces volume toward the midline, **preventing lateral movement* and creating the *signature two-line ridge silhouette*.
   - *Side Perimeter/Lateral Sections:* The braids immediately adjacent to the high fade are *thick and robust, creating a **sharp, vertical border* against the *shaved skin-level fade. This is the transition point where the braids **maintain their full thickness right up to the fade's starting line*.
*Individual Braid Arrangement:* Each braid is uniformly *tightly formed and secured* from the root, giving it a *smooth, dense, and rope-like* appearance. The *consistent short-to-medium length* allows the braids to *maintain structure and lay flat* against the curvature of the scalp.

*Section Dimensions (Inferred Range):*
   - Count: *2* individual cornrow braids across the top
   - Thickness: *20-25 mm* width per individual unit
   - Part width: *2-3 mm* (razor part) between sections

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *shaved, high skin fade* area provides the architectural support and *sharp, dramatic contrast* for the cornrows:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers and a razor (foil shavers/straight razor for closest shave)*.
   - *Front:* A *straight, hard line* is placed across the *forehead* (frontal hairline), marking the sharp boundary of the *scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, acute-angle corner* is meticulously placed at the *temporal line* to connect the front hairline with the vertical line of the side fade, creating a *highly visible, geometrically defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends vertically downward from the sharp C-Cup corner.
   
   - *Nape/Back:* (Inferred from high side fade) The back hairline is likely either *fully faded to skin* or finished with a *sharp, tapered/blocked edge-up* below the occipital bone.

*Fade/Taper Transition:* The fade starts *high* on the head, approximately *10-15 mm below the parietal ridge, meaning the transition from **skin-level (0/razor)* to the full length of the braided hair is kept *very short and tight (high contrast), primarily focused on the area **above and around the ear. This **high* placement *maximizes* the canvas for the *dense, textured, braided style* above.

*Fade Technical Specifications:*
   - Type: *High Skin Fade (Razor Fade)*
   - Starting Point: *Parietal Ridge / High Temple Area*
   - Fade Range: *Braided length (approx. 20mm+)* to *skin-level (0/razor)*
   - Transition Zone: *Tight/Short (10-15 mm)*
   - Circumference: The fade *wraps around the head*, maintaining its high-contrast transition point.
   - Technique: *Clipper work with guard progression (e.g., #2 to #0.5 to 0)* followed by *foil shaver/straight razor* for the skin-level finish.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *braids* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *maximum longevity and a flat, neat aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat, structured* appearance and *uniform* lay.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and highly textured* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* and showing *intentional directional styling* straight back.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, ruler-straight line, **almost surgical* in execution across the forehead
   - *C-Cup/Corner Arch:* *A sharp, 90-degree angular corner* that carves a *sharp, highly defined* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade
   - *Temporal Points:* The points are shaped into *crisp, clean corners*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and a straight razor*
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *smooth skin* of the fade below it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/darkest brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine* (likely from product use)
   - Texture Definition: *Highly defined/perfectly smooth* (on the braided surface)
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, moisturized*
   - Product Buildup: *Slight sheen visible*, indicating a light, non-flaking product.
   - Elasticity (Inferred): *Good* based on *visual tension and clean definition*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible side (left)* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the fade transition, and the pattern/thickness of the two cornrow braids* on the *left side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *crispness of the C-Cup and the sharp, straight part lines* are the primary focal points of the *haircut's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward-directed flow of the **front* cornrows creates a *defined, linear silhouette* effect. This *backward and slightly upward* styling is deliberate to *create height and establish clean flow* away from the face.
   - *Volume Distribution:* The bulk and volume of the *braided* hair are concentrated on the *front-top/midline* of the head, contrasting with the *completely bare* skin of the *high skin fade* on the sides. The hair's length is utilized for *upward structure/tight braiding* rather than a downward drape.

*Parting Visibility:* Due to the *smooth, high-tension* braiding and the viewing angle, the *rectangular* parts at the root are *clearly visible* as *razor-sharp part lines* along the central and lateral borders of the braids, *enhancing* the *structured, geometric* look of the style. The primary visible lines are the *shaved hard lines and the razor-sharp natural parts*.
*360° Structure Reference:* While the back is not fully visible, the overall style indicates the fade is a *wraparound skin fade* and the two cornrows likely *track straight back and conclude at the occipital bone/nape area*.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, directional* lighting (likely a studio setup or strong natural light).
      - Light Direction: *Front-lit/Side-lit* (to the subject's left).
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *shiny/dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp, bright* lighting *emphasizes* the precise contrast between the *dark, textured* braids and the *smooth* skin of the *fade/scalp*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* suggests *setting with a firm gel or braiding cream* and allowing it to air-dry/set.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* where desired (the sides/fade) and *maintain structure* where *design* permits (the braids).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **hairstyle and facial features (beard), while the brick background is **slightly blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*.
      - *Composition:* This *emphasizes* the hairstyle as a *key feature/focal point* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 30° to the subject's right* and *tilted slightly down*.
      - Impact: This positioning *reveals* the *full curvature of the cornrows and the entire arc of the high fade* on the visible side.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/Protective/Natural*
*Cultural Significance (If Applicable):* Cornrows are a protective style with deep cultural roots, historically associated with various African cultures, here presented in a *modern, minimalist, high-contrast, high-definition* style popular in contemporary barbering and grooming.
*Maintenance Requirements (Inferred):* *Medium/High* (requires frequent cleaning/re-shaving of the fade and edge-up, and re-braiding for longevity, with daily application of light oil/sheen product).`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830122/Hairstyles/WhatsApp_Image_2025-11-09_at_04.50.55_ee4b9f20_hhdwbw.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Zig-Zag Cornrows with Mid Skin Fade and Line-Up',
    
     ai_description: `### Title: Zig-Zag Cornrows with Mid Skin Fade and Line-Up

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *mixed-race/light-to-medium brown-skinned man* with a *Zig-Zag Cornrow* hairstyle, photographed from a *three-quarter view* (approximately 45° angle, revealing the left profile and frontal area).

*Core Style:* *Precision cornrows (canerows)* featuring geometric patterns on the top, integrated with a *sharp mid skin fade* on the sides and back. The overall aesthetic is *clean, edgy, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C or high-density 4B* classification), which provides *excellent grip, volume control, and hold capability* necessary for tight, defined cornrow execution and a crisp fade transition.
*Product Use (Inferred):* The hair displays a *semi-gloss/natural luster* and *highly defined texture, suggesting the use of a **holding gel, pomade, or moisturizing cream/oil blend* to *secure the braids, minimize flyaways and frizz, and provide a healthy sheen. The **tightness* at the root indicates *significant tension and a meticulous three-strand underhand braiding technique* was applied during styling.
*Cornrow Details:* *Underhand cornrow braiding* technique is utilized, where the strands are crossed under the center strand, causing the braid to stand out from the scalp (a raised, three-dimensional effect). The top features a complex, *dynamic zig-zag pattern* created by changing the direction of the braid rows at specific, angular points.
*Parting & Density:* *Extremely clean, razor-sharp parts* define each cornrow section. The density of the cornrows is *medium-high, ensuring **minimal* scalp visibility except for the clearly defined part lines.

---

### II. Arrangement and Placement of the Cornrows
The *cornrows* are meticulously placed to create a *dynamic, high-contrast, and geometrically precise visual effect*:

*Location:* The cornrows cover the *horseshoe section/top section* of the head, beginning just above the fade line (the parietal ridge). The hair below this line (the sides and back) is *fully faded to skin*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The cornrows in the first row, along the *frontal* hairline, are *angled diagonally backward and inward* toward the crown, running parallel to the edge-up line before joining the main design.
   - *Crown/Middle Rows:* The main rows of cornrows run from the *front* to the *back/nape. They feature a **prominent zig-zag (or chevron)* pattern. The front-most rows initially run *diagonally backward* before transitioning into the zig-zag. The direction changes are sharp and uniform across rows, establishing the primary geometric motif. This intentional placement *forces the patterned design* to be the focal point.
   - *Side Perimeter/Lateral Sections:* The cornrows immediately adjacent to the *mid skin fade* are braided *tightly and parallel* to the parietal ridge line, creating a *clean and defined* border against the very *short sides. This is the transition point where the **cornrows begin* a sharp boundary with the fade.
*Individual Braid Arrangement:* Each *braid* is uniformly *secured and formed* from the root, giving it a *tight, firm, and rope-like* appearance. The *consistent* length (extending a few centimeters past the fade line on the visible side) allows *for a clean hang-down and a defined silhouette*.

*Section Dimensions (Inferred):*
   - Count: *10-14* individual cornrows across the entire head (based on visible sections)
   - Thickness: *4-6 mm* diameter per individual braid unit
   - Length: *50-70 mm* (5-7 cm) measured from root to tip in the longest sections
   - Part width: *1-2 mm* (razor-sharp part lines) between sections

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *skin fade* area provides the architectural support and *sharp* contrast for the *cornrow style*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers and a straight-edge razor*.
   - *Front:* A *straight, hard line* is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   - *C-Cup/Temple Arch/Corner:* A *sharp, right-angle* corner is meticulously placed to connect the *front hairline* with the start of the *side fade's vertical line, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   - *Temporal Line:* The vertical line extends sharply down from the corner, following the curve of the sideburn area before transitioning into the fade.

*Fade/Taper Transition:* The fade starts *mid* on the head (just below the parietal ridge), meaning the transition from *skin-level (clipper-closed/razor-shaved)* to *full hair length (approximately 10mm)* is kept *gradual and blended, primarily focused on the area **around and below the parietal ridge and above the ear. This **mid* placement *balances* the canvas for the *textured* cornrow style above.

*Fade Technical Specifications:*
   - Type: *Mid Skin Fade* (a variation of the Shadow Fade that ends at skin)
   - Starting Point: *Parietal ridge* (the transition point where the head begins to curve downward)
   - Fade Range: *10-12mm (guard #3-4)* down to *skin/zero (foil shaver or razor)*
   - Transition Zone: *20-30 mm* (approximately 1 inch of vertical blending height)
   - Circumference: The fade is assumed to *wrap around the entire head* (lateral and posterior sections)
   - Technique: *Clipper-over-comb and/or fading technique* utilizing multiple guards to achieve a smooth, smokey transition.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Edge-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, 90-degree corner* (not a C-Cup) that creates an *angular* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The points are *squared-off and crisp*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/T-Outliners* followed by a *straight-edge razor* for the closest finish.
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the *forehead and temple*.
   - Contrast: *Sharp* contrast with the *coily/textured* cornrows above it.
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up three-quarter view* of the subject, with the light source *highlighting* the *left side and front* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *Zig-Zag braid pattern, the crisp edge-up, and the smooth transition of the mid skin fade* on the *left* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *geometric sharpness of the zig-zag lines* and the *90-degree corner of the hairline* are the primary focal points of the *haircut's/style's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward and downward* flow of the *front and side* cornrows allows them to *lay flat* against the scalp, with the ends naturally *hanging down* a few centimeters below the fade line. This styling is deliberate to *showcase the complex pattern and maintain a clean silhouette*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *top/crown* of the head, contrasting sharply with the *completely bare/short skin* of the *mid fade/sides. The hair's length is utilized for **defined structure and a low-profile silhouette* rather than *upward height*.

*Parting Visibility:* Due to the *meticulous* arrangement and the angle, the individual *razor-sharp part lines* at the root are *clearly visible, **revealing* the *structured* look of the style. The primary visible lines are the *shaved hard lines* on the scalp and the *sharp cornrow part lines*.
*360° Structure Reference:* While the back and right side are not visible in this view, the overall style indicates a *consistent mid skin fade* wrapping fully around the head and the *cornrow pattern continuing to the nape* in a cohesive manner.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, directional* *studio* lighting
      - Light Direction: *Side-lit/Front-lit*, with a soft fill light
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *dimensional* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* cornrows and the *smooth* skin of the *fade/scalp*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest the cornrows were *installed meticulously with strong-hold product* (gel or wax).
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and geometry* and *lay flat against gravity* where desired (the cornrows on the scalp) and *maintain a clean border* at the hairline.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **hairstyle and the sharp hairline* on the left side, while the background is *blurred (bokeh effect)*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*.
      - *Composition:* This *emphasizes* the hairstyle as a *key feature and focal point* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 45° left*, looking slightly down.
      - Impact: This positioning *reveals and emphasizes* the technical execution of the *side fade and the geometric cornrow pattern* on the left side.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary Protective Style* (Cornrows are a protective style due to the hair being tucked away and minimizing manipulation/exposure).
*Cultural Significance (If Applicable):* Cornrows are a traditional African and African diaspora hairstyle dating back thousands of years. The modern incorporation of sharp fades and elaborate geometric patterns represents a contemporary evolution of this cultural technique.
*Maintenance Requirements (Inferred):* *High maintenance* at the hairline (Line-Up/Edge-Up required every 1-2 weeks) and *medium maintenance* for the cornrows themselves (style lasts 3-6 weeks, requiring regular application of oil/moisturizer to the scalp and light product to maintain sheen).`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830252/Hairstyles/WhatsApp_Image_2025-11-09_at_04.55.20_421c775d_q6fzbx.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: `Men's Cornrows: V-Shaped Central and Diagonal Perimeter Pattern`,
    
     ai_description: `## Title: Men's Cornrows: V-Shaped Central and Diagonal Perimeter Pattern

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *dark skin tone Black man* with a *V-Shaped Cornrow* hairstyle, photographed from a *three-quarter view/downward gaze*.

*Core Style:* *Precision cornrow braiding* on the entire head, featuring a *symmetrical, central V-shape design* integrated with *cleanly braided sides* and a *natural/light taper* (Inferred) on the perimeter. The overall aesthetic is *clean, precise, highly defined, and **contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent grip and density* for *tight, secure, and long-lasting* braids with *minimal flyaways*.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *exceptional texture definition and root security, suggesting the use of a **braiding gel or pomade with high hold and moisturizing properties* to *secure the hair, define the parts, and provide shine, minimizing frizz. The **tightness and smoothness* at the root indicate *high, consistent tension* was applied during styling.
*Cornrows Details:* *On-the-scalp braids* are formed by sectioning hair and progressively adding hair as the braid travels along the scalp, where *three strands are plaited tightly. The **uniform tension and clean parts* are the defining technical features.
*Parting & Density:* *Straight, highly defined linear partings* (appears to be a mix of rectangular and triangular) separate the sections. The *high density* of the individual braids ensures *minimal* scalp visibility, maximizing the braided canvas.

---

### II. Arrangement and Placement of the Cornrows
The *cornrows* are meticulously placed to create a *symmetrical, forward-flowing linear design*:

*Location:* The *full head* is braided, extending from the front hairline to the nape. The sides are integrated into the main pattern, not faded (unlike many styles). The hair on the *entire circumference* is the canvas for the braiding pattern.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Center/Apex:* The most distinguishing feature is the *central V-shaped parting/design. A single, distinct cornrow travels **straight back* from the center of the forehead/hairline to an apex point (estimated near the crown). *Two main diagonal cornrows* start near the center-front hairline and travel *inward and back*, meeting at the apex of the central row, forming a symmetrical "V" pointing toward the crown.
   - *Front Row/Section:* The remaining cornrows on the front sides of the head are styled to *angle diagonally backward and inward, following the line of the center "V" structure. They are positioned to **sweep cleanly away from the face, creating a **smooth, defined* crown and top silhouette.
   - *Side Perimeter/Lateral Sections:* The cornrows immediately adjacent to the temple/ear area are *twisted/braided* to *curve slightly inward and back, maintaining the directional flow of the top section and creating a **clean, defined* vertical border. This area transitions directly to the short natural hair or light taper at the sideburns.
*Individual Braid Arrangement:* Each *unit* is uniformly *secured/formed/styled* from the root, giving it a *tight, smooth, and rope-like* appearance. The *consistent* length allows the braids to *lay flush against the scalp* with complete uniformity.

*Section Dimensions (Inferred):*
   - Count: *16-20* individual cornrows across the entire head (based on the visible sections)
   - Thickness: *4-6 mm* diameter per individual unit
   - Part width: *2-3 mm* between sections, exceptionally clean.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *natural hair/light taper* (Inferred) provides the sharp, clean perimeter:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *straight, hard* line is placed across the *forehead, marking the boundary of the **scalp/hairline*. The front corners are subtly rounded, avoiding a sharp boxy look.
   - *C-Cup/Temple Arch/Corner:* A *sharp* *angular* shape is meticulously placed to connect the *front hairline* with the start of the *sideburn, creating a **highly visible defined* corner. This placement is *critical* for the *crispness* of the entire look, providing a sharp contrast to the cornrows above.

*Fade/Taper Transition:* There does not appear to be a high-contrast skin fade. The hair on the sides and back is either *left short and natural* or a *low taper fade* is used (Inferred) to transition the shortest length at the sideburns and nape. This emphasizes the *braid pattern* rather than a sharp clipper cut.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight* and *firm, particularly near the roots. This indicates **significant, consistent* tension was applied during *installation* to ensure *longevity and a slick, flat aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* lay.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and firm* to touch, with *high* density and *firm* hold at the root.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp* *temple arch* that carves a *sharp angular* shape just above the temple area, perfectly connecting the front hairline to the sideburn area.
*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*.
   - Contrast: *Sharp* contrast with the *coiled/braided* hair above it.
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
*Finish Quality:*
   - Sheen Level: *Semi-gloss/high shine*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth* at the root, indicative of strong gel/pomade use.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter view/downward gaze* of the subject, with the light source *highlighting* the *front/top* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *V-shaped parting and the consistent tension/smoothness of the cornrows* on the *front/right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *geometric precision of the central V-parting* is the primary focal point of the *style's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward/upward-directed flow of the **front-top* cornrows creates a *smooth, defined* silhouette, sweeping cleanly away from the forehead. This *backward* styling is deliberate to *maximize definition and reveal the sharp hairline*.
   - *Volume Distribution:* The hair is *compressed* into the braids, concentrating its density into a *flat, tight pattern* against the scalp, which contrasts with the typically voluminous natural texture.

*Parting Visibility:* Due to the *dense, tight* arrangement and the *high-quality parting technique, the individual **linear/diagonal* parts at the root are *clearly visible, **enhancing* the *structured* look of the style.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, directional studio* lighting
      - Light Direction: *Front-lit/top-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* texture appear *shiny* and *well-moisturized*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark textured* *braids* and the *smooth* skin of the *scalp/hairline*.

   *Styling Execution:*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* where desired (the entire head) and *maintain structure*.

   *Head Position:*
      - Position: *Turned slightly right with a downward gaze*
      - Impact: This positioning *emphasizes* the *V-shaped frontal design* and the *precision of the line-up* on the visible temple.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary Protective/Natural*
*Cultural Significance (If Applicable):* Cornrows are a traditional and highly versatile African braiding technique, here presented in a clean, modern geometric style popular in men's styling.
*Maintenance Requirements (Inferred):* *Moderate*. Requires regular cleansing of the scalp/parts and re-oiling/moisturizing to maintain sheen and prevent dryness. The style itself is low-manipulation but requires periodic hairline maintenance (edge-up).`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830389/Hairstyles/WhatsApp_Image_2025-11-09_at_05.32.31_3fb0c627_lxcsaf.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Cornrow Crown Design with Mid Skin Fade',
    
     ai_description: `## Title: Cornrow Crown Design with Mid Skin Fade

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black (African Descent)* man with a *Cornrow Crown Design with Mid Skin Fade* hairstyle, photographed from *front view/slightly tilted down*.

*Core Style:* *Intricate cornrows* on top, integrated with a *crisp, mid-skin fade* on the sides and back. The overall aesthetic is *clean, highly defined, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *kinky/coily* (Type *4C* classification), which provides *excellent density, strong texture, and high hold capability* essential for securing the tight cornrows and achieving a crisp edge-up.
*Product Use (Inferred):* The hair displays a *semi-gloss/natural luster* and *high texture definition* with *minimal flyaways, suggesting the use of a **lightweight gel or pomade* to *secure the parts, define the braid pattern, and provide shine, minimizing frizz. The **tightness* at the root indicates *high tension* was applied during styling to ensure maximum longevity and pattern clarity.
*Cornrow Details:* *Underhand cornrow braiding* is the primary styling method, where *three sections of hair are braided closely to the scalp, following a pre-planned **circular and diagonal* pattern. The finished product is a series of raised, rope-like braids.
*Parting & Density:* *Diagonal and curved parting* is used to create the sweeping, concentric pattern on top. The section sizes are *uniform and medium-small, approximately **5-7 mm* wide, ensuring *minimal* scalp visibility except directly along the part lines.

---

### II. Arrangement and Placement of the Cornrows
The *cornrows* are meticulously placed to create a *dynamic, concentric crown effect*:

*Location:* The style covers the *horseshoe section* (the top area from the recession points around the crown). The *side perimeter and back* hair is *fully faded to skin*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The cornrows in the first row, near the *frontal hairline, start near the temple and **curve sharply backward and upward* into the main concentric design. They are positioned to *sweep back off the forehead, creating a **clean and defined* *crown* that sits *securely on the head, avoiding any overhang*.
   - *Crown/Middle Rows:* The majority of the cornrows run in *concentric, sweeping circles* centered slightly toward the *back/crown* of the head. This intentional placement *forces volume away from* the face and toward the center-top, *preventing* a heavy frontal look and thus creating a *tight, rounded, structured silhouette. A few **diagonal* rows (at least three visible on the front-right) are integrated into the sweeping pattern, creating visual interest and breaking the purely circular flow.
   - *Side Perimeter/Lateral Sections:* The cornrows immediately adjacent to the *mid-skin fade* on the left and right sides are styled to *angle inward/curve slightly* following the head shape, creating a *clean and defined* *curved* border against the *short sides/skin fade. This is the transition point where the **braids* are secured tightly and end abruptly to meet the short fade.
*Individual Braid Arrangement:* Each *braid* is uniformly *formed and tightly secured* from the root, giving it a *tight, rope-like* appearance. The *consistent, short* length ensures *maximum uniformity and structural integrity* of the pattern.

*Section Dimensions:*
   - Count: *10-14* individual cornrows across the visible top section (estimated 18-24 total for full head)
   - Thickness: *4-6 mm* diameter per individual unit
   - Length: *~50-70 mm* total hair length (secured into the braid structure)
   - Part width: *~1-2 mm* between sections (defining the part line)

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *shaved/faded* area provides the architectural support and *sharp* contrast for the *cornrow crown*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *straight, hard line* is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed to connect the *front hairline* with the start of the *side fade/skin* area, creating a *highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   - *Temporal Line:* The line is *hard and vertical* extending down to meet the *skin fade*.
   - *Nape/Back:* (Inferred) Likely a *skin fade* continuing to the nape, or a *blocked/tapered* neck line.

*Fade/Taper Transition:* The fade starts *mid* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *full hair length (approximately 6-8mm before braiding)* is kept *gradual and blended, primarily focused on the area **above and around the ear/below the parietal ridge. This **mid* placement *balances* the canvas for the *dense/textured* *cornrows* above.

*Fade Technical Specifications:*
   - Type: *Mid Skin Fade (Bald Fade)*
   - Starting Point: *Mid-point* (around the top of the ear/temporal line)
   - Fade Range: *Skin (0mm)* to *Guard #2 (6mm)* (or blend length for braiding)
   - Transition Zone: *~20-30 mm* height
   - Circumference: *Wraps around the entire head*
   - Technique: *Clipper-over-comb and detailed fading* for a smooth transition from skin to hair.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *longevity and pattern clarity. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang (or lack thereof, as they lay flat).
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch in the braids, with *high* density and *firm* hold at the root. The shaved area would be *smooth*.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* and showing *intentional directional styling* following the braided pattern.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, angular corner* that creates a *sharp, crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The corners are *sharp and block-like*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth* on the surface of the braids and the shaved area.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, moisturized*
   - Product Buildup: *None visible, only a slight sheen*
   - Elasticity (Inferred): *Good* based on *visual tension and braid definition*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **front view/slightly tilted down* of the subject, with the light source *highlighting* the *front* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the mid-fade transition, and the **sweeping cornrow pattern* on the *front/right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crispness of the edge-up* and the *tight, artistic curve of the cornrow pattern* are the primary focal points of the *haircut's/style's* precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *backward/upward-directed flow of the **front* cornrows creates a *defined, tight silhouette, specifically **sitting securely on the head, revealing the full forehead. This **backward* styling is deliberate to *create a clean look and emphasize the forehead/edge-up*.
   - *Volume Distribution:* The bulk and volume of the *braided* hair are concentrated on the *front-top/crown* of the head, contrasting with the *completely bare/skin* of the *mid fade/sides. The hair's length is utilized for **structured pattern and definition* rather than *length or free hang*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *diagonal/curved* parts at the root are *clearly visible* by the surrounding *braids, **revealing* the *highly structured* look of the style. The primary visible lines are the *shaved hard lines* and the *precisely etched part lines*.
*360° Structure Reference:* While the back is not visible in this view, the overall style indicates a *uniform mid-skin fade and a continuation of the cornrow pattern to the occipital bone*, maintaining consistency on all sides.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft* *studio* lighting
      - Light Direction: *Front-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and texture definition, making the **rope-like* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *cornrows* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined edges* suggest the style was *installed with significant tension and a defining product (gel/mousse)*.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and pattern fidelity* and *lay flat against gravity* where desired (the entire top area).

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **hairstyle and the front hairline, while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution, sharp detail, professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature/focal point* of the portrait

   *Head Position:*
      - Position: *Facing forward, looking slightly down*
      - Impact: This positioning *emphasizes* the *frontal hairline precision* and the *complexity of the crown pattern* as it sweeps back.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary Protective Style*
*Cultural Significance (If Applicable):* Cornrows are a *traditional and highly significant African/African Diaspora braiding technique, used here in a **modern, artistic, and precise* pattern combined with contemporary barbering (the skin fade).
*Maintenance Requirements (Inferred):* *Low daily maintenance* for the braids themselves; *high-precision maintenance* for the fade and edge-up, requiring touch-ups every *1-2 weeks*.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830636/Hairstyles/WhatsApp_Image_2025-11-09_at_05.52.59_9964a7bf_gbqlyr.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'High Volume Two-Strand Twist Locs with Temple Taper Fade',
    
     ai_description: `### Title: High Volume Two-Strand Twist Locs with Temple Taper Fade

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *dark-skinned Black man* with a *High Volume Two-Strand Twist Locs* hairstyle, photographed from *three-quarter view (slightly turned to his left)*.

*Core Style:* *Intricate and voluminous two-strand twists, forming mature locs on top, integrated with a **low-to-mid taper fade* on the sides and back. The overall aesthetic is *contemporary, textured, and highly defined*, achieving a dramatic, eye-catching silhouette.
*Hair Texture (Inferred):* The natural hair appears to be *kinky/coily* (Type *4B-4C* classification), which provides *excellent natural curl memory and density* to support the significant volume and maintain the shape of the thick, mature locs and the tightness of the twists.
*Product Use (Inferred):* The locs and twists display a *semi-gloss sheen* and *exceptional texture definition* with minimal flyaways, suggesting the use of a *lightweight loc gel, moisturizing cream, and/or natural oil (e.g., castor, jojoba)* to *secure the twist definition, moisturize the hair shaft, and provide a healthy luster. The **tightness* at the root indicates *high-tension retwisting technique* was applied during styling to secure the new growth.
*Loc/Twist Details:* *Large-diameter two-strand twists* are used, where *two mature loc sections are coiled tightly around each other* from the root to the tip. These twists are then *swept up and back* to create a unified, high-volume mass.
*Parting & Density:* *Rectangular/box parting* is used across the visible scalp area. The *medium-to-high* density of the *locs/twists* ensures *minimal* scalp visibility, especially in the styled, voluminous sections. The primary visible parts are the straight lines of the frontal cornrow sections. The transition area features two small, cleanly parted *cornrows* running horizontally along the superior edge of the fade. The hair on the sides is cleanly shaved to a short, textured length.

---

### II. Arrangement and Placement of the Twist Locs
"The *locs, styled as **two-strand twists, are meticulously placed to create a **high, sweeping, and voluminous updo* effect:

*Location:* *Horseshoe section* (the main volume area) is covered by the locs. The hair at the *sides and back perimeter* is *tapered* or cut very short.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The locs are anchored by two parallel *horizontal cornrows* above the fade, which serve as a foundational anchor. The main body of twists above this is directed *sweeping up and back* away from the face to create a towering, voluminous structure.
   - *Crown/Middle Rows:* The majority of the two-strand twists run from the *center/front-top* and are directed *backward and slightly laterally* before the long lengths are gathered and allowed to drape naturally. This intentional placement *forces volume toward the crown* and *away from* the face, thus creating the *high-top, elongated silhouette*.
   - *Side Perimeter/Lateral Sections:* The *short, clean hair* immediately adjacent to the fade on the left and right sides is *fully blended* down to skin level. The locs above this transition point *hang straight down* or are *directed back* over the shoulder, creating a *defined, vertical* border against the short sides. This is the transition point where the *locs' volume dramatically contrasts with the short, structured cut*.
*Individual Twist Arrangement:* Each twist unit is uniformly *coiled and secured* from the root, giving it a *thick, rope-like* appearance. The *consistent* length allows *the gathered volume to cascade in a unified, heavy drape* over the shoulders/back.

*Section Dimensions (Inferred):*
   - Count: *25-40* individual locs (approx.) across the main styled area
   - Thickness: *8-12 mm* diameter per individual twist unit
   - Length: *30-40 cm* measured from root to tip (estimated due to gathered style)
   - Part width: *5-7 mm* (estimated rectangular sections) between parts

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *tapered/faded* area provides the architectural support and *sharp* contrast for the *voluminous locs*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers.
   - *Front:* A *straight* *hard* line is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp angular* *shape* is meticulously placed to connect the *front hairline* with the start of the *side fade/taper, creating a **highly visible defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* *The line extends sharply down from the C-Cup corner and blends immediately into the fade.*
   
   - *Nape/Back:* (Not visible, but inferred) *Tapered fade* to follow the side aesthetic.

*Fade/Taper Transition:* The fade starts *low-to-mid* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *textured length* is kept *very short and tight, primarily focused on the area **around the temple and above the ear. This **low-to-mid* placement *maximizes* the canvas for the *dense, voluminous* *locs* above.

*Fade Technical Specifications (Inferred):*
   - Type: *Temple Taper Fade/Low Taper Fade*
   - Starting Point: *Temporal line/slightly above the ear*
   - Fade Range: *Skin (0)* to *approx. 9mm (guard #3)* length (or the length of the new growth)
   - Transition Zone: *10-15 mm* (tight blend)
   - Circumference: *Wraps around the front sides, diminishing slightly towards the back/nape*
   - Technique: *Clipper-over-comb/fading technique* for a clean, short blend.

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *twists/locs* appear *tight/medium* and *firm/rope-like, particularly near the roots. This indicates **significant* tension was applied during *retwisting* to ensure *longevity/structure. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold/intentional directional styling* with the hair *maintaining position* due to the styling and weight of the locs.

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* *A sharp* *C-Cup/temple arch* that carves a *sharp angular* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* *Corners are squared off and precisely defined.*

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black/very dark brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth* at the roots and through the twist definition.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *Slight sheen* suggests product use, but *no visible heavy coating*
   - Elasticity (Inferred): *Good* based on *tight curl definition/tension holding the twists*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up/medium shot, **three-quarter view (left side prominent)* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, temple taper fade transition, and the directional flow of the frontal twists/cornrows* on the *left* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crispness and curvature of the C-Cup and the contrast between the dense volume and the sharp cut* is the primary focal point of the *haircut's/style's* precision.

*Twist Loc Arrangement in Current View:*
   - *Overhang/Projection:* The *backward/upward-directed flow of the **front-top* *twists* creates a *dramatic high-volume silhouette, specifically **elevated well above the head and then draping down behind the shoulders. This **upward* styling is deliberate to *create height/establish balance* with the short sides.
   - *Volume Distribution:* The bulk and volume of the *twisted locs* are concentrated on the *crown/front-top* of the head, contrasting with the *short, shaved* *skin/hair* of the *taper fade/sides. The hair's length is utilized for **upward height and downward drape* rather than *lateral spread*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *rectangular* parts at the root are *partially visible* in the frontal section but *concealed* by the large twists, *enhancing* the *full/structured* look of the style. The primary visible lines are the *shaved hard lines and the two horizontal cornrows*, not the loc parts.
*360° Structure Reference:* While *the back/right side* is not fully visible in this view, the overall style indicates *a symmetrical, consistent low/mid-taper fade wrapping around the entire perimeter with the high-volume locs covering the horseshoe section*.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Front-lit/slightly side-lit*
      - Effect on Style: The lighting *enhances* the *product sheen/definition, making the **rope-like* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *locs* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest a technique where the locs were *retwisted at the root* and the two-strand twist was *applied wet with a holding product* before being allowed to set/dry.
      - *Adaptive Styling:* The styling is adaptively *crisp and dramatic—meaning it is styled to **maximize definition and create height* and *stand upright* where desired (*the crown) and **hang freely* where *length* permits

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on **subject's face/hairstyle* and the primary hair elements (*hanging twists/sharp hairline/fade transition*)
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes/frames* the hairstyle as a *key feature/focal point* of the portrait

   *Head Position:*
      - Position: *Turned 30° left*
      - Impact: This positioning *reveals and emphasizes* the *precision of the left-side temple fade and C-Cup*"

---

### X. Cultural Context and Style Classification
"*Style Category:* *Contemporary/Loc'd/Protective*
*Cultural Significance (If Applicable):* Locs (or Dreadlocks) are a style with deep historical and cultural roots, often associated with spiritual or personal journeys. The incorporation of a modern, sharp fade/line-up creates a highly popular *contemporary urban style*.
*Maintenance Requirements (Inferred):* *Moderate-to-High* time investment for monthly/bi-weekly *loc retwisting/re-coiling* and *weekly/bi-weekly* maintenance of the *taper fade/line-up*; requires moisturizing products.`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830718/Hairstyles/WhatsApp_Image_2025-11-09_at_07.29.31_e1e29e5d_q3jesg.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Radial Cornrow Knot with High Skin Fade (Man Bun or Top Knot Variation)',
    
     ai_description: `## Title: Radial Cornrow Knot with High Skin Fade (Man Bun/Top Knot Variation)

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *light-skinned/fair complexion man* with a *Radial Cornrow Knot with High Skin Fade* hairstyle, photographed from a *three-quarter view (approximately 45° turn)*.

*Core Style:* *Intricate radial cornrows* on top, integrated with a *high, tight skin fade* on the sides and back. The overall aesthetic is *clean, edgy, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4A-4B* classification), which provides *excellent density, volume, and grip* capability, crucial for securing the tight cornrows and maintaining the contrast of the fade.
*Product Use (Inferred):* The hair displays a *moderate semi-gloss sheen* and *highly defined texture, suggesting the use of **light pomade or moisturizing gel/oil* to *secure the braids, minimize frizz, and provide a healthy luster. The **extreme tightness* at the root indicates *high tension* was applied during styling to achieve longevity and sharp definition.
*Cornrow Details:* *Underhand (or inverse) cornrows, where the hair is braided directly *onto the scalp. The technique creates a *highly raised, three-dimensional rope-like texture* that follows the contours of the radial parting.
*Parting & Density:* *Sharp, radial parting* originating from a central point on the crown/vertex, with uniform, trapezoidal/triangular sections extending towards the perimeter. The *high density* of the individual cornrows (relative to the parted area) ensures *minimal* scalp visibility except along the precisely cut part lines.

---

### II. Arrangement and Placement of the Cornrows
The *cornrows* are meticulously placed to create a *starburst/radial* visual effect that draws the eye upward to the top knot:

*Location:* The cornrows occupy the *horseshoe/top section* (from recession points to the crown/upper occipital bone). The *sides and back* hair is *fully skin-faded/shaved*.
*Directional Flow (The Curve/Pattern):* The precise placement is radially symmetric:
   - *Front Row/Section:* The cornrows in the first row, along the *front hairline/temples, angle **backward and slightly inward* towards the central gathering point. They are positioned to *pull the hair away from the face* while providing a clean border against the sharp hairline, forming a *crisp, defined silhouette* that sits *high and tight* to the scalp.
   - *Crown/Middle Rows:* The majority of the cornrows run *radially* from the *central point (vertex/crown)* outward towards the perimeter, then execute a *sharp directional turn* to converge back inward towards the *single top knot. This intentional placement **forces volume toward the center-top, **preventing* any side or forward hang, thus creating the *tight, elevated top knot silhouette*.
   - *Side Perimeter/Lateral Sections:* The cornrows immediately adjacent to the *high skin fade* are braided *tightly inward and upward, creating a **clean, defined diagonal border* against the shaved area. This is the transition point where the *braided style lifts completely off the scalp* to be gathered at the top.
*Individual Cornrow Arrangement:* Each cornrow is uniformly *secured/formed* from the root with *high, consistent tension, giving it a **tight, highly defined rope-like* appearance. The length of the braided portion is uniform until it reaches the top knot.

*Section Dimensions:*
   - Count: *7-9* individual cornrows across the entire braided section (7 visible major sections).
   - Thickness: *8-12 mm* width per individual cornrow.
   - Length: The unbraided portion gathered in the knot appears to be *approximately 80-120 mm* (3-5 inches) long before being coiled/secured.
   - Part width: *2-4 mm* wide, sharply defined part lines between sections.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *shaved/faded* area provides the architectural support and *sharp contrast* for the *radial cornrows*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *straight/slightly curved hard line* is placed across the *forehead* and *temples*, marking the definitive boundary of the scalp.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed to connect the *front hairline* with the start of the *side fade/vertical drop, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends straight and sharp from the front corner point down to the start of the skin fade.
   
   - *Nape/Back:* (Inferred) Likely a *skin fade* continuing completely around the back, finishing with a *natural or softly rounded* neckline below the occipital bone.

*Fade/Taper Transition:* The fade starts *high* on the head, meaning the transition from *skin-level (0/clipper-closed)* to the start of the braided hair is kept *very short and tight, starting near the **parietal ridge. This **high* placement *maximizes* the canvas for the *textured* cornrow style above.

*Fade Technical Specifications:*
   - Type: *High Skin Fade (or Bald Fade)*
   - Starting Point: *High temporal line/parietal ridge*
   - Fade Range: *Skin (0)* to *6-8 mm* (clipper guard #2-3) transition at the top border, with the blend primarily concentrated in the *first 15-20 mm* of hair growth.
   - Transition Zone: *Very short and steep (10-15 mm vertical rise)*.
   - Circumference: The fade wraps *completely and uniformly* around the entire head from the front corners.
   - Technique: *Clipper-over-comb/freehand fading technique* for a seamless, rapid transition.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *extremely tight* and *firm, particularly near the roots and where the hair transitions to the fade. This indicates **significant* tension was applied during *installation* to ensure *maximum longevity and a flat, close-to-the-scalp aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat, structured* hang and *uniform* style.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth and taut* along the cornrow body and *smooth/silky* at the tips, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* due to the tension and being gathered into a knot. The hanging loose braid ends show *minimal natural movement*, primarily responding to gravity.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, straight line, **almost surgical* in execution across the forehead.
   - *C-Cup/Corner Arch:* A *sharp, angular* *corner/box* that is meticulously shaped just above the temple area, perfectly connecting the frontal hairline to the vertical line of the fade.
   - *Temporal Points:* The points are *sharply squared* where the front and side lines meet.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead* and down the *temple/side*
   - Contrast: *Sharp* contrast with the *smooth, dark skin* of the fade above it
   - Skill Level: This precision is a signature of *high-skill barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* along the entire length of the cornrows.
   - Frizz Control: *Completely smooth/minimal frizz*, indicating effective product application.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible/slight sheen*
   - Elasticity (Inferred): *Good* based on *visual tension and definition*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the fade transition, and the radial cornrow pattern* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp corner of the Edge-Up/Line-Up* and the *central radial parting structure* are the primary focal points of the style's precision.

*Cornrow Arrangement in Current View:*
   - *Overhang/Projection:* The *upward/backward-directed flow of all cornrows creates a **clean, defined, non-fringe* silhouette. The gathered knot is positioned at the *vertex/upper crown*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated in the *single bun/knot at the crown, creating a vertical mass, sharply contrasting with the **completely bare* skin of the *high skin fade* below. The hair's length is utilized for *upward height and structure* rather than downward drape, except for the *four loose, hanging braid ends* from the knot.

*Parting Visibility:* Due to the *tight, radial* arrangement and the angle, the individual *sharp, trapezoidal* parts at the root are *clearly visible, **revealing* the *structured* look of the style. The primary visible lines are the *shaved hard lines* and the *part lines*.
*360° Structure Reference:* While the *back* is not visible in this view, the overall style indicates the *high skin fade continues uniformly around the entire head* and the *radial pattern continues to converge at the central knot/bun*.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, even* *studio* lighting
      - Light Direction: Predominantly *front-lit/soft side-lit*
      - Effect on Style: The lighting *enhances* the *texture/definition, making the **rope-like* cornrows appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* *cornrows* and the *smooth, light skin* of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* suggests the braids were created using a *firm holding product* and set with *high, consistent tension* from the root.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* at the scalp, but the ends are styled to *hang freely* where permitted by the knot structure.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **hairstyle* (especially the hanging twists/sharp hairline/fade transition), while the background is *completely white/uniform*.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature/focal point* of the portrait

   *Head Position:*
      - Position: *Turned approximately 30-45° right*
      - Impact: This positioning *emphasizes* the *sharp edge-up* and the *high skin fade transition* on the visible right side.

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:*
      - Type: *Small metal cuffs/beads* (at the tips of the hanging braids) and a *hair tie/band* (securing the knot).
      - Placement: *Terminal ends of the four loose braid strands* and *at the base of the top knot*.
      - Material: *Metal* (for beads/cuffs) and *elastic/fabric* (for the tie).
      - Color: *Silver/grey* (cuffs) and *black* (tie)
      - Function: *Decorative* (cuffs) and *functional/securing* (tie).

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/Protective*
*Cultural Significance (If Applicable):* Cornrows are a *traditional African and African diaspora* protective style, here adapted into a modern, *men's fashion-forward top knot/man bun* combination.
*Maintenance Requirements (Inferred):* *Moderate-to-High* time investment; requires *product application* (oil/moisturizer) for scalp health, *precise line-up/fade touch-up* every *1-2 weeks* for maximum crispness, and the cornrow style lasts approximately *3-6 weeks*.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830822/Hairstyles/WhatsApp_Image_2025-11-09_at_07.34.43_7a085eea_e14fo6.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'High Skin Fade with Textured Crop and Fashion Color',
    
     ai_description: `## Title: High Skin Fade with Textured Crop and Fashion Color

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *male subject of Mediterranean/Middle Eastern appearance* with a *High Skin Fade and Textured Crop* hairstyle, photographed from *three-quarter view* (approximately 30-40 degrees from the profile).

*Core Style:* *Highly textured, directionally styled crop* on top, integrated with a *high skin fade* on the sides and back. The overall aesthetic is *edgy, contemporary, and dramatically colored*.
*Hair Texture (Inferred):* The natural hair appears to be *wavy to curly* (Type *2B-3A* classification), which provides *excellent natural volume, lift, and texture* essential for the crop's aggressive, upward styling and hold capability.
*Product Use (Inferred):* The hair displays *high texture definition, a matte to semi-matte finish, and firm hold, suggesting the use of **clay, paste, or matte pomade* to *maximize lift, separate strands, and secure the spiked, directional flow, minimizing frizz while maximizing texture. The **dramatic lift* at the root indicates *significant styling product and possibly heat (blow drying) was applied* to create volume and tension.
*Color Details:* The top section is uniformly colored in a *vibrant, electric blue fashion tone* with *lighter, almost cyan highlights* interspersed throughout the texture, contrasting sharply with the natural dark color of the faded sides.
*Parting & Density:* The top section is styled with a *chaotic, free-form, textured part/separation* without a defined linear part. The *high* density of the hair on top, combined with the volume, ensures *minimal* scalp visibility.

---

### II. Arrangement and Placement of the Textured Crop
The vibrant blue textured hair is meticulously placed to create a *high-volume, spiky, forward-sweeping silhouette*:

*Location:* The textured crop is confined to the *horseshoe section/parietal ridge area* on top. The hair *inferior to the parietal ridge* is fully faded to skin level.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The crop in the front row, along the *frontal hairline, is styled to **sweep predominantly forward and slightly upward. They are positioned to **overhang and partially obscure the forehead/frame the face* with soft, chaotic texture, forming a *heavy, textured fringe/bang-like silhouette* that sits *high above the brow line* but is pushed toward the face.
   - *Crown/Middle Rows:* The hair running from the *crown/vertex* to the front is directed *forward and aggressively upward. This intentional placement **forces maximum volume toward the anterior portion of the head, **preventing* a flat or rounded look, thus creating the *spiky, textured, elongated silhouette*.
   - *Side Perimeter/Lateral Sections:* The longest hair immediately adjacent to the *high skin fade* is texturized and styled to *jut outward and upward, creating a **defined, dimensional, and dramatic* border against the very short sides. This is the transition point where the *long colored hair transitions abruptly* into the faded section.
*Individual Strand Arrangement:* Each tuft of hair is uniformly *separated and lifted* from the root, giving it a *spiky, multi-directional* appearance. The *consistent, moderate length* allows *volume and lift* while maintaining a tailored shape.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *high skin fade* provides the architectural support and *sharp, high-contrast* base for the *vibrant blue crop*:

*Hairline (The Edge-Up/Line-Up):* The visible hairline is *carved and shaped* using precise trimmers/clippers.
   - *Front:* A *defined but slightly softened* hard line is placed across the *forehead/temples, marking the boundary of the **scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp angular* shape is meticulously placed to connect the *front hairline* with the start of the *side fade, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* *Extremely sharp line* extends from the temple arch downward toward the ear, maintaining the defined edge work.
   
   - *Nape/Back (Inferred):* Would likely be a continuation of the high skin fade, either tapered or blocked at the neckline.

*Fade/Taper Transition:* The fade starts *high* on the head, meaning the transition from *skin-level (0/clipper-closed)* to the *full hair length (estimated #1.5 or #2 guard blend)* is kept *very short and tight, primarily focused on the area **above the ear and around the parietal ridge. This **high* placement *maximizes* the canvas for the *dense, textured, voluminous blue crop* above.

*Fade Technical Specifications:*
   - Type: *High Skin Fade (Bald Fade)*
   - Starting Point: *High on the parietal ridge/upper temporal line*
   - Fade Range: *Skin (0)* to *approx. 5-6mm* (or guard #1.5/2 blend at the transition line)
   - Transition Zone: *Tight transition zone* (approx. 10-15mm vertical height for the blend)
   - Circumference: *Wraps around the visible head contour*
   - Technique: *Clipper-over-skin/blending technique* to create a seamless, high-contrast gradient.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *crop* appears *medium to tight* and *firm/rigid* in its lifted state, particularly near the roots. This indicates *significant* product hold and directional styling was applied to ensure *volume and structure. The texture is **spiky and separated—not **soft—contributing to its **dramatic* structure and *uniform* lift.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/slightly coarse* to touch due to the product, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* against gravity, showing *intentional directional styling* forward and upward.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line* across the forehead, *almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp angular corner* that carves a *precise corner* just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* *Precisely squared* corners at the temples.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/clippers/razors*
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the *forehead and temple*
   - Contrast: *Sharp* contrast with the *smooth* skin above it
   - Skill Level: This precision is a signature of *high-skill barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural Dark Brown/Black* (visible in stubble/fade)
   - Color Variations: *Vibrant Electric Blue* with *lighter blue/cyan streaks* in the textured ends
   - Color Distribution: *Consistent color saturation* across all long sections, dramatically contrasting with the sides/back.

*Finish Quality:*
   - Sheen Level: *Matte/natural luster* (suggesting clay or paste product)
   - Texture Definition: *Highly defined* with individual strands/groups clearly separated
   - Frizz Control: *Excellent frizz control* achieved through product use

*Health Indicators:*
   - Overall Condition: *Appears healthy/well-maintained* despite the aggressive color treatment
   - Product Buildup: *Slight matte coating* visible on the hair texture
   - Elasticity (Inferred): *Compromised* based on the extreme lift and color, but expertly concealed by styling

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *high skin fade transition, the sharp C-Cup hairline, and the chaotic forward-sweep of the blue texture* the most visually dominant technical elements.
   - *Focal Points:* The *precision of the hairline coupled with the aggressive volume of the colored top* is the primary focal point of the *haircut's* precision and style.

*Textured Crop Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and upward-directed flow of the **front-top* hair creates a *dramatic, voluminous* *fringe/silhouette* effect, specifically *jutting out over the forehead. This **forward/upward* styling is deliberate to *maximize height and establish a dynamic silhouette*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *front-top/parietal ridge* of the head, contrasting sharply with the *completely bare/short skin* of the *high fade* on the visible side. The hair's length is utilized for *upward height and lateral spread* rather than a downward drape.

*Parting Visibility:* Due to the *dense, lifted* arrangement and the product-enhanced texture, the natural part is *not visible. The primary visible lines are the **shaved hard lines* of the edge-up, not natural parts.
*360° Structure Reference:* While the back is not visible in this view, the overall style indicates the fade would be continued as a *high skin fade to the nape, and the textured crop would remain **long on the crown* to maintain volume.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *studio/controlled* lighting
      - Light Direction: *Front-lit/side-lit*
      - Effect on Style: The lighting *enhances* the *texture/definition* and *vibrancy of the blue color, making the **separated* texture appear *dimensional* and *dramatically colored*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *vibrant blue textured* *crop* and the *smooth, dark skin/stubble* of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/spiky separation* and *defined tips* suggest *set with a blow-dryer and heavy product (clay/paste)*
      - *Adaptive Styling:* The styling is adaptively *crisp and dramatic—meaning it is styled to **maximize definition and create movement* and *stand upright* where desired (*the top*), contrasting the clean lines of the cut.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the hairstyle, while the background is **partially blurred (bokeh effect)*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature and focal point* of the portrait

   *Head Position:*
      - Position: *Turned approximately 30-40° left* (a three-quarter view)
      - Impact: This positioning *reveals/emphasizes* the *C-Cup, the high fade transition, and the directional sweep of the textured crop*.

---

### IX. Accessories and Additional Elements
*Hair Accessories:*
   - None visible in the hair. The subject is wearing a *small silver hoop earring* in the visible ear and has a *neck tattoo*, which complements the edgy aesthetic of the hair.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary, Edgy/Punk-Influenced, Fashion Color*
*Cultural Significance (If Applicable):* The style is a modern, high-contrast evolution of classic clipper cuts combined with high-fashion color and aggressive texturing.
*Maintenance Requirements (Inferred):* *High* (requires frequent fade touch-ups, color maintenance, and daily styling with premium products).`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830897/Hairstyles/WhatsApp_Image_2025-11-09_at_07.39.37_d979099e_m7x69j.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Asymmetrical High Top Fade with Skin Taper and Defined Line-Up',
    
     ai_description: `### Title: Asymmetrical High Top Fade with Skin Taper and Defined Line-Up

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *mixed-race/light brown skin tone man* with an *Asymmetrical High Top Fade* hairstyle, photographed from a *front view/slight three-quarter left* viewing angle.

*Core Style:* *Sculpted, asymmetrical high top* styled on top with a firm hold and a slight forward and upward projection, integrated with a *low to mid skin taper fade* on the sides and back. The overall aesthetic is *ultra-clean, contemporary, and geometrically defined*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification, based on the tight coil pattern and ability to maintain structure when cut short and shaped), which provides *excellent natural density and hold capability* necessary for the high top's volume and rigid shape.
*Product Use (Inferred):* The top hair displays *high hold* and a *very slight semi-gloss sheen, suggesting the use of a **strong-hold pomade, gel, or wax* to *secure the height, maintain the crisp shape, and minimize frizz. The **extreme tightness/firmness* at the root indicates *significant product and tension* was applied during styling and shaping.
*[High Top] Details:* The top section is cut and sculpted into a high, block-like shape that is *intentionally asymmetrical,* being slightly *higher and longer toward the front and left side* of the head.
*Parting & Density:* The hair on top is of *high, uniform density. There is no visible traditional parting, as the style is a solid, molded block. The **zero/low* scalp visibility is due to the dense, upward-styled hair.

---

### II. Arrangement and Placement of the [Primary Style Element]
The sculpted hair mass is meticulously placed to create a *dramatic, block-like silhouette with a gentle forward/leftward slant*:

*Location:* The length is concentrated in a *large, central-top horseshoe section* extending from the parietal ridge up. The hair below the parietal ridge and around the perimeter is fully faded/tapered.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The hair along the front hairline is styled to *project strongly upward and slightly forward/leftward. It is positioned to **maximize the height and sharp corner definition, forming a **heavy, solid, and geometrically defined silhouette* that sits *high and level* relative to the brow line.
   - *Crown/Middle Rows:* The bulk of the hair from the crown to the front is directed *upward with a slight uniform slant. This intentional placement **forces volume upward, **preventing* a rounded shape, thus creating the *sharp, flat-top-like silhouette*.
   - *Side Perimeter/Lateral Sections:* The top hair immediately adjacent to the fade on both the left and right sides is *cut with a hard, vertical corner* that transitions instantly into the shortest part of the skin fade. This creates a *clean, defined vertical border* against the short sides, which is the transition point where the top hair *maintains maximum length* before dropping sharply into the cut.
*Individual [Hair] Arrangement:* The coily texture is *compressed and molded* together by product, giving it a *firm, cohesive block-like* appearance. The *consistent short length (relative to the overall shape)* allows for *uniformity and structure*.

*Section Dimensions (Inferred):*
   - Height (Front/Highest Point): *Approximately 50-60 mm (5-6 cm)* from the scalp (above the fade line)
   - Width (Lateral): *Approximately 100 mm (10 cm)* at the widest point across the top
   - Length/Depth (Front-to-Back): *Approximately 120-150 mm (12-15 cm)*

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *skin taper fade* provides the architectural support and *sharp, high-contrast* definition for the high top:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers and/or a straight razor* for maximum crispness.
   - *Front:* An *absolutely straight, hard* line is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, almost angular/slightly curved* *C-Cup shape* is meticulously placed to connect the *front hairline* with the start of the *side fade/vertical line, creating a **highly visible, defined corner. This placement is **critical* for the *crispness and geometric structure* of the entire look.
   
   - *Temporal Line:* The line extends from the temple area *downward in a vertical line*, defining the lateral boundary of the high top.
   
   - *Nape/Back:* (Inferred) The back would likely feature a *low or drop taper fade* to match the sides, with a sharply defined or natural blocked/tapered neckline.

*Fade/Taper Transition:* The fade starts *low to mid* on the head, with the transition from *skin-level (0/clipper-closed)* to *full hair length (the drop into the cut)* kept *short and extremely tight/blended, primarily focused on the area **above the ear and around the temple arch. This **low to mid* placement *maximizes* the canvas for the *dense, voluminous* high top above.

*Fade Technical Specifications:*
   - Type: *Skin Taper Fade (Low/Mid Drop)*
   - Starting Point: *Immediately below the parietal ridge/just above the temporal line*
   - Fade Range: *Skin/Zero (0mm)* to *Tapered drop into the longest hair below the parietal ridge (approx. 6mm)*
   - Transition Zone: *Very tight, roughly 10-15 mm* in height for the full transition
   - Circumference: The fade *wraps around the head*, maintaining the tight skin finish at the temples and around the ears.
   - Technique: *Clipper-over-comb and/or lever-play fading technique* for a seamless blend into the skin.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *top style* appears *extremely tight and firm, particularly near the roots and edges. This indicates **significant product and shaping* was applied during *styling* to ensure *maximal longevity and specific aesthetic. The texture is **dense and tightly compressed—not **soft—contributing to their **neat, geometric* structure and *uniform, upright* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured and firm* to touch, with *high* density and *firm, rigid* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold/no natural movement, with the hair **maintaining a rigid position* against gravity, showing *intentional, structured directional styling*.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Shape-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, ruler-straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp, geometrically precise C-Cup* that carves a *crisp angular/crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The corners are shaped to be *perfectly square/90-degree angles*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and/or a straight razor*
   - Line Quality: Creates an *absolutely straight, geometric* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *smooth, dark* skin just below the line and the *textured, long* hair above it
   - Skill Level: This precision is a signature of *high-skill, contemporary barbering*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural dark brown/black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/moderate shine* on the top hair, matte on the skin fade
   - Texture Definition: *Highly defined/compressed and molded*
   - Frizz Control: *Completely smooth* on the surface of the block

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy*
   - Product Buildup: *Slight sheen/moderate coating* from holding product is visible
   - Elasticity (Inferred): *Compromised/low* on the top due to high tension and hold product, *good* at the natural root

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/portrait* shot, *front view/slight three-quarter left* of the subject, with the light source *highlighting* the *front/left* side of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *front hairline (Line-Up), the sharp C-Cup hairline, and the clean skin taper transition* on the *left* side of the head the most visually dominant technical elements. The rigid, *asymmetrical structure* of the high top is also fully visible.
   - *Focal Points:* The *geometric precision of the frontal and lateral hairline* is the primary focal point of the *haircut's* precision.

*[High Top] Arrangement in Current View:*
   - *Overhang/Projection:* The *upward-directed* flow of the *front-top* hair creates a *dramatic, block-like* silhouette, specifically *elevated high above the forehead. This **upward* styling is deliberate to *create maximum height and geometric structure*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated on the *crown/front-top* of the head, contrasting with the *completely bare/shaved* *skin* of the *fade/sides. The hair's length is utilized for **upward height and structure* rather than *downward drape*.

*Parting Visibility:* Due to the *dense, product-set* arrangement and the angle, there are no visible individual parts; the hair is styled as one solid mass, *enhancing* the *structured* look of the style. The primary visible lines are the *shaved hard lines* of the edge-up, not *natural parts*.
*360° Structure Reference:* While the *nape/back* are not visible in this view, the overall style indicates a *low/drop skin fade and precise Line-Up* would continue around the entire circumference of the head for a balanced structure.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, dramatic studio* lighting
      - Light Direction: *Front-lit with possible side fill*
      - Effect on Style: The lighting *enhances* the *product sheen and definition* of the high top, making the *compressed, molded* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* *high top* and the *smooth, bare* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *smooth definition* and *defined edges* suggest the hair was *shaped with clippers/trimmers, compressed, and set with a strong-hold product and possibly a shaping tool (like a comb or brush)*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition and create movement* and *stand upright* where desired (*the crown/sides) and **maintain structure* where *length/texture/design* permits

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow/medium, placing the sharpest focus on the **subject's face and the hairstyle, and the primary hair elements (sharp hairline, fade transition), while the background is **not shown/cropped out*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *focal point* of the portrait

   *Head Position:*
      - Position: *Facing forward/slightly turned to the right*
      - Impact: This positioning *emphasizes* the *Line-Up and the volume/shape* of the high top, while slightly *concealing* the extreme detail of the right-side fade (which would be visible in a true front view).

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Structured/Geometric*
*Cultural Significance (If Applicable):* This is a modern, ultra-clean variation of the *"High Top Fade,"* a classic and iconic hairstyle in *Black American culture* and hip-hop history, now executed with even greater *precision and razor-sharp line work* common in modern barbering.
*Maintenance Requirements (Inferred):* *High* time investment (daily styling to maintain shape, product needs, and *very frequent Line-Up/fade touch-ups*—weekly or bi-weekly).`,
    category: 'Afros', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762830982/Hairstyles/WhatsApp_Image_2025-11-09_at_07.46.39_9eaaf7e8_hqblwe.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Textured Temp Fade with Kinky Curls (Afro-Style Fade)',
    
     ai_description: `### Title: Textured Temp Fade with Kinky Curls (Afro-Style Fade)

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *dark-skinned Black man* with a *Textured Temp Fade* hairstyle, photographed from *three-quarter view (approx. 45° angle to the right)*.

*Core Style:* *Natural, tightly coiled Kinky Afro* texture on top, integrated with a *low skin taper fade* on the sides and back. The overall aesthetic is *clean, crisp, and contemporary*, emphasizing the contrast between the volumetric top and the sharp, defined edges.
*Hair Texture (Inferred):* The natural hair appears to be *kinky* (Type *4C or high-density 4B* classification), which provides *maximum volume, inherent texture, and excellent stand-up hold capability* essential for the top's desired height and shape.
*Product Use (Inferred):* The hair displays a *moderate, healthy luster/semi-gloss sheen* and *highly defined, clustered curl definition, suggesting the use of **moisturizing creams and/or light hold gels/pomades (e.g., natural oil-based products)* to *define the texture, minimize frizz, and provide a light, flexible hold. The **springy, dense texture* at the root indicates *minimal manipulation* was applied during styling, allowing the natural coil pattern to form.
*[Style Type] Details:* The primary styling method is a *natural Afro shape* maintained at a *medium-short length, where the hair is allowed to grow and naturally coil upwards/outwards, forming a **rounded, slightly squared silhouette* when viewed from the front.
*Parting & Density:* The *natural hair on top exhibits extremely high density. No intentional parting is visible within the main body of the style. The fade line provides a **crisp, distinct perimeter* with *zero scalp visibility* above the transition point."

---

### II. Arrangement and Placement of the [Primary Style Element]
"The natural texture on top is meticulously shaped to create a *voluminous, box-like silhouette*:

*Location:* The length is concentrated in the *horseshoe/parietal ridge section* (the entire top of the head). The *sides and back* hair is *fully skin-faded/tapered* starting low around the ear and occipital bone.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The natural curls along the front hairline are styled to *stand upright and slightly forward/upward. They are positioned to **sit directly above the forehead line-up, forming a **dense, highly textured* *fringe/crown/silhouette* that sits *vertically* relative to the brow line.
   - *Crown/Middle Rows:* The hair across the crown is directed *upward and slightly backward, maintaining **uniform height and density* across the top. This intentional placement *forces volume toward the vertical plane, **encouraging a boxy, volumetric silhouette*.
   - *Side Perimeter/Lateral Sections:* The coily texture immediately adjacent to the fade on the left and right sides is *left at its full length and density* until the fade line begins, creating a *sharp, clean, volumetric border* against the *skin fade. This is the transition point where the **natural hair length meets the shortest clipper guard*.
*Individual [Coil] Arrangement:* Each natural coil cluster is *tightly coiled and springy, giving it a **coiled and springy* appearance. The *consistent medium length (approx. 20-30mm)* allows *uniform height and structure* across the top.

*Section Dimensions (Top Only):*
   - Length: *Approx. 20-30 mm* measured from root to tip in its natural coiled state (not stretched)
   - Thickness (Inferred Coils): *Approx. 2-5 mm* diameter per coil cluster"

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *low skin taper fade* provides the architectural support and *sharp contrast* for the *voluminous textured top*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *perfectly straight, hard line* is placed across the *forehead, marking the boundary of the **skin/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular* *corner* is meticulously placed to connect the *front hairline* with the start of the *side fade/vertical line, creating a **highly visible, geometrically defined corner. This placement is **critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line drops *vertically* from the corner point to meet the fade transition.
   
   - *Nape/Back:* (Inferred) The back would likely be a *tapered or blended fade* to maintain the clean structure.

*Fade/Taper Transition:* The fade starts *low* on the head, meaning the transition from *skin-level (0/foil-shaved)* to *full hair length* is kept *very short and tight (quick transition), primarily focused on the area **above the ear and around the neckline/temple. This **low* placement *maximizes* the canvas for the *dense, textured, voluminous* *top* above.

*Fade Technical Specifications:*
   - Type: *Low Taper/Temp Fade (Temple Fade) Skin Fade*
   - Starting Point: *Temporal Line and approx. 10-15mm above the ear*
   - Fade Range: *Skin (shaved) to approx. 12mm (guard #4)*
   - Transition Zone: *Very tight, approx. 15-20mm vertical height*
   - Circumference: *The fade is tightly executed around the temples and over the ears* (Temp Fade area).
   - Technique: *Clipper-over-skin/blending technique* to achieve a smooth, rapid graduation from skin to length."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *top style* appears *firm* and *springy, particularly near the roots. This indicates **natural curl tension* was applied during *growth* to ensure *maximum height and uniform density. The texture is **dense and tightly coiled—not **soft—contributing to its **neat* structure and *uniform* hang/stand.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured and dense* to touch, with *high* density and *firm* hold at the root due to natural coil pattern.
*Movement Characteristics:* The style demonstrates *static, vertical hold* with the hair *maintaining position* against gravity, showing *intentional upward styling* and natural coil resistance."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, perfectly straight line* across the *forehead, **almost surgical* in execution
   - *C-Cup/Corner Arch:* A *sharp, angular corner* that carves a *geometrically precise* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade
   - *Temporal Points:* The corners are shaped into *90-degree points* before transitioning into the fade.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead and temples*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black/darkest brown (Level 1-2)*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Minimal frizz*, suggesting good product use to smooth and define the coils.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible/slight sheen*
   - Elasticity (Inferred): *Good* based on *tight curl definition and springy appearance*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up/medium shot, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the sharp line-up, and the low taper fade transition* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp, clean geometry of the hairline* is the primary focal point of the *haircut's* precision.

*[Style Element] Arrangement in Current View:*
   - *Overhang/Projection:* The *upward-directed flow of the **front and crown* textured top creates a *defined, boxy silhouette* effect, specifically *sitting vertically above the forehead. This **upward* styling is deliberate to *create height and establish balance* against the close-cut sides.
   - *Volume Distribution:* The bulk and volume of the *textured* hair are concentrated on the *entire top (crown and front-top)* of the head, contrasting sharply with the *skin-level* hair of the *low fade* on the sides. The hair's length is utilized for *upward height and density* rather than *downward drape*.

*Parting Visibility:* Due to the *dense* arrangement and the texture, the individual parts are *largely concealed* by the surrounding *coils, **enhancing* the *full, structured* look of the style. The primary visible lines are the *shaved hard lines, not **natural parts*.
*360° Structure Reference:* While *the back* is not fully visible in this view, the overall style indicates *the fade would continue low and tight around the occipital bone/nape* for a complete, clean structure."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio/natural* lighting
      - Light Direction: *Front-lit/side-lit* from the right
      - Effect on Style: The lighting *enhances* the *texture and definition, making the **coiled* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* *top* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined edges* suggest the natural coils were *well-moisturized and defined with product* and likely *air-dried* or *diffused* to maintain maximum texture and shape.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *stand upright* where desired (*the crown/top) and **lay flat against the head* where precision cutting permits (*the hairline/sides*)

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **hairstyle and subject's face* and the primary hair elements (*sharp hairline, fade transition), while the background is **partially visible/softly blurred*
      - *Image Quality:* *High resolution, sharp detail, professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned approx. 30°-45° right*
      - Impact: This positioning *reveals/emphasizes* the *C-Cup, line-up, and the low fade arc* on the right side of the head."

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* None visible.
   *Jewelry:* A single small, gold-toned hoop earring with a *Jumpman (Jordan)* logo charm is visible in the right ear."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Contemporary/Natural/Fade*
*Cultural Significance (If Applicable):* This is a highly popular, clean, and universally accepted modern take on the classic Afro texture, often associated with a clean-cut, sharp aesthetic within Black barbering culture, prioritizing geometric precision and texture maintenance.
*Maintenance Requirements (Inferred):* *High maintenance* for the cut (weekly or bi-weekly fade/line-up touch-ups) and *moderate maintenance* for the top texture (regular moisturizing, defining product application, and shaping).`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831047/Hairstyles/WhatsApp_Image_2025-11-09_at_07.52.03_9810080b_tw5dmk.jpg',
    price: 3,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Long, Wavy, Deep Side-Parted Vibrant Orange Hair System',
    
     ai_description: `
### Title: Long, Wavy, Deep Side-Parted Vibrant Orange Hair System

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Melanated* *woman* with a *long, deeply side-parted, vibrant color hair system* hairstyle, photographed from *a close-up three-quarter view*.

*Core Style:* *Voluminous, cascading waves* with a *deep, sculpted side-part, achieved using a full-coverage hair system (wig or weave). The overall aesthetic is **bold, glamorous, and sleek*.
*Hair Texture (Inferred):* The hair system is styled to have a *straight* foundation with *defined, soft waves* (Type *1-2A* post-styling classification), which provides *high volume, smooth surface texture, and excellent drape/flow. The system appears to be **high-quality synthetic or chemically straightened human hair*.
*Product Use (Inferred):* The hair displays *high sheen and a smooth, fluid movement, suggesting the use of **lightweight shine spray, smoothing serum, or heat protectant oil* to *achieve high-gloss finish, smooth flyaways, and define the waves. The **natural appearance* at the hairline (front perimeter) indicates *meticulous lace-front blending technique* was applied.
*Style Type Details:* This is a *full-coverage, free-flowing* style characterized by *long, layered length* and a *uniform, vibrant, artificial color*.
*Parting & Density:* A *deep, slightly diagonal, razor-sharp side part* is present on the subject's left side. The *high density* of the hair system ensures *no scalp visibility* beyond the defined part line, creating a solid mass of color and texture.

---

### II. Arrangement and Placement of the Hair System
The *hair mass* is meticulously styled to create a *dramatic, asymmetrical, sweeping silhouette*:

*Location:* The hair covers the *full head* via a system.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section (Left Side):* The hair is styled to *sweep diagonally across the forehead* from the deep side part, creating a *heavy, voluminous curtain* that partially *conceals the face* and sits *anterior to the cheekbone, thus defining a **dramatic asymmetrical frame*.
   - *Crown/Middle Rows:* The entire volume of hair is directed *laterally and downward, cascading over the **shoulder and back* (not fully visible). This intentional placement *forces volume toward the visible side and down the profile, preventing volume on the part-side's temporal region, thus creating a **smooth, high-contrast silhouette* against the face.
   - *Side Perimeter/Lateral Sections (Right Side):* The hair immediately adjacent to the right side of the face *hangs straight down and angles slightly inward, creating a **soft, defined vertical border* against the cheek. This side *balances* the heavy sweep of the left side.
*Individual Arrangement:* The strands are uniformly *smooth and layered, giving a **soft, flowing, thick* appearance. The *long, consistent length* allows *maximum drape and movement*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Vibrant, highly saturated, artificial Orange* (approximating a copper or rust tone).
   - Color Variations: *Uniform color* across all visible sections with subtle variation due to light reflection.
   - Color Distribution: *Consistent and monochromatic* throughout.

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss*, indicative of a healthy hair system and/or styling products.
   - Texture Definition: *Highly defined, soft waves* throughout the length.
   - Frizz Control: *Completely smooth*, with no visible flyaways, indicating excellent heat styling and product control.

*Health Indicators:*
   - Overall Condition: *Appears exceptionally well-maintained, healthy, and moisturized* (characteristic of a new or well-cared-for system).
   - Product Buildup: *None visible*.
   - Elasticity (Inferred): *Good* based on the soft, defined wave pattern.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up three-quarter view* of the subject, with the light source *highlighting* the *front-side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *deep, sharp side part, the seamlessly blended hairline along the part, and the dramatic, asymmetrical sweep of the hair* the most visually dominant elements.
   - *Focal Points:* The *volume and dramatic curve of the hair sweeping across the forehead* is the primary focal point of the style's drama.

*Arrangement in Current View:*
   - *Overhang/Projection:* The *forward-directed flow* of the hair from the deep side-part creates a *heavy, dramatic bang-like/curtain* effect, *partially obscuring the left eye/cheekbone. This **forward and lateral* styling is deliberate to *frame one side of the face dramatically* and *establish a strong asymmetrical balance*.
   - *Volume Distribution:* The bulk and volume are concentrated on the *crown and the right side* (part side) of the face, contrasting with the *smooth, flat lay* of the part line. The hair's length is utilized for *downward drape and lateral volume* rather than upward height.

*Parting Visibility:* The individual part is *clearly visible and sharply defined, creating a clean division from which the hair flows. The primary visible line is the **razor-sharp part line*, with the surrounding hair completely concealing the system's cap/weft.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, dramatic studio* lighting
      - Light Direction: *Front-lit/three-quarter lit*, slightly from the subject's right
      - Effect on Style: The lighting *enhances* the *high product sheen and wave definition, making the **smooth* texture appear *shiny and dimensional, emphasizing the **vibrant color*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *vibrant orange* hair and the subject's *melanated skin tone*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *smooth definition and soft waves* suggest *flat-ironing and large-barrel curling/waving iron* techniques, likely *set with a light-hold spray or serum*.
      - *Adaptive Styling:* The styling is adaptively *dramatic and sleek—it is styled to **maximize the fluid, cascading movement* and *lay flat* at the part line while creating *asymmetrical volume* on the right side.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the immediate front portion of the hairstyle, while the background is **blurred (bokeh effect)*.
      - *Image Quality:* *High resolution and sharp detail*.
      - *Composition:* This *isolates and frames* the hairstyle as a *key feature* of the portrait, emphasizing the bold color and sweeping volume.

   *Head Position:*
      - Position: *Turned approximately 30° to the subject's left* and slightly tilted forward.
      - Impact: This positioning *maximizes the visibility* of the sweeping frontal section and the deep side part, enhancing the style's *asymmetrical drama*.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Glamorous/System-based* (Wig/Weave).
*Maintenance Requirements (Inferred):* *Moderate* for a hair system of this nature, requiring regular detangling, moisture/shine product application, and maintenance of the sharp part line and wave pattern.`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831153/Hairstyles/WhatsApp_Image_2025-11-09_at_09.01.02_7e76401a_jqssy5.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Bleached Coil-Textured Crop with Tapered Sides (Bleached Coily Undercut or Crop)',
    
     ai_description: `## Title: Bleached Coil-Textured Crop with Tapered Sides (Bleached Coily Undercut/Crop)

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of a *Black/Brown skin tone woman* with a *Bleached Coil-Textured Crop* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Closely cropped, bleached coil texture* on top, integrated with *extremely short taper/undercut* on the sides and back. The overall aesthetic is *edgy, contemporary, and defined*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *maximum density and tight, springy curl patterns* that naturally support the cropped volume.
*Product Use (Inferred):* The hair displays a *semi-matte finish with high texture definition, suggesting the use of a **defining cream, curl activator, or light pomade* to *define the tight coils, minimize frizz, and provide a light-to-medium hold. The **tightness* at the root indicates *clippers and meticulous trimming/shaping* was applied during styling.
*Coil-Textured Details:* The primary styling method is a *very short, texturized cut, where the **natural coil pattern is maintained but is cut down to a length that maximizes its spring and density. This is likely achieved with **clippers, guard #2 or #3 (6-9mm), or by **shears-over-comb* technique for shaping.
*Parting & Density:* No distinct parting is visible. The *high* density of the *natural coils* ensures *minimal* scalp visibility, providing a uniform, sponge-like texture across the top section."

---

### II. Arrangement and Placement of the Coil-Textured Crop
"The *short coils* are meticulously placed to create a *rounded, voluminous crown silhouette*:

*Location:* The textured hair is concentrated in the *horseshoe section (from temple to temple over the crown). The **lateral and posterior areas* hair is *extremely short/skin-level tapered*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *coils* in the first row, along the *forehead* hairline, are styled to *stand upright/tuck slightly back. They are positioned to **sit just off the forehead, forming a **textured, soft-edged* *fringe/crown* that sits *vertically* relative to the facial features.
   - *Crown/Middle Rows:* The coils running across the *crown/center* are directed *radially/upward. This intentional placement **forces volume upward, **preventing* a flat top, thus creating the *high-density, rounded* silhouette.
   - *Side Perimeter/Lateral Sections:* The *coils* immediately adjacent to the *extremely short sides* on the left and right sides are *blended* into the shortest length, creating a *clean, defined* *vertical* border against the *short sides. This is the transition point where the **coils maintain their length until the parietal ridge before an aggressive taper down*.
*Individual Coil Arrangement:* Each *unit* is uniformly *coiled and tightly sprung, giving it a **sponge-like, consistent* appearance. The *consistent* length allows *the cut to create a uniform mass and intentional volume*."

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The *extremely short/skin-level taper* area provides the architectural support and *sharp* contrast for the *coily texture*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *straight/natural* *hard* line is placed across the *forehead/temples, marking the boundary of the **textured hair*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp* *angular* *shape* is meticulously placed to connect the *front hairline* with the start of the *side taper, creating a **highly visible* *defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* *The line extends vertically from the sharp corner down to the ear.*
   
   - *Nape/Back:* (Inferred) Likely a *tight taper/skin-level finish* at the back.

*Fade/Taper Transition:* The taper starts *high* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *full hair length (approx. 8-10mm)* is kept *very short and tight, primarily focused on the area **around the parietal ridge and above the ear. This **high* placement *maximizes* the canvas for the *dense, textured, voluminous* *crop* above.

*Fade Technical Specifications:*
   - Type: *High Taper/Skin Fade (Extreme Taper)*
   - Starting Point: *Parietal ridge* (the top of the rounded head)
   - Fade Range: *8-10mm* to *skin* (or guard #3 to 0)
   - Transition Zone: *Extremely short (approx. 5-10mm)*
   - Circumference: *Wraps tightly around the visible side, continuing to the back*
   - Technique: *Aggressive, high-contrast clipper-over-guard blending*."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *short coils* appear *medium* and *firm, particularly throughout the mass. This indicates **minimal* tension was applied during *styling/cutting* but that the *natural curl structure is very firm. The texture is **dense and tightly coiled—not **soft—contributing to their **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *coarse/spongy* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* due to its short length and dense texture."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution
   - *C-Cup/Corner Arch:* *Present.* A *sharp* *angular* *temple arch/corner* that carves a *sharp* *crescent/angular* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the taper
   - *Temporal Points:* *Cut to a very sharp, right-angle corner*

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight* line across the *forehead*
   - Contrast: *Sharp* contrast with the *coily* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*"

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Dark natural color (Black/Dark Brown)*
   - Color Variations: *Highlights/Ombré* - The hair has been *aggressively lightened/bleached* on the top section, creating a *blonde/light golden-blonde* color.
   - Color Distribution: *Concentrated on the coily length, creating a dramatic contrast with the dark roots and sides.*

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-gloss*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth* at the edges, *minimal frizz* in the coils

*Health Indicators:*
   - Overall Condition: *Appears well-maintained/healthy* despite the bleaching, with good coil definition.
   - Product Buildup: *Slight sheen*
   - Elasticity (Inferred): *Compromised* (due to aggressive lightening) but *visually good* due to short length."

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up portrait, **three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, taper transition, and the texture/color contrast* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp corner of the hairline* and the *high-contrast color and texture* are the primary focal points of the *haircut's* precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *upward-directed flow of the **front-top* *coils* creates a *defined* *silhouette* effect, specifically *creating height above the forehead. This **upward* styling is deliberate to *create height/establish balance* and draw attention to the color.
   - *Volume Distribution:* The bulk and volume of the *coils* are concentrated on the *crown/front-top* of the head, contrasting with the *completely bare/skin-level* *sides. The hair's length is utilized for **upward height* rather than *downward drape*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual parts at the root are *largely concealed* by the surrounding *coils, **enhancing* the *full* look of the style. The primary visible lines are the *shaved hard lines, not **natural parts*.
*360° Structure Reference:* While *the full back* is not visible in this view, the overall style indicates *a tight, high skin-level taper continues around the entire circumference of the head*."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Front-lit/side-lit*
      - Effect on Style: The lighting *enhances* the *product sheen/texture/definition, making the **coiled* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *light* *textured* *coils* and the *smooth* skin of the *taper/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/defined* texture suggests *finger-styling with a curl-defining product*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *stand upright* where desired (*the crown) and **lay flat against gravity* where desired (*the hairline*)

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on **subject's face/hairstyle* and the primary hair elements (*sharp hairline, coil texture), while the background is **blurred (bokeh effect)*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned approximately 30° left* (a three-quarter view)
      - Impact: This positioning *reveals/emphasizes* the *sharp corner of the hairline and the aggressive side taper*"

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* None present. The style is finished with *pearl stud earrings* as complementary accessories."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Contemporary/Natural/Cropped/Color-Treated*
*Cultural Significance (If Applicable):* The style is a modern, high-fashion adaptation of the classic *high-top fade/taper* combined with *bleaching, often seen in contemporary **Black hair fashion*.
*Maintenance Requirements (Inferred):* *High* for the haircut (fade/line-up touch-up every 1-2 weeks), and *medium* for the color (requires specialized products to maintain moisture and prevent brassiness).`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831227/Hairstyles/WhatsApp_Image_2025-11-09_at_09.05.29_22f4515b_kpfvfk.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Dreadlock Space Bun Updo with Face-Framing Loc Fringe',
    
     ai_description: `### Title: Dreadlock Space Bun Updo with Face-Framing Loc Fringe

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of an *Afro-diasporic/dark-to-medium skin tone woman* with a *Loc Updo (Space Buns) with Fringe* hairstyle, photographed from *three-quarter view (approx. 45° angle) to the right*.

*Core Style:* *Mature/semi-freeform dreadlocks* styled in a *voluminous updo* (Space Buns) on the crown and vertex, integrated with *long, straight, dark loc extensions* used as a *face-framing fringe* along the temples. The overall aesthetic is *contemporary and high-fashion* with a mix of textured volume and sleek definition.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent foundational grip and density* for the dreadlock formation and supports the *voluminous* structure of the updo. The fringe appears to utilize straight loc extensions or locs that have been heat-treated/wrapped to achieve a *sleek, straight* texture.
*Product Use (Inferred):* The hair displays *natural luster* on the locs, suggesting the use of *light oils or moisturizing spray* to maintain health and prevent dryness. The locs forming the fringe have a *smooth, high-sheen finish, indicating the use of a **smoothing serum or light pomade* for sleekness and definition.
*Loc Details:* *Traditional or interlocked dreadlocks* are gathered tightly. The fringe elements are individual locs (or loc extensions) that have been *stretched and secured* in a straight form.
*Parting & Density:* The main body of the locs is swept up, *concealing* the parting structure on the crown. The forward-hanging fringe reveals a *clean, subtle C-cup or natural perimeter* along the frontal hairline. The loc density is *medium to high, ensuring **high* volume on the crown."

---

### II. Arrangement and Placement of the Loc Updo
"The dreadlocks are meticulously placed to create a *high, dual-spherical volume* on the crown, contrasting the sleek, straight elements:

*Location:* The majority of the locs are secured in *two symmetrical 'space bun' formations* positioned high on the *vertex/upper crown* (the "horseshoe section"). The fringe elements are strategically placed from the *anterior hairline/temple arch* area. The lower sides and back (posterior/lateral sections) are *swept up and tightly secured* into the buns, leaving the entire perimeter free of hanging hair.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section (Fringe):* Two thick, sleek sections (likely composed of *5-8 individual locs/extensions per side) are directed **straight forward and downward, following the face's natural curve. They are positioned to **frame the face, forming a **heavy, smooth fringe* that sits *parallel to the cheekbones and jawline. The visible portion sits approximately **5-10 mm* inward from the natural temple hairline.
   - *Crown/Middle Rows:* The locs are *radially directed* and gathered *upward* towards the two central bun points. This intentional placement *forces volume toward* the crown, *creating significant height and structure* for the buns.
   - *Side Perimeter/Lateral Sections:* The locs from the visible right side are *swept tightly upward and inward* toward the right bun, creating a *clean, smooth transition* against the skin/hairline.
*Individual Loc Arrangement:* The locs gathered into the bun are *coiled/wrapped tightly* around a central anchor point (or each other) to form two *rope-like, spherical structures*.

*Section Dimensions (Inferred):*
   - Count: *Estimate 50-80* individual locs across the entire head, with *5-8* dedicated to the fringe on the visible side.
   - Thickness: *4-6 mm* diameter for the individual loc units in the bun.
   - Length: Buns create a spherical mass of approx. *70-100 mm* in diameter; the fringe locs are estimated at *200-250 mm (20-25 cm)* in length, reaching past the collarbone.
   - Part width: The main loc parts are *concealed; the fringe parting is a **single, soft C-curve* approx. *30-40 mm* wide at the top."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The *updo* appears *tight* and *firmly secured, particularly at the base of the buns and where the side locs are swept up. This indicates **significant* tension was applied during *styling* to ensure *longevity and hold. The texture is **dense and rope-like* for the locs, contrasted by the *smooth and sleek* texture of the face-framing elements.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* in the bun area and *smooth/silky* on the fringe elements, with *firm* hold at the root.
*Movement Characteristics:* The main bun structure is *static hold* and *highly secured. The fringe elements demonstrate **natural movement/dynamic flow* with the hair *responding to gravity* in a smooth, straight drape."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal* hairline is executed with *moderate* precision, maintaining a *natural* edge along the visible temple.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped, natural* line, *naturally blended* in execution.
   - *C-Cup/Corner Arch:* A *gentle C-Cup* or *natural arch* is visible just above the temple area, marking the origin of the fringe section.

*Execution Details:* The focus is on a *clean separation* between the up-swept hair and the skin, not a sharp, barbered line."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black/dark brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster* on the buns, *high shine* on the fringe.
   - Texture Definition: *Highly defined* (both loc coils and sleek straight fringe).
   - Frizz Control: *Minimal frizz* on the up-swept sections, *completely smooth* on the fringe.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *visual tension/loc structure*"

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front* and *side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *contrast between the high-volume loc bun (updo)* and the *sleek, straight face-framing loc fringe* the most visually dominant technical elements.
   - *Focal Points:* The *tight, spherical shape of the right bun* and the *smooth drape of the fringe* are the primary focal points of the style's precision.

*Loc Arrangement in Current View:*
   - *Overhang/Projection:* The *forward-directed flow of the **front loc fringe* creates a *defined, bang-like* effect, specifically *draping across the front of the shoulder and jawline. This styling is deliberate to **frame the face* and *establish a sharp, smooth contrast* with the textured updo.
   - *Volume Distribution:* The bulk and volume of the styled hair are concentrated on the *vertex/crown* of the head, creating *maximum height. The hair's length is utilized for **upward height* (buns) and *downward drape* (fringe).

*Parting Visibility:* Due to the *tightly gathered* arrangement, the individual loc parts at the root are *largely concealed* by the surrounding locs, *enhancing* the *full/structured* look of the style. The primary visible lines are the *natural parts* defining the fringe sections.
*360° Structure Reference:* The style indicates that the entire perimeter of hair from the ear level down to the nape is *swept clean and secured* into the two high buns, creating a *defined, structural silhouette*."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft studio/natural* lighting
      - Light Direction: *Front-lit/slightly side-lit*
      - Effect on Style: The lighting *enhances* the *high sheen* on the fringe elements and the *coiled texture/definition* of the locs in the bun, making them appear *dimensional* and *well-moisturized*.
      - Contrast Enhancement: The sharp lighting *emphasizes* the precise contrast between the *textured* *loc updo* and the *smooth* *loc fringe*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined shape* of the buns suggest *tight wrapping and pinning. The smooth fringe suggests the loc extensions were **flat-ironed or hot-water set* before or during installation.
      - *Adaptive Styling:* The styling is adaptively *crisp and structural—styled to **stand upright* (buns) and *lay flat against gravity* (fringe).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and hairstyle, creating a **bokeh effect* in the background.
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 30-45° right*
      - Impact: This positioning *emphasizes* the *profile of the right bun* and the *straight, sleek drape* of the face-framing fringe on the right side."

---

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:*
      - Type: *Hair ties/bobby pins* are used internally to secure the buns (not visibly decorative).

---

### X. Cultural Context and Style Classification
"*Style Category:* *Contemporary/Protective/Loc'd Updo*
*Cultural Significance (If Applicable):* The space bun (or *'Mickey Mouse' bun) is a highly popular contemporary style adapted for locs, offering a structured, playful look while minimizing daily manipulation, classifying it as a **protective style*.
*Maintenance Requirements (Inferred):* *Low daily maintenance* once the buns are secured, with primary focus on *scalp and loc moisture* and *periodic re-sleeking of the fringe* if necessary.`,
    category: 'Locs', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831285/Hairstyles/WhatsApp_Image_2025-11-09_at_09.13.16_8ff40a40_yacion.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Platinum Blonde Buzz Cut with Sculpted Line-Up',
    
     ai_description: `## Title: Platinum Blonde Buzz Cut with Sculpted Line-Up

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown skin tone woman* with a *very short, uniformly cut, bleached buzz cut* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Precision buzz cut* with a *uniform, very short length* across the entire head, integrated with an *extremely sharp line-up/edge-up* around the front and temple perimeters. The overall aesthetic is *edgy, contemporary, and clean*, defined by the intense color contrast and sharp architectural lines.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification), which provides *high density* and *excellent grip/texture* to hold the short length uniformly and create the subtle, dense velvet-like surface texture typical of a close cut on this hair type.
*Product Use (Inferred):* The hair displays a *matte to low sheen* and *highly defined texture, suggesting the minimal use of a **light moisturizing oil or cream* to *soften and protect the bleached hair, maintaining the matte, dense appearance without excessive gloss. The **extremely short length* at the root indicates *clippers/trimmers/razors* were applied directly to the head.
*Buzz Cut Details:* The style is a uniform, *ultra-short clipper cut* where the hair length is the same across the top, sides, and back. The defining technical element is the *bleached color* and the *surgical precision of the hairline*.
*Parting & Density:* No parting is present. The *extremely high density* of the hair, even when cut this short, ensures *zero scalp visibility* across the main body of the cut, creating a visually solid, dense color block.

---

### II. Arrangement and Placement of the [Primary Style Element]
The *short hair* is meticulously cut to create a *uniform, velvet-like texture* across the scalp:

*Location:* *Full head coverage* with a uniform length. The defining feature is the *crisp boundary* where the hair meets the skin at the perimeter.
*Directional Flow (The Curve/Pattern):* This is a *static, uniform length cut* with no significant directional flow, allowing the natural texture to stand slightly upright, creating a soft, textured grain.
   - *Front Row/Section:* The short hair along the forehead hairline is *bluntly cut* to meet the *sharply defined line-up. It is positioned to **frame the forehead* with a perfectly straight horizontal line, forming a *crisp silhouette* that sits just at the boundary of the forehead skin.
   - *Crown/Middle Rows:* The length is *uniform, allowing the dense, short hairs to create a **solid, light-reflecting surface* that follows the natural curve of the cranium.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the temple/ear area is also *cut to the uniform short length* and defined by the *razor-sharp corner and C-Cup* border against the skin, creating a *defined, clean, curved* border.

*Section Dimensions:*
   - Length: *3-5 mm* measured from root to tip (estimated to be a *Guard #1 or #1.5* equivalent)
   - The uniform length is the key dimension.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *short, uniform cut* requires *exceptional precision* at the perimeter to establish the structure:

*Hairline (The Edge-Up/Line-Up):* The entire perimeter is *carved/shaped* using precise *trimmers and a straight razor (inferred)*.
   - *Front:* An *absolutely straight, hard line* is placed across the *forehead*, marking the precise and intentional boundary of the cut.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular corner* is meticulously placed at the *temporal line, transitioning to a **tight, gentle curve (C-Cup)* that follows the ear's top attachment. This placement is *critical* for the *crispness and architectural definition* of the entire look.
   
   - *Temporal Line:* The straight front line meets the side line at a *highly defined 90° angle (corner)*.
   
   - *Nape/Back:* (Not visible, but inferred to be a *sharp blocked line* or a continuation of the sharp edge-up around the occipital bone.)

*Fade/Taper Transition:* *No traditional fade or taper is present.* The entire head is cut to a *single, short length (3-5mm), and the only transition is the **razor-sharp line* from this short hair length to the bare skin at the hairline perimeter.

*Fade Technical Specifications:*
   - Type: *Uniform Clipper Cut with Razor Edge-Up*
   - Starting Point: *Entire scalp*
   - Fade Range: *None (single length)*
   - Transition Zone: *Razor-sharp line at the perimeter*

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair appears *firm and dense, standing slightly upright from the scalp due to its texture and short length. This cut relies on the **natural strength and density* of the hair texture. The texture is *dense and finely coiled, contributing to its **neat, velvety* surface.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *softly textured/coarse yet dense* to touch, with *high* density and *firm* hold at the root due to its short crop.
*Movement Characteristics:* The style demonstrates *static hold, with the hair **maintaining position* and the dense surface reflecting light uniformly.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Edge-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, surgically straight line* across the forehead.
   - *C-Cup/Corner Arch:* A *sharp, angular corner* is present at the temple, connecting the straight front line to the *gently curved C-Cup* line above the ear, which is *geometrically precise* in execution.
   - *Temporal Points:* The *corners are squared/right-angled* and highly defined.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors (inferred)*.
   - Line Quality: Creates an *absolutely straight and sharp* line across the forehead and a *clean, tight curve* around the temples.
   - Contrast: *Sharp* contrast with the *smooth skin* below it.
   - Skill Level: This precision is a signature of *high-skill barbering technique* required to execute a perfect line-up on a light-colored, short cut.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Uniform, intensely bleached platinum blonde/white-blonde*.
   - Color Variations: *Uniform color* across all visible hair. There are *darker, small grow-out areas* visible at the roots, suggesting the natural color is a *dark brown/black*.
   - Color Distribution: *Consistent across all sections*, except for the natural root growth.

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-matte*.
   - Texture Definition: *Highly defined* short, coiled texture.
   - Frizz Control: *Completely smooth* surface texture due to the short length.

*Health Indicators:*
   - Overall Condition: *Well-maintained and moisturized* despite the extreme bleaching (inferred by the lack of visible breakage or excessive dryness in the short strands).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, three-quarter view* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *front hairline (Line-Up), the **sharp angular corner, and the **C-Cup curve* on the *right side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *precision of the razor-sharp corner* where the forehead line meets the temple line is the primary focal point of the *haircut's* precision.

*Style Arrangement in Current View:*
   - *Overhang/Projection:* There is *no overhang; the hair is cut to the scalp, providing a **smooth, defined silhouette* that directly follows the cranial structure. This *ultra-short* styling is deliberate to *maximize the visual impact of the platinum color and the sharp line-up*.
   - *Volume Distribution:* Volume is *minimal* and uniform across the entire head, offering *maximum contrast* to the full-face makeup and elaborate accessories.

*Parting Visibility:* No parts are present. The primary visible lines are the *shaved hard lines* of the perimeter.
*360° Structure Reference:* While the back is not visible in this view, the overall style indicates a *uniform continuation of the short length* and a *sharp line-up/blocked section* at the nape.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, studio* lighting.
      - Light Direction: *Front-lit/side-lit*, creating high reflectivity on the skin and a slight sheen on the hair.
      - Effect on Style: The lighting *enhances* the *platinum color* and the *defined surface texture, making the uniform hair appear **solid and bright*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *light platinum* hair and the *darker skin/scalp* at the hairline, making the Edge-Up visually pop.

   *Styling Execution:*
      - *Setting Method (Inferred):* The hair's natural coily texture is *left to stand naturally* after a close clipper cut. The line-up was *set with trimmers and a razor* for maximum sharpness.
      - *Adaptive Styling:* The styling is adaptively *crisp, styled to **maximize definition and color impact* and *lay flat against gravity* at the hairline perimeter.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow/medium, placing the sharpest focus on the **subject's face and the front/side hairstyle*.
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* that provides a *bold, contemporary contrast* to the subject's glamorous attire.

   *Head Position:*
      - Position: *Turned approximately 30° to the left (three-quarter view)* and slightly tilted up.
      - Impact: This positioning *emphasizes* the *definition and geometry* of the right-side temple arch and the corner of the line-up.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Edgy/Fashion-Forward Clipper Cut (Buzz Cut)*
*Cultural Significance (If Applicable):* The style is a *bold fashion statement, utilizing extreme short length and a dramatically light color against a deep skin tone, often seen as a **declaration of confidence and individuality*.
*Maintenance Requirements (Inferred):* *High color maintenance* (toning/bleaching every 4-6 weeks to maintain the platinum color) and *High cut maintenance* (Edge-Up/Line-Up every 1-2 weeks for maximum sharpness).`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831343/Hairstyles/WhatsApp_Image_2025-11-09_at_09.18.13_c6a59609_en2hri.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Feed-In Cornrows into Voluminous Wavy Ponytail with Laid Edges',
    
     ai_description: `## Title: Feed-In Cornrows into Voluminous Wavy Ponytail with Laid Edges

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of an *African American/Black* woman with a *Feed-In Cornrows into Voluminous Wavy Ponytail* hairstyle, photographed from a *three-quarter view (right side)*.

*Core Style:* *Precision cornrow braiding* applied to the front and side sections, seamlessly feeding into a *high, voluminous ponytail* extension composed of wavy hair. The overall aesthetic is *clean, highly defined, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification) at the roots, which provides *excellent grip, density, and natural hold capability* essential for securing the tight cornrows and blending with the extensions.
*Product Use (Inferred):* The braided sections and edges display a *high sheen and sharp definition, suggesting the use of a **strong-hold edge control gel, styling foam, and light oil/serum* to *secure flyaways, define the intricate baby hairs (edges), and provide high shine. The **tightness* at the root indicates *significant tension* was applied during the cornrow installation.
*Cornrow Details:* *Feed-in cornrows, which gradually increase in size as more hair is added, are the primary styling method. These flat braids are directed **diagonally and vertically* toward a central gathering point at the crown/vertex for the ponytail base.
*Parting & Density:* *Sharp, clean diagonal and curved partings* define the cornrow sections. The part width is consistently *narrow (approx. 2-3 mm), and the **tight feed-in technique* ensures *minimal* natural hair is visible outside of the part lines.

---

### II. Arrangement and Placement of the Cornrows
The *cornrows* are meticulously placed to create a *dynamic, asymmetrical visual effect* flowing toward the rear-top of the head:

*Location:* Cornrows cover the *frontal, temporal, and parietal sections* of the head, converging just *posterior to the crown* (vertex) to form the base of the ponytail. The hair from the occipital area is also smoothly gathered into the ponytail, likely through a vertical cornrow or a slicked-back application.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* Two *curved, diagonal* cornrows start near the center parting line and sweep back toward the ponytail base. These are positioned to *frame the forehead, forming a **clean, defined* frontal silhouette.
   - *Crown/Middle Rows:* The most prominent rows are *five* thin, sharply curved cornrows running diagonally back from the central/side parting, creating an intricate *"fishtail" or chevron-like pattern* where the braids appear to intersect and diverge. This intentional placement *forces tension and volume* to be concentrated at the ponytail base, *preventing* flyaways and thus creating a *smooth, structured* transition.
   - *Side Perimeter/Lateral Sections:* The *smaller, tighter* cornrows immediately adjacent to the temple and ear on the right side are *twisted/braided* to *angle inward* toward the high ponytail base, creating a *clean, defined* border against the edge work.
*Individual Cornrow Arrangement:* Each cornrow is uniformly *secured and tightly braided* from the root using the feed-in method, giving it a *smooth, flat, and rope-like* appearance. The *consistent size and direction* allows the arrangement to create intentional, complex geometry.

*Section Dimensions (Inferred):*
   - Count: *Approximately 10-15* total cornrows are visible or inferred in the top/front section.
   - Thickness: *3-5 mm* diameter for the cornrow body (increasing from front to back).
   - Part width: *2-3 mm* between sections.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The lower sections are *slicked back/gathered* and do not feature a traditional fade/taper. The focus is on a *crisp hairline and laid edges*.

*Hairline (The Edge-Up/Line-Up):* The hairline is *naturally placed but highly defined* using precise products and a brush/rat-tail comb.

*Temporal Line:* The hair is *slicked down and held tightly* to secure the style, creating a sharp, smooth line along the temporal area.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *longevity and hold. The cornrow texture is **dense and rope-like, contributing to their **neat* structure and *uniform* flow. The ponytail extension hair is *soft and flowing* with a *defined wavy pattern*.
*Physical Feel (Inferred):* Based on visual analysis, the natural hair would feel *textured/coarse* at the root, while the extension hair would feel *smooth/silky* to touch.
*Movement Characteristics:* The cornrows demonstrate *static hold, while the ponytail extensions exhibit **dynamic flow* with the hair *responding to gravity* and showing intentional directional styling (downward drape and lateral volume).

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal and temporal* hairline is executed with *exceptional* precision, a technique known as *"laying" the edges or baby hairs*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features *highly defined, stylized baby hairs* that create *smooth, intricate curves and swirls* just inside the natural hairline, *naturally blended* in execution.
   - *Temporal Points:* The hair around the temple is also *laid with a sharp curved element*, connecting the front edge work with the slicked-back side section.

*Execution Details:*
   - Tool: Styled with *edge control product and a small brush/comb*.
   - Line Quality: Creates *geometrically precise yet soft curves* along the perimeter.
   - Contrast: *Sharp* contrast with the *smooth, slicked-back* hair behind it.
   - Skill Level: This precision is a signature of *high-skill styling and meticulous product application*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Uniform, rich natural black (1B)*.
   - Color Variations: *None visible*.
*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss* across both the cornrow sections and the ponytail hair.
   - Texture Definition: *Highly defined* (cornrows are smooth, ponytail is a defined wavy pattern).
   - Frizz Control: *Completely smooth* across the cornrow/slicked sections; minimal frizz on the extensions.
*Health Indicators:*
   - Overall Condition: *Appears healthy and well-moisturized*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view (right side)* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *laid edges/baby hairs, the intricate diagonal cornrow pattern, and the dramatic volume of the wavy ponytail* the most visually dominant technical elements.
   - *Focal Points:* The *curve and feed-in technique of the middle cornrows* and the *smooth, swirling edges* are the primary focal points of the style's precision.

*Style Element Arrangement in Current View:*
   - *Overhang/Projection:* The *downward-draping* flow of the *ponytail* (not fully visible) creates a *soft, dramatic* effect. The cornrows direct all bulk *upward and backward* to establish the high ponytail height.
   - *Volume Distribution:* The bulk and volume are concentrated in the *high ponytail extension* starting at the crown/vertex, contrasting with the *smooth, tightly braided/slicked* front and side sections. The extension hair's length is utilized for *downward drape and lateral spread* to maximize volume and movement.

*Parting Visibility:* Due to the *tight* arrangement and the angle, the individual *sharp, clean diagonal* parts at the root are *clearly visible, **enhancing* the *structured* look of the style. The primary visible lines are the *braided sections and the sharp partings*.
*360° Structure Reference:* While the full back of the ponytail is not visible, the overall style indicates the *back hair is either cornrowed up or slicked back and secured into the high ponytail base* to maintain a sleek, uninterrupted look leading up to the volume.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
   - Light Source: *Bright* *indoor/studio* lighting.
   - Light Direction: *Front-lit/side-lit*.
   - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **rope-like* cornrow texture and *wavy* extension hair appear *shiny and dimensional*.
   - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* cornrows and the *smooth* skin of the hairline/scalp.

*Styling Execution:*
   - *Setting Method (Inferred):* The defined waves and smooth finish suggest the *extensions were pre-styled (e.g., set with heat/rollers)* or are high-quality wavy hair. The cornrows were set with *strong-hold gel/foam* and dried naturally or lightly set.
   - *Adaptive Styling:* The styling is adaptively *crisp* in the cornrow/edge sections to *maximize definition and lay flat against gravity, while the ponytail is styled to **flow naturally* with volume.

*Photographic Technique:*
   - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the intricate front hairstyle elements* (cornrows and edges), while the background is *blurred (bokeh effect)*.
   - *Image Quality:* *High resolution/sharp detail*.
   - *Composition:* This *isolates/emphasizes* the hairstyle as a *focal point* of the portrait.

*Head Position:*
   - Position: *Turned approximately 30° right and slightly tilted back*.
   - Impact: This positioning *reveals/emphasizes* the *pattern and directional flow* of the cornrows and the sharp edge work on the right side.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary Protective Style* combining braiding with extensions.
*Cultural Significance (If Applicable):* Cornrows are an ancient, traditional African and African Diaspora protective style, here rendered in a *modern, glamorous presentation* utilizing the popular "feed-in" technique for a flat, natural-looking braid base.
*Maintenance Requirements (Inferred):* *High* initial installation time (2-5+ hours depending on speed), *moderate* daily product needs (edge control, light oil/sheen spray), and *high* care for the extensions (wrapping at night). Touch-up frequency for the edges is daily/as needed.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831478/Hairstyles/WhatsApp_Image_2025-11-09_at_09.24.57_80d0d5f5_yciwsw.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Cornrow Box Braids with Undercut and Voluminous Updo',
    
     ai_description: `## Title: Cornrow Box Braids with Undercut and Voluminous Updo

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Melanated woman* with a *long box braid* hairstyle, photographed from *front view* with a slight right-side turn (near three-quarter view).

*Core Style:* *Intricate cornrow base leading into long box braids* on top and throughout, integrated with a *tightly pulled back/undercut* effect on the sides/nape created by the braiding tension. The overall aesthetic is *clean, textured, contemporary, and highly defined*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4B-4C classification), which provides **excellent grip and high-density volume* necessary for secure, long-lasting protective styling and high tension hold at the root.
*Product Use (Inferred):* The hair displays a *semi-gloss to high shine, suggesting the use of **light pomade, braid sheen spray, and/or setting mousse/gel* to *secure the parts, define the braids, minimize frizz, and provide a polished luster. The **extreme tightness* at the root indicates *significant tension/professional technique* was applied during installation.
*Cornrow/Braid Details:* *Box braids* created with added hair extensions (likely Kanekalon or similar synthetic fiber) are the primary styling method. The technique involves *braiding a portion of the natural hair into a tight cornrow close to the scalp* at the root of the square part before transitioning into the longer, free-hanging box braid.
*Parting & Density:* *Precise square/rectangular parts* are used across the visible scalp. The *medium-high* density of the *braids* ensures *moderate* scalp visibility, showcasing the clean geometry of the parting.

---

### II. Arrangement and Placement of the Box Braids
The *braids* are meticulously placed to create a *high-volume, pulled-back profile* culminating in an unseen updo (or long drape) off-camera:

*Location:* *Full head coverage.* The natural hair is completely contained within the braided structure, with the finished braids pulled back and away from the face and shoulders.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *braids* in the first row, along the *forehead/temple* hairline, are styled to *sweep directly back and slightly up. They are positioned to **pull the skin taut away from the face, forming a **clean, tightly defined* *crown/silhouette* that sits *tightly against the scalp*.
   - *Crown/Middle Rows:* The rows of *braids* running from the *front/center* to the *back* are directed *uniformly backward. This intentional placement **forces volume away from* the face, *preventing* a heavy frontal drape, thus creating the *sleek, high-tension silhouette*.
   - *Side Perimeter/Lateral Sections:* The *braids* immediately adjacent to the side hairline on the left and right sides are *braided* to *angle inward and backward, creating a **clean, defined* *curved* border against the *smooth/tapered hairline. This is the transition point where the **braids* *are pulled tautly toward the back center of the head*.
*Individual Braid Arrangement:* Each *unit* is uniformly *braided* from the root, giving it a *tight, rope-like, smooth* appearance. The *consistent* length allows the arrangement to be *pulled into a singular, voluminous updo or cascade (off-camera)*.

*Section Dimensions (Inferred):*
   - Count: *50-70* individual *braids* across the entire head
   - Thickness: *4-6 mm* diameter per individual unit (small to medium size)
   - Length: *30+ cm* measured from root to tip (long length, likely waist-length or longer)
   - Part width: *4-6 mm* between sections, creating small square parts

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *tightly cornrowed/pulled-back* hair creates the illusion of a clean-edged undercut foundation:

*Hairline (The Edge-Up/Line-Up):* The hairline is *left natural/styled via tight tension* using precise braiding.
   - *Front:* A *natural/soft* line is placed across the *forehead/temples*, with the hair pulled back to expose the boundary.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp/gentle* *curved* *shape* is meticulously placed using a razor/clippers *beneath the braids* to connect the *front hairline* with the start of the *braided side, creating a **highly visible* *defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* *The hair is completely slicked down/pulled into a braid starting right at the temporal line.*
   
   - *Nape/Back:* (Inferred) The braids are likely pulled into an updo or cascade, leaving the lower nape either *tapered or blocked* for a clean line.

*Fade/Taper Transition:* Not a traditional fade, but the *extremely tight pulling/cornrowing* creates a *skin-like finish* near the ears and nape, meaning the transition from *skin-level* to the *braids* is kept *very short and tight, focused on the area **around the ear and neckline. This **slicked-back/tight* placement *maximizes* the canvas for the *dense/voluminous* *braids* above.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *braids* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation/styling* to ensure *longevity/sleekness/specific aesthetic. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang (off-camera).
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth/textured* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* due to the tight tension and high-braid style.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *frontal* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution, creating a clean boundary against the forehead.
   - *C-Cup/Corner Arch:* A *sharp* *C-Cup/temple arch/side arch* that carves a *sharp* *crescent* shape just above the temple area, perfectly connecting the front hairline to the tight braids along the sides.
   - *Temporal Points:* *Sharp, clearly defined right angles/points* where the frontal hairline meets the side hairline.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*
   - Line Quality: Creates an *absolutely straight* line across the *forehead*
   - Contrast: *Sharp* contrast with the *textured* *braids* above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/dark brown*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Completely smooth*

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible/slight sheen*
   - Elasticity (Inferred): *Good* based on *visual tension/smoothness* (though high tension can be a risk)

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **front view* with a slight turn to the right (three-quarter view) of the subject, with the light source *highlighting* the *front* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *frontal hairline, C-Cup hairline, and the clean part pattern* on the *front/right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp definition of the edge-up* is the primary focal point of the *haircut's* precision.

*Braid Arrangement in Current View:*
   - *Overhang/Projection:* The *backward-directed flow of the **front* *braids* creates a *defined, sleek, swept-back* effect, specifically *pulling the hair away from the facial features. This **backward/upward* styling is deliberate to *frame the face/create height/establish balance* with the jewelry and makeup.
   - *Volume Distribution:* The bulk and volume of the *braided* hair are concentrated on the *crown/back* of the head, contrasting with the *smooth, crisp* *skin/hair* of the *hairline. The hair's length is utilized for **upward height and rearward flow* rather than *downward drape* in this specific styling.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *square/rectangular* parts at the root are *clearly visible* by the surrounding *braids, **revealing* the *structured* look of the style. The primary visible lines are the *shaved hard lines and the geometric parts*.
*360° Structure Reference:* While *back* is not visible in this view, the overall style indicates *a tight, pulled-back aesthetic leading to either a bun/updo or a long cascade down the back*.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, soft, dramatic studio* lighting
      - Light Direction: *Front-lit/side-lit* (slightly to the right of the subject)
      - Effect on Style: The lighting *enhances* the *product sheen/texture/definition, making the **rope-like* texture appear *shiny/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *braids* and the *smooth* skin of the *scalp/hairline*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* and *defined* *edges* suggest *setting with gel/mousse and possibly a low-heat dryer* to ensure minimal flyaways and a polished finish.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition/create a sleek, lifted silhouette* and *lay flat against gravity* where desired (*the hairline/sides) and **hang freely/maintain structure* where *length* permits (off-camera drape or updo).

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on **subject's face/hairstyle* and the primary hair elements (*sharp hairline, front parts), while the background is **partially visible/softly blurred*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature/focal point* of the portrait

   *Head Position:*
      - Position: *Turned approximately 10-15° right/facing forward with a slight tilt*
      - Impact: This positioning *emphasizes* the *C-Cup corner and the tight sweep* on the right side of the head, showcasing the precision edge work.

---

### IX. Accessories and Additional Elements
*Hair Accessories:*
    - Type: *None visible*
    - Function: The style is secured purely by the braiding and styling technique.

---

### X. Cultural Context and Style Classification
*Style Category:* *Protective/Contemporary/Box Braids*
*Cultural Significance (If Applicable):* Box braids are a *traditional and highly significant* protective style in Black culture, adapted here into a sleek, high-fashion presentation.
*Maintenance Requirements (Inferred):* *Moderate* time investment, product needs focus on *moisturizing scalp/braids, light oil/sheen spray, and frizz-control mousse. Touch-up frequency for the edges is **high (daily/weekly)* for maintaining the sharp line-up; re-braiding is needed every *6-10 weeks* for longevity.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831558/Hairstyles/WhatsApp_Image_2025-11-09_at_09.37.24_35a39f91_wyjznw.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Dual-Toned Split Dye with Shortened Texture and Precision Edge-Up',
    
     ai_description: `### Title: Dual-Toned Split Dye with Shortened Texture and Precision Edge-Up

---

### I. Style Foundation and Overall Structure
"A professional studio portrait photograph of an *African-American/Black* *man* with a *dual-toned split dye* and a *shortened textured top* integrated with a *low to mid taper fade* on the sides and back, photographed from a *front view* with a slight *three-quarter turn to the left*.

*Core Style:* *Shortened natural texture* with *chemical color application* on top, integrated with a *low/mid taper fade* on the sides and back. The overall aesthetic is *edgy, **contemporary, and **highly expressive*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification), which provides *high density* and *excellent structural support* for the short, upright texture, allowing for *volume and shape retention* despite the short length.
*Product Use (Inferred):* The hair displays a *matte to low sheen* and *distinct texture definition, suggesting the use of a **light holding cream, styling wax, or curl sponge technique* to *define the texture, **minimize frizz, and **control the direction of the short coils. The **short length and defined separation* indicate a focus on *texture enhancement and shape retention*.
*Shortened Texture Details:* The natural coils are cut short and appear to be *shaped into a uniform, compact, boxy silhouette* across the top, where *minimal length* is left to show the coily texture.
*Parting & Density:* No distinct parting is visible due to the short, textured style. The *very high density* of the natural hair ensures *minimal* scalp visibility, even at this short length."

---

### II. Arrangement and Placement of the Shortened Texture
"The short coils are meticulously styled to create a *compact and upright* silhouette:

*Location:* The *full horseshoe section (top)* retains the most length and color. The sides and back transition quickly into a short taper fade.
*Directional Flow (The Curve/Pattern):* The short coils are primarily directed *upward and slightly forward* from the root, creating a *small, contained shape* across the top of the head.
   - *Front Row/Section:* The short texture along the frontal hairline is styled to *stand upright, forming a **textured* perimeter that sits *just above the forehead and is perfectly aligned with the precision edge-up*.
   - *Crown/Middle Rows:* The texture runs consistently *upward, maintaining a **uniform height and density* across the color-treated area, thus creating the *compact, slightly square silhouette*.
   - *Side Perimeter/Lateral Sections:* The short texture immediately adjacent to the fade transition is *kept clean and tight, creating a **sharp, well-defined* border against the very short sides. This is the transition point where the *texture's length reduces dramatically* into the fade.
*Individual Coil Arrangement:* Each coil unit is *tightly formed and separated* at the tip, giving it a *highly textured and defined* appearance. The *consistent short length* allows for *uniformity in the overall shape and height*."

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
"The tapered area provides the architectural support and *sharp contrast* for the brightly colored top:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers/razors.
   - *Front:* A *straight and hard* line is placed across the *forehead, marking the boundary of the **shortened texture*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp angular* shape is *meticulously placed* to connect the *front hairline* with the start of the *side fade/taper, creating a **highly visible defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends sharply from the corner of the front hairline, running down to meet the start of the ear taper.
   
   - *Nape/Back:* (Inferred) The back hairline is likely *tapered or blocked and edged-up* to complement the precision of the front and sides.

*Fade/Taper Transition:* The fade starts *low/mid* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *full hair length* is kept *gradual and blended, primarily focused on the area **above the ear and around the neckline. This **low/mid* placement *maximizes* the canvas for the *dense, textured, and colored* top.

*Fade Technical Specifications:*
   - Type: *Low/Mid Taper Fade (Skin/Shadow Fade)*
   - Starting Point: *Temporal line/just above the ear*
   - Fade Range: *Skin/Guard #0 (0mm) to Guard #2-3 (6-9mm)*
   - Transition Zone: *Approximately 15-20mm* in height
   - Technique: *Clipper-over-comb and/or lever-open/closed fading technique* is used to create a seamless blend."

---

### IV. The Hardness, Texture, and Physical Characteristics
"*Firmness/Tension (The "Hardness"):* The style appears *medium* and *firm, particularly where the texture stands upright. This indicates **moderate* control/product was applied during *styling* to ensure *shape retention and uniformity. The texture is **dense and tightly coiled—not **soft—contributing to its **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* against gravity due to the short length and product use."

---

### V. Hairline Definition and Precision Edge Work
"*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp angular* arch that creates a *precise, 90-degree corner* just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* The corners are *squared off and exceptionally sharp*.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*.
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the *forehead* and surrounding the temple.
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it.
   - Skill Level: This precision is a signature of *high-skill barbering*."

---

### VI. Hair Condition, Color, and Finish
"*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Vibrant custom color split dye* applied to the top section. The left-front side appears to be a *vivid magenta/red, and the right-front side is a **vibrant electric blue/teal. The colors are **completely separated by a center vertical line*, which is where the short texture ends on the sides.
   - Color Distribution: *Consistent and saturated* across the entire shortened top section, with no bleed or mixing.

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-gloss* (likely due to product on the edge-up, slightly less sheen on the textured top).
   - Texture Definition: *Highly defined* short coils.
   - Frizz Control: *Minimal frizz*, well-controlled by product.

*Health Indicators:*
   - Overall Condition: *Well-maintained* (despite chemical coloring), appears *healthy/moisturized* at the roots/scalp.
   - Product Buildup: *None visible*."

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
"The description is primarily based on a *close-up shot, **front view* with a slight turn, of the subject, with the light source *front-lit* and slightly from the right.

*Current View Analysis:*
   - *Primary Visibility:* The vibrant *split-dye color* and the *crisp C-Cup hairline* on both the left and right sides are the most visually dominant technical elements. The *symmetry of the color split and the precision cut* are key.
   - *Focal Points:* The *dual-color application* and the *front hairline's geometric precision* are the primary focal points of the entire look.

*Shortened Texture Arrangement in Current View:*
   - *Overhang/Projection:* The short, upright texture creates a *contained and square* silhouette, with the color adding the primary visual interest. The height is deliberate to showcase the color contrast.
   - *Volume Distribution:* The bulk and volume are *minimal* due to the short length, concentrated only on the *top* of the head, contrasting with the *skin-tight* fade area.

*Parting Visibility:* The *center color-split line* is the *most visible line* in the top section, *clearly defining the boundary* between the red and blue dyes.
*360° Structure Reference:* While the back is not visible, the precision of the front and sides indicates the fade would *wrap consistently* to a *cleanly edged-up or tapered nape*."

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright studio* lighting.
      - Light Direction: *Front-lit* (with slight shadow to the subject's left).
      - Effect on Style: The lighting *enhances* the *vibrancy and saturation* of the split-dye colors and *highlights* the *crispness* of the hairline.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark skin/short hair* of the fade and the *bright, textured* hair above.

   *Styling Execution:*
      - *Setting Method (Inferred):* The defined texture was likely set with *clippers/trimmers and a defining product* (e.g., small amount of pomade or wax) to maintain the coil separation and upright position.
      - *Adaptive Styling:* The styling is adaptively *crisp and clean—designed to **maximize definition* and *stand upright* to showcase the *dual color split*.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the immediate hairline/colored texture*.
      - *Composition:* This *emphasizes* the hairstyle's *bold color and sharp geometry* as the focal point.

   *Head Position:*
      - Position: *Facing forward/turned approximately 15° to the left (subject's right)*.
      - Impact: This positioning *reveals* the complete *front hairline* and gives a clear view of the *transition from the red-dyed section on the left to the blue-dyed section on the right*."

---

### X. Cultural Context and Style Classification (Optional)
"*Style Category:* *Contemporary/Expressive/Custom Color Cut*
*Cultural Significance (If Applicable):* The foundation is a common *textured short style with a precision fade, but the application of the **vibrant split-dye* elevates it to a *high-fashion, highly expressive* aesthetic common in modern music and celebrity culture.
*Maintenance Requirements (Inferred):* *High. Requires frequent **edge-ups (1-2 weeks)* and regular *color touch-ups* to maintain saturation and blend (every 4-6 weeks).`,
    category: 'Low Cut', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831612/Hairstyles/WhatsApp_Image_2025-11-10_at_03.26.12_cc36b8b6_cbvv1h.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Feed-In Cornrows into Free-Hanging Micro Box Braids Updo',
    
     ai_description: `### Title: Feed-In Cornrows into Free-Hanging Micro Box Braids Updo

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *dark-skinned Black woman* with a *Feed-In Cornrows into Free-Hanging Micro Box Braids Updo* hairstyle, photographed from *a three-quarter view, slightly from the left side*.

*Core Style:* *Precision cornrow braiding (feed-in technique)* on the sides and back, transitioning into *micro box braids* that are gathered high on the crown to form a *voluminous, cascading high ponytail/bun hybrid. The overall aesthetic is **clean, highly defined, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4B-4C* classification), which provides *excellent density and natural grip* necessary to secure the synthetic braiding hair and maintain the high tension required for the smooth cornrow base.
*Product Use (Inferred):* The hair and scalp display a *high sheen level* and *exceptional texture definition, suggesting the use of a **braiding gel, edge control, and/or setting mousse/foam* to *secure the parts, smooth the scalp hair, define the individual braids, and minimize frizz. The **tightness* at the root indicates *significant, high-skill tension and smoothing technique* was applied during styling.
*Cornrow/Braid Details:* *Cornrow braids* are the primary foundational style, created using the *feed-in technique* where additional hair (likely synthetic) is seamlessly added to the natural hair to increase length and thickness. The micro box braids (the tails) are created using a standard three-strand braiding technique, extended to extra-long length.
*Parting & Density:* *Straight-line, horizontal parting* is clearly visible, with section sizes being *uniform and moderate* for the cornrows. The *high density* of the *braids* ensures *minimal* scalp visibility, especially over the length.

---

### II. Arrangement and Placement of the Braiding
The *cornrows* are meticulously placed to create a *smooth, slicked-back base* that directs all volume upward and backward:

*Location:* *Full head coverage, with the cornrows beginning at the hairline (front and sides) and running toward the **crown/vertex area. The **entire* natural hair is incorporated into the braids.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *cornrows* in the first row, along the *forehead* hairline, are styled to *sweep back* at a slight diagonal/upward angle, leading directly toward the high collection point. They are positioned to *slick back entirely, forming a **smooth* silhouette that sits *flat against the scalp*.
   - *Crown/Middle Rows:* The rows of *cornrows* running from the *front and sides* converge precisely at the *center crown (vertex). This intentional placement **forces volume toward* a single, high collection point, *preventing* any lateral or forward movement, thus creating the *high, centralized updo silhouette. The visible rows are predominantly **straight and parallel*, following a radial pattern toward the center.
   - *Side Perimeter/Lateral Sections:* The *cornrows* immediately adjacent to the temple/ear area are *braided* to *curve slightly upward and backward, creating a **clean, defined* border against the skin. This is the transition point where the *flat-braided sections transition into the smooth skin of the hairline*.
*Individual Braid Arrangement:* Each *cornrow/box braid* is uniformly *secured and smoothed* from the root, giving it an *exceptionally tight and smooth* appearance before transitioning into a *rope-like, micro box braid* tail. The *uniform* length allows for a *cascading, highly voluminous* arrangement in the updo.

*Section Dimensions (Inferred):*
   - Count: *10-15* foundation cornrows across the visible front/top of the head.
   - Thickness: *3-5 mm* diameter per individual micro box braid unit (the hanging sections).
   - Length: *60-80 cm* (extra-long, waist/hip-length) measured from the collection point to the tip.
   - Part width: *4-6 mm* between cornrow sections.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The base is a fully braided style with an *Edge-Up/Line-Up* on the hairline, not a fade/taper.

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/razors*.
   - *Front:* A *straight/natural* *hard* line is placed across the *forehead/temples, meticulously defining the boundary of the **scalp/hairline*.
   - *C-Cup/Temple Arch/Corner:* A *sharp* *angular/curved* *shape* is meticulously placed to connect the *front hairline* with the start of the *side natural hairline, creating a **highly visible defined* corner. This placement is *critical* for the *crispness* of the entire look.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *cornrows* appear *extremely tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *installation* to ensure *maximum longevity and a slick, flat aesthetic. The texture is **rope-like and dense* for the micro braids and *smooth and flat* for the cornrow base—not *soft—contributing to their **neat* structure and *uniform* hang/fall.
*Physical Feel (Inferred):* Based on visual analysis, the cornrow base would feel *smooth and firm* to touch, with *high* density in the free-hanging braids and *firm* hold at the root.
*Movement Characteristics:* The cornrow base demonstrates *static hold, while the micro braids in the updo show **dynamic flow* and *natural movement* in the cascading sections, responding to gravity and motion.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp* *C-Cup/temple arch* that carves a *sharp* *crescent* shape just above the temple area, perfectly connecting the front hairline to the side hairline.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers/razors*.
   - Line Quality: Creates a *geometrically precise* line across the *forehead/temple*.
   - Contrast: *Sharp* contrast with the *smooth* skin above it.
   - Skill Level: This precision is a signature of *high-skill professional technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Jet Black (1 or 1B)*, consistent for both the natural hair (where visible) and the braiding extension hair.
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss* on both the scalp and the braiding hair.
   - Texture Definition: *Highly defined*, with a crisp rope-like appearance on each micro braid.
   - Frizz Control: *Completely smooth* on the cornrow base, indicating excellent use of smoothing products and high tension.

*Health Indicators:*
   - Overall Condition: *Well-maintained/moisturized* (indicated by the high sheen).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *high collection point, the smooth cornrow base, and the precise C-Cup hairline* on the *left/front* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *transition from the smooth cornrows to the voluminous mass of micro braids* is the primary focal point of the style.

*Braid Arrangement in Current View:*
   - *Overhang/Projection:* The *backward-directed flow of the **front and side* cornrows creates a *slicked-back, defined* silhouette. The micro braids are secured at the crown and flow *downward* in a cascading waterfall effect, framing the neck and shoulders.
   - *Volume Distribution:* The bulk and volume of the *micro braids* are heavily concentrated on the *crown/vertex* of the head and then cascade over the back and visible shoulder. The hair's length is utilized for *downward drape* rather than lateral spread.

*Parting Visibility:* Due to the *smooth, tight* arrangement and the angle, the individual *straight-line* parts at the root of the cornrows are *clearly visible, **revealing* the *structured* look of the style. The primary visible lines are the *clean, parallel parts* and the *shaved hard lines* of the hairline.
*360° Structure Reference:* While the direct back is not visible, the overall style strongly indicates that the cornrows from the nape would also flow *upward* to converge at the *same high collection point* on the vertex for a complete, uniform updo base.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting.
      - Light Direction: *Front-lit with a slight side emphasis* (indicated by facial highlights).
      - Effect on Style: The lighting *enhances* the *high sheen* and *texture definition, making the **rope-like* micro braids appear *shiny* and *dimensional*.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* and *defined tips/edges* suggest a *setting technique (e.g., setting foam/mousse)* was applied post-braiding to lay the cornrow base flat and seal the micro braid tails.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the hairstyle's frontal elements (cornrows and hairline)*.

   *Head Position:*
      - Position: *Turned 30° left and slightly downward*.
      - Impact: This positioning *emphasizes* the *slickness of the cornrows, the crispness of the hairline, and the volume* created by the micro braids cascading over the right shoulder.

---

### IX. Accessories and Additional Elements (If Present)
   *Hair Accessories:*
      - Type: A *hair elastic or strong tie* is used to secure the micro braids into the high updo at the crown (not directly visible, but implied by the structure). *No visible decorative accessories* are present.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Protective/Contemporary Braiding Style*
*Cultural Significance (If Applicable):* This is a highly popular and technical evolution of *traditional cornrow and box braid techniques*, often serving as a durable protective style for coily/kinky hair textures.
*Maintenance Requirements (Inferred):* *Low daily maintenance* once installed, requiring *edge control and mousse/sheen spray* for upkeep. *Touch-up frequency* is usually *4-8 weeks* for re-braiding the new growth at the scalp.`,
    category: 'Braids', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831699/Hairstyles/WhatsApp_Image_2025-11-10_at_03.32.27_521453a7_y27kuw.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Sculpted Finger Wave Pixie Cut',
    
     ai_description: `## Title: Sculpted Finger Wave Pixie Cut

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black woman* with a *medium-dark skin tone* with a *Sculpted Finger Wave Pixie Cut* hairstyle, photographed from a *three-quarter view (slightly turned to her right)*.

*Core Style:* *Precision-cut, texturized short haircut* with a *deep, uniform finger-wave pattern* meticulously styled on top, sides, and back. The overall aesthetic is *clean, classic, and high-definition contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C or tightly coily 4B* classification), which provides *excellent density and natural volume* for the base cut, allowing the *setting technique to create a tight, smooth, uniform wave pattern* with high adherence to the scalp.
*Product Use (Inferred):* The hair displays *high sheen* and *exceptional, rigid hold* with *zero visible frizz or flyaways, strongly suggesting the use of a **setting lotion, wrapping foam, or strong-hold styling gel/pomade* to *secure, define, and provide high-gloss shine* to the finger waves, ensuring the *sculpted shape* is maintained. The *tightness and smoothness* at the root indicate *high tension and a setting technique* (likely done with a fine-tooth comb and product while wet, followed by hooded dryer setting) was applied during styling.
*Finger Wave Details:* *Continuous, rhythmic S-shaped waves* are formed, where *each wave crest is uniform in height and distance* from the adjacent crest, resulting in a *smooth, continuous, and highly structured pattern* that covers the entire perimeter of the top and sides.
*Parting & Density:* The style does not utilize traditional parting; rather, the *directional combing for the wave pattern* establishes the flow. The hair is styled with *medium-high density, ensuring **no scalp visibility* through the finished waves.

---

### II. Arrangement and Placement of the Finger Waves
The *finger waves* are meticulously placed to create a *smooth, helmet-like, and highly defined silhouette*:

*Location:* The style covers the *entire head, extending from the front hairline down to the nape and around the temples/ears. There is **no visible fade or taper; the hair length appears **very short and uniform* (likely 5-10mm) to support the tight wave pattern.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The waves in the first row, along the *forehead hairline, are styled to **sweep slightly back and diagonally* toward the crown. They are positioned to *frame the face and subtly follow the natural hairline, forming a **smooth, glossy* *fringe/silhouette* that sits *directly against the scalp*.
   - *Crown/Middle Rows:* The main body of the waves running from the *front/crown* to the back are directed in a *consistent, slightly diagonal flow* (appears to be set running from front-left to back-right). This intentional placement *maximizes the visual continuity* of the wave pattern, *preventing a visible break* and creating the *overall uniform, sculpted silhouette*.
   - *Side Perimeter/Lateral Sections:* The waves immediately adjacent to the ears and temples are *combed and set to angle inward and downward, creating a **clean and defined* border against the skin. This ensures a *seamless transition* from the set hair to the natural hairline.
*Individual Wave Arrangement:* Each *S-curve* is uniformly *secured and formed* from the root, giving it a *smooth, tight, and polished* appearance. The *consistent, extremely short length* allows the arrangement to maintain *uniformity and structure* across the entire head.

*Wave Dimensions (Inferred):*
   - Wave Height/Crest-to-Trough: *3-5 mm*
   - Wave Distance/Peak-to-Peak: *10-15 mm*
   - Hair Length Supporting Waves: *5-10 mm* (Maximum bulk before setting)

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The hair is cut to an *extremely short, uniform length* to facilitate the tight finger wave set; a traditional clipper fade/taper is *not present*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *kept natural yet meticulously cleaned/defined* using precise trimmers to enhance the look's sharp finish.
   - *Front:* A *natural, softly shaped* line is maintained across the *forehead/temples, cleaned but **not carved with a harsh, straight hard line*.
   - *C-Cup/Temple Arch/Corner:* A *gentle, naturally curved* shape is meticulously cleaned to connect the *front hairline* with the side hair, creating a *subtle, natural* *defined* corner. This placement is *complementary* for the *naturalness and softness* of the hairline against the highly styled waves.
   - *Temporal Line:* The hair is cut *extremely short* down to the temporal line to support the set wave pattern.
   - *Nape/Back:* (Not visible, but inferred) The back hairline is likely *softly tapered or kept natural* to complement the clean finish.

*Fade/Taper Transition:* *No visible fade or taper is used.* The transition from the hair length (5-10mm) to the skin-level hairline is *abrupt but softly finished, relying on the **shortness and precise cleaning* rather than a graduated clipper blend.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *waves* appear *extremely tight and firm/rigid, particularly across the crests and valleys. This indicates **significant tension* was applied during *setting* (using a comb and strong product) to ensure *maximum longevity and a defined, sculptural aesthetic. The texture is **dense and smooth/glossy—not **soft or flexible—contributing to their **neat, structured* hang and *uniform* appearance.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *smooth, rigid, and high-hold* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining its set, sculpted position* entirely, showing *no natural movement* or flow.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *moderate, clean* precision, utilizing a *Natural Edge* technique.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *softly shaped, natural* hairline, *naturally blended* in execution.
   - *C-Cup/Corner Arch:* A *gentle* side arch that carves a *soft* crescent shape just above the temple area, *cleaning up* the front hairline to the vertical line of the cut, which *complements* the classic wave style.
   - *Temporal Points:* Cleaned to a soft point, following the natural growth.

*Execution Details:*
   - Tool: Likely cut and cleaned with *trimmers or clippers with a fine zero-gap setting*.
   - Line Quality: Creates a *natural, clean, but not overly harsh or straight* line across the *forehead/temple*.
   - Contrast: *Subtle* contrast with the *smooth, glossy* *waves* above it.
   - Skill Level: This precision is a signature of *professional technique* that values a *clean, soft hairline finish*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black (1B)*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *High shine/wet-look gloss*
   - Texture Definition: *Highly defined, smooth, and uniform wave pattern*
   - Frizz Control: *Completely smooth* (perfectly laid)

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and highly moisturized* (inferred by the sheen and smooth set).
   - Product Buildup: *None visible; the sheen suggests a **fresh product application*.
   - Elasticity (Inferred): *Good* based on the *tight, uniform set* achievable on this hair type.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up* portrait, *three-quarter view (subject facing slightly right of the camera)* of the subject, with the light source *highlighting* the *front and visible right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *consistent wave pattern and the high-gloss finish* on the *front-right side* of the head the most visually dominant technical elements.
   - *Focal Points:* The *sculpted texture and the smoothness* of the finger wave are the primary focal point of the *style's* execution.

*Finger Wave Arrangement in Current View:*
   - *Overhang/Projection:* The *slightly backward and lateral-directed flow of the **front and top* waves creates a *smooth, defined, and helmet-like* silhouette effect, specifically *following the curve of the scalp and not projecting outward. This **flat/directional* styling is deliberate to *emphasize the precise wave pattern and the contour of the head*.
   - *Volume Distribution:* The hair's bulk and volume are *minimal* and *evenly distributed* across the crown/top to facilitate the flat wave set, contrasting with the *natural hairline cleaning* at the perimeter. The hair's length is utilized for *sculpted definition and adherence to the scalp* rather than *upward height or lateral spread*.

*Parting Visibility:* Due to the *dense, smooth* setting and the angle, there are *no visible parts; the hair is styled as a continuous surface, **enhancing* the *structured, complete* look of the style. The primary visible lines are the *set wave crests, not **natural parts*.
*360° Structure Reference:* While the back and left side are not visible in this view, the overall style indicates a *consistent, uniform finger wave pattern* would continue around the entire head perimeter and crown, maintaining the same length and definition.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
    - Light Source: *Bright* *studio* lighting
    - Light Direction: *Front-lit* (slightly off-center)
    - Effect on Style: The lighting *enhances* the *high sheen and texture definition, making the **smooth, set* texture appear *highly dimensional* and *glossy*.
    - Contrast Enhancement: The *bright* lighting *emphasizes* the subtle contrast between the *dark, glossy* *waves* and the *smooth* skin of the clean hairline.

*Styling Execution:*
    - *Setting Method (Inferred):* The *tight coiling and smooth definition* suggest a *wet set technique, likely set with a fine-tooth comb and strong-hold product, then dried under a **hooded dryer* (or similar heat source).
    - *Adaptive Styling:* The styling is adaptively *crisp and dramatic—meaning it is styled to **maximize definition and rigid structure* and *lay flat against gravity* where desired (the entire head), creating a *sculptural* finish.

*Photographic Technique:*
    - *Focus:* The depth of field is *shallow/medium, placing the sharpest focus on the **subject's face and the hairstyle*, with the primary hair elements (the set waves and high sheen) in focus.
    - *Image Quality:* *High resolution/sharp detail/professional color grading*
    - *Composition:* This *emphasizes* the hairstyle as a *key feature* and *focal point* of the portrait, highlighting its flawless execution.

*Head Position:*
    - Position: *Turned 30° right* (three-quarter view)
    - Impact: This positioning *emphasizes* the *consistent wave progression and the subtle contouring* around the temple area on the right side.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:* *None visible.*

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Classic/Contemporary Pixie Cut, Sculptural Set Style, Protective* (though highly set, the short cut requires precise trimming).
*Cultural Significance (If Applicable):* The finger wave technique is a *classic style from the 1920s-1930s* that remains a *high-fashion staple, often seen as a symbol of **glamour and precision hair artistry*, particularly adaptable to naturally coily hair when set correctly.
*Maintenance Requirements (Inferred):* *High time investment* for the setting process; requires *strong-hold setting products; **frequent trimming* (every 3-5 weeks) to maintain the short, uniform cut and clean hairline.`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831785/Hairstyles/WhatsApp_Image_2025-11-10_at_03.41.26_3546b386_tiuwm6.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Copper-Toned Pixie Cut with Texturized Crop',
    
     ai_description: `### Title: Copper-Toned Pixie Cut with Texturized Crop

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown skin tone woman* with a *texturized pixie crop* hairstyle, photographed from *three-quarter view*.

*Core Style:* *Precision-cut, texturized crop* on top, integrated with *short, clipped sides and nape* which provide a clean finish without a dramatic skin fade. The overall aesthetic is *edgy, contemporary, and high-fashion*, combining a structured cut with dynamic color.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification), which provides *excellent density and volume potential*. The short length and styling have minimized the natural curl pattern, allowing the hair to stand erect and retain the clipper/scissor texturizing.
*Product Use (Inferred):* The hair displays a *high shine/semi-gloss sheen* and *highly defined texture, suggesting the use of **pomade, styling wax, or finishing oil* to *provide shine, define the short, choppy texture, and maintain the shape. The hair is styled **upward and forward* with a *firm, yet flexible* hold.
*Crop Details:* The hair is *uniformly short* across the entire head, following the *classic pixie/crop silhouette* but adapted for coily hair texture by using a *clipper-over-comb/scissor-over-comb* technique to create *choppy, defined texture* on the surface.
*Parting & Density:* There is *no defined part. The hair is styled to distribute **evenly* across the crown and top. The *high density* of the hair, coupled with the short length, ensures *minimal* scalp visibility, creating a rich, uniform color field.

---

### II. Arrangement and Placement of the Texturized Crop
The short hair is meticulously cut and styled to create an *intentional, spiky, and voluminous texture*:

*Location:* The *entire head* is cut to a short length. The length transitions are *gradual* around the sides and back, maintaining a short, clean look. The greatest length and volume are concentrated on the *horseshoe section/crown and front-top*.
*Directional Flow (The Curve/Pattern):* This style utilizes the natural lift and density of the hair, styling it *primarily forward and upward*:
   - *Front Row/Section:* The hair along the *forehead* hairline is styled *forward and slightly upward. The ends are **choppy/feathered, creating a **textured, slightly irregular fringe* that sits *just above the forehead and temples*, providing a soft but edgy frame to the face.
   - *Crown/Middle Rows:* The hair on the *crown and vertex* is directed *radially* but styled to stand *upright, adding **maximum volume and height* to the overall silhouette. This intentional placement *forces volume toward* the crown, *preventing* a flat appearance, thus creating the *voluminous, spiky silhouette*.
   - *Side Perimeter/Lateral Sections:* The hair immediately above the ears and temporal area is cut *significantly shorter* than the top, following the contour of the head and creating a *defined, tight transition* against the skin.
*Individual Strand Arrangement:* The styling breaks the hair into *small, vertical, texturized clusters* using product, giving it a *choppy, defined, and light-reflecting* appearance. The *consistent short length* allows the hair to be styled with *maximum lift* and *intentional separation*.

*Section Dimensions:*
   - Length (Top): *15-25 mm* (root to tip, before styling lift is factored in)
   - Length (Sides/Back): *~3-6 mm* (short and tight)
   - Texture Definition: *Visible, spiky cluster size ~3-5 mm* wide

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The short clipping on the perimeter provides the architectural frame and *clean* contrast for the *voluminous crop*:

*Hairline (The Edge-Up/Line-Up):* The hairline appears *natural* but is likely *cleaned up/softly edged* using clippers to maintain a neat perimeter.
   - *Front:* A *natural/soft* line is placed across the *forehead/temples*, maintaining the natural shape without a harsh "hard" line.
   
   - *C-Cup/Temple Arch/Corner:* A *softly rounded* shape is maintained at the temple arch, connecting the front hairline with the side perimeter, creating a *subtle* defined corner. This placement is *complementary* for the *naturalness and shape* of the entire look.
   
   - *Temporal Line:* The hair is clipped short, but the line extends naturally along the temple.
   
   - *Nape/Back:* (Inferred) The nape would be either *tapered* or *softly blocked* to complement the short sides.

*Fade/Taper Transition:* The perimeter is cut *very short* (a low taper or short guard clipper cut), but the transition to the top length is *gradual and blended* rather than a sharp skin fade. This transition starts *low/mid* on the head, primarily focused on the area *above and around the ear. This **low/mid* placement *balances* the canvas for the *voluminous, textured* style above.

*Fade Technical Specifications (Clipper Cut):*
   - Type: *Short Taper (or Clipper-Over-Comb Clean-Up)*
   - Starting Point: *Around the temple and ear line*
   - Cut Range: *Skin (or guard #0.5 - 1.5mm) at the very perimeter, quickly blending up to guard #2-3 (6-10mm) on the lower sides/back*
   - Transition Zone: *Relatively short (10-15mm high)*
   - Technique: *Blended using a short guard or clipper-over-comb*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Uniform, vibrant Copper-Orange*
   - Color Variations: The color is *uniform* throughout the short cut, with *no visible highlights or lowlights*.
   - Color Distribution: *Consistent across all sections*, allowing the texture to be the main element that catches the light.

*Finish Quality:*
   - Sheen Level: *High shine/semi-gloss*
   - Texture Definition: *Highly defined, spiky texture*
   - Frizz Control: *Completely smooth and controlled* for the defined texture.

*Health Indicators:*
   - Overall Condition: *Appears healthy and well-maintained*, with the color vibrant and the hair responding well to styling.
   - Product Buildup: *Slight sheen* is visible, indicating a high-shine pomade or wax.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/medium shot, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *voluminous, textured crown* and the *tight, clean side perimeter* the most visually dominant technical elements. The contrast between the short, dark sides and the bright, texturized top is a key feature.
   - *Focal Points:* The *upward, defined texture* and the *vibrant copper color* are the primary focal points of the hairstyle.

*Styling Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and upward-directed flow of the **front-top* hair creates a *defined, slightly irregular fringe/silhouette* effect that *sits high and textured above the forehead. This **upward* styling is deliberate to *create height and volume*, contrasting with the natural head shape.
   - *Volume Distribution:* The bulk and volume are concentrated on the *crown and front-top* of the head, contrasting sharply with the *very short/tightly clipped* hair of the *sides and back*.

*360° Structure Reference:* While the back and far side are not fully visible, the overall style indicates a *uniform short cut* around the entire perimeter, with the *voluminous, textured crop* concentrated across the *top horseshoe section*.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Dramatic, localized studio* lighting, possibly with a *rim light* effect on the hair and shoulder.
      - Light Direction: *Side-lit and front-lit*
      - Effect on Style: The lighting *enhances* the *high product sheen* and *texture definition, making the **spiky* texture appear *shiny and dimensional*, drawing attention to the color's vibrancy.
      - Contrast Enhancement: The *dramatic* lighting *emphasizes* the precise contrast between the *bright copper textured crop* and the *dark skin/short, dark hair* of the perimeter.

   *Styling Execution:*
      - *Setting Method (Inferred):* The tight coiling/defined texture suggests the use of a *styling product (wax/pomade)* applied to short, damp or dry hair, using *fingers* to create the intentional *spiky separation* and achieve the desired lift.
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *stand upright against gravity* where desired (the crown/top) and *lay flat* where the cut is short (the sides).

   *Head Position:*
      - Position: *Turned approximately 45° to the right* (viewer's left), with the *chin slightly down* and the *right shoulder raised*.
      - Impact: This positioning *emphasizes* the *texture and volume* of the crop, and *highlights* the clean line of the right side perimeter, while showing the curve of the hairline transition.

---
### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/High-Fashion* Pixie Crop/Texturized Short Style
*Maintenance Requirements (Inferred):* *High*. Requires frequent (every 3-4 weeks) clipper/scissor clean-ups and precision shaping to maintain the short perimeter and length. Daily styling is required to achieve the spiky, upward texture and maintain the high shine. High color maintenance is also required due to the vibrant custom color.`,
    category: 'Weaves', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831876/Hairstyles/WhatsApp_Image_2025-11-10_at_03.55.06_fc2e0eb2_g5mdji.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Voluminous Defined Coiled Curls with Center Part',
    
     ai_description: `### Title: Voluminous Defined Coiled Curls with Center Part

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *mixed-ethnicity/medium-skin tone woman* with a *long, voluminous, naturally textured curly* hairstyle, photographed from a *three-quarter view (subject turned approximately 20-30 degrees to the right)*.

*Core Style:* *Natural coiling/curling* achieved on top and sides, with significant *length and volume* maintained throughout. The overall aesthetic is *textured, voluminous, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *curly/coily* (Type *3B-3C* classification), which provides *high density, significant volume, and a defined spiral curl pattern* that supports the voluminous shape.
*Product Use (Inferred):* The hair displays *semi-gloss/natural luster* and *high texture definition, suggesting the use of **hydrating creams, curl definition creams, and/or light oil* to *define, moisturize, minimize frizz, and provide a healthy sheen. The **medium looseness/natural texture* at the root indicates *minimal tension* was applied, allowing for natural root lift and volume.
*Natural Curl Details:* The primary styling method is a *wash-and-go or a careful set* allowing the natural *tight spiral/corkscrew curl* pattern to fully form. Each curl is visibly defined from root to tip.
*Parting & Density:* A *clean, distinct center part* runs from the front hairline back toward the crown. The *high density* of the curls ensures *minimal* scalp visibility, especially due to the expansive volume.

---

### II. Arrangement and Placement of the Primary Style Element
The *coils and curls* are meticulously placed to create a *large, rounded, and dynamic silhouette*:

*Location:* *Full head coverage.* All hair is maintained at significant length to contribute to the overall volume. No fades or tapers are visible.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The curls in the first row, along the *forehead/temple* hairline, are styled to *hang slightly forward and laterally away from the center part, creating a soft sweep that **frames the face. They are positioned to **frame the upper face/temples, forming a **heavy, textured, and voluminous* *fringe/face-frame* that sits *at cheekbone level, draping past the jawline*.
   - *Crown/Middle Rows:* The curls around the *crown/center* are directed *radially* from the center part but primarily allowed to *fall naturally due to gravity and curl memory. This intentional placement **forces maximum volume outward and around* the head, thus creating the *expansive, rounded, 'cloud-like' silhouette*.
   - *Side Perimeter/Lateral Sections:* The curls on the visible left and right sides *hang straight down, creating a **textured and defined vertical border* at maximum length. This is a single, voluminous length with *no distinct transition point* to shorter hair.
*Individual Curl Arrangement:* Each *coil/curl* is uniformly *formed/defined* from the root, giving it a *tight spiral/corkscrew* appearance. The *consistent* length allows *the arrangement to create a uniform, voluminous 'halo' effect* that maximizes the natural texture.

*Section Dimensions (Inferred):*
   - Thickness: *3-5 mm* diameter per individual coil
   - Length: *30-40 cm* (allowing for curl shrinkage) measured from root to tip (when stretched)
   - Part width: *1-2 mm* (a very fine, clean part)

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *curls* appear *medium/loose* and *soft/flexible, particularly near the ends. This indicates **minimal* tension was applied during *styling* to ensure *natural movement/maximum volume. The texture is **dense, coiled, and springy, contributing to their **natural and dramatic* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/springy* to touch, with *high* density and *soft/flexible* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow/natural movement* with the hair *responding to gravity* while maintaining the overall voluminous shape.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Dark Brown/Near-Black* (Level 2-3)
   - Color Variations: *Uniform* base color with *possible very subtle, natural-looking warmer undertones* visible under bright light.
   - Color Distribution: *Consistent across all sections.*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster* (indicating good hydration)
   - Texture Definition: *Highly defined* (defined coils without excessive clumping)
   - Frizz Control: *Minimal frizz* at the surface, showing excellent product application for curl retention.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible/slight sheen*
   - Elasticity (Inferred): *Good* based on *tight, defined curl pattern and absence of visible breakage*.

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up* shot, *three-quarter view (right side visible)* of the subject, with the light source *highlighting* the *front and side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *voluminous shape, highly defined texture, and clean center part* the most visually dominant technical elements. The right side of the face-framing curls is clearly visible.
   - *Focal Points:* The *tight, defined coiling* and the *expansive, symmetrical volume* are the primary focal points of the style.

*Curl Arrangement in Current View:*
   - *Overhang/Projection:* The *forward and lateral* flow of the *front* curls creates a *soft, textured, and framing* effect, specifically *draping around the cheeks and jawline. This **downward/lateral* styling is deliberate to *frame the face and establish balance*.
   - *Volume Distribution:* The bulk and volume of the *styled* hair are concentrated *all around the head, with maximum width around the **parietal ridge. The hair's length is utilized for **downward drape and lateral spread* to create the iconic voluminous silhouette.

*Parting Visibility:* Due to the *dense* arrangement, the individual curls *largely conceal* the scalp away from the distinct *center part, **enhancing* the *full* look of the style. The primary visible line is the *styled center part, not **the individual curl base sections*.
*360° Structure Reference:* While the back is not fully visible, the overall style indicates *the curls continue their full length, density, and definition around the entire circumference* to maintain the spherical shape.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Bright, professional* *studio* lighting
      - Light Direction: *Front-lit/slightly offset*
      - Effect on Style: The lighting *enhances* the *natural luster/sheen and texture definition, making the **coiled* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *bright* lighting *emphasizes* the texture and the healthy sheen of the *dark* hair.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined tips* suggest a careful *wash-and-go* or a *finger-coiled/shingled* technique set with curl cream/gel and dried *with a diffuser or air-dried*
      - *Adaptive Styling:* The styling is adaptively *natural and dramatic—meaning it is styled to **maximize definition and maintain natural texture* and *flow naturally* to create a voluminous drape.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow/medium, placing the sharpest focus on the **subject's face and the hairstyle's frontal volume and definition*.
      - *Composition:* This *emphasizes/frames* the hairstyle as a *key feature* of the portrait, highlighting the natural volume.

   *Head Position:*
      - Position: *Turned 20-30° right and slightly looking over the shoulder*
      - Impact: This positioning *reveals* the full volume and the *lateral flow* of the curls on the right side while *emphasizing* the face-framing effect.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:* *None visible.*

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Natural/Contemporary/Voluminous Curls*
*Maintenance Requirements (Inferred):* *Medium/High* time investment for wash-and-go/setting process, *high* product needs for moisture and definition (creams, gels, oils), and *daily* maintenance to maintain volume and minimize frizz.`,
    category: 'Coils', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'female',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762831952/Hairstyles/WhatsApp_Image_2025-11-10_at_04.02.42_eff817ea_vc7mzr.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Free-Form Locs with High Taper/Fade',
    
     ai_description: `### Title: *Free-Form Locs with High Taper/Fade*

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/Brown-skinned man* with a *free-form locs with high taper/fade* hairstyle, photographed from *a three-quarter view, slightly looking down and to his right*.

*Core Style:* *Free-form locs/thick single-strand twists* on top, integrated with a *high, tight taper/shadow fade* on the sides and back. The overall aesthetic is *textured, voluminous, and contemporary*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4B-4C classification), which provides **maximum density and volume* to support the formation and thickness of the locs/twists.
*Product Use (Inferred):* The hair displays a *semi-gloss sheen* and *well-defined loc/twist separation, suggesting the use of **light locking gel, moisture-retaining cream, and finishing oil* to *lock, define, and minimize frizz, while adding a healthy luster. The **tightness* at the root indicates *significant tension and a re-twisting/palm-rolling technique* was recently applied during maintenance/styling.
*Loc/Twist Details:* *Thick, mature, free-form locs or very thick single-strand twists* that have been recently rooted. The ends are *blunt/clubbed*, suggesting a mature growth stage or intentional trimming.
*Parting & Density:* The individual locs/twists have a *medium-high density* ensuring *minimal* scalp visibility except at the freshest root growth. The underlying parting pattern (not clearly visible due to thickness) appears to be *square/rectangular (box sections)* or *free-form/staggered* to support the final aesthetic.

---

### II. Arrangement and Placement of the Free-Form Locs/Twists
The *locs/twists* are meticulously placed to create a *high-volume, textured, downward drape* on the top section:

*Location:* *Full head coverage* for the locs/twists in the horseshoe section, with the hair *high-faded/tapered* below the upper parietal ridge/temporal line.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The *locs/twists* in the first row, along the *forehead/temple* hairline, are styled to *hang slightly forward and down. They are positioned to **overlap the forehead/create a soft, irregular fringe, forming a **heavy, textured silhouette* that sits *just above the eyebrows* when falling naturally.
   - *Crown/Middle Rows:* The majority of the *locs/twists* running from the *crown* to the *front* are directed *downward/forward/laterally. This intentional placement **forces volume toward* the sides and front of the face, *preventing* significant upward height, thus creating the *textured, voluminous, natural hang silhouette*.
   - *Side Perimeter/Lateral Sections:* The *locs/twists* immediately adjacent to the *fade/taper* on the left and right sides are styled to *hang straight down/angle slightly outward, creating a **textured, soft* *vertical* border against the *short sides/low fade. This is the transition point where the **locs/twists* *fall freely over the shortest hair of the taper*.
*Individual Loc/Twist Arrangement:* Each *unit* is uniformly *formed/styled* from the root, giving it a *thick, rope-like, somewhat irregular/organic* appearance. The *consistent* length allows *the arrangement to create a uniform, medium-long drape and bulk*.

*Section Dimensions (Inferred):*
   - Count: *50-70* individual *locs/twists* across the entire top section
   - Thickness: *8-12 mm* diameter per individual unit
   - Length: *150-200 mm (15-20 cm)* measured from root to tip
   - Part width: *4-6 mm* between sections

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *tapered/faded* area provides the architectural support and *sharp* contrast for the *locs/twists* above:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers*.
   - *Front:* A *straight/slightly curved* *hard* line is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp* *angular/curved* *shape* is meticulously placed to connect the *front hairline* with the start of the *side fade/taper, creating a **highly visible, defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends sharply from the c-cup down and back toward the ear, maintaining the clean edge.
   
   - *Nape/Back (Inferred):* Likely a *tapered* or *blocked* line, blending the shortest hair into the neck.

*Fade/Taper Transition:* The fade starts *high-to-mid* on the head, meaning the transition from *skin-level (0/clipper-closed)* to *full loc length* is kept *very short and tight/gradual and blended* in a small zone, primarily focused on the area *above the ear/around the temporal and occipital regions. This **high* placement *maximizes* the canvas for the *dense, voluminous* *locs/twists* above.

*Fade Technical Specifications (Inferred):*
   - Type: *High Taper Fade/Shadow Fade*
   - Starting Point: *Upper temporal line/lower parietal ridge*
   - Fade Range: *Skin/0.5mm* to *6mm* (or guard #2)
   - Transition Zone: *10-15 mm* (a tight, quick blend)
   - Circumference: *Wraps around the sides and back* of the head, connecting the sharp edge-up.
   - Technique: *Freehand/Clipper-over-comb and fading technique* for a clean, tight transition.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *locs/twists* appear *medium* and *firm/flexible, particularly near the roots. This indicates **moderate* tension was applied during *re-twisting* to ensure *longevity and neatness. The texture is **dense and rope-like—not **soft—contributing to their **neat, structured* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *dynamic flow* with the locs *responding to gravity/showing intentional directional styling* (forward/downward hang).

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution
   - *C-Cup/Corner Arch:* A *sharp* *C-Cup/temple arch* that carves a *sharp crescent* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade
   - *Temporal Points:* *Precisely squared/defined* corners connecting the front line to the sides.

*Execution Details:*
   - Tool: Cut with *sharp-bladed clippers/trimmers/razors*
   - Line Quality: Creates an *absolutely straight, geometrically precise* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *coily/textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural dark brown/black*
   - Color Variations: *Highlights* are visible, predominantly on the *ends/mid-shaft* of select locs, appearing to be a *blonde/light brown* shade.
   - Color Distribution: *Varies by placement*, creating a dimensional look that is heavier toward the ends/mid-shaft.

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* (individual locs/twists are distinct)
   - Frizz Control: *Minimal frizz* at the loc body, with slight texture visible near the root.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *visual tension/defined root/coil appearance*

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up/medium shot, **three-quarter view* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the sharp edge-up, and the high fade transition* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crisp, curved C-Cup connecting the frontal line to the taper* is the primary focal point of the *haircut's* precision.

*Loc/Twist Arrangement in Current View:*
   - *Overhang/Projection:* The *forward/downward-directed flow of the **front-top/lateral* *locs/twists* creates a *defined, heavy, fringe-like* effect, specifically *draping across the forehead and framing the face. This **forward/downward* styling is deliberate to *frame the face and establish balance* against the short sides.
   - *Volume Distribution:* The bulk and volume of the *locs/twists* are concentrated on the *front-top and crown* of the head, contrasting with the *very short/skin-level* *hair* of the *high taper/fade* on the sides. The hair's length is utilized for *downward drape/lateral spread* rather than *upward height*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *parting sections* at the root are *largely concealed* by the surrounding *locs/twists, **enhancing* the *full, structured* look of the style. The primary visible lines are the *shaved hard lines* of the haircut.
*360° Structure Reference:* While the direct back is not visible in this view, the overall style indicates *the high taper/fade wraps consistently around the entire head* and the locs continue to hang freely over the back of the head/nape area.

---

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, dramatic studio* lighting
      - Light Direction: *Front-lit/side-lit* from the subject's right.
      - Effect on Style: The lighting *enhances/reveals* the *product sheen/texture/definition, making the **rope-like* texture appear *semi-gloss/dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark/blonde* *textured locs* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling/smooth definition* near the root suggests *recent re-twisting (palm-rolling or comb-coiling)*
      - *Adaptive Styling:* The styling is adaptively *crisp* (for the cut) and *natural* (for the locs)—meaning it is styled to *maximize definition* and *lay flat against gravity/flow naturally* where length permits

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on the **subject's face/hairstyle* and the primary hair elements (*hanging locs, sharp hairline, fade transition), while the background is **partially visible/softly diffused*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *isolates/emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned approximately 30° to the right* and slightly tilted down.
      - Impact: This positioning *emphasizes/fully reveals* the *C-Cup, sharp hairline, and fade transition* on the right side.

---

### IX. Accessories and Additional Elements (If Present)
*Hair Accessories:*
    - *None visible* in the hair itself.

---

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/Protective/Loc'd*
*Cultural Significance (If Applicable):* Locs (or Dreadlocks) are a deeply rooted natural hairstyle, significant in many cultures (including various African, Rastafari, and South Asian traditions) and a common, modern expression of natural hair for Black men.
*Maintenance Requirements (Inferred):* *Moderate* time investment; requires *specialized locking/moisturizing products* (oils, locking gels, rose water); touch-up (re-twist/root maintenance) frequency typically *every 4-8 weeks*; the fade requires weekly/bi-weekly touch-ups for maximum sharpness.`,
    category: 'Locs', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832042/Hairstyles/WhatsApp_Image_2025-11-10_at_04.21.52_d85ec99c_iedbpb.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Buzz Cut with Heart-Shaped Hair Design and Taper Fade',
    
     ai_description: `## Title: Buzz Cut with Heart-Shaped Hair Design and Taper Fade

---

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *mixed-race/light-to-medium brown-skinned man* with a *Buzz Cut* hairstyle, photographed from a *three-quarter view*.

*Core Style:* *Very short, closely cropped hair (Buzz Cut)* on top, integrated with a *low/skin taper fade* on the sides and back. The overall aesthetic is *clean, contemporary, and highly customized. The most distinctive element is the **artistic hair design (hair tattoo)*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4A-4C* classification), which provides *excellent density and texture* for both holding the very short length consistently and allowing the precise carving of the hair design.
*Product Use (Inferred):* The hair displays a *natural luster/low sheen level* and *minimal texture definition* due to the ultra-short length. This suggests the use of *light moisturizer/oil* to ensure skin and scalp health, and potentially *holding spray/liquid razor* for the crispness of the hairline and design lines. The *tightness* at the root is a result of the short length, not styling tension.
*Buzz Cut Details:* The hair across the crown and top appears to be cut to a *uniform, very short length, possibly using a **guard #2 or #3 (6mm-9mm)* or a slightly longer setting, with a uniform, slightly brushed texture. The hair is kept short enough to provide a clean canvas while being long enough to show the coily texture.
*Parting & Density:* No parting is visible due to the cut style. The *high density* of the hair ensures *zero* scalp visibility on the crown.

---

### II. Arrangement and Placement of the Hair Design
The *custom heart-shaped hair design* is the unique focal point of this cut, meticulously placed to create a *subtle yet customized statement*:

*Location:* The design is strategically placed on the *anterior-superior crown, slightly off-center towards the right. It is carved **directly into the shortest section* of the hair on top.
*Directional Flow (The Curve/Pattern):* This is a *negative space design*, meaning the shape is created by removing hair (down to the skin or zero-guard length) to contrast with the slightly longer hair around it.
* *Design Shape:* A *symmetrical, rounded heart shape* with clean, sharp edges.
* *Design Execution:* The interior of the heart is carved out to a *skin-level finish (0 or razor)*, while the surrounding hair provides the darker, textural contrast.
* *Positioning:* The heart is positioned *high enough* on the head to be prominent in the front-facing view, yet low enough to sit naturally within the confines of the buzz cut, avoiding the highly tapered/faded sections of the sides.

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *low taper fade* provides the architectural support and *sharp* contrast to frame the face:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers/razors.
* *Front:* A *straight, hard line* is placed across the *forehead, marking a **highly defined* boundary.
* *C-Cup/Temple Arch/Corner:* A *sharp, almost angular corner* is meticulously placed at the temporal point, followed by a *gentle curve (C-Cup)* that connects the front hairline with the start of the side taper. This placement is *critical* for the *crispness* of the entire look.
* *Temporal Line:* The line extends vertically downward from the temple arch.
* *Nape/Back:* (Inferred) Likely a *low taper/v-shape* at the nape to complement the side taper.

*Fade/Taper Transition:* The fade starts *low* on the head, primarily focused on the area *below the parietal ridge/above the ear. The transition from **skin-level (0/clipper-closed)* to the *full length* of the buzz cut top is kept *tight and blended*, maximizing the canvas for the top length.

*Fade Technical Specifications:*
* Type: *Low Taper Fade/Skin Taper*
* Starting Point: *Temporal line and low-to-mid occipital bone*
* Fade Range: *Skin/Zero (0mm) to Guard #2-3 (6-9mm)*
* Transition Zone: *Approx. 15-20mm in vertical height*
* Circumference: The taper follows the natural curve of the head, focusing the shortest point around the ear and blending up towards the crown.
* Technique: *Clipper-over-comb and/or direct blending* for a smooth, fast transition.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair appears *firm* and *rigid* due to its ultra-short, closely cropped length, particularly near the scalp. This natural tension ensures the hair stands upright consistently.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *velvety/slightly coarse* to touch, with *high density* and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold, with the hair **maintaining its position* against gravity, except for the slight natural texture of the longer top section.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up/Edge-Up*.

*Shape & Geometry:*
* *Frontal Hairline:* Features a *highly defined, crisp straight line, **almost surgical* in execution.
* *C-Cup/Corner Arch:* A *sharp, defined* side arch/corner that carves an *angular* shape just above the temple area, *perfectly connecting* the front hairline to the vertical line of the fade.
* *Temporal Points:* The corners are defined and sharp, creating *90-degree angles* where the front and side lines meet before the curve.

*Execution Details:*
* Tool: Cut with *sharp-bladed trimmers/razors*
* Line Quality: Creates an *absolutely straight* line across the forehead
* Contrast: *Sharp* contrast with the *textured* hair above it
* Skill Level: This precision is a signature of *high-skill barbering* and technical execution.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
* Base Color: *Natural dark brown/black*
* Color Variations: *Uniform*
* Color Distribution: *Consistent across all sections*

*Finish Quality:*
* Sheen Level: *Natural luster/semi-gloss*
* Texture Definition: *Highly defined* at the skin-level design/fade, *softly textured* on the buzz cut top.
* Frizz Control: *Completely smooth* due to the short length.

*Health Indicators:*
* Overall Condition: *Well-maintained, healthy, and moisturized* (inferred from the lack of flaking/ashy appearance on the short hair/skin).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter view* of the subject, with the light source *highlighting* the *front-right* of the head.

*Current View Analysis:*
* *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the low taper transition, and the heart-shaped hair design* the most visually dominant technical elements.
* *Focal Points:* The *precision of the carved hairline and the artistic heart design* are the primary focal points of the style's precision.

*Buzz Cut Arrangement in Current View:*
* *Overhang/Projection:* The short length lays *flat against gravity* with a slight upward texture, creating a *defined, low silhouette. The length is utilized for **uniform coverage and texture* rather than height.
* *Volume Distribution:* The volume is *low and uniform* across the top, sharply contrasting with the *completely bare/skin-level* skin of the low taper fade.

*Parting Visibility:* No parts are visible. The primary visible lines are the *shaved hard lines* of the design and hairline.
*360° Structure Reference:* While the direct back is not visible, the overall style indicates a *wraparound low taper fade* that would likely finish in a neat, possibly rounded or V-shaped, *blocked/tapered* neckline.

---

### VIII. Photography Context and Technical Presentation
*Lighting Analysis:*
* Light Source: *Bright, dramatic studio/indoor* lighting
* Light Direction: Primarily *front-lit/side-lit*
* Effect on Style: The lighting *enhances* the *product sheen* and the *definition* of the hard lines, making the short texture appear *dimensional* and *well-maintained*.
* Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, short* hair and the *smooth* skin of the fade/design.

*Styling Execution:*
* *Setting Method (Inferred):* The style is primarily achieved through *clipping and shaving techniques, with styling products used mainly for **hairline definition and skin moisturizing*.
* *Adaptive Styling:* The styling is adaptively *crisp—styled to **maximize definition and geometric precision* (the hairline/design) and *lay flat against gravity* (the short top).

*Photographic Technique:*
* *Focus:* The depth of field is *medium/shallow, placing the sharpest focus on the **subject's face and the hairstyle's immediate details (heart design, hairline)*.
* *Composition:* This *emphasizes* the hairstyle as a *key feature and focal point* of the portrait.

*Head Position:*
* Position: *Turned approximately 20-30° to the subject's left, slightly **tilted back*.
* Impact: This positioning *reveals and emphasizes* the crispness of the *front-right C-Cup* and perfectly showcases the *heart-shaped design*.

---

### IX. Accessories and Additional Elements (If Present)
No hair accessories are present.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/Customized Buzz Cut*
*Cultural Significance (If Applicable):* The *Taper Fade* and *precision line-up* are hallmarks of *modern Black barbering culture, while the **hair design (hair tattoo)* adds a layer of *personalized artistic expression*.
*Maintenance Requirements (Inferred):* *High. Requires touch-ups every **5-10 days* to maintain the *skin-level fade, crisp hairline, and sharpness of the custom design*.`,
    category: 'Fades', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832140/Hairstyles/WhatsApp_Image_2025-11-10_at_04.56.46_930c517c_z7fkx8.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Red Buzz Cut with Clean Line-Up',
    
     ai_description: `## Title: Red Buzz Cut with Clean Line-Up

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black (Inferred) man* with a *Buzz Cut/Crop* hairstyle that has been *custom-colored red, photographed from a **three-quarter view (left side prominent)*.

*Core Style:* *Very short, uniform clipper-cut* on top and across the entire head, integrated with an *extremely sharp line-up (Edge-Up)* along the hairline. The overall aesthetic is *edgy, clean, and high-contrast*.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky* (Type *4C* classification), which provides *optimal density and firmness* to hold the short, even cut and the *crisp geometry* of the hairline.
*Product Use (Inferred):* The hair displays a *semi-matte finish* with *minimal to no sheen, suggesting the use of a **light moisturizing product (cream or oil)* to maintain health, but *no heavy gels or pomades* that would add significant shine or alter the hair's natural texture/stand. The hair appears to be *completely smooth* and laid at the root.
*[Style Type] Details:* This is a classic *Buzz Cut* where the hair is cut to a *very short, near-uniform length* over the entire head, removing all evidence of a taper or fade transition zone on the sides and back, though the hair length itself suggests a cut using a *single, low guard* (e.g., #1 or #1.5).
*Parting & Density:* No visible parting; the *high density* of the *natural 4C texture* ensures *zero scalp visibility* across the main body of the cut.

---

### II. Arrangement and Placement of the [Primary Style Element]
The *short, cropped hair* is meticulously placed to create a *uniform, dense texture across the entire crown*:

*Location:* *Full head* of uniform short hair. The hair length is consistent from the front hairline back to the crown and appears to maintain this length into the sides and back (not fully visible).
*Directional Flow (The Curve/Pattern):* The short length *stands slightly upright* (perpendicular to the scalp) due to its natural coil and density, creating a *velvet-like, uniform texture*.
   - *Front Row/Section:* The hair along the front hairline is cut extremely short but *sharply defined* by the line-up. It is positioned to *create a geometric border* that sits precisely at the natural hairline's boundary, forming a *crisp, angular silhouette* that contrasts with the skin.
   - *Crown/Middle Rows:* The texture is *uniform and consistent* across the visible top section, displaying no intentional directionality other than its *natural upright stand*.
   - *Side Perimeter/Lateral Sections:* The hair immediately adjacent to the sharp *C-Cup line* on the left side is cut to the same short length, creating a *maximum contrast border* for the line-up to stand out against the skin.

*Section Dimensions (Inferred for entire cut):*
   - Thickness: *Uniform* short crop
   - Length: *3-5 mm* measured from root to tip (equivalent to a clipper *Guard #1 or #1.5*)
   - Part width: Not applicable

---

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The cut is defined by its *uniform, extremely short length* and the *surgical precision of the hairline*.

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise *trimmers and/or a straight razor*.
   - *Front:* A *perfectly straight, hard line* is placed across the forehead, marking the boundary between the vivid red hair and the skin.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, angular corner* is meticulously placed to transition from the frontal line to the side line. This *highly visible, defined corner (the C-Cup)* is *critical* for the *crispness* of the entire look, creating a *90-degree angle* at the temple area.
   
   - *Temporal Line:* A *vertical, hard line* extends straight down from the angular C-Cup, defining the side perimeter *above the ear* before transitioning to the neck.
   
   - *Nape/Back:* (Not visible, but inferred to be a *sharp, blocked, or tapered line-up* consistent with the rest of the cut.)

*Fade/Taper Transition:* *No visible fade or taper is present. The hair length is **uniform* across the entire visible surface, providing a *maximum contrast* border for the sharp line-up without the gradual blend of a fade. The length is consistent from *3-5mm* on the top to the *skin-level* of the defined hairline border.

*Fade Technical Specifications:*
   - Type: *Uniform Clipper Cut* with a *Sharp Line-Up* (No Fade)
   - Starting Point: N/A
   - Fade Range: N/A
   - Transition Zone: N/A
   - Technique: Single guard clipper work for the main body of the hair, paired with a razor/trimmer for the geometric edge-up.

---

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The hair appears *firm* and *rigidly structured* due to its short length and natural texture. This indicates the hair is *firmly held* by the strength of its natural coil. The texture is *dense and velvet-like, contributing to its **neat* structure and *uniform* appearance.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *coarse yet soft* due to the short length, with *high density* and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* due to the short cut, not showing any natural movement.

---

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional* precision, a technique known as *Line-Up (or Shape-Up)*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, surgically straight line* across the forehead.
   - *C-Cup/Corner Arch:* A *sharp, angular (90° corner)* C-Cup is the focal point, creating a *geometric* boundary just above the temple area, *perfectly connecting* the front hairline to the vertical side line.
   - *Temporal Points:* The points are *perfectly squared* by the razor/trimmer work.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and/or a straight razor*
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the forehead and down the temple.
   - Contrast: *Sharp* contrast with the *smooth* skin above and below the line.
   - Skill Level: This precision is a signature of *high-skill barbering technique*.

---

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black* (visible in the facial hair and shadow areas).
   - Color Variations: The entire cut area is colored with a *vibrant, uniform red* (*Crimson/Fire Red*).
   - Color Distribution: *Consistent* and *saturated* across all hair strands.

*Finish Quality:*
   - Sheen Level: *Natural luster/semi-matte*
   - Texture Definition: *Highly defined* short, cropped texture.
   - Frizz Control: *Completely smooth*, controlled texture.

*Health Indicators:*
   - Overall Condition: *Well-maintained* and *healthy* (despite the color treatment).

---

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up portrait, **three-quarter view (left side prominent)* of the subject, with the light source *highlighting* the *front and left side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the surgical line-up, and the uniform red color saturation* the most visually dominant technical elements.
   - *Focal Points:* The *geometric precision of the C-Cup* is the primary focal point of the haircut's precision.

*[Style Element] Arrangement in Current View:*
   - *Overhang/Projection:* The short length of the hair has *zero overhang or projection*; it stands upright in a dense texture.
   - *Volume Distribution:* The bulk and volume are *uniformly distributed* across the entire head, with the height being the consistent *3-5mm* length. The short hair contrasts dramatically with the smooth skin of the sharply defined hairline.

*Parting Visibility:* No parts are visible. The primary visible line is the *shaved hard line* of the edge-up.
*360° Structure Reference:* While the back and right side are not visible, the overall style indicates a *consistent, uniform short crop* wrapping around the entire head, maintained by the same short length and finished with a sharp line-up at the nape, consistent with the visible front/side.

---

### VIII. Photography Context and Technical Presentation
   *Lighting Analysis:*
      - Light Source: *Soft, dramatic studio* lighting
      - Light Direction: *Front-lit and side-lit (from the left)*
      - Effect on Style: The lighting *enhances* the *color saturation* and *texture definition, making the **red crop* appear *dimensional* and *well-maintained*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *vivid red, textured* crop and the *smooth* skin along the line-up.

   *Styling Execution:*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize geometric definition* at the hairline and *maintain a uniform, upright texture* over the head.

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the hairstyle's prominent features* (red hair, sharp hairline).
      - *Composition:* This *isolates and emphasizes* the hairstyle as a *focal point* of the portrait.

   *Head Position:*
      - Position: *Turned approximately 30° to the right* (away from the camera).
      - Impact: This positioning *emphasizes* the *C-Cup* and the *vertical drop of the side line*, revealing the profile of the precision edge-up.

---

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/High-Contrast Color Cut*
*Cultural Significance (If Applicable):* The *Buzz Cut/Line-Up combination (Shape-Up)* is a cornerstone of *high-skill barbering* in Black and urban culture, highly valued for its geometric precision and ability to frame the face. The addition of *vibrant custom color* is a modern, popular evolution for a strong fashion statement.
*Maintenance Requirements (Inferred):* *High maintenance* due to the need for *frequent Line-Up (Edge-Up) touch-ups* (weekly or bi-weekly) to maintain the geometric precision, and *regular color retouches* to maintain the vibrant red saturation.`,
    category: 'Low Cut', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832203/Hairstyles/WhatsApp_Image_2025-11-10_at_05.01.53_6f82bffd_fkj1gb.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Disconnected Undercut with Textured Sweep and Blended Layers',
    
     ai_description: `### Title: Disconnected Undercut with Textured Sweep and Blended Layers

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *light-skinned European (Caucasian)* *man* with a *Disconnected Undercut with a heavily layered and side-swept top* hairstyle, photographed from a *three-quarter view* (slightly to the subject's right).

*Core Style:* *High-volume, textured, and significantly lightened long layers* on the top/crown, integrated with a *tightly tailored Undercut* on the sides and back. The overall aesthetic is *edgy, contemporary, and dramatically contrasted*.
*Hair Texture (Inferred):* The natural hair appears to be *straight to slightly wavy* (Type *1A-1B* classification), which provides *excellent foundational smoothness and medium density* that is highly conducive to both achieving the extreme volume and maintaining the precise directional sweep.
*Product Use (Inferred):* The hair displays a *semi-matte finish with high texture definition and high hold, suggesting the use of a **styling paste, clay, or high-hold matte pomade* to *maximize volume, separate layers, and secure the extreme side sweep* against gravity. The separation between the strands and the height achieved confirm a product with strong grip.
*[Style Type] Details:* The primary styling method is a *directional blow-dry and sculpting technique* to force the longer, layered hair on the top and fringe section *laterally and slightly back* across the head, while simultaneously maintaining *significant upward lift* at the root.
*Parting & Density:* There is *no traditional hard part. The separation between the long top section and the short side/back section is a **sharp, disconnected line, characteristic of the undercut. The hair density appears **high*, supporting the substantial volume on the top.

### II. Arrangement and Placement of the [Primary Style Element]
The *long layers* are meticulously placed to create a *dramatic, heavily textured, and asymmetrical silhouette*:

*Location:* The long hair is confined to the *horseshoe/parietal ridge section* (the area above the temporal line and occipital bone). The hair *below the parietal ridge* on the sides and back is entirely cut short into the undercut.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The longest part of the hair, forming the fringe, is styled to *sweep diagonally back and laterally* across the forehead and left side of the face. It is positioned to *overlap the forehead and partially conceal the left temple/eyebrow, forming a **heavy, voluminous, and highly textured fringe/bang* that sits *swept and elevated* over the right side of the forehead, blending seamlessly into the crown.
   - *Crown/Middle Rows:* The layered hair running from the *crown/vertex* to the *front/sides* is directed *laterally to the left and slightly backward. This intentional placement **forces volume toward the top and away from the face* on the right side, *encouraging significant lift and texture, thus creating the **high, asymmetrical, and voluminous silhouette*.
   - *Side Perimeter/Lateral Sections:* The long hair immediately adjacent to the sharp undercut line on both the left and right sides *significantly overhangs* the short sides. This overlap is characteristic of the *disconnected cut, creating a **sharp, visible line* of demarcation against the short sides.

*Section Dimensions:*
   - Layering: *Highly layered and textured* internally to reduce bulk and promote lift.
   - Length: *12-18 cm* measured from root to the longest tips (the fringe)
   - Overall Height: The lift at the top/front appears to achieve an approximate *8-10 cm* vertical height when styled.

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *short cut* area provides the architectural support and *sharp, high-contrast* definition for the long top section:

*Hairline (The Edge-Up/Line-Up):* The hairline is *naturally tapered/softly blended* where the short sides meet the skin, not hard-lined.
   - *Front:* The front hairline is *natural* where the long hair does not overlap it.
   
   - *C-Cup/Temple Arch/Corner:* The area above the temple is a *soft transition* into the undercut, not a razor-sharp C-cup, to maintain a slightly softer appearance despite the high contrast.
   
   - *Temporal Line:* The hair is taken very short up to the temporal line, which defines the *lower boundary* of the long hair above.
   
   - *Nape/Back:* (Inferred) The back would likely feature a *tight undercut or taper* to maintain the high-contrast look from the sides.

*Fade/Taper Transition:* The style is an *Undercut* (rather than a fade). The hair transitions *abruptly* from the long top layer to the short sides. The short hair is kept at a *uniform, very short length* (likely a guard #1 or #2 equivalent) up to the line of disconnection. This *high placement* of the cut line *maximizes* the canvas for the *voluminous and dramatic* top style.

*Fade Technical Specifications (Undercut):*
   - Type: *Disconnected Undercut*
   - Starting Point: *Parietal Ridge/High on the head*
   - Cut Length: *3-6 mm uniform length* (e.g., guard #1 or #2) on the sides and back, creating a near-shadow or very tight finish.
   - Transition Zone: *Zero* (a sharp, unblended line of separation).
   - Circumference: The short cut wraps around the entire head from the front temple line, beneath the parietal ridge, and around the nape.
   - Technique: *Clippers only for the short section, sheer work for the long top layers* to establish the internal texture and length.

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The long hair section appears *high-tension and firm* near the roots due to the directional styling, while the mid-shaft and ends are *highly flexible and textured. This indicates **significant tension* was applied during *blow-drying* to ensure *maximum lift and dynamic flow. The texture is **separated and piecewise* due to heavy layering and product—not soft or rope-like—contributing to its *dramatic structure and directional hang*.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *slightly stiff but textured/dry* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold with intentional directional flow, with the hair **maintaining a specific, gravity-defying position* and showing *intentional, swept directional styling*.

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The short hair area shows *moderate/natural* precision.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *natural* hairline where exposed, with the majority of the forehead covered by the sweep.
   - *C-Cup/Corner Arch:* *Natural and rounded* where the short hair meets the skin, focusing on a clean appearance rather than an aggressively "carved" line.
   - *Temporal Points:* *Softly tapered/natural*.

*Execution Details:*
   - Tool: Cut with *clippers/trimmers for the clean undercut line*
   - Line Quality: The short hair is simply *cut clean and tight* below the line of disconnection, which is the truly *geometrically precise* line.
   - Contrast: *Extremely sharp* contrast between the *long, multi-tonal, voluminous* hair above and the *short, uniform* hair of the undercut.
   - Skill Level: This precision in *disconnection and layering* is a signature of *high-skill shear and clipper work*.

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Dark Brown/Light Ash Brown*
   - Color Variations: *Heavy, wide highlights* that transition from the dark base to a *light ash blonde/platinum blonde* in the mid-lengths and ends. This is a *high-contrast color melt/ombré effect*.
   - Color Distribution: *Concentrated in the long top/fringe section*, with the shorter undercut hair appearing to be the natural base color or a uniform dark tone.

*Finish Quality:*
   - Sheen Level: *Semi-matte/low sheen* (suggests product use to prevent excessive shine).
   - Texture Definition: *Highly defined* (strand separation is clearly visible due to layering and product).
   - Frizz Control: *Completely smooth* (despite the texture, no visible frizz or flyaways).

*Health Indicators:*
   - Overall Condition: *Appears well-maintained* despite the aggressive lightening.
   - Product Buildup: *None visible*, suggesting product is designed to disappear into the texture.

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up portrait, **three-quarter view* of the subject, with the light source *highlighting* the *front and visible right side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *disconnected undercut line* on the visible right side, the *voluminous sweep,* and the *high-contrast blonde color* the most visually dominant technical elements.
   - *Focal Points:* The *diagonal flow of the layered fringe* and the *sharp line of the undercut* are the primary focal points of the style's precision and aesthetic.

*[Style Element] Arrangement in Current View:*
   - *Overhang/Projection:* The *laterally and slightly backward-directed* flow of the *front and crown* hair creates a *dramatic, thick, asymmetrical sweep* effect, specifically *overlapping the forehead and right side of the face. This styling is deliberate to **maximize volume and establish an asymmetrical balance*.
   - *Volume Distribution:* The bulk and volume of the styled hair are *heavily concentrated on the front-top and crown, contrasting sharply with the **very short* hair of the undercut. The hair's length is utilized for *lateral sweep and upward height* rather than downward drape.

*Parting Visibility:* Due to the *dense, overlapping* arrangement and the product-defined texture, the underlying structure of the cut is *concealed* by the long layers, *enhancing* the *full, voluminous* look of the top. The primary visible line is the *shaved disconnection line*, not any part in the long hair.
*360° Structure Reference:* The style is an undercut that wraps around the entire head. While the left side and back are not fully visible, the visible evidence indicates the *long hair is separated from the short hair* by a single, continuous line along the parietal ridge.

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, dramatic, studio* lighting
      - Light Direction: *Front-lit with possible side fill*, creating subtle shadows under the jawline but intensely lighting the hair's surface.
      - Effect on Style: The lighting *intensely reveals* the *product-induced texture and separation, making the **blonde highlights* appear *bright and dimensional* and the overall style look *firmly held and volumetric*.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *long, layered blonde hair* and the *dark, uniform, short* hair of the undercut.

   *Styling Execution:*
      - *Setting Method (Inferred):* The *directional lift and high volume* suggest a *blow-out* technique with a round brush or skeletal brush, followed by application of *matte styling clay/paste* to define the texture and secure the sweep.
      - *Adaptive Styling:* The styling is adaptively *crisp and dramatic—meaning it is styled to **maximize vertical lift and lateral sweep, and **stand upright against gravity* where desired (the roots/crown) and *maintain structure* where the length permits (the fringe).

   *Photographic Technique:*
      - *Focus:* The depth of field is *shallow, placing the sharpest focus on the **subject's face and the layered texture of the long top section, while the background is a **smooth, uniform color (bokeh-like)*.
      - *Image Quality:* *High resolution and sharp detail*.
      - *Composition:* This *isolates and emphasizes* the hairstyle and the subject's face as the *focal point* of the portrait.

   *Head Position:*
      - Position: *Facing forward but with the head subtly tilted down and turned 30° left* (towards the viewer's right).
      - Impact: This positioning *maximizes the visual impact of the voluminous side-sweep*, allowing the long fringe to dramatically obscure the left side of the face and emphasize the high lift.

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* None visible.

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Contemporary/High-Contrast Fashion Cut*
*Maintenance Requirements (Inferred):* *High* time investment daily for directional blow-drying and styling product application; *High* salon maintenance for color upkeep (toning, root touch-ups for the blonde) and cut maintenance (undercut trimming every 2-4 weeks).`,
    category: 'Modern', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832286/Hairstyles/WhatsApp_Image_2025-11-10_at_05.09.25_d7b887e4_cmuj47.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Mid-Length Free-Hanging Locs with High Skin Taper and Precision Line-Up',
    
     ai_description: `### Title: Mid-Length Free-Hanging Locs with High Skin Taper and Precision Line-Up

### I. Style Foundation and Overall Structure
A professional studio portrait photograph of a *Black/dark skin tone man* with a *Free-Hanging Locs (Dreadlocks) with Taper Fade* hairstyle, photographed from a *three-quarter view (right side)*.

*Core Style:* *Medium-sized, mature free-hanging locs* on top and throughout the crown, integrated with a *high skin taper fade* on the sides and back. The overall aesthetic is *clean, contemporary, and defined*, showcasing a blend of natural texture and high-precision barbering.
*Hair Texture (Inferred):* The natural hair appears to be *kinky/coily* (Type *4B-4C* classification), which provides *excellent density and tight coil memory* necessary for uniform loc formation and the high-contrast hold of the fade.
*Product Use (Inferred):* The locs display a *natural luster/semi-gloss sheen* and *well-defined, tight texture, suggesting the use of **lightweight moisturizing oils or loc-specific locking gels/creams* for maintenance, definition, and to minimize frizz without heavy build-up. The *tightness* at the root indicates *recent maintenance (retwist/interlocking)* was applied during styling.
*Locs Details:* *Mature, free-hanging locs* with an *inferred palm-roll or interlocking foundation, where the hair is secured into **consistent, cylindrical bundles* that drape naturally.
*Parting & Density:* *Square/rectangular section parting* is inferred at the roots. The *medium-high density* of the locs ensures *minimal* scalp visibility, contributing to a full, voluminous crown.

### II. Arrangement and Placement of the Locs
The locs are meticulously placed to create a *full, downward-draping silhouette* that contrasts sharply with the cut sides:

*Location:* *Full head* of locs extending down to the parietal ridge/upper temporal line, where the fade begins. The hair below this line is *skin faded/tapered*.
*Directional Flow (The Curve/Pattern):* This is the precise placement detail:
   - *Front Row/Section:* The locs in the first row, along the *forehead/temple hairline, are styled to **hang slightly forward and downward. They are positioned to **lightly overlap the forehead/frame the face, forming a **heavy, textured* *fringe/silhouette* that sits *just below eyebrow level/at the eye line* in the longest pieces.
   - *Crown/Middle Rows:* The locs running from the *crown/center* to the *sides and back* are directed *downward/radially* with the force of gravity. This intentional placement *forces volume downward and toward* the face, *encouraging* a *full, medium-length drape, thus creating the **weighted, oblong silhouette*.
   - *Side Perimeter/Lateral Sections:* The locs immediately adjacent to the *fade/taper* on the visible right side are styled to *hang straight down, creating a **clean, defined* *vertical* border against the *high skin fade. This is the transition point where the locs **contrast sharply with the short, bare skin*.
*Individual Loc Arrangement:* Each unit is uniformly *secured/formed* from the root, giving it a *tight, rope-like/cylindrical* appearance. The *consistent* length allows the arrangement to create *uniformity* in the overall drape.

*Section Dimensions (Inferred):*
   - Count: *70-100* individual locs across the entire head
   - Thickness: *5-7 mm* diameter per individual unit
   - Length: *120-160 mm* (12-16 cm) measured from root to tip in the longest sections
   - Part width: *4-6 mm* between sections

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *tapered/faded* area provides the architectural support and *sharp* contrast for the *locs*:

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved/shaped* using precise *trimmers/clippers/razors*.
   - *Front:* A *straight/natural* *hard* line is placed across the *forehead, marking the boundary of the **scalp/hairline*.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp* *angular/curved* *shape* is meticulously placed to connect the *front hairline* with the start of the *side fade/beard line, creating a **highly visible* *defined* corner. This placement is *critical* for the *crispness* of the entire look.
   
   - *Temporal Line:* The line extends from the temple area, creating a *clear, defined* line separating the facial hair from the skin fade.
   
   - *Nape/Back:* (Inferred) Likely features a *low/tapered* neckline that follows the arc of the occipital bone.

*Fade/Taper Transition:* The fade starts *high* on the head, beginning just below the parietal ridge, meaning the transition from *skin-level (0/clipper-closed)* to *full loc length* is kept *very short and tight/gradual and blended* in a small zone, primarily focused on the area *above the ear/around the temporal and occipital areas. This **high* placement *maximizes* the canvas for the *dense/textured/voluminous* *locs* above.

*Fade Technical Specifications:*
   - Type: *High Skin Taper Fade (Transition area is minimal)*
   - Starting Point: *Parietal Ridge/Upper Temporal Line*
   - Fade Range: *3-6 mm* (guard #1 or #2) to *skin-level (0)*
   - Transition Zone: *10-15 mm* height
   - Circumference: The high taper is concentrated on the sides, running from the temporal line, around the ear, and fading down into the back hairline.
   - Technique: *Clipper-over-skin/blending technique* to achieve a smooth, rapid transition.

### IV. The Hardness, Texture, and Physical Characteristics
*Firmness/Tension (The "Hardness"):* The *locs* appear *tight* and *firm, particularly near the roots. This indicates **significant* tension was applied during *maintenance (retwist/interlocking)* to ensure *longevity/neatness. The texture is **dense and rope-like—not **soft—contributing to their **neat* structure and *uniform* hang.
*Physical Feel (Inferred):* Based on visual analysis, the hair would feel *textured/coarse* to touch, with *high* density and *firm* hold at the root.
*Movement Characteristics:* The style demonstrates *static hold* with the hair *maintaining position* and *responding to gravity* in a deliberate, downward drape.

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front/temple* hairline is executed with *exceptional* precision, a technique known as *Edge-Up/Line-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined* *straight line, **almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *sharp* *angular/crescent* *C-Cup* that carves a *sharp* shape just above the temple area, perfectly connecting the front hairline to the vertical line of the fade.
   - *Temporal Points:* *Sharp, clearly defined* corners are maintained.

*Execution Details:*
   - Tool: Cut with *sharp-bladed clippers/trimmers/razors*
   - Line Quality: Creates an *absolutely straight, geometric* line across the *forehead/temple*
   - Contrast: *Sharp* contrast with the *textured* hair above it
   - Skill Level: This precision is a signature of *high-skill barbering/professional technique*

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black*
   - Color Variations: *Uniform*
   - Color Distribution: *Consistent across all sections*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined*
   - Frizz Control: *Minimal frizz* at the roots, indicating recent maintenance.

*Health Indicators:*
   - Overall Condition: *Well-maintained/healthy/moisturized*
   - Product Buildup: *None visible*
   - Elasticity (Inferred): *Good* based on *visual tension/definition*

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up, **three-quarter view (right side)* of the subject, with the light source *highlighting* the *front/side* of the head.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *C-Cup hairline, the taper fade transition, and the downward drape of the locs* on the *right* side of the head the most visually dominant technical elements.
   - *Focal Points:* The *crispness of the C-Cup and the high-contrast transition* from the thick locs to the skin fade is the primary focal point of the *haircut's* precision.

*Locs Arrangement in Current View:*
   - *Overhang/Projection:* The *forward/downward-directed flow of the **front/side* locs creates a *heavy, defined* *fringe/silhouette* effect, specifically *falling near the eye line and partially obscuring the forehead. This **downward* styling is deliberate to *frame the face/establish weight and length*.
   - *Volume Distribution:* The bulk and volume of the *locs* are concentrated on the *crown/front-top* of the head, contrasting with the *completely bare/short* *skin* of the *high skin taper. The hair's length is utilized for **downward drape* rather than *upward height*.

*Parting Visibility:* Due to the *dense* arrangement and the angle, the individual *square/rectangular* parts at the root are *largely concealed* by the surrounding *locs, **enhancing* the *full* look of the style. The primary visible lines are the *shaved hard lines* of the edge-up.
*360° Structure Reference:* While the left side and direct back are not visible in this view, the overall style indicates a *symmetrical high taper fade* wrapping around the entire head, with the locs uniformly hanging down in the back.

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright* *studio* lighting
      - Light Direction: *Side-lit/front-lit*
      - Effect on Style: The lighting *enhances/reveals* the *product sheen/texture/definition, making the **rope-like* texture appear *dimensional* and *well-moisturized*
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark* *textured* *locs* and the *smooth* skin of the *fade/scalp*

   *Styling Execution:*
      - *Setting Method (Inferred):* The *tight coiling* and *defined* *edges* suggest *recent loc maintenance (retwist/interlocking)*
      - *Adaptive Styling:* The styling is adaptively *crisp—meaning it is styled to **maximize definition* and *lay flat against gravity* where desired (*the hairline/fade) and **hang freely* where *length* permits (*the locs*)

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on **the hairstyle, the sharp hairline, and the subject's face, while the background is **partially visible*
      - *Image Quality:* *High resolution/sharp detail/professional color grading*
      - *Composition:* This *emphasizes* the hairstyle as a *key feature* of the portrait

   *Head Position:*
      - Position: *Turned approximately 45° to the left, with the head slightly tilted down*
      - Impact: This positioning *reveals/emphasizes* the *C-Cup, the high taper fade, and the length/drape of the locs* on the visible right side.

### IX. Accessories and Additional Elements (If Present)
   "*Hair Accessories:* None visible.

### X. Cultural Context and Style Classification (Optional)
*Style Category:* *Loc'd/Natural/Protective*
*Cultural Significance (If Applicable):* Locs are a hairstyle with deep historical and cultural roots, particularly within the African diaspora, often signifying spirituality, identity, and personal philosophy. This contemporary version combines the traditional locs foundation with modern, sharp barbering techniques.
*Maintenance Requirements (Inferred):* *Moderate* time investment; requires specialized loc maintenance products (e.g., locking gel/wax/cream, natural oils) and *regular re-twisting/interlocking (every 4-8 weeks)* to maintain the neatness at the root and the sharp perimeter cut.`,
    category: 'Locs', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832349/Hairstyles/WhatsApp_Image_2025-11-10_at_05.19.12_ea403b95_dm4giy.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  {
    name: 'Precision Line-Up with Mid-Skin Fade and Freehand Razor Design',
    
     ai_description: `## Title: Precision Line-Up with Mid-Skin Fade and Freehand Razor Design

### I. Style Foundation and Overall Structure
A professional portrait photograph of an *Afro-Caribbean/Black* *man* with a *Mid-Skin Fade and Freehand Razor Design* hairstyle, photographed from a *three-quarter view (slightly turned to the left)*.

*Core Style:* Short, uniform, natural texture on top, integrated with a *Mid-to-High Skin Fade* on the sides and back. The overall aesthetic is *crisp, edgy, and contemporary. The hairstyle is defined by its **geometric precision in the line-up* and the *intricate freehand graphic design* carved into the high fade section.
*Hair Texture (Inferred):* The natural hair appears to be *coily/kinky (Type 4B-4C classification), which provides **optimal density and firmness* to maintain the sharp structure of the short-cut top and the precise edges of the line-up.
*Product Use (Inferred):* The hair displays a *moderate, healthy sheen* and *tight, defined texture, suggesting the use of a **light hair oil or pomade/cream* to *moisturize, define the curl pattern, and add a subtle luster* without appearing greasy. The scalp is clean, indicating recent shaving and washing.
*Parting & Density:* The hair on the visible top section is cut uniformly short, showing *high density* with *minimal scalp visibility*.

### II. Arrangement and Placement of the [Primary Style Element]
This section applies to the cut length on top, which is uniformly short and textured.

*Location:* The short-cut length is maintained across the *entire horseshoe section* of the head. The sides and back transition quickly into the fade.
*Directional Flow (The Curve/Pattern):* The short-cut top has a *slightly forward directional flow, maintaining a **low-height, dense, and uniform silhouette* that sits flat and square relative to the precise line-up.
*Individual [Braid/Twist/Loc] Arrangement:* Not applicable. The top hair is a *short, uniform coil/kinky texture*, cut to a single length.

### III. Arrangement and Placement of the Fade/Cut (Architectural Foundation)
The *skin fade and precision edge-up* provide the architectural support and *sharp, high-contrast* foundation for the design.

*Hairline (The Edge-Up/Line-Up):* The hairline is *carved and shaped* using precise trimmers and likely a straight razor finish.
   - *Front:* A *perfectly straight, hard line* is placed across the *forehead, marking the boundary of the scalp and the hair. The line is **absolutely surgical* in its crispness.
   
   - *C-Cup/Temple Arch/Corner:* A *sharp, defined, 90-degree corner* is meticulously placed where the front hairline meets the vertical line of the side fade/temple. This placement is *critical* for the *crispness and geometric appeal* of the entire look.
   
   - *Temporal Line:* A *vertical, hard line* extends straight down from the corner/C-Cup, defining the forward edge of the side fade.
   
*Fade/Taper Transition:* The fade starts *mid-to-high* on the head, rising sharply from the ear and temple area. The transition from *skin-level* to the short length on top is *rapid and tightly blended, maximizing the contrast between the short top and the bare skin/low hair section. The transition is clearly focused **above the ear and around the parietal ridge. This high placement **maximizes* the canvas for the intricate razor design.

*Fade Technical Specifications:*
   - Type: *Mid-to-High Skin Fade*
   - Starting Point: The zero line begins at the *temporal line* and curves up sharply towards the *parietal ridge* area.
   - Fade Range: *Skin (0)* to *approx. 4mm (#1.5 guard)* on the side/top blend zone.
   - Transition Zone: *Very short, approximately **15-20mm* height from skin to the full short length.
   - Technique: *Clipper-over-skin/razor finish* for the sharp zero line, followed by *clippers with guards* for the blend.

*Razor Design/Parting:*
   - *Design Type:* *Freehand Graphic Design* (Curved Lines/Swirls)
   - *Location:* Placed in the *transition zone (2-4mm length)* high on the side of the head, above the zero line and extending slightly onto the short top.
   - *Pattern:* Consists of *two to three overlapping, arcing lines/swirls* that flow *diagonally upward and backward* from the parietal ridge area, creating a *dynamic, high-contrast visual element*.
   - *Execution:* Cut with a *trimmer and/or razor* to create channels of *skin/near-skin length* within the short hair, resulting in a clean, high-impact pattern.

### V. Hairline Definition and Precision Edge Work
*The Hairline ("Edge-Up"/"Line-Up"):* The *front and temple* hairline is executed with *exceptional, surgical precision, a technique known as **Line-Up/Shape-Up*.

*Shape & Geometry:*
   - *Frontal Hairline:* Features a *highly defined, ruler-straight line* across the forehead, *almost surgical* in execution.
   - *C-Cup/Corner Arch:* A *perfectly sharp, 90-degree corner* that transitions the front horizontal line into the vertical temporal line, serving as the anchor point for the entire side structure.

*Execution Details:*
   - Tool: Cut with *sharp-bladed trimmers and finished with a straight razor* (inferred by the exceptional crispness).
   - Line Quality: Creates an *absolutely straight and geometrically precise* line across the forehead.
   - Contrast: *Sharp* contrast with the short, *coily* hair above it.
   - Skill Level: This precision is a signature of *high-skill, contemporary barbering*.

### VI. Hair Condition, Color, and Finish
*Color Profile:*
   - Base Color: *Natural black/dark brown*
   - Color Variations: *Uniform*

*Finish Quality:*
   - Sheen Level: *Semi-gloss/natural luster*
   - Texture Definition: *Highly defined* (due to the short, firm cut and implied moisture product)
   - Frizz Control: *Completely smooth* at the edges, with *natural texture showing* on the top.

*Health Indicators:*
   - Overall Condition: *Well-maintained, healthy, and moisturized*
   - Product Buildup: *None visible*

### VII. Position-Aware Visibility Analysis and Adaptive Styling Context
The description is primarily based on a *close-up shot, **three-quarter view (left side prominent)* of the subject.

*Current View Analysis:*
   - *Primary Visibility:* The viewer's angle makes the *front line-up, the C-Cup corner, the mid-skin fade transition, and the freehand razor design* the most visually dominant technical elements.
   - *Focal Points:* The *geometric precision of the front hairline* and the *dynamic flow of the razor design* are the primary focal points of the haircut's precision.

*Style Element Arrangement in Current View:*
   - *Volume Distribution:* The hair on top is cut to maintain a *uniform, low-lying volume*, which creates a square, defined shape. This contrasts sharply with the completely shaved area of the skin fade.
   - *Design Integration:* The razor design is perfectly placed to sit on the *highest point of the fade transition*, integrating the short top with the side architecture.

*360° Structure Reference:* While the back and right side are not visible, the overall style indicates a *symmetrical design* with the *skin fade wrapping around the entire head* and the *line-up maintaining its sharp, geometric form* across the temples and around the nape (likely blocked or tapered at the back).

### VIII. Photography Context and Technical Presentation
   "*Lighting Analysis:*
      - Light Source: *Bright, interior/natural* lighting
      - Light Direction: *Front-lit/slightly side-lit*
      - Effect on Style: The lighting *enhances* the *product sheen and definition, making the **crispness of the line-up* and the *razor design's shadow contrast* highly visible.
      - Contrast Enhancement: The *sharp* lighting *emphasizes* the precise contrast between the *dark, textured* short top and the *smooth* skin of the fade and razor channels.

   *Styling Execution:*
      - *Adaptive Styling:* The styling is adaptively *crisp—styled to **maximize definition and geometric form. The short hair is left to lay naturally, while the lines are cut to **lay flat against gravity* and stand out dramatically.

   *Photographic Technique:*
      - *Focus:* The depth of field is *medium, placing the sharpest focus on the **subject's face and the primary hair elements* (sharp hairline, fade transition, razor design), while the background is *partially visible*.

   *Head Position:*
      - Position: *Turned approximately 30° left*
      - Impact: This positioning *emphasizes* the geometric precision of the front corner and fully *reveals* the side fade and freehand razor design.

### IX. Accessories and Additional Elements (If Present)
*Earring:* A small, metallic stud is visible in the lower lobe of the visible ear.
*Nose Piercing:* A small nose stud is visible on the left nostril.

### X. Cultural Context and Style Classification
*Style Category:* *Contemporary/High-Precision Barbering/Fade/Natural Texture*
*Cultural Significance (If Applicable):* This style is a popular, highly-skilled variation of the modern Black men's haircut, heavily relying on the *line-up/shape-up* technique, which is a cornerstone of Afro-centric barbering, combined with the artistic expression of *freehand razor designs*.
*Maintenance Requirements (Inferred):* *High* maintenance, requiring a touch-up/line-up every *1-2 weeks* to maintain the surgical precision of the edge-up and the sharp contrast of the fade and razor design.`,
    category: 'Low Cut', // ['Low Cut',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
    gender: 'male',
    thumbnail: 'https://res.cloudinary.com/djpcokxvn/image/upload/v1762832398/Hairstyles/WhatsApp_Image_2025-11-10_at_05.25.06_1371c23e_mo01u8.jpg',
    price: 4,
    popularity: 0,
    isActive: true,
  },  
   
];



const sendNotificationToAllUsers = async () => {
    try {
        let lastId = null;
        const batchSize = 500; 
        let totalNotified = 0;
        let totalUsers = 0;

        console.log('Starting broadcast push notification to all users...');

        while (true) {
            let query = User.find().select('deviceToken');
            
            if (lastId) {
                query = query.where('_id').gt(lastId);
            }
            
            const users = await query.limit(batchSize).sort({ _id: 1 });
            
            if (users.length === 0) {
                break;
            }
            
            totalUsers += users.length;

            const tokensToSend = users
                .filter(user => user.deviceToken)
                .map(user => user.deviceToken);

            if (tokensToSend.length > 0) {
                
                // 💡 FIX: Create an array of individual send promises (one per token)
                const sendPromises = tokensToSend.map(token => {
                    const payload = {
                        notification: {
                            title: "A new collection of hairstyles has been added to the studio!",
                            body: `${hairstyles.length} hairstyles has just been added`,
                        },
                        data: {
                            type: 'admin_action',
                            link: '/?studio_status=ready',
                        },
                        // Use 'token' for the single destination
                        token: token, 
                    };
                    // Use the older, basic 'send' method
                    return admin.messaging().send(payload);
                });

                // Execute all sends concurrently
                const results = await Promise.allSettled(sendPromises);
                
                // Count successful sends
                const successCount = results.filter(r => r.status === 'fulfilled').length;
                totalNotified += successCount;
                
                console.log(`Batch sent. Successes: ${successCount}, Failures: ${results.length - successCount}`);
            }

            lastId = users[users.length - 1]._id;
        }

        console.log(`✅ Push notification broadcast complete. Total users processed: ${totalUsers}. Total successful notifications: ${totalNotified}`);

    } catch (error) {
        console.error('Error in sendNotificationToAllUsers:', error.message);
    }
};



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
    await sendNotificationToAllUsers()
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