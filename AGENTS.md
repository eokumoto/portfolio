# AGENTS.md

## Project overview

This repository contains the personal portfolio website of Emi Okumoto.

Emi is a Software Engineering student and aspiring game developer.

The website should feel like a cozy, pink, pixel-art game interface while still functioning as a clear, practical, professional portfolio.

This is currently a standard website.

There is no playable game mode, explorable overworld, character movement, or alternate game-navigation experience.

Do not add game mechanics unless explicitly requested later.

---

## Primary goals

The website should:

- Showcase Emi's projects.
- Introduce Emi through an About page.
- Present Emi's résumé in a readable format.
- Provide links to GitHub, LinkedIn, email, and résumé PDF.
- Demonstrate frontend development, design taste, and interest in game development.
- Remain easy to understand for recruiters who only spend a short time on the site.
- Work well on desktop, tablet, and mobile.
- Feel inspired by a cozy retro game without copying an existing game.

The website should not feel like:

- A generic LinkedIn page.
- A dark cyberpunk developer portfolio.
- A literal playable game.
- A confusing novelty interface.
- A one-page screenshot with invisible clickable areas.
- A direct Minecraft, Nintendo, Sanrio, Fortnite, Valorant, or other copyrighted game copy.

---

## Technology

Preferred stack:

- React
- TypeScript
- Vite
- React Router
- ESLint
- CSS Modules or organized standard CSS
- Vitest
- React Testing Library

Framer Motion may be used later for subtle transitions.

Do not add heavy libraries without a clear need.

Do not use:

- Three.js
- Unity WebGL
- Phaser
- Canvas-based rendering for the whole site
- A game engine
- Scroll-hijacking libraries
- Large UI frameworks unless explicitly requested

---

## Main routes

Use these routes:

```text
/                  Home
/projects          Select Project
/about             About
/resume            Resume
/projects/:slug    Individual Project
````

Do not add a separate Contact page.

Contact information should appear:

* Near the bottom of the Home page.
* On the About page.
* Where otherwise appropriate in the footer.


## Navigation rules

Navigation must remain simple and consistent.

### Home page

The Home page contains links to:

* Select Project
* About
* Resume

It may also contain:

* GitHub
* LinkedIn
* Email

Do not include:

* Start
* Start Journey
* Continue
* Settings
* Enter Game Mode
* New Game
* Load Game
* Play

### Select Project page

Use a top-left button labeled:

```text
Back to Home
```

The page should include:

* Project selection list.
* Open Selected Project button.
* GitHub link.
* LinkedIn link.

### About page

Use a top-left button labeled:

```text
Back to Home
```

### Resume page

Use a top-left button labeled:

```text
Back to Home
```

### Individual project pages

Use a top-left button labeled:

```text
Leave Project
```

`Leave Project` must return the visitor to:

```text
/projects
```

Do not use:

```text
Leave World
```

Do not place the full Home, Projects, About, and Resume navigation bar on individual project pages.

The placement of `Back to Home` and `Leave Project` must remain consistent across every route.

Place these buttons in the top-left content area with the same spacing and styling.

---

## Visual direction

The site should feel:

* Cozy
* Bright
* Soft
* Pink
* Pixel-art inspired
* Retro
* Game-like
* Playful
* Polished
* Readable
* Professional

The design should be cute without becoming overly childish or overwhelmingly feminine.

Use cuteness as an accent, not as the entire identity.

---

## Color direction

Preferred palette:

* Baby blue sky
* Warm cream
* Light blush pink
* Dusty pink
* Medium rose
* Deep plum text
* Soft lavender
* Muted leafy green
* White clouds

Example starting values:

```css
:root {
  --color-sky: #9ed8f5;
  --color-sky-light: #d8f1ff;

  --color-cream: #fff6e9;
  --color-cream-dark: #f4e4d2;

  --color-pink-light: #f9d5de;
  --color-pink: #e99bb2;
  --color-pink-dark: #c96587;

  --color-lavender: #c8b3df;
  --color-green: #7f9d78;

  --color-plum: #4d2942;
  --color-plum-light: #70435f;

  --color-white: #fffdf9;
}
```

These values may be adjusted for contrast and cohesion.

Avoid:

* Black-heavy layouts.
* Neon cyberpunk colors.
* Hot pink as the main background.
* Excessive gradients.
* Very dark purple pages that feel disconnected from the rest of the site.
* Different color themes for every page.

All pages should feel like part of the same visual world.

---

## Background art

The Home page uses provided background art.

Expected assets:

```text
public/images/backgrounds/home-desktop.webp
public/images/backgrounds/home-mobile.webp
```

The desktop background is landscape-oriented.

The mobile background is portrait-oriented.

Use responsive CSS to switch between them.

Example:

```css
.home-page {
  min-height: 100svh;
  background-image: url("/images/backgrounds/home-mobile.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 768px) {
  .home-page {
    background-image: url("/images/backgrounds/home-desktop.webp");
  }
}
```

Do not place text, buttons, or navigation inside the background image itself.

All functional interface elements must be real HTML and CSS.

Do not build the entire website as a flattened image.

---

## Image and asset rules

Use image files for:

* Landscape backgrounds.
* Pixel characters.
* Cat or mascot sprites.
* Decorative trees and flowers.
* Project screenshots.
* Project thumbnails.
* Large environmental illustrations.
* Decorative pixel icons when custom artwork is available.

Use HTML and CSS for:

* Buttons.
* Text.
* Navigation.
* Project list rows.
* Panels.
* Cards.
* Technology tags.
* Carousel controls.
* Selected states.
* Loading bars.
* Page structure.
* Responsive behavior.
* Focus states.
* Hover states.

Do not use image-based buttons.

Do not bake labels or paragraphs into artwork.

---

## Pixel-art rules

The site should use deliberately chunky pixels.

The art should resemble a cozy retro handheld or Nintendo-era game interface without copying any specific existing game.

Use:

```css
.pixel-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

Avoid:

* Blurry scaling.
* Hyper-detailed painted illustrations.
* Mixing pixel art with unrelated glossy 3D assets.
* Tiny unreadable pixel fonts.
* Direct copies of Minecraft textures, buttons, dirt backgrounds, logos, fonts, sounds, or UI assets.
* Direct copies of Nintendo characters or visual assets.

All generated or imported artwork should be original.

---

## Typography

Use a pixel-style font for:

* Main headings.
* Button labels.
* Small interface labels.
* Project titles.

Use a highly readable font for:

* Long About text.
* Project descriptions.
* Resume content.
* Case-study paragraphs.

Do not use a tiny pixel font for long paragraphs.

Body text must remain comfortable to read on mobile.

Recommended pattern:

```text
Display font: pixel-style
Body font: readable sans-serif or serif
```

Avoid using more than two main font families.

---

## Button design

Create reusable coded buttons.

Expected component:

```text
PixelButton
```

Buttons should use:

* Pale cream or blush background.
* Dusty pink pixel border.
* Dark plum text.
* Chunky offset shadow.
* Minimal corner rounding.
* Visible hover state.
* Visible selected state.
* Pressed state that moves down slightly.
* Visible keyboard focus ring.
* Minimum touch target of 44px.
* Clear disabled state.

Buttons should not use:

* Glossy gradients.
* Modern pill styling.
* Image-based labels.
* Tiny click areas.
* Excessive animation.

Example behavior:

```css
.pixel-button {
  min-height: 44px;
  border: 3px solid var(--color-pink-dark);
  background: var(--color-cream);
  color: var(--color-plum);
  box-shadow: 4px 4px 0 var(--color-plum-light);
}

.pixel-button:hover {
  background: var(--color-pink-light);
}

.pixel-button:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0 var(--color-plum-light);
}

.pixel-button:focus-visible {
  outline: 3px solid var(--color-sky);
  outline-offset: 3px;
}
```

---

## Shared design system

Define shared visual tokens in:

```text
src/styles/tokens.css
```

Include:

* Colors.
* Typography.
* Spacing.
* Borders.
* Shadows.
* Breakpoints.
* Motion duration.
* Maximum content width.
* Z-index layers.

Create reusable components where appropriate:

```text
PixelButton
PixelPanel
BackButton
PageHeading
SocialLinks
TechnologyTag
ProjectListItem
ImageCarousel
SectionHeading
ProjectStatus
```

Do not duplicate button or panel styling across pages.

Do not place all page logic inside `App.tsx`.

---

## Home page

The Home page should feel like a cozy game title screen, but it is not a game menu.

Required content:

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

The title block should be deliberately centered.

Do not position it slightly off-center by accident.

The background should remain visible and atmospheric.

Avoid placing all buttons inside one cramped popup.

Buttons should have comfortable spacing.

The Home page should feel spacious.

The layout may include:

* Pixel character.
* Cat sprite.
* Falling cherry petals.
* Gentle cloud movement.
* Decorative flowers.

Decorations must not block navigation or reduce readability.

Do not include:

* Start button.
* Start Journey.
* Settings.
* Play button.
* Enter Game Mode.
* Fake loading indicator.

---

## Select Project page

The Projects page should visually resemble an original cozy game project-selection screen.

It may take inspiration from a world-selection interface, but it must use original assets and styling.

Required heading:

```text
Select Project
```

Each project entry should include:

* Thumbnail.
* Project title.
* Short description.
* Technologies.
* Status when useful.

Example statuses:

```text
Complete
In Progress
Coming Soon
```

The selected project must be visually obvious.

Possible selected states:

* Pink border.
* Highlighted cream background.
* Pixel cursor.
* Small glow.
* Animated flower or arrow.
* Slight horizontal movement.

Provide:

```text
Open Selected Project
```

Also include:

* GitHub.
* LinkedIn.

Desktop behavior:

* Project entries may appear as wide rows.
* Thumbnail appears to the left.
* Text appears to the right.
* Main action appears near the bottom.

Mobile behavior:

* Rows stack vertically.
* Thumbnail may move above text.
* Buttons become full-width or wrap cleanly.
* No horizontal scrolling.

Keyboard behavior:

* Arrow keys may change selection.
* Tab navigation must work.
* Enter or Space may open the selected project.
* Focus must always be visible.

Coming Soon projects must not open.

---

## Project data

Store project information in a typed data file.

Recommended location:

```text
src/data/projects.ts
```

Recommended type:

```ts
export type ProjectStatus =
  | "complete"
  | "in-progress"
  | "coming-soon";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  status: ProjectStatus;

  thumbnail?: string;
  gallery?: ProjectImage[];

  githubUrl?: string;
  demoUrl?: string;

  overview?: string[];
  inspiration?: string[];
  developmentProcess?: string[];
  features?: string[];
  challenges?: string[];
  lessons?: string[];
}
```

Do not hardcode the same project information in multiple components.

Do not invent project details.

Use clearly marked TODO placeholders when content is missing.

---

## Individual project pages

Individual projects use:

```text
/projects/:slug
```

Each project page should feel like entering a specific project, but it remains a normal vertically scrolling case-study page.

Use a top-left:

```text
Leave Project
```

This returns to:

```text
/projects
```

Do not include a full top navigation bar.

Do not include:

```text
Leave World
```

The page should not attempt to fit everything inside one viewport.

Allow natural vertical scrolling.

Possible sections:

```text
Project title
Short summary
GitHub and demo links
Image carousel
Overview
Inspiration
Development process
Features
Technologies
Challenges
What I learned
Future improvements
```

Section labels should remain understandable.

Game-inspired wording may be used lightly, but do not make the user decode the page.

Good:

```text
Overview
How It Was Built
Challenges
What I Learned
```

Avoid replacing every heading with an obscure metaphor.

The background may use:

* Midday blue sky.
* Pink cherry blossoms.
* Cream content panels.
* Subtle pixel scenery.

The content must remain readable.

---

## Project image carousel

Create a reusable carousel component.

Expected behavior:

* Previous button.
* Next button.
* Current-slide indicator.
* Thumbnail navigation when useful.
* Keyboard support.
* Touch or swipe support when practical.
* Descriptive alt text.
* Optional captions.
* Responsive image sizing.
* Reduced-motion support.

Do not autoplay the carousel.

Do not crop important project screenshots excessively.

---

## About page

The About page should be a full responsive page, not a small popup.

Required content areas may include:

* Pixel portrait or environmental artwork.
* Short introduction.
* Longer biography.
* Interests.
* Game-development goals.
* Technologies or topics being explored.
* Contact links.

Possible content structure:

```text
About Emi
Introduction
What I enjoy building
What I am learning
Outside of software
Contact
```

Do not invent hobbies, biography details, awards, employment, or personal facts.

Use TODO placeholders where real content has not been provided.

The About page should feel personal but not overly informal.

---

## Resume page

The Resume page should be a readable web version of Emi's résumé.

Possible sections:

```text
Education
Skills
Projects
Experience
Relevant coursework
Achievements
```

Include a clear button or link:

```text
Download Resume PDF
```

Expected PDF path:

```text
/public/resume/emi-okumoto-resume.pdf
```

Do not use skill percentages such as:

```text
Java 85%
Python 72%
```

These are misleading and difficult to interpret.

Prefer grouped skill lists.

Example:

```text
Languages
Java, C, Python, JavaScript, SQL

Tools
Git, Linux, IntelliJ, VS Code

Concepts
Object-oriented programming, data structures, algorithms, software design
```

Do not invent dates, institutions, grades, awards, or experience.

---

## Contact and social links

There is no separate Contact page.

Use a reusable `SocialLinks` component.

Possible links:

* GitHub.
* LinkedIn.
* Email.
* Resume PDF.

Use real accessible links.

External links should include appropriate attributes where needed.

Email should use:

```text
mailto:
```

Do not display placeholder social links as real links.

If information is missing, keep the UI hidden or clearly marked as TODO during development.

---

## Responsive behavior

The website must work from 320px width upward.

Required:

* No horizontal page scrolling.
* No fixed desktop-only canvas.
* Text remains readable at 200% browser zoom.
* Buttons remain easy to tap.
* Columns stack on smaller screens.
* Long text does not overflow panels.
* Images scale without distortion.
* Background artwork crops intentionally.
* Important content remains within safe areas.
* Navigation remains visible.
* Decorative art may move, crop, or hide on mobile.

Use:

```css
min-height: 100svh;
```

where appropriate.

Prefer:

* CSS Grid.
* Flexbox.
* `clamp()`.
* Relative units.
* Fluid spacing.
* Maximum content widths.

Avoid excessive:

* Absolute positioning.
* Hardcoded desktop pixel coordinates.
* Fixed heights for text-heavy sections.
* Manual line breaks used only to force desktop layout.

Absolute positioning may be used for decorative artwork, not for primary content structure.

---

## Accessibility

Use semantic HTML.

Required:

* Real headings.
* Real buttons.
* Real links.
* Visible keyboard focus.
* Descriptive page titles.
* Image alt text.
* Empty alt text for decorative images.
* Logical heading order.
* Sufficient color contrast.
* Keyboard-accessible navigation.
* Accessible carousel controls.
* Reduced-motion support.

Use buttons for actions.

Use links for navigation.

Do not attach click handlers to non-interactive `div` elements without proper semantics.

Do not rely on color alone to communicate selection or status.

---

## Motion and animation

Animations should be subtle and purposeful.

Allowed:

* Gentle falling petals.
* Slow cloud movement.
* Small button press.
* Soft page fade.
* Selected-project cursor.
* Carousel slide transition.
* Small hover movement.
* Short loading transition added later.

Avoid:

* Scroll hijacking.
* Constant camera movement.
* Cursor trails.
* Large parallax effects.
* Text moving while being read.
* Motion on every component.
* Long forced loading screens.
* Artificially delaying navigation.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or simplify nonessential motion when reduced motion is requested.

---

## Loading transitions

Loading transitions are not required in the first version.

They may be added later when opening an individual project.

If added:

* Keep them short.
* Do not block navigation unnecessarily.
* Allow the user to skip.
* Use original assets.
* Do not copy Minecraft's exact loading screen.
* Do not use Minecraft dirt textures, fonts, sounds, or wording.

Possible custom messages:

```text
Opening project...
Loading screenshots...
Preparing case study...
Compiling ideas...
```

Project-specific humorous messages may be used later.

---

## Sound

Do not add sound effects or music in the initial version.

If sound is added later:

* It must be muted by default.
* It must have a clear toggle.
* It must never autoplay loudly.
* It must use original or properly licensed audio.
* Do not use Minecraft, Nintendo, Valorant, Fortnite, or other game audio.

---

## Content rules

Do not invent:

* Projects.
* Awards.
* Employment.
* Internships.
* Skills.
* School names.
* Graduation dates.
* Grades.
* Coursework.
* Contact information.
* Personal biography.
* GitHub URLs.
* LinkedIn URLs.
* Demo URLs.

When information is missing, use:

```text
TODO
```

or omit the section until real content is provided.

Do not generate fake screenshots of projects and present them as real.

Generated artwork may be used for decorative purposes, but project evidence should use actual screenshots when available.

---

## Code quality

Use TypeScript strict mode.

Avoid:

* `any`.
* Unnecessary type assertions.
* Suppressing TypeScript errors.
* Suppressing ESLint errors without explanation.
* Giant components.
* Duplicate code.
* Dead code.
* Unused assets.
* Inline styles for static design.
* Excessive prop drilling when a small local structure is sufficient.

Prefer:

* Small focused components.
* Explicit types.
* Clear names.
* Reusable layout components.
* Data-driven rendering.
* Semantic markup.
* Simple state management.

Do not add global state management unless clearly needed.

---

## CSS rules

Store shared tokens in:

```text
src/styles/tokens.css
```

Store global styles in:

```text
src/styles/global.css
```

Store shared pixel UI styles in:

```text
src/styles/pixel-ui.css
```

Component-specific styles may use CSS Modules.

Avoid:

* `!important`.
* Excessive nesting.
* Arbitrary magic numbers.
* Copy-pasted style blocks.
* Inline static styles.
* Layout based entirely on absolute positioning.

If a magic number is required, add a short comment explaining it.

---

## Suggested folder structure

```text
src/
├── assets/
├── components/
│   ├── BackButton/
│   ├── ImageCarousel/
│   ├── PageHeading/
│   ├── PixelButton/
│   ├── PixelPanel/
│   ├── ProjectListItem/
│   ├── ProjectStatus/
│   ├── SocialLinks/
│   └── TechnologyTag/
├── data/
│   └── projects.ts
├── layouts/
│   └── PortfolioLayout.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── HomePage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── ProjectsPage.tsx
│   └── ResumePage.tsx
├── styles/
│   ├── global.css
│   ├── pixel-ui.css
│   └── tokens.css
├── App.tsx
└── main.tsx
```

Public assets:

```text
public/
├── images/
│   ├── backgrounds/
│   │   ├── home-desktop.webp
│   │   └── home-mobile.webp
│   ├── characters/
│   ├── decorations/
│   ├── projects/
│   └── references/
└── resume/
    └── emi-okumoto-resume.pdf
```

---

## Visual references

Mockup images are visual references only.

Do not place full mockup screenshots directly into the site.

Use them to understand:

* Composition.
* Spacing.
* Pixel-art direction.
* Color palette.
* Button style.
* Panel style.
* Page hierarchy.
* General atmosphere.

Recreate the interface as responsive HTML, CSS, React components, and separate art assets.

If a mockup conflicts with this file, follow this file.

---

## Development process

For each task:

1. Read this `AGENTS.md`.
2. Inspect the existing repository before modifying files.
3. Identify which files need to change.
4. Make the smallest coherent implementation.
5. Do not rewrite unrelated working code.
6. Run validation commands.
7. Summarize what changed.
8. Clearly list remaining TODO items.

For broad visual changes, begin with shared components or design tokens rather than editing every page separately.

For page-specific work, modify only that page and necessary shared components.

---

## Commands

Before completing a task, run the relevant commands:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

If `typecheck` does not exist, add an appropriate script such as:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```

Do not report a task as complete if the production build fails.

---

## Testing expectations

At minimum, test:

* Home page renders.
* Home buttons navigate correctly.
* Select Project page renders.
* Selecting a project changes the active state.
* Open Selected Project opens the correct route.
* Coming Soon projects cannot be opened.
* Back to Home returns to `/`.
* Leave Project returns to `/projects`.
* About page renders.
* Resume page renders.
* Resume download link exists.
* Individual project route handles unknown slugs.
* Carousel controls work.
* Major controls are keyboard accessible.

Prefer behavior-based tests rather than implementation-detail tests.

---

## Definition of done

A task is complete only when:

* Requested behavior works.
* Desktop layout is usable.
* Mobile layout is usable.
* Navigation labels are correct.
* Back-button placement is consistent.
* `Leave Project` is used instead of `Leave World`.
* Keyboard navigation still works.
* Accessibility has not regressed.
* Type checking passes.
* Linting passes.
* Tests pass.
* Production build succeeds.
* No fake personal information was added.
* No copyrighted game assets were copied.
* No unnecessary game mode was introduced.

---

## Current scope reminder

The current site is:

```text
A cozy pink pixel-art portfolio website.
```

It is not:

```text
A playable game.
An overworld.
A game mode.
A Minecraft clone.
A game launcher.
```

Keep the game inspiration in the visual language, transitions, project-selection interface, and pixel artwork.

Keep the actual site clear, responsive, professional, and easy to navigate.

```
```
