# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

## Commandes

```bash
npm run dev                 # http://localhost:3000
npx eslint src              # lint
npx tsc --noEmit -p .       # types
npx next build              # construction complète (pages statiques)
npx next start -p 3100      # servir la construction pour la regarder
```

Pas de tests automatisés : on vérifie en construisant puis en regardant
(voir « Vérifier »). Chaque `push` sur la branche crée une
prévisualisation Vercel (équipe `registaa`, projet `regista`) : attendre
qu'elle soit `READY` avant d'annoncer un changement en ligne.

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
- **Fonds** (deck de Landry, 01/11/2026, `public/fonds/`) : deux diapos
  collées, la 2e du deck à gauche de la 1re (dans l'ordre du deck, les
  formes se coupent net à la jonction : « collage »), un panorama par
  couleur (`panorama-creme/bleu/or.webp`), même cadrage pour les trois.
  Classes `fond-creme`, `fond-bleu`, `fond-or`. Le calque est fixé à
  l'écran (`position: fixed` découpé par `clip-path`) et glisse de gauche à
  droite au fil de la page (`animation-timeline: scroll()`) : le motif
  continue d'une section à l'autre, seule la couleur change. L'or sert de
  fond au grand appel « Parlons-en » (`blocs/AppelContact.tsx`), toujours
  avec du texte bleu (5:1), jamais crème (2,5:1). Cet appel est en bas de
  chaque page (`PiedDePage`), sauf sur l'accueil, où il passe juste avant
  le formulaire et y descend (`#contact`), et sur la page Contact, où il
  est inutile (`<PiedDePage appel={false} />`). Sur l'accueil, les
  couleurs s'inversent (choix de Landry) : appel sur crème, formulaire et
  bas de page sur or (champs du formulaire sur fond crème).
  Sur l'accueil, l'appel porte aussi la méthode en frise chronologique
  (`blocs/FriseMethode.tsx`, décision du 03/11/2026 : elle a quitté la page
  À propos, comme la section « Nos partenaires », supprimée).
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
  (`blocs/Galerie.tsx`, équivalent de Magnific Popup). Ajout hors template : la frise de la
  méthode, dont le trait se dessine et les pastilles s'allument au fil du
  défilement (`animation-timeline`, CSS seul, aussi sur mobile).
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

## La page de liens (link in bio)

`liens.regista-a.com`, pour les bios Instagram et LinkedIn (demande de
Landry du 04/11/2026), façon Linktree : le site, la prise de rendez-vous (Calendly,
`siteConfig.contact.rendezVous`), puis les réseaux (`reseaux` de
`contenu.ts`), rien d'autre ; tout tient sur un écran de téléphone
(vérifié sur 390 × 664 px, iPhone avec la barre du navigateur). C'est la page `/liens` du site
(`src/app/(liens)/`, son propre gabarit : styles du site, curseur et
apparitions, sans écran de chargement ni défilement doux), affichée à la
racine du sous-domaine par une réécriture `beforeFiles` avec condition
`host` dans `next.config.ts` (nom du sous-domaine dans
`siteConfig.liens`). Pensée d'abord pour le téléphone. Non indexée
(`noindex`). En production, ses liens vers le site sont absolus (vers
www) ; en prévisualisation, relatifs. Le sous-domaine doit être ajouté au
projet Vercel (Settings → Domains) et dans les DNS du domaine.

## Rubriques éteintes

Décision de Landry du 03/11/2026 : **Témoignages** et **Actualités** (le
blog) sont éteints en attendant plus de clients et de contenus. Interrupteur
unique : `rubriques` dans `src/lib/site-config.ts`. Éteinte, une rubrique
disparaît de l'accueil et du menu, ses pages répondent 404, elle sort du
plan du site et son contenu fictif ne bloque plus la production. Rien n'est
supprimé : passer la valeur à `true` la remet en ligne. Le back office
`/studio` reste ouvert (articles écrits et programmés en attendant).

## Contenu fictif (à remplacer avant la production)

Landry a demandé de remplir le template avec des données fictives en
attendant les vraies : témoignages et actualités (3 articles), tous deux
éteints. Les liens des réseaux sociaux (Instagram, LinkedIn, Facebook, X) et
les noms des clients du bandeau sont les vrais depuis le 03/11/2026. Les actualités d'exemple disparaissent d'elles-mêmes dès que le
premier article est publié dans le back office. Tout est dans `src/lib/contenu.ts`, après le bandeau « CONTENU
FICTIF ». **Garde-fou** : `verifierContenuFictif()` (appelée dans
`layout.tsx`) fait échouer toute construction de production
(`VERCEL_ENV=production`) tant qu'il en reste. Ne pas le désactiver pour
« débloquer » une mise en ligne : remplacer le contenu.

Le formulaire de contact n'envoie rien par le site : il ouvre la messagerie
du visiteur (lien `mailto:`). La prise de rendez-vous est un simple lien
vers Calendly (`siteConfig.contact.rendezVous`), pour ne rien charger de
tiers sur le site. Mentions légales et politique de confidentialité le
disent (phrases validées par Landry le 03/11/2026).

## Les réalisations

Une fiche par projet dans `realisations` (`src/lib/contenu.ts`), **la plus
récente en premier** : l'ordre pilote la grille de l'accueil
(`blocs/GrilleProjets.tsx`, groupes de cinq : deux grandes puis trois
moyennes), le sous-menu et les pages `/realisations/[slug]`. Le titre
affiché passe toujours par `titreRealisation()` (le `projet` quand il
diffère du `client`, ex. Maison de la Literie pour le client Doki Doki).

- **Images** : imports statiques depuis `src/assets/realisations/<slug>/`
  (dimensions et flou automatiques). Noms de fichiers descriptifs,
  préfixés du client ou de l'événement
  (`fc-rocquancourt-equipe-trophee-vestiaire.jpg`) : Next garde ce nom dans
  l'adresse servie, utile au référencement. Jamais `01.jpg`. Chaque photo a
  un `alt` qui décrit ce qu'on voit.
- **Formats** : JPEG ~1440 px de large, qualité 85, progressif. Les HEIC
  envoyés par Landry se convertissent avec ImageMagick
  (`convert "f.heic[0]" -auto-orient -strip -quality 90 f.jpg`). Quand il
  renvoie une capture d'une photo déjà présente, garder la version la plus
  grande.
- **Couverture** : recadrée en 1200/1000 (`object-fit: cover`) sur la page et
  sur la carte de l'accueil : vérifier que visages et sujet restent dans le
  cadre, en 1440 et en 390 px.
- **Personnes reconnaissables** : pas de publication avant que Landry
  confirme accord et majorité ; un commentaire daté le note au-dessus de la
  photo dans `contenu.ts`. En attendant, garder la photo hors du dépôt.

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
    (liens)/liens/               la page de liens (liens.regista-a.com)
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
public/                          brand/, fonds/, og-image.jpg
```

## Vérifier

`npx next build` puis `npx next start`, et regarder dans un vrai navigateur,
en 390 px et en 1440 px : la relecture du code ne suffit pas pour le
mouvement.

Dans les sessions cloud, Chromium et Playwright sont préinstallés
(`require('playwright')`, `chromium.launch()` sans option) : captures en
1440 et 390 px, en défilant la page avant de capturer (les apparitions et
la frise dépendent du défilement), et une passe avec
`reducedMotion: 'reduce'` pour vérifier l'état sans animation. Arrêter le
serveur `next start` après la vérification.
