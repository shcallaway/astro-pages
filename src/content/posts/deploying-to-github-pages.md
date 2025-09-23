---
title: Deploying Astro on GitHub Pages
description: Step-by-step notes on configuring site and base for a repository-hosted Astro site.
pubDate: 2024-08-08
tags:
  - github-pages
  - automation
---

Deploying to GitHub Pages is as simple as connecting your repository and enabling the official workflow.

1. Set `site` to your GitHub Pages domain and `base` to your repository slug inside `astro.config.mjs`.
2. Add `.github/workflows/deploy.yml` with the `withastro/action@v3` build step followed by `actions/deploy-pages@v4`.
3. Push to `main`. GitHub Actions will build your static output and publish it under the `gh-pages` branch automatically.

Once Pages is enabled in repository settings, every merge to `main` updates the live site in a few minutes.
