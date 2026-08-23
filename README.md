# averywagner.dev

Personal portfolio — Astro + Tailwind, deployed to GitHub Pages at `averywagner.dev`.

## Structure

```
src/
├── components/       Nav, Footer, ProjectCard, ArtCard
├── content/
│   ├── projects/     one .md per dev project (see content/README.md)
│   ├── art/          one .md per painting
│   └── _templates/   copy these to add new entries
├── data/site.ts       name, tagline, contact links, resume path, experience, skills
├── layouts/BaseLayout.astro
└── pages/
    ├── index.astro    Home
    ├── dev.astro       Dev
    ├── art.astro        Art
    └── contact.astro
```

## Commands

| Command           | Action                                   |
| ------------------ | ----------------------------------------- |
| `npm install`       | Install dependencies                      |
| `npm run dev`       | Start local dev server at localhost:4321  |
| `npm run build`     | Build production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally      |

## TODO before this is real

- [ ] Fill in `src/data/site.ts` (tagline, email, LinkedIn URL, experience, skills)
- [ ] Add `public/resume.pdf`
- [ ] Set up a free form at [formspree.io](https://formspree.io) and swap `YOUR_FORM_ID` in `src/pages/contact.astro`
- [ ] Add real entries to `src/content/projects/` and `src/content/art/` (see `src/content/README.md`)
- [ ] In the GitHub repo settings → Pages, set Source to "GitHub Actions" (the workflow in `.github/workflows/deploy.yml` handles the rest)
- [ ] At your domain registrar, point `averywagner.dev` at GitHub Pages (A records to `185.199.108.153` / `.109.153` / `.110.153` / `.111.153`, plus a `CNAME` record for `www` → `avery-wagner.github.io`) — double check current IPs against GitHub's docs
