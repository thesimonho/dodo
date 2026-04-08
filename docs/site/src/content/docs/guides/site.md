---
title: Site
description: Public documentation website deployed to GitHub Pages.
---

The site documentation type creates and maintains a public-facing documentation website for end users, deployed to GitHub Pages.

**Default location:** `docs/site/`

## Supported generators

When creating a new site, dodo offers three static site generators:

| Generator | Best for |
|---|---|
| **Astro Starlight** | Default choice. Standalone docs sites with built-in search, i18n, and sidebar generation. |
| **VitePress** | Projects already using the Vite or Vue ecosystem. |
| **Docusaurus** | Projects already using the React ecosystem. |

If you already have a docs site using a different generator (Hugo, MkDocs, Sphinx, etc.), dodo works with what you have — it won't suggest migrating.

## Running it

```sh
/dodo site
```

On first run, dodo:

1. Asks which generator you prefer
2. Scaffolds the site in `docs/site/`
3. Searches for relevant plugins based on your project (OpenAPI docs for APIs, TypeDoc for TypeScript libraries, etc.)
4. Proposes a page structure based on your README and existing docs
5. Generates initial content from existing sources
6. Creates a GitHub Actions workflow for deployment

On subsequent runs, dodo compares the site content against your codebase and identifies pages that need updating, new features that need documentation, and broken links.

## Deployment

Dodo generates a GitHub Actions workflow that:

- Triggers on pushes to main that touch `docs/site/**`
- Builds the site using your generator's build command
- Deploys to GitHub Pages

It also configures GitHub Pages in your repo settings (if the `gh` CLI is available).

## Tips

- You can target specific pages: `/dodo:do the site FAQ` or `/dodo:do fix the broken link on the getting started page`.
- Site content is for end users, not contributors. If you're writing contributor docs, use [references](/dodo/guides/references/) instead.
- Dodo won't change your theme, colors, or branding unless you ask.
