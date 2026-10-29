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
- **Animations du template** (`src/components/effets/`) : écran de
  chargement (lettres REGISTA, rideau courbe, GSAP, une fois par visite),
  curseur rond qui suit la souris, bouton « remonter » avec cercle de
  progression, défilement doux Lenis piloté par GSAP, apparitions fadeInUp
  (`data-apparait` + `--delai`, 1 s, coupées sur écran tactile comme WOW.js),
  chiffres qui défilent (3 s), bandeau de logos (60 s), en-tête fixe qui se
  resserre après 100 px, soulignement des liens, sous-menu Réalisations,
  panneau mobile latéral, survols des cartes (flou + légende des projets,
  flèche des métiers, zoom des articles), galerie agrandie au clic
  (`blocs/Galerie.tsx`, équivalent de Magnific Popup).
  Tout est coupé avec « réduire les animations », et rien n'est caché sans
  JavaScript (`html.anim`, posé par le script de `layout.tsx`).

## Contenu fictif (à remplacer avant la production)

Landry a demandé de remplir le template avec des données fictives en
attendant les vraies : témoignages, actualités (3 articles), liens des
réseaux sociaux, année de la réalisation Doki Doki, noms de deux clients du
bandeau. Tout est dans `src/lib/contenu.ts`, après le bandeau « CONTENU
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
    page.tsx                     l'accueil (sections dans components/accueil/)
    a-propos/, metiers/, contact/, actualites/[slug]/
    realisations/, realisations/[slug]/   liste et une page par réalisation
    mentions-legales/, politique-confidentialite/   texte légal inchangé
    layout.tsx, globals.css      métadonnées, script d'animation, styles de base
    not-found.tsx, robots.ts, sitemap.ts, icon.svg
  components/                    Entete, PiedDePage, Logo (généré), Icones, legal/
    effets/                      les animations globales du template
    blocs/                       blocs partagés (titre de page, cartes, galerie,
                                 témoignages, contact, formulaire)
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
