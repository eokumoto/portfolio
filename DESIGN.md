`DESIGN.md` is just the **visual rulebook** for the site.

`AGENTS.md` tells Codex how to work and what the site must do.
`CONTENT.md` tells it what your actual text and project information are.
`DESIGN.md` tells it how everything should look.

You can use this:

````md
# DESIGN.md

## Overall direction

The portfolio should feel like a cozy pink pixel-art game interface.

The design should be:

- Bright
- Soft
- Cozy
- Pixelated
- Retro
- Cute, but not childish
- Game-inspired, but still professional
- Easy to read
- Consistent across every page

The site should not feel like:

- A dark developer portfolio
- A cyberpunk website
- A playable game
- A generic Wix or Google Sites template
- A scrapbook
- A heavily feminine or overly decorated page

Use game-inspired UI styling without copying copyrighted assets.

---

## Main visual inspiration

The site takes inspiration from:

- Cozy retro RPG interfaces
- Pixel-art Nintendo-style games
- World-selection menus
- Bright cherry-blossom landscapes
- Soft game dialogue boxes
- Chunky pixel buttons
- Pastel game menus
- minecraft title screen

Reference images are stored in:

```text
references/
````

Use those images as visual references only.

Do not place the full reference images directly into the website.

---

## Color palette

Use this as the starting palette:

```css
:root {
  --sky-blue: #9fdcf7;
  --sky-light: #dff5ff;

  --cream: #fff7eb;
  --cream-dark: #f2dfcc;

  --pink-light: #f8d3df;
  --pink: #e89bb3;
  --pink-dark: #c96788;

  --rose: #ad4f72;
  --plum: #4f2f46;
  --plum-light: #715066;

  --lavender: #c9b8dd;
  --green: #7f9a77;

  --white: #fffdf9;
}
```

Use dark plum instead of pure black for most text.

Use cream instead of bright white for panels.

Use baby blue and pink as the main atmosphere.

Avoid using many unrelated accent colors.

All pages should use the same overall palette.

---

## Typography

Use one pixel-style font for:

* Page titles
* Button labels
* Project names
* Small interface labels

Use one readable body font for:

* About text
* Resume content
* Project descriptions
* Long case-study sections

Do not use pixel fonts for long paragraphs if they become hard to read.

Preferred structure:

```text
Display font: pixel-style
Body font: readable sans-serif
```

Do not use more than two main font families.

Possible temporary choices:

* Pixel font: Press Start 2P, Pixelify Sans, or another readable pixel font
* Body font: Inter, Nunito Sans, or Atkinson Hyperlegible

Font choices may change later.

---

## Pixel-art style

Pixel artwork should use large, visible pixels.

The art should feel closer to a cozy handheld game than a detailed digital painting.

Use:

```css
image-rendering: pixelated;
```

for pixel-art assets.

Avoid:

* Blurry scaling
* Smooth vector illustrations mixed with pixel art
* Hyper-detailed backgrounds
* Tiny pixel details that disappear on mobile
* Glossy 3D icons
* Direct copies of game assets

---

## Backgrounds

The Home page uses:

```text
public/images/backgrounds/home-desktop.webp
public/images/backgrounds/home-mobile.webp
```

The background should show:

* Bright sky
* Pink cherry blossoms
* Cozy landscape
* Soft clouds
* Water or distant scenery
* Open space behind the main title and buttons

Do not place text or buttons inside the background image.

The desktop and mobile versions should crop differently as needed.

Other pages may use:

* Cream page backgrounds
* Light blue skies
* Cherry-blossom decorations
* Soft pink borders
* Small landscape accents

Do not make every page use a completely different visual theme.

---

## Layout style

The layout should feel spacious.

Avoid cramming every section into one viewport.

Use natural vertical scrolling for:

* About
* Resume
* Individual project pages

Use full-width page layouts instead of making every page look like a tiny popup window.

Panels may still be used for:

* Project entries
* Resume sections
* About text
* Project case-study sections

Use a maximum content width so paragraphs do not stretch too wide.

Suggested maximum width:

```css
max-width: 1100px;
```

Long text sections may use a narrower width around:

```css
max-width: 720px;
```

---

## Buttons

Buttons should look like original cozy pixel-game controls.

Button style:

* Cream or blush background
* Dusty pink border
* Dark plum text
* Chunky pixel shadow
* Slightly squared corners
* Comfortable spacing
* Clear hover state
* Clear pressed state
* Clear keyboard focus state

Buttons should not be:

* Rounded pills
* Glossy
* Gradient-heavy
* Image-based
* Too small
* Too tightly grouped

Minimum interaction size:

```text
44px
```

Primary buttons should be visually stronger than secondary links.

Examples of primary buttons:

* Select Project
* About
* Resume
* Open Selected Project
* Download Resume PDF

Examples of secondary controls:

* GitHub
* LinkedIn
* Email
* Back to Home
* Leave Project

---

## Navigation placement

Use consistent navigation placement.

For these pages:

* Select Project
* About
* Resume

Place:

```text
Back to Home
```

in the top-left.

For individual project pages, place:

```text
Leave Project
```

in the top-left.

Use the same margin and visual style every time.

Do not alternate between top-left and top-right.

---

## Home page composition

The Home page should include:

```text
Emi Okumoto
Software Engineering Student
Aspiring Game Developer
```

Primary navigation:

```text
Select Project
About
Resume
```

Secondary links near the bottom:

```text
GitHub
LinkedIn
Email
```

The title block should be intentionally centered.

The buttons should have generous vertical spacing.

Do not place all buttons in one cramped popup box.

The landscape background should remain visible.

A character sprite or cat may be added later.

Use placeholders for those assets until final artwork is ready.

---

## Select Project page

This page should resemble an original project-selection or world-selection menu.

Heading:

```text
Select Project
```

Each project entry should contain:

* Thumbnail
* Title
* Short description
* Technology tags
* Optional status

Selected entries should be highlighted using:

* Pink border
* Lighter panel
* Pixel cursor
* Small arrow
* Subtle shadow
* Slight movement

Do not rely on color alone.

Main action:

```text
Open Selected Project
```

GitHub and LinkedIn links may appear near the bottom.

---

## About page

The About page should feel warm and personal.

Possible layout:

* Illustration or placeholder on one side
* Text on the other side
* Stacked layout on mobile

Possible sections:

* About Emi
* What I enjoy building
* Why game development interests me
* What I am currently learning
* Contact links

Do not make the page look like a tiny dialog box.

Use full-page scrolling and readable paragraph widths.

---

## Resume page

The Resume page should be structured and easy to scan.

Possible sections:

* Education
* Skills
* Projects
* Experience
* Relevant coursework
* Achievements

Use cream panels and pink section headings.

Do not use skill-percentage bars.

Use grouped skill lists.

Include a clear:

```text
Download Resume PDF
```

button.

---

## Individual project page

The project page should be a vertically scrolling case study.

Top-left navigation:

```text
Leave Project
```

Possible content order:

1. Project title
2. Short summary
3. GitHub and demo links
4. Image carousel
5. Overview
6. Inspiration
7. Development process
8. Features
9. Technologies
10. Challenges
11. What I learned
12. Future improvements

Use generous spacing between sections.

Do not cram the entire project into one viewport.

The image carousel should be large and easy to use.

---

## Panels and cards

Panels should use:

* Warm cream backgrounds
* Dusty pink borders
* Dark plum text
* Chunky pixel shadows
* Minimal corner rounding

Avoid heavy transparency over detailed backgrounds.

Text panels should have enough contrast to remain readable.

Use consistent spacing inside panels.

---

## Decorative elements

Allowed decorative elements:

* Cherry blossoms
* Small flowers
* Pixel clouds
* Tiny hearts
* Cats
* Sparkles
* Pixel arrows
* Game-like cursors

Use them sparingly.

Decorations should not block:

* Text
* Buttons
* Focus outlines
* Carousel controls
* Mobile layouts

---

## Animation

Animations may include:

* Gentle falling petals
* Slow cloud movement
* Button press movement
* Small selected-item bounce
* Soft page fades
* Carousel transitions

Avoid:

* Constant motion everywhere
* Long loading screens
* Scroll hijacking
* Cursor trails
* Large camera movements
* Text moving while being read

Support reduced motion.

---

## Responsive design

Desktop pages should feel landscape-oriented.

Mobile pages should:

* Stack content vertically
* Use the mobile background
* Keep text readable
* Make buttons full-width when helpful
* Reduce decorative clutter
* Avoid horizontal scrolling
* Keep Back to Home or Leave Project easy to reach

Do not force desktop mockups into mobile dimensions.

---

## Accessibility

Design must include:

* Strong color contrast
* Visible focus states
* Clear selected states
* Readable body text
* Large enough buttons
* Alt text for meaningful images
* Empty alt text for decorative images

Do not sacrifice usability for aesthetics.

---

## Temporary asset rules

Character art, cat sprites, icons, project thumbnails, and decorative sprites may use placeholders initially.

Do not stop implementation because these final assets are missing.

Keep layouts flexible so final artwork can be inserted later without major restructuring.

Do not generate fake project screenshots and present them as real work.

