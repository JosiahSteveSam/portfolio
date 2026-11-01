# Decisions

Agreed with Josiah on 2026-11-01. Change a decision here before changing it in code.

## 1. Direction: custom Hallmark build, editorial folio

- Hallmark's dealt themes were tried and rejected (Lumen was the pick; Josiah did not like it). The build is **custom**, steered by the three reference sites in `inspiration.md`.
- **Idea:** a folio of shipped systems. Each project is a numbered entry, like an issue of a journal, carrying one real figure set big. The visible column grid doubles as the project index.
- **Signature (first screen):** Josiah's name set huge with his photo, on grid paper.

## 2. Look

- **Paper:** warm off-white, with a faint visible column grid (from Format Bureau). Black ink. One small accent colour (Format Bureau uses a red dot; final colour chosen at build).
- **Type, three families (Hallmark's maximum):**
  - heavy sans-serif for the name and the hero (from Roman Caseres)
  - serif for section headings (from Recto / Format Bureau)
  - monospace for facts and metadata: entry numbers, dates, stack (from all three)
  - Body text is the serif's or sans's text face at 16px or more. Pick concrete families with Hallmark's `references/fonts.md`.
- **Pictures:** black-and-white. Josiah's photo in the hero and About. Project screenshots where available, otherwise the project is set in type.
- **Motion:** at most one reveal, visible by default, with a reduced-motion fallback.

## 3. What we do not copy from the references (Hallmark Floor)

- Labels in spaced-out capitals ("SELECTED PROJECTS") → lowercase or sentence case, monospace, untracked.
- Joined meta strings ("Zürich — New York · Est. 2019") → separate facts.
- Arrows glued to link text ("Read the essay →").
- One italic word inside a heading ("Latest *six* series").
- Blank screens until scroll → content visible without JS.
- Tech-logo walls and scrolling tool-name tickers (Roman Caseres).

## 4. Site structure

Homepage, 6 sections (Hallmark limit is 6–9 including hero and footer):

| # | Section | What it shows |
|---|---|---|
| 1 | Hero | Name huge, photo, one line positioning him as AI engineer + software engineer, actions: "Selected work" and "Resume" |
| 2 | Selected work | 4 numbered entries, one real figure each, each linking to its case study page |
| 3 | Engineering | One diagram of Credentra's real retrieval pipeline, then 4 short rows (RAG, Agentic AI, OCR, Backend & Cloud), each with proof from a project. Not a skills list. |
| 4 | Experience | Table: Credentech Software Engineer (AI), Credentech Junior Software Engineer, Quelit Data Science Intern, one line of real contribution each |
| 5 | About | Photo, journey, how he approaches engineering, interests (needs Josiah's text) |
| 6 | Footer / contact | Email, GitHub, LinkedIn, both resume PDFs |

**Case study pages** (`/work/<slug>`), each: Problem → Architecture → Implementation → Impact.

1. `credentra` — Credentra Agents, AI agent builder platform
2. `apb-ocr` — OCR & KYC pipeline, APB Bank, Laos
3. `cbse` — AI-powered CBSE learning platform
4. `tourexc` — TourExc travel booking platform (picked to show full-stack range; swap for Taco Bell invoice OCR if preferred)

**Writing:** left out until Josiah has at least 2 real posts. Hallmark never invents content.

## 5. Content rules

- Every number and claim comes from `content.md` (from the resumes). Nothing invented.
- Client names may be shown publicly: APB Bank (Laos), Taco Bell Thailand, Credentech Solutions, Quelit. Approved by Josiah.
- Contact details from the resume may be public (approved).
- Primary resume button: `Josiah_FullStack_AI.pdf`. Footer offers both PDFs.

## 6. Tech stack

- **Astro 7**, static output. Reason: a content site with a few case-study pages; ships zero JS by default, Markdown content collections for case studies (and writing later), plain HTML/CSS output that matches how Hallmark writes pages and how `sloplint` checks them.
- **Plain CSS** with Hallmark's scaffolded `tokens.css` and `base.css`. No Tailwind, no React.
- **Case studies** as a content collection in `src/content/work/*.md`.
- **Hosting:** decide at launch. Default: GitHub Pages via Astro's official GitHub Action (free, same repo). Vercel or Netlify also work with no code changes.
- Hallmark is bundled in `.claude/skills/hallmark` so cloud sessions have it.
