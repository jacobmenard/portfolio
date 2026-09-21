# Menard Catayas — Portfolio

Personal portfolio website for Menard Catayas, a full-stack web developer. Built with Nuxt 4 and Vue 3, showcasing featured projects, work experience, and technical skills, with scroll-triggered reveal animations and a contact section.

**Live repo:** [github.com/jacobmenard/portfolio](https://github.com/jacobmenard/portfolio)

## Tech Stack

- [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/) (TypeScript)
- [Bootstrap 5](https://getbootstrap.com/) & [BootstrapVueNext](https://bootstrap-vue-next.github.io/)
- SCSS (Sass)
- [SweetAlert2](https://sweetalert2.github.io/) for contact form feedback

## Project Structure

```
portfolio/
└── web/                      # Nuxt application (all app code lives here)
    ├── app/
    │   ├── assets/            # Images, icons, and global SCSS partials
    │   ├── components/        # Page sections and reusable UI components
    │   │   └── layouts/       # Header, footer, sidebar
    │   ├── composables/       # Shared Vue composables (e.g. useUtils)
    │   ├── layouts/           # Nuxt layouts
    │   ├── pages/             # File-based routes (/, /about-me)
    │   └── plugins/           # Nuxt plugins (SweetAlert2, scroll-reveal directive)
    ├── public/                # Static assets served as-is (favicon, robots.txt, files)
    └── nuxt.config.ts
```

## Getting Started

All commands are run from the `web/` directory.

```bash
cd web
npm install
```

Create a `.env` file (see `.env` keys below) and start the dev server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

### Environment Variables

| Variable          | Description                              | Example                 |
|--------------------|-------------------------------------------|--------------------------|
| `CLIENT_BASE_URL`  | Public base URL used by runtime config   | `http://localhost:3000` |

### Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Start the local development server        |
| `npm run build`    | Build the app for production               |
| `npm run generate` | Generate a fully static build             |
| `npm run preview`  | Preview the production build locally       |

## Features

- **Hero, Featured Projects, About Me, Experience, Skills, and Contact** sections
- Scroll-triggered slide/fade transitions per section via a custom `v-reveal` directive ([app/plugins/scroll-reveal.ts](web/app/plugins/scroll-reveal.ts))
- Responsive layout across desktop, tablet, and mobile
- Contact form integration via Zapier webhook

## Deployment

This is a standard Nuxt 4 app and can be deployed to any Node-compatible host or static hosting provider. See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific guides.

## License

All rights reserved. This code is provided for portfolio/demonstration purposes.
