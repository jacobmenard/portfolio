# Menard Catayas · Portfolio

Personal portfolio built with **Nuxt 4**, **GSAP** (ScrollTrigger) and **Lenis** smooth scrolling.
Dark, typography-led single page with bento grids and full case studies that open from each project card.

## Requirements

- Node **22.13.1** (pinned in `.nvmrc`; any later 22.x or 24.x also works)
- npm 10+

> Nuxt is pinned to `~4.4.8`, the newest Nuxt 4 release that supports Node 22.13.1
> (4.5 needs 22.19+, 4.6 needs 22.22+). Install with `npm ci` so you get the exact
> versions in `package-lock.json`, which were all checked against Node 22.13.1.
> `.npmrc` sets `engine-strict=true`, so npm refuses any future package that needs a newer Node.

## Commands

```bash
nvm use            # switches to 22.13.1
npm ci             # install exact locked versions
npm run dev        # http://localhost:3000
npm run typecheck  # vue-tsc, strict mode
npm run generate   # static site in .output/public, deploy anywhere
npm run preview    # serve the production build locally
```

## Editing content

All copy lives in **`app/data/portfolio.ts`**: profile, bio, stack, process steps, projects
(case study text, outcomes, screenshots) and experience. Components only render it.

- **Social links:** fill in `SOCIALS` with `https://` URLs. Empty or non-https links are hidden.
- **Bio:** wrap words in `*asterisks*` to set them in the italic serif.
- **New project:** add an entry to `PROJECTS` and put its images in `public/img/<slug>/`:
  - `f/<file>.webp`: full size (about 1600px wide), used for the card, case cover and viewer
  - `t/<file>.webp`: thumbnail (about 800px wide), used in the case study gallery
  - `shots[0]` is the card and cover image.

## Structure

```
app/
  app.vue                  page composition, SEO meta, in-page navigation
  assets/css/main.css      design tokens and all styles
  data/portfolio.ts        site content
  types/portfolio.ts       content types
  plugins/
    motion.client.ts       GSAP + ScrollTrigger + Lenis, scroll lock, smooth scrollTo
    magnetic.ts            v-magnetic directive
  composables/
    usePageMotion.ts       hero intro, reveals, parallax, scroll scrubs
    useCaseStudy.ts        opens the case study overlay from a card
    useClock.ts            shared Asia/Manila clock
    useCopyEmail.ts        clipboard with select-text fallback
    useUiState.ts          shared overlay and cursor flags
    useAsset.ts            baseURL-aware image paths
    useSpotlight.ts        pointer highlight on tiles
  components/
    AppNav, MobileMenu, CursorBubble, HeroSection, WorkSection, ProjectCard,
    AboutSection, ProcessSection, ExperienceSection, ContactSection, AppFooter,
    CaseStudy (overlay), ScreenshotViewer (lightbox), RollLink
public/img/                project screenshots and the NegosyoWork walkthrough video
```

## Motion and accessibility

- Visitors with **reduced motion** get no smooth scrolling, intro or transitions; everything is visible immediately.
- An inline head script hides the hero before first paint so the intro doesn't flash. If JavaScript fails to load,
  it un-hides the page after 4 seconds, and with JavaScript disabled nothing is hidden at all.
- Case study and screenshot viewer are modal dialogs with focus trapping, Escape to close and focus returned to the card.
- The viewer supports arrow keys and swipe.

## Deploying under a sub-path

Set `NUXT_APP_BASE_URL=/your-path/` when running `npm run generate`. Image and video paths follow it.
