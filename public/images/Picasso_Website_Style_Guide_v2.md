# PICASSO PRINT & PACK — Website Style Guide

Use this file as the design-system brief for Claude/Codex so the live website matches the approved redesign concept.

## 1) Overall Design Direction

- Visual mood: premium, editorial, refined, luxury packaging studio.
- Brand personality: confident, elegant, modern, tactile, trustworthy.
- Tone: premium B2B packaging partner, not a generic print shop.
- Visual keywords: luxury, craftsmanship, restraint, premium materials, subtle depth, clean whitespace.

## 2) Core Layout Philosophy

- Use a centered, grid-based layout with generous horizontal padding.
- Keep strong visual hierarchy and calm spacing.
- Hero should be split into two zones:
  - Left: headline, subheadline, CTAs.
  - Right: premium product still-life image.
- Trust metrics should appear directly below hero.
- Group content into clean, card-based sections with light borders and soft shadows.
- Use ample whitespace between major sections.

## 3) Page Structure

Recommended homepage section order:

1. Sticky header with CTA
2. Hero banner
3. Trust metrics
4. Brand promise / value pillars
5. Product family cards
6. Rigid box formation process
7. Gallery / proof section
8. Finishes & materials tags
9. Lead capture CTA block
10. Footer

## 4) Typography

### Heading style

- Primary heading font style: elegant high-contrast serif.
- Feel: luxurious, editorial, premium.
- Use for hero headings and major section titles.
- Suggested web font direction:
  - Cormorant Garamond
  - Playfair Display
  - Canela-style equivalent if available

### Body font style

- Use a clean sans-serif for navigation, cards, metadata, and body copy.
- Feel: modern, readable, understated.
- Suggested web font direction:
  - Inter
  - Manrope
  - Plus Jakarta Sans

### Typography rules

- Hero heading: large, dramatic, high contrast.
- Section headings: serif, centered where appropriate.
- Card titles: medium-weight serif or refined sans depending on context.
- Body copy: small to medium size, comfortable leading.
- Avoid overly bold body copy.
- Use sentence case for most UI labels.

## 5) Color System

Use a muted luxury palette.

### Primary colors

- Deep Teal / Forest Teal: for premium brand areas, buttons, dark hero background.
- Warm Ivory / Soft Cream: for page background and content surfaces.
- Muted Gold / Champagne Gold: for highlights, borders, icons, accents.
- Charcoal Ink: for main text.

### Suggested color tokens

```css
:root {
  --bg-page: #F4F0E8;
  --bg-card: #FBF8F2;
  --text-primary: #1E2528;
  --text-secondary: #4E5A5F;
  --brand-deep: #173F43;
  --brand-deeper: #102E31;
  --accent-gold: #B9924C;
  --accent-gold-soft: #D9C39A;
  --border-soft: #E3D9CA;
  --shadow-soft: rgba(20, 30, 35, 0.08);
}
```

### Color usage rules

- Keep background light and warm.
- Use deep teal for premium emphasis blocks.
- Use gold sparingly for refinement.
- Do not oversaturate the UI.
- Avoid bright blues or flashy gradients.

## 6) Hero Banner Style

- Use a cinematic still-life composition.
- Background: dark teal paneled wall, soft luxury lighting.
- Foreground: premium rigid boxes, luxury paper bag, soft ribbon, subtle prop styling.
- Leave negative space on the left for headline overlay.
- Product composition should feel balanced, high-end, and realistic.
- Avoid clutter.
- Do not overlay too many decorative elements.

## 7) Buttons

### Primary button

- Background: muted gold.
- Text: deep teal or dark charcoal.
- Shape: slightly rounded rectangle.
- Style: premium, not overly pill-shaped.

### Secondary button

- Transparent or ivory background with deep teal border.
- Text: deep teal.

### Button behavior

- Subtle hover lift.
- Slight shadow increase on hover.
- Smooth 180–250ms transition.

## 8) Cards and Surfaces

- Use soft rounded corners.
- Use light borders in warm neutral tones.
- Add subtle shadows only.
- Keep cards clean and not overly busy.
- Product cards should have an image, title, 3 short bullet points, and a subtle action link.

## 9) Iconography

- Use minimal line icons.
- Gold or teal accents only.
- Keep icon stroke refined and lightweight.

## 10) Rigid Box Formation Process Section

- Use a horizontal infographic style.
- Make it cleaner and more compact than the brochure.
- Steps:
  1. Greyboard Cutting
  2. V-Grooving / Scoring
  3. Corner Pasting
  4. Frame Folding
  5. Wrap Paper Printing
  6. Wrapping & Turning In
  7. Final Assembly & QC
- Use small isometric illustrations and directional arrows.
- Keep the section visually elegant, not technical-looking.

## 11) Gallery Section

- Use real packaging visuals.
- Show premium proof rather than generic stock imagery.
- Display 4–8 curated thumbnails.
- Maintain consistent aspect ratios and image quality.
- Use refined hover effects only.

## 12) Finishes & Materials Section

- Use small tag/pill components.
- Neutral surface with icon + label.
- Good examples:
  - Matte Lamination
  - Gloss Lamination
  - Foil Stamping
  - Embossing
  - Spot UV
  - Textured Papers
  - Magnetic Closures
  - Ribbon Pulls
  - Brown Kraft
  - White Kraft
  - Art Paper
  - Duplex
  - Ivory Board

## 13) Conversion Section

- Use a strong dark teal band above footer.
- Left side: headline + supporting copy.
- Right side: compact quote form.
- Make the quote path feel premium but friction-light.

## 14) Footer

- Use a dark, premium footer.
- Keep it clean and structured.
- Include brand description, quick links, industries, and contact info.
- Use understated social icons.

## 15) Motion & Interaction

- Use refined motion, not flashy animation.
- Recommended interactions:
  - Fade + translate reveal on scroll
  - Card hover lift
  - Soft parallax in hero
  - Sticky header with slight backdrop blur
- Animation should support elegance and clarity.

## 16) What to Avoid

- Avoid generic template look.
- Avoid overcrowded sections.
- Avoid loud gradients.
- Avoid bright colors.
- Avoid excessive rounded corners.
- Avoid too much motion.
- Avoid SaaS-style cluttered dashboards.
- Avoid cheap stock photography.

## 17) Implementation Notes for Claude/Codex

Build with:

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Optional GSAP for hero polish
- shadcn/ui for form primitives if needed

### Layout rules

- Max width container around 1200–1280px.
- Section vertical spacing: generous.
- Desktop-first luxury composition, but fully responsive.
- On mobile, stack hero content vertically with image below or above text.

### Design goal

The final website should feel like a premium packaging studio for startups, D2C brands, and mid-sized companies seeking luxury paper bags and rigid boxes.
