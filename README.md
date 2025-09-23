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

### Understanding the `/astro-pages` Path

This project uses a **conditional base path** configuration that handles different hosting environments:

```javascript
// In astro.config.mjs
base: process.env.NODE_ENV === "production" ? "/astro-pages" : "/",
```

**Why is this needed?**

GitHub Pages hosts project repositories (non-`username.github.io` repos) at a subpath:
- 🏠 **Repository name**: `astro-pages`
- 🌐 **Production URL**: `https://username.github.io/astro-pages/`
- 🛠️ **Local development**: `http://localhost:4321/` (clean URLs)

This means your routes work differently in each environment:

| Environment | Home | About | Blog |
|-------------|------|-------|------|
| **Local** | `localhost:4321/` | `localhost:4321/about` | `localhost:4321/blog` |
| **Production** | `username.github.io/astro-pages/` | `username.github.io/astro-pages/about` | `username.github.io/astro-pages/blog` |

### Deployment Steps

1. Update `site` in `astro.config.mjs` with your actual GitHub Pages URL.
2. Ensure GitHub Pages is configured to use GitHub Actions as the source.
3. Push to the `main` branch. The workflow builds the site and publishes the static output to the `gh-pages` branch automatically.

### Alternative Hosting Options

- **Root domain hosting**: Rename your repository to `username.github.io` and remove the base path entirely
- **Custom domain**: Add `public/CNAME` with your domain and update the `site` configuration

## Available scripts

- `npm run dev` – Start the local development server.
- `npm run build` – Generate the production-ready static site in `dist/`.
- `npm run preview` – Preview the build output locally.
- `npm run astro` – Access the Astro CLI directly.

Happy shipping!
