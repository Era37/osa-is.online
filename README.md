# osa-is.online

Personal site built with [Astro](https://astro.build/) and Svelte components, styled with Tailwind CSS and deployed to Cloudflare Workers.

## Development

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

## Building

Create a production build (outputs `dist/` with the Cloudflare worker bundle):

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment

The project targets Cloudflare Workers using the adapter in `astro.config.mjs`. Running `npm run build` generates `dist/_worker.js` plus static assets in `dist/client`. Deploy with `wrangler publish` as configured in `wrangler.jsonc`.

## API

The site exposes a JSON feed of Markdown posts at `/api/blog`. Each entry contains the frontmatter plus rendered HTML so the frontend can consume posts without direct file access.

### Blog posts

Add Markdown entries under `src/content/blog/` with frontmatter like:

```md
---
title: Example Post
description: Short teaser
date: 2025-01-01
tags: [astro, workers]
readTime: 3 min read
---

Your content...
```

These files are bundled with the Cloudflare Worker so the API can serve them at runtime.

