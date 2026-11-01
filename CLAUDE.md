@AGENTS.md

# Josiah Steve Sam — portfolio

Personal portfolio for Josiah, a software engineer working across full stack and applied AI.
The first build is done: homepage (`src/pages/index.astro`) and four case studies (`src/pages/work/[slug].astro`, content in `src/content/work/*.md`). Its open items (portrait, About text, screenshots, a TourExc result) are listed in `docs/content.md`. Read these before touching code:

1. `docs/decisions.md` — every decision made so far (direction, structure, look, stack) and why.
2. `docs/content.md` — the real content for every section, taken from the resumes. Use it verbatim; never invent facts.
3. `docs/inspiration.md` — the three reference sites and what to take or leave from each.

## Build with Hallmark

The Hallmark design skill is bundled in `.claude/skills/hallmark` (v2.0.0, MIT, from github.com/nutlope/hallmark).
Run it as a **custom** build (`/hallmark custom ...`), not a dealt theme: the direction is already chosen in `docs/decisions.md`.
Skip Hallmark's "Ask once" step: the answers are in the docs. Ask Josiah only for the open items listed in `docs/content.md`.

Hallmark's Floor rules win over the reference sites (no tracked-capital labels, no middle-dot meta strings, no arrows glued to links, no single italic word in a heading, content visible without JS).

## Stack

Astro 7, plain CSS (Hallmark's `tokens.css` + `base.css`), Markdown content collection for case studies. No UI framework, no Tailwind.

- `npm install`, `npm run dev` (localhost:4321), `npm run build`
- Resumes are served from `public/resume/`.
- Lint pages: `node .claude/skills/hallmark/scripts/sloplint.mjs dist --render` after `npm run build` (render needs `puppeteer-core` + Chrome; static checks run without them).
