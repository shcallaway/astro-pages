# Astro Pages Starter

This repository contains a minimal Astro site wired for GitHub Pages deployments. It follows the guidelines from the prompt:

- **Astro** powers a static, content-focused site with routes in `src/pages` and Markdown posts in `src/content/posts`.
- **GitHub Pages** hosts the generated build through the official `withastro/action` workflow located in `.github/workflows/deploy.yml`.

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:4321](http://localhost:4321) by default. Modify content in `src/pages` or add new Markdown files under `src/content/posts` to see live updates.

## Project structure

```
├── public/               # Static assets copied directly to the build output
├── src/
│   ├── components/       # Reusable layouts and UI pieces
│   ├── content/          # Content collections configuration + Markdown posts
│   ├── pages/            # Route-based `.astro` files (home, about, blog, posts)
│   └── styles/           # Global stylesheet
├── astro.config.mjs      # Configures site URL and base path for GitHub Pages
├── package.json          # Astro dependency and scripts
└── tsconfig.json         # Strict type checking preset from Astro
```

## Deploying to GitHub Pages

1. Update `site` and `base` in `astro.config.mjs` with your GitHub Pages URL and repository name.
2. Ensure GitHub Pages is configured to use GitHub Actions as the source.
3. Push to the `main` branch. The workflow builds the site and publishes the static output to the `gh-pages` branch automatically.

Optional: add `public/CNAME` with your custom domain and set `site` to the custom domain if you plan to use one.

## Available scripts

- `npm run dev` – Start the local development server.
- `npm run build` – Generate the production-ready static site in `dist/`.
- `npm run preview` – Preview the build output locally.
- `npm run astro` – Access the Astro CLI directly.

Happy shipping!
