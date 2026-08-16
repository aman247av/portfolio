# amanverma.me

Personal site for Aman Verma — backend and platform engineer. Single page,
prerendered to static HTML at build time so crawlers that do not execute
JavaScript still see every word.

**Live:** https://amanverma.me

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@theme` tokens in `src/index.css`, no config file)
- No UI library, no icon package, no animation library

## Requirements

Node **>= 20.19** (or >= 22.12). Vite 8 will not start on anything older.

```bash
nvm use          # reads .nvmrc
npm install
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck, build client, build SSR bundle, inject prerendered HTML |
| `npm run preview` | Serve the built `dist/` |
| `npm run lint` | ESLint |

## How the prerender works

`npm run build` runs three steps after `tsc`:

1. `vite build` — the client bundle.
2. `vite build --ssr src/entry-server.tsx` — a server bundle exposing `render()`.
3. `node scripts/prerender.mjs` — calls `render()`, injects the markup into
   `dist/index.html`, then deletes the server bundle.

`src/main.tsx` hydrates when it finds prerendered markup and mounts normally
when it does not, so dev and production both work without a flag.

## Layout

```
src/
  content/          All copy lives here, typed. Edit this, not the components.
    site.ts         Name, links, nav, hero proof strip
    work.ts         Case studies and projects
    experience.ts   Roles
    about.ts        Bio, strengths, stack, services, engagement terms
  components/
    primitives/     Section, Panel, Reveal, Icon
    diagrams/       Hand-built CSS diagrams (no images)
  index.css         The entire design system
```

Content and presentation are deliberately separate: almost every change worth
making is an edit to `src/content/*.ts`.

## Contact form

`src/components/Contact.tsx` holds a `WEB3FORMS_KEY` constant. With a key set,
submissions POST to Web3Forms and land in the inbox the key was issued for. Left
empty, the form falls back to composing a structured mail in the visitor's own
client. The key is public by design and safe to commit.

## Deployment

Static. Build and serve `dist/`. `public/` carries `robots.txt`, `sitemap.xml`,
`llms.txt`, the OG image, and the résumé PDF.
