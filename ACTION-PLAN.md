# SEO Action Plan & Execution Checklist

- **Target Site:** `https://chesteragsamosam.github.io/chesteragsamosam/`
- **Target Repository:** `chesteragsamosam/chesteragsamosam`
- **Current Status:** **Local Codebase Optimized & Validated**

---

## Phase 1: Codebase Optimizations (COMPLETED ✅)

1. [x] **Inject Schema.org JSON-LD Entities**
   - Created `app/composables/useJsonLd.ts` with `Person`, `ProfilePage`, `WebSite`, and `BreadcrumbList`.
   - Injected into `index.vue` and `cover-letter.vue`.
   - Validated: 0 warnings, 0 errors via Schema Validator.

2. [x] **High-CTR Title Tags & Meta Descriptions**
   - Homepage title: `Chester Agsamosam — Senior Frontend & Web App Developer (Vue.js · TypeScript)`.
   - Primary meta description: 155 characters (prevents SERP snippet truncation).
   - Author, keywords, and robots tags configured.

3. [x] **Branded Open Graph Social Preview Card**
   - Generated 1200×630 `public/og-image.png` matching dark obsidian & acid styling.
   - Configured `og:image`, `og:title`, `og:description`, `og:type: profile`, `og:site_name`, `og:locale`.
   - Configured `twitter:card: summary_large_image` and `twitter:image`.

4. [x] **Search Engine Roadmap & Crawler Permissions**
   - Created `public/sitemap.xml` referencing `/` and `/cover-letter`.
   - Updated `public/robots.txt` declaring Sitemap and explicitly allowing AI search crawlers (GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, Google-Extended).

5. [x] **Generative Engine Optimization (GEO / AEO)**
   - Created `public/llms.txt` and `public/llms-full.txt` formatted for AI engines (SearchGPT, Claude, Perplexity, Gemini).

6. [x] **Performance & Core Web Vitals Signals**
   - Added Google Fonts `preconnect` and `dns-prefetch` links in `nuxt.config.ts`.
   - Added `loading="eager"`, `fetchpriority="high"`, and descriptive alt text to hero image.
   - Added `site.webmanifest` and `apple-touch-icon.png`.

7. [x] **GitHub Repository Discoverability & Quality**
   - Upgraded `README.md` (Lint score: **100/100**).
   - Added `LICENSE` (MIT), `CONTRIBUTING.md`, and `SECURITY.md`.

---

## Phase 2: Post-Deployment Steps (For User)

Once the changes are pushed to GitHub, complete these high-impact steps to lock in top search engine rankings:

### 1. Push Changes to GitHub
```bash
git add .
git commit -m "feat(seo): comprehensive search engine, schema, and social meta optimization"
git push origin main
```
*GitHub Actions will automatically build and deploy the updated static site with all new assets and schemas to GitHub Pages.*

### 2. Update GitHub Repository Metadata (Web UI)
On your GitHub repository page ([github.com/chesteragsamosam/chesteragsamosam](https://github.com/chesteragsamosam/chesteragsamosam)):
- Click the gear ⚙️ icon next to **About**.
- **Description:** `Official portfolio of Chester Agsamosam — Senior Frontend Developer specializing in Vue.js, TypeScript, and high-scale digital wallet UI.`
- **Website:** `https://chesteragsamosam.github.io/chesteragsamosam/`
- **Topics (Add these tags for search discoverability):**
  `vue`, `vue3`, `typescript`, `nuxt`, `portfolio`, `frontend-developer`, `philippines`, `web-development`, `svelte`, `tailwind-css`, `digital-wallet`

### 3. Google Search Console (GSC) Verification & Sitemap Submission
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://chesteragsamosam.github.io/chesteragsamosam/` (URL prefix).
3. Navigate to **Sitemaps** on the left sidebar.
4. Submit your new sitemap URL: `https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml`.
5. Use the **URL Inspection** tool on your homepage and click **Request Indexing**.

### 4. Bing Webmaster Tools
1. Log in to [Bing Webmaster Tools](https://www.bing.com/webmasters) and import from Google Search Console or add manually.
2. Submit `https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml`.
*(Bing powers Yahoo Search, DuckDuckGo, and Copilot index data).*
