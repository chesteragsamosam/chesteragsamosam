# Chester Agsamosam

Personal site: enterprise frontend craft with an edge.

Live URL after Pages is enabled: [https://chesteragsamosam.github.io/chesteragsamosam/](https://chesteragsamosam.github.io/chesteragsamosam/)

## Setup

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm generate
pnpm preview
```

## GitHub Pages

1. Push to `main`.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. The deploy workflow prerenders the site with `NUXT_APP_BASE_URL=/chesteragsamosam/`.
