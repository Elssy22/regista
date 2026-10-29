# Regista — site web

Site vitrine de **Regista**, agence football : storytelling, social média,
événementiel, financement et digital, pour les clubs, les académies et les
marques.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- CSS Modules et variables CSS (`src/app/globals.css`), pas de Tailwind
- Images via `next/image`, hébergement Vercel

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Les textes sont dans `src/lib/contenu.ts`, les coordonnées dans
`src/lib/site-config.ts`. Les règles du projet sont dans `CLAUDE.md`.
