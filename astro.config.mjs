import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://example.github.io',
  base: '/astro-pages',
  markdown: {
    drafts: true,
  },
});
