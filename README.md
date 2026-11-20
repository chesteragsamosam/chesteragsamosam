# Chester Agsamosam — AI Agentic Engineer Portfolio

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://chesteragsamosam.github.io/chesteragsamosam/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> Official portfolio and interactive AI digital twin for **Chester Agsamosam**, an **AI Agentic Engineer** who builds custom AI agents, AI features inside products, and workflow automations, using **tool calling**, **MCP**, **RAG**, and **Cloudflare Workers**. Backed by 9 years of production engineering (since 2017), including a leading Philippine digital wallet at Ascendion and full-stack **TypeScript**, **Vue/Nuxt**, **Svelte**, and **Laravel** work.

- 🌐 **Live Portfolio:** [https://chesteragsamosam.github.io/chesteragsamosam/](https://chesteragsamosam.github.io/chesteragsamosam/)
- 📄 **Cover Letter:** [https://chesteragsamosam.github.io/chesteragsamosam/cover-letter](https://chesteragsamosam.github.io/chesteragsamosam/cover-letter)
- 🤖 **AI Machine-Readable Profile:** [`llms.txt`](https://chesteragsamosam.github.io/chesteragsamosam/llms.txt) | [`llms-full.txt`](https://chesteragsamosam.github.io/chesteragsamosam/llms-full.txt)
- 🗺️ **XML Sitemap:** [https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml](https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml)

---

## ⚡ Quick Highlights

- **AI Agentic Engineering:** Tool-using agents, multi-step workflows with human approval steps, RAG, MCP servers, guardrails, evaluations, and logging.
- **Agent-driven delivery:** Work is planned into checked steps, drafted and reviewed by AI agents, and verified against the real product before shipping.
- **9 Years of Production Engineering** (since 2017) across full-stack web, real-time data, and enterprise fintech.
- **Enterprise Scale UI:** Developed production features, design system components, and performance optimizations for a premier Philippine digital wallet used by millions.
- **Core Technology Stack:** TypeScript, Nuxt, Vue.js (2/3), Svelte, Laravel, Cloudflare Workers, OpenRouter, Tailwind CSS.
- **Craft & Performance:** Statically generated with Nuxt, optimized for Core Web Vitals (LCP/CLS/INP), full Schema.org JSON-LD structured data, and responsive high-contrast aesthetics.

---

## 🚀 Quickstart & Local Development

This portfolio is built using [Nuxt 4](https://nuxt.com/) and [Tailwind CSS v4](https://tailwindcss.com/) with static site generation for GitHub Pages.

### Prerequisites
- Node.js 22+
- pnpm 11+ (`corepack enable` or `npm i -g pnpm`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/chesteragsamosam/chesteragsamosam.git
cd chesteragsamosam
pnpm install
```

### Running Locally

Start the local development server:

```bash
pnpm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

Generate the static distribution bundle:

```bash
pnpm run build
```

Or generate static HTML directly for GitHub Pages:

```bash
pnpm run generate
```

Preview the statically generated output locally:

```bash
pnpm run preview
```

---

## 🏗️ Architecture & Project Structure

```text
chesteragsamosam/
├── app/
│   ├── assets/css/        # Tailwind CSS and global style definitions
│   ├── components/site/   # Reusable UI components (Hero, About, Journey, Skills, Chat)
│   ├── composables/       # Vue composables (useJsonLd, physics, state)
│   ├── data/              # Static profile information and career history
│   ├── layouts/           # Default layout wrapper
│   └── pages/             # File-based routes (index.vue, cover-letter.vue)
├── public/                # Static assets (og-image.png, robots.txt, sitemap.xml, llms.txt)
├── workers/digital-twin/  # Edge worker handling digital twin chat completions
├── nuxt.config.ts         # Nuxt framework, fonts, preconnect, and Nitro SSG config
└── README.md              # Project documentation and search index
```

---

## 🎯 Projects & Selected Highlights

1. **Portfolio & Digital Twin:**
   - Streaming AI chat agent on a Cloudflare Worker, grounded in a structured profile so it answers from facts instead of guessing, inside a statically generated Nuxt site.
   - Live at [chesteragsamosam.github.io/chesteragsamosam](https://chesteragsamosam.github.io/chesteragsamosam/)
2. **Enterprise Digital Wallet UI (Ascendion):**
   - Built resilient web-components and mission-critical payment workflows.
   - Refactored legacy UI components to TypeScript and modern Vue standards, improving maintainability and reducing customer-facing defect rates.
3. **Crypto Data Streaming (Codabyte):**
   - Full-stack real-time data streaming dashboard with WebSocket integration and automated database indexing.

---

## 📬 Availability & Contact

I am available for AI agent and automation projects with clients worldwide, and open to AI engineering roles.

- **Email:** [chesteragsamosam@gmail.com](mailto:chesteragsamosam@gmail.com)
- **LinkedIn:** [linkedin.com/in/chesteragsamosam](https://www.linkedin.com/in/chesteragsamosam)
- **Location:** Lipa City, Batangas, Philippines (Available for Remote & Hybrid opportunities)

---

## 🤝 Contributing & Issue Reporting

Contributions, bug reports, and suggestions are welcome! Please feel free to open an issue or submit a pull request:

```bash
git checkout -b feature/improvement
git commit -m "feat: enhance site performance"
git push origin feature/improvement
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.