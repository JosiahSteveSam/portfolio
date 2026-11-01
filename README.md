# Josiah Steve Sam: portfolio

A scrolling front page and an infinite-canvas desktop, for Josiah Steve Sam, a software engineer
working on AI and full-stack systems in Chennai.

Built on [portfolio-canvas](https://github.com/aahil-khan/portfolio-canvas) by Aahil Khan,
MIT licensed. Design inspired by [aahil-khan.xyz](https://aahil-khan.xyz).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

`npm run check` runs typecheck, lint, tests, the content rules and the contrast check.

## Change the content

Everything the site says lives in `content/data/*.json` (profile, projects, experience, archive,
now, writing, stack, front-page copy). `npm run content:check` validates it; bad content fails the
build. Screenshots go in `public/work/` and are listed in a project's `images`. The résumés are
`public/josiah-steve-sam-resume.pdf` and `public/josiah-steve-sam-ai-engineer-resume.pdf`.

The `/edit` page can edit the same files from the live site once its GitHub App variables are set
(`.env.example`).

## Deploy

Import the repository in Vercel; it needs no configuration. All environment variables are
optional (`.env.example`): without them the notes wall and game scores use an in-memory store,
the contribution calendar shows an empty state, and `/edit` and `/stats` stay off.
