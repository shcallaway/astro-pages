import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
	site: "https://example.github.io",
	// GitHub Pages hosting structure:
	// - Project repos are hosted at: username.github.io/repo-name/
	// - So we need base path "/astro-pages" in production
	// - But use "" for clean URLs in local development
	base: process.env.NODE_ENV === "production" ? "/astro-pages" : "",
	markdown: {
		drafts: true,
	},
});
