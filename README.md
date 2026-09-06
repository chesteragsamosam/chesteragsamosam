# Chester Agsamosam

Frontend and web app developer based in Lipa, Calabarzon, Philippines.

## Deployment

The frontend is a static Nuxt site deployed by GitHub Actions to GitHub Pages.
The AI endpoint is a separate Cloudflare Worker in `workers/digital-twin`; it is
not a Cloudflare Pages application.

1. In GitHub, set the `NUXT_PUBLIC_CHAT_API_URL` Actions secret to the deployed
   Worker URL, such as `https://chester-digital-twin.<account>.workers.dev`.
2. In Cloudflare, create a **Worker** project with `workers/digital-twin` as
   its root directory. Use `npx wrangler deploy --config wrangler.toml` as the
   deploy command (or run `pnpm run deploy:worker` from the repository root).
3. Add `OPENROUTER_API_KEY` as a Worker secret with
   `npx wrangler secret put OPENROUTER_API_KEY --config workers/digital-twin/wrangler.toml`.

Do not use `pnpm run deploy` as a Cloudflare Pages build command: it combined a
Pages build with the Worker deploy command and caused the missing-entry-point
error.

**Website:** [chesteragsamosam.github.io/chesteragsamosam](https://chesteragsamosam.github.io/chesteragsamosam/)  
**Cover letter:** [chesteragsamosam.github.io/chesteragsamosam/cover-letter](https://chesteragsamosam.github.io/chesteragsamosam/cover-letter)  
**LinkedIn:** [linkedin.com/in/chesteragsamosam](https://www.linkedin.com/in/chesteragsamosam)

---

I build production web applications with a focus on the frontend. For the past five years I have worked primarily with Vue.js and TypeScript, including feature and interface work for a widely used digital wallet in the Philippines. I also have full-stack experience, including Laravel, and I use AI as a practical way to work faster and keep quality high.

## Experience

**Ascendion** — Frontend Developer and Development Specialist  
November 2021 — Present

- Support and feature work for a highly popular e-wallet in the Philippines, including reusable web components
- Frontend optimization and refactoring for structure, performance, maintainability, and reuse
- Technical input during refinement, early risk identification, and mentorship for fellow developers

**Codabyte** — Full Stack Developer / Engineer  
2020 — 2021

- Website design and database administration
- Real-time crypto data streaming
- Troubleshooting, debugging, and defect resolution

## Skills

Vue.js 2/3 · TypeScript · JavaScript · Svelte · HTML · CSS · Tailwind CSS · Bootstrap · Laravel · Web design · Frontend optimization · Artificial intelligence (as a working tool)

**Languages:** Filipino (native or bilingual) · English (limited working)

## Education

Bachelor of Science, Computer Engineering — AMA University  
Bachelor of Science, Computer Engineering — Lipa City Colleges

## Contact

- Email: [chesteragsamosam@gmail.com](mailto:chesteragsamosam@gmail.com)
- Phone: +63 962 690 8392
- LinkedIn: [chesteragsamosam](https://www.linkedin.com/in/chesteragsamosam)
