# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Install dependencies: `pnpm install`
- Development server: `pnpm run dev`
- Build for production: `pnpm run build`
- Static site generation: `pnpm run generate`
- Preview production build: `pnpm run preview`

## Architecture
The project is built with Nuxt (modern structure) and deployed to GitHub Pages.

- `app/`: Frontend application code.
  - `pages/`: File-based routing.
  - `components/`: Reusable Vue components.
  - `layouts/`: Page layout wrappers.
  - `assets/`: Global styles and static assets.
  - `data/`: Static data used across the frontend.
- `server/`: Nitro server engine.
  - `api/`: API endpoints serving the frontend.
- `shared/`: Logic and types shared between the client and server.
- `workers/`: Independent edge functions or Cloudflare Workers (e.g., `digital-twin`).
- `public/`: Static files served at the root.

### Tech Stack
- **Framework:** Nuxt
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
- **Deployment:** GitHub Pages (via `nitro` preset)
- **External APIs:** OpenRouter API for AI functionality.
