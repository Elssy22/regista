@AGENTS.md

# Regista — site vitrine, nouvelle version (octobre 2026)

Dépôt Next.js 16 (App Router, React 19, TypeScript, CSS Modules) du site
`regista-a.com`.

**Branches.** `main` est la production : tout `push` sur `main` déploie
`www.regista-a.com`. Jamais sans l'accord explicite de Landry. La nouvelle
version se construit sur `claude/cool-carson-nr4tdd`, avec sa
prévisualisation Vercel :
https://regista-git-claude-cool-carson-nr4tdd-registaa.vercel.app

**Repartir de zéro (décision de Landry du 29/10/2026).** Rien n'a été
gardé de l'ancien site (charte v1.0, page en sept chapitres, Archivo et
Newsreader, « la passe »). Seules exceptions : le texte des pages légales
(complété depuis le KBis) et les redirections des anciennes adresses dans
`next.config.ts`.

## Les références

- **Direction artistique** : le deck « Présentation agence 2026 » de Landry.
  Tous les textes du site en viennent (`src/lib/contenu.ts`).
- **Mise en page** : le template ThemeForest « Nino » (portfolio). Il est
  reproduit en React et en CSS, sans jQuery ni Bootstrap : ouverture avec
  le nom en très grand et une carte photo inclinée, bandeau de logos qui
  défile, manifeste et chiffres, cartes de services, grille de projets,
  page projet, grand appel final.

## La DA

- **Couleurs** : `--creme` `#f3efe0` et `--bleu` `#16284a` en dominantes,
  `--or` `#b8924a` pour les détails. Rien d'autre (les variantes `-doux`,
  `-trait` et `-texte` sont ces couleurs en transparence).
- **Or et lisibilité** : sur crème, l'or ne porte que des traits et des
  formes (contraste 2,6:1, illisible en petit texte). Sur bleu (5:1), il
  peut porter du texte.
- **Typographie** : Sanserata, en plusieurs graisses et tailles. **Les
  fichiers ne sont pas encore fournis** : le site s'affiche pour l'instant
  dans la police système. Dès qu'on les a (`.woff2`, licence web), les
  mettre dans `src/fonts/`, les charger avec `next/font/local` (variable
  `--font-sanserata`) et l'appliquer dans `layout.tsx`. `globals.css` les
  utilise déjà via `--police`. Aucun appel à Google Fonts : les mentions
  légales promettent que les polices sont hébergées par le site.
- **Logos** : `public/brand/` (R seul et logotype complet, bleu et crème).
  `src/components/Logo.tsx` en est généré (`currentColor`) : ne jamais
  redessiner le tracé ni recomposer « Regista » dans une police.
- **Texture** : le grain du papier du deck (`public/texture-papier.jpg`),
  en calque discret (classe `.texture`).
- **Mouvement** : apparition au défilement (`data-apparait`, une seule fois,
  `src/components/Animations.tsx`), logo qui se dévoile, carte qui se pose,
  bandeau de logos qui défile, ligne de la méthode qui se trace. Tout est
  coupé avec « réduire les animations », et rien n'est caché sans
  JavaScript (`html.anim`, posé par le script de `layout.tsx`).

## Règles de contenu (toujours valables)

- Aucun prix, aucune fourchette, aucun taux.
- Pas de mineur identifiable, pas de visage reconnaissable sans droit à
  l'image vérifié, pas de personnalité citée sans accord. Le cas
  FC Rocquancourt du deck citait trois personnalités : retirées du site.
- Logos et photos de clients : seulement avec leur accord.
- Français, vouvoiement.

## Structure

```
src/
  app/
    page.tsx                     l'accueil (sections dans components/accueil/)
    realisations/[slug]/         une page par réalisation (générée au build)
    mentions-legales/, politique-confidentialite/   texte légal inchangé
    layout.tsx, globals.css      métadonnées, script d'animation, styles de base
    not-found.tsx, robots.ts, sitemap.ts, icon.svg
  components/                    Entete, PiedDePage, Contact, CarteRealisation,
                                 Logo (généré), Icones, Animations, legal/
  assets/                        images importées (dimensions et flou auto)
  lib/
    site-config.ts               coordonnées, infos légales, menu
    contenu.ts                   tous les textes et la liste des images
public/                          brand/, texture-papier.jpg, og-image.jpg
```

## Vérifier

`npx next build` puis `npx next start`, et regarder dans un vrai navigateur,
en 390 px et en 1440 px : la relecture du code ne suffit pas pour le
mouvement.
