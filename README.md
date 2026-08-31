# Regista — site web

Site vitrine de **Regista** (accompagnement de clubs, joueurs et structures du football :
communication/événementiel, financements, merchandising). Objectif : amener le visiteur à
réserver un créneau de 20 minutes via le widget Calendly intégré.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **CSS Modules** + variables CSS (tokens dans `src/app/globals.css`) — pas de Tailwind
- Polices via `next/font/google` (Anton, Work Sans)
- Images via `next/image`
- Hébergement prévu : Vercel

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000  (/ redirige vers /football)
npm run lint
npm run build
```

## Structure

- `src/app/football/` — la landing page (une page, ancres internes)
- `src/app/mentions-legales/`, `src/app/politique-confidentialite/` — pages légales
- `src/components/` — `layout/` (Header, Footer), `sections/`, `ui/`, `calendly/`, `legal/`
- `src/lib/site-config.ts` — coordonnées, liens Calendly, URL du site (source unique)

## Configuration

- `NEXT_PUBLIC_SITE_URL` — URL de production (défaut `https://regista-a.com`), utilisée par
  les métadonnées Open Graph, le `sitemap.xml` et le `robots.txt`.

## À compléter avant mise en ligne

Voir les champs `[À COMPLÉTER]` des pages légales et les placeholders de `site-config.ts`
(téléphone, réseaux sociaux, capital social, RCS, TVA, hébergeur…).
