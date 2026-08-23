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
