# Chester Agsamosam — Senior Frontend & Web Application Developer Portfolio

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://chesteragsamosam.github.io/chesteragsamosam/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> Official portfolio, technical case notes, and interactive digital twin for **Chester Agsamosam**, a Software Engineer with 9 years of software development experience, specializing in high-scale frontend systems using **Vue.js (2 & 3)**, **TypeScript**, and **Svelte**. Includes production UI engineering for a leading Philippine digital wallet at Ascendion, full-stack Laravel range, technical SEO architecture, Schema structured data, and Core Web Vitals audit optimization.

- 🌐 **Live Portfolio:** [https://chesteragsamosam.github.io/chesteragsamosam/](https://chesteragsamosam.github.io/chesteragsamosam/)
- 📄 **Cover Letter:** [https://chesteragsamosam.github.io/chesteragsamosam/cover-letter](https://chesteragsamosam.github.io/chesteragsamosam/cover-letter)
- 🤖 **AI Machine-Readable Profile:** [`llms.txt`](https://chesteragsamosam.github.io/chesteragsamosam/llms.txt) | [`llms-full.txt`](https://chesteragsamosam.github.io/chesteragsamosam/llms-full.txt)
- 🗺️ **XML Sitemap:** [https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml](https://chesteragsamosam.github.io/chesteragsamosam/sitemap.xml)

---

## ⚡ Quick Highlights

- **9 Years of Software Development Experience** (since 2017), with 5+ continuous years dedicated to modern frontend architecture.
- **Enterprise Scale UI:** Developed production features, design system components, and performance optimizations for a premier Philippine digital wallet used by millions.
- **Core Technology Stack:** Vue.js (2/3, Composition API), TypeScript, Svelte, Tailwind CSS, Nuxt, and Laravel.
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
   - Responsive, dark-mode personal site featuring dynamic particle canvas, interactive career timeline, and an AI-powered conversational twin.
   - Live at [chesteragsamosam.github.io/chesteragsamosam](https://chesteragsamosam.github.io/chesteragsamosam/)
2. **Enterprise Digital Wallet UI (Ascendion):**
   - Built resilient web-components and mission-critical payment workflows.
   - Refactored legacy UI components to TypeScript and modern Vue standards, improving maintainability and reducing customer-facing defect rates.
3. **Crypto Data Streaming (Codabyte):**
   - Full-stack real-time data streaming dashboard with WebSocket integration and automated database indexing.

---

## 📬 Availability & Contact

I am open to senior frontend engineering, UI architecture, and product-focused development roles.

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