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
`next.config.ts` (`/methode` et `/offres` ; `/a-propos` et `/contact`
sont redevenues de vraies pages).

## Les références

- **Direction artistique** : le deck « Présentation agence 2026 » de Landry.
  Tous les textes du site en viennent (`src/lib/contenu.ts`).
- **Mise en page et animations** : le template ThemeForest « Nino »
  (portfolio), reproduit page par page en React et CSS, sans jQuery ni
  Bootstrap (décision de Landry du 29/10/2026 : « toutes les animations du
  template à l'identique »). Pages : accueil, À propos, Métiers,
  Réalisations (+ une page par réalisation), Actualités (+ articles),
  Contact.

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
- **Fonds** (fournis par Landry le 01/11/2026, `public/fonds/`) : la forme
  du R ton sur ton, en crème, bleu et or, côté gauche ou droit. Classes
  `fond-creme`, `fond-bleu`, `fond-or` (+ `fond--gauche` / `fond--droite`
  pour changer de côté). L'image est fixée à l'écran (calque `position:
  fixed` découpé par `clip-path`) : pas de raccord entre deux sections de
  même couleur. L'or sert de fond au pied de page, toujours avec du texte
  bleu (5:1), jamais crème (2,5:1).
- **Animations du template** (`src/components/effets/`) : écran de
  chargement (logotype Regista qui clignote, rideau courbe, GSAP, une fois par visite),
  curseur rond qui suit la souris, bouton « remonter » avec cercle de
  progression, défilement doux Lenis piloté par GSAP, apparitions fadeInUp
  (`data-apparait` + `--delai`, 1 s, coupées sur écran tactile comme WOW.js),
  chiffres qui défilent (3 s), bandeau de logos (60 s), en-tête fixe qui se
  resserre après 100 px, logotype géant de l'accueil dont le R penché (-10°,
  vers l'arrière pour ne pas toucher le « e ») se redresse au survol, ou
  après le rideau et au toucher sur écran tactile (`accueil/LogoAccroche.tsx`), soulignement des liens, sous-menu Réalisations,
  panneau mobile latéral, survols des cartes (flou + légende des projets,
  flèche des métiers, zoom des articles), galerie agrandie au clic
  (`blocs/Galerie.tsx`, équivalent de Magnific Popup).
  Tout est coupé avec « réduire les animations », et rien n'est caché sans
  JavaScript (`html.anim`, posé par le script de `layout.tsx`).

## Le back office du blog (Sanity)

Décision de Landry du 30/10/2026 : le blog se gère dans Sanity Studio,
intégré au site à l'adresse `/studio` (`src/app/studio/`, configuration
dans `src/sanity/`, fiche « Article » dans `src/sanity/schemas/article.ts`,
interface en français).

- **Projet** : `xax83f5z`, jeu de données `production` (public), inscrits
  dans `src/sanity/env.ts` (ce n'est pas un secret). Les variables
  `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` sur
  Vercel les remplacent si besoin. Tant qu'aucun article n'est publié, le
  blog montre les articles d'exemple (jamais en production).
- **Origines autorisées** (sanity.io/manage → API → CORS, avec
  « Allow credentials ») : l'adresse de prévisualisation de la branche,
  `https://www.regista-a.com`, `https://regista-a.com`,
  `http://localhost:3000`.
- **Publication** : les pages du blog se rafraîchissent toutes les
  minutes (`revalidate = 60`, `src/lib/blog.ts`). Un article programmé
  (date future) n'apparaît qu'à sa date.
- **Images** : servies par l'optimiseur du site (`next/image`,
  `remotePatterns` cdn.sanity.io) : le visiteur ne charge rien depuis un
  site tiers, ce que promettent les mentions légales.
- **Isolation** : les pages publiques sont dans le groupe `app/(site)/`,
  qui porte `globals.css` et les animations. Le back office n'en hérite
  pas. `app/not-found.tsx` importe lui-même `globals.css`.

## Contenu fictif (à remplacer avant la production)

Landry a demandé de remplir le template avec des données fictives en
attendant les vraies : témoignages, actualités (3 articles), liens des
réseaux sociaux, année de la réalisation Doki Doki, noms de deux clients du
bandeau. Les actualités d'exemple disparaissent d'elles-mêmes dès que le
premier article est publié dans le back office. Tout est dans `src/lib/contenu.ts`, après le bandeau « CONTENU
FICTIF ». **Garde-fou** : `verifierContenuFictif()` (appelée dans
`layout.tsx`) fait échouer toute construction de production
(`VERCEL_ENV=production`) tant qu'il en reste. Ne pas le désactiver pour
« débloquer » une mise en ligne : remplacer le contenu.

Le formulaire de contact n'envoie rien par le site : il ouvre la messagerie
du visiteur (lien `mailto:`). Les mentions légales disent encore « aucun
formulaire » : phrase à faire valider par Landry avant la production.

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
    layout.tsx                   racine : métadonnées, script d'animation
    globals.css                  styles de base (importés par (site) et la 404)
    (site)/                      les pages publiques et leur gabarit d'animations
      page.tsx                   l'accueil (sections dans components/accueil/)
      a-propos/, metiers/, contact/, actualites/[slug]/
      realisations/, realisations/[slug]/   liste et une page par réalisation
      mentions-legales/, politique-confidentialite/   texte légal inchangé
    studio/[[...outil]]/         le back office Sanity
    not-found.tsx, robots.ts, sitemap.ts, icon.svg
  components/                    Entete, PiedDePage, Logo (généré), Icones, legal/
    effets/                      les animations globales du template
    blocs/                       blocs partagés (titre de page, cartes, galerie,
                                 témoignages, contact, formulaire)
  assets/                        images importées (dimensions et flou auto)
  lib/
    site-config.ts               coordonnées, infos légales, menu
    contenu.ts                   tous les textes et la liste des images
    blog.ts                      lecture des articles (Sanity ou exemples)
  sanity/                        configuration du back office
public/                          brand/, texture-papier.jpg, og-image.jpg
```

## Vérifier

`npx next build` puis `npx next start`, et regarder dans un vrai navigateur,
en 390 px et en 1440 px : la relecture du code ne suffit pas pour le
mouvement.
