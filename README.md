# AgriCore AI Landing (Next.js + TypeScript)

This project has been migrated from static HTML into a Next.js TypeScript app while preserving the exact existing UI, wording, styling, and animations.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Vercel auto-detects Next.js and deploys with zero extra setup.

## Project structure

- `app/layout.tsx`: Global metadata and head asset loading.
- `app/page.tsx`: Main landing page rendering legacy HTML content.
- `app/not-found.tsx`: 404 page.
- `public/assets/*`: Existing CSS, JS, images, and fonts.
- `lib/home-body.html`: Exact migrated body markup from the original landing page.
