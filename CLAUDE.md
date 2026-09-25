@AGENTS.md

# Regista — site vitrine, refonte 2026

Dépôt Next.js (App Router, React 19, TypeScript, CSS Modules) du site
`regista-a.com`. Ce dépôt est en cours de **refonte visuelle complète** : on
quitte l'ancienne charte (fond vert `#254222`, or `#C9A227`) pour la
**nouvelle charte Regista v1.0** (crème `#f3efe5`, bleu nuit `#16284a`, or
`#b8924a`), dont le design system vit dans un artefact Claude nommé
**Regista** et son portage React de référence dans le dépôt voisin
`regista-site/`.

La charte n'est pas une inspiration : c'est un contrat. Toute évolution du
logo, de la palette ou de l'échelle typographique oblige à reprendre
l'ensemble des supports déjà produits (plaquette, présentation, carte de
visite, gabarits LinkedIn) — ce n'est jamais une décision de composant.

État au 25/09/2026 : **le site est une page unique EN PRODUCTION** sur
`https://www.regista-a.com` (décision de Landry du 18/09, mise en ligne le
18/09). Tout le contenu (Accueil, Offres, Méthode, À propos, Contact) vit sur
`/`, en sept chapitres numérotés `#accueil`, `#offres`, `#methode`,
`#preuve`, `#deroule`, `#a-propos`, `#contact` ; les anciennes adresses
`/methode`, `/offres`, `/a-propos`, `/contact` et `/football` redirigent
**en permanent (308)** vers leur chapitre (`next.config.ts`). Seules les
pages légales restent séparées. Le mouvement de la charte (« la passe »,
voir plus bas) est implémenté, les pages légales sont à la charte et
exactes, l'ancien habillage vert a été supprimé. Indexation **ouverte**
(`robots.txt` en `Allow: /`, sitemap déclaré, carte de partage en place).

La branche de production est `main` ; `refonte-2026` pointe sur le même
commit. **Tout `push` sur `main` déploie en production** : jamais sans
l'accord explicite de Landry.

Une critique UX complète a été passée le 25/09/2026
(`.impeccable/critique/`, note 25/40). Les corrections décidées ce jour-là
sont signalées par le commentaire « critique Impeccable du 25/09/2026 » dans
le code : ne pas les défaire sans savoir ce qu'elles corrigent.

Les spécifications et les textes de référence sont dans
`PROJETS CC/REGISTA/CONTENU/`, hors de ce dépôt. **`Plan_one_page.md` fait
foi pour la structure, le mouvement et les décisions de Landry** (il
remplace les sections de `UX_site.md` et `Brief_design_site.md` qui
décrivent encore cinq pages) ; les fichiers `Regista_*.md` font foi pour
tout texte affiché.

---

## Les interdits absolus de la nouvelle charte

Ne jamais faire ce qui suit dans le code neuf (la page unique `/`, la 404
et leur gabarit), quelle que soit la demande — signaler plutôt qu'exécuter.

1. **Ne pas introduire de couleur.** La palette compte cinq couleurs plus six
   couleurs de service, toutes dans `src/styles/tokens.css`. Pas de rouge
   d'erreur, pas de vert de succès, pas de nuance intermédiaire.
2. **Ne pas mettre de texte ni d'information en or.** `--or` échoue au seuil
   AA (4,5:1) pour le texte sur crème. L'or est un **trait**, jamais un mot,
   jamais un chiffre — sauf sur fond bleu (5,05:1), où il peut porter du
   texte.
3. **Une seule trajectoire par composition** (`Trajectoire`, `Courbe`,
   `PointsTrajectoires` comptent tous les trois, y compris via `CarteOffre`
   ou `CarteProfil`, qui en portent une chacune). Sur la page unique, cette
   trajectoire est **la passe** : la chaîne de tronçons reliés par des points
   (`Passe.tsx`), qui compte comme une seule trajectoire (décision de Landry,
   charte p.12, « points et trajectoires »). N'en ajouter aucune autre ;
   jamais de trait ni de point dans le chapitre À propos.
4. **Une seule occurrence de récit par page** (classe `.rg-recit`,
   Newsreader italique) — un mot ou une phrase, jamais en texte courant. Sur
   la page unique, c'est « lumière », dans le titre du chapitre 01.
5. **Aucun prix, aucune fourchette, aucun taux, nulle part** sur le site.
6. **Ne jamais citer d'ancien employeur, d'ancien média ni de personnalité.**
7. **Ne pas redessiner le logo, ni le recomposer dans une police.** Les SVG
   de `public/brand/` sont la seule source. `Monogramme` inline le R seul,
   `Logotype` (dans `components/site/Marque.tsx`) inline le logotype
   horizontal, où le R stylisé EST l'initiale de REGISTA. La charte réserve
   le R seul à l'avatar, à la favicon et aux signatures discrètes (comme le
   pied de page système) : partout ailleurs sur le site, c'est le logotype.
8. **Ne pas arrondir** (`--r-autre: 0`, seul le badge prend 2 px). Aucune
   ombre portée.
9. **Ne pas introduire de police.** Archivo et Newsreader, rien d'autre —
   **aucun appel à Google Fonts** pour la nouvelle charte (elles sont
   auto-hébergées via `next/font/local`, voir `src/lib/fonts.ts`).
10. **Ne jamais faire porter une information par la couleur seule.**
11. **Ne pas ajouter d'emoji**, dans le code comme dans les textes.
12. **Ne pas utiliser d'image de mineur identifiable**, de joueur
    professionnel, de personnalité, de marque, d'équipementier ou d'écusson
    de club. **Trois exceptions, et pas une de plus :**
    - le bandeau « Ils travaillent avec nous » du chapitre 04 (décision de
      Landry du 18/09/2026), qui montre les logos des clients et partenaires
      ayant donné leur **accord écrit**, tous en une seule couleur (crème,
      `public/references/`, liste dans `references` de `site-config.ts`).
      Aucun logo sans accord, aucun logo en couleurs d'origine, aucun autre
      emplacement ;
    - le portrait de Landry (`public/equipe/landry-celina.jpg`, couleurs
      naturelles, logo Rosyne du sweat gardé à sa demande), dans le bloc
      « Pourquoi l'agence existe » du chapitre 06 uniquement — jamais en
      haut de page ;
    - **les images de preuve du métier** (décision de Landry du 25/09/2026,
      après la critique Impeccable : cinq chapitres sur sept ne montraient
      aucune image alors que l'agence vend de la production vidéo et photo).
      Sont autorisés : les **objets** produits ou couverts (maillot à plat,
      double page de magazine, écran de montage, matériel de tournage) et
      les **plans de tournage où aucun adulte n'est identifiable** (mains,
      silhouettes, dos, de trois quarts arrière). Restent interdits, sans
      exception : tout mineur, tout joueur professionnel, toute
      personnalité, tout visage reconnaissable, toute marque, tout
      équipementier, tout écusson de club. **Les droits à l'image doivent
      être vérifiés avant publication** pour chaque plan où une personne
      apparaît, même non identifiable.

Les règles de mention (parcours, périmètre juridique « Regista n'est pas
agent sportif », prix) et le ton (français à 100 %, vouvoiement, phrases
courtes, jamais « Regista » en premier mot d'un titre) sont détaillés dans
`regista-site/CLAUDE.md` — à relire avant d'écrire le moindre texte de la
page unique.

## Le mouvement

Détail et raisons dans `CONTENU/Plan_one_page.md`, section 3 (option A).

- **Le socle** (`src/app/layout.tsx`) : un script pose la classe `mvt` sur
  `<html>` seulement si « réduire les animations » est désactivé ; React pose
  `data-mvt-pret` à son montage, et le script retire `mvt` si ce signal
  n'arrive pas (JavaScript en échec). Tout état « avant animation » vit sous
  `html.mvt` : sans JavaScript ou avec « réduire les animations », tout
  s'affiche dans son état final.
- **Le déclenchement** (`useEnVue` / `EnScene`, `mouvement.tsx`) : une seule
  fois, jamais rejoué ; un élément déjà dépassé compte comme atteint (arrivée
  par ancre, rechargement, saut rapide). Aucun minuteur de secours, aucun
  écouteur de défilement continu.
- **La passe** (`Passe.tsx`, `HeroTrace.tsx`, `OuvertureChapitre.tsx`,
  `BandeauCoeur.tsx`) : chaque tronçon mesure la vraie distance jusqu'au
  point suivant (et la remesure au redimensionnement), dans la marge
  gauche, à au moins 16 px du texte.
- **Autour** : le quadrillage qui se pose en vague au chargement (haut de
  page), le filet d'ouverture de chapitre, le tournage groupé qui se remplit,
  l'indicateur « 0X / 07 » de l'en-tête. La grille de fond (`--quadrillage`,
  5 %) est un seul calque sur `<main>`, masqué par le bandeau bleu.
- Titres, paragraphes, boutons et chiffres en or ne s'animent jamais. Rien ne
  rebondit ni ne clignote. Animations en `transform`, `clip-path`, `opacity`
  ou `mask` seulement, zéro décalage de mise en page.
- Vérifier le mouvement dans un **vrai navigateur visible** (un onglet
  masqué suspend les animations et les observateurs) : la relecture du code
  ne suffit pas.

---

## Structure du dépôt

```
src/
  app/                      routes Next.js (App Router)
    page.tsx                LA page unique : les 7 chapitres, de #accueil
                             à #contact (mail et téléphone, sans formulaire)
    og/page.tsx              gabarit de l'image de partage, non indexé
                             (voir CONTENU/Image_de_partage.md)
    mentions-legales/        page légale COMPLÈTE — ne pas toucher au texte
    politique-confidentialite/  idem
    layout.tsx               polices, métadonnées, imports globaux de styles
    globals.css               reset + ANCIENNE charte — ne pas éditer sans raison
    robots.ts, sitemap.ts, not-found.tsx, icon.svg
  styles/
    tokens.css                design tokens NOUVELLE charte — GÉNÉRÉ, ne pas éditer
                               à la main (une exception documentée en tête de
                               fichier : le portage des polices)
    components.css             classes .rg-* du design system — généré aussi
  components/
    design-system/            Monogramme, primitives (Etiquette, Badge,
                               Trajectoire, Courbe, PointsTrajectoires,
                               CarteProfil, PiedDePage, Quadrillage,
                               MotifMaison, Note), interface (Bouton, Lien,
                               Champ, Navigation, CarteOffre) — portage direct
                               de regista-site/src/components/, ne pas
                               réécrire la logique sans repasser par le
                               design system source
    legal/LegalLayout.tsx      gabarit des pages légales — ne pas toucher au
                               texte qu'il encadre
    calendly/CalendlyInline.tsx  widget Calendly, chargé SEULEMENT après clic
                               (RGPD) — conserver ce comportement quoi qu'il
                               arrive, même si non utilisé pour l'instant
    site/                      composants du site : Gabarit (en-tête collant,
                               lien d'évitement, pied de page unique),
                               NavigationPrincipale (menu en ancres,
                               indicateur « 0X / 07 », sommaire mobile),
                               FocusAncres, Marque, et le mouvement
                               (mouvement.tsx, Passe, HeroTrace,
                               OuvertureChapitre, BandeauCoeur)

  lib/
    site-config.ts             coordonnées, chapitres, liens du menu, Calendly
                               — ne rien recopier en dur ailleurs
    fonts.ts                   Archivo + Newsreader via next/font/local
public/
  brand/                       les SVG du logo — R seul (5) et logotype
                               horizontal (4) — + la signature PNG (nouvelle
                               charte)
```

## Les styles

- `src/styles/tokens.css` et `src/styles/components.css` portent la charte
  v1.0 — générés depuis le design system, à ne pas éditer à la main.
- `src/styles/site.css` compose les pages. L'échelle typographique de la
  charte y est déclarée une fois, en variables (`--taille-*`) : aucune taille
  ne s'écrit en dur. Règle, reprise du prototype de référence : l'échelle
  fait foi en grand écran, un titre peut descendre d'un cran en mobile.
- Une seule rupture de mise en page, à 768 px (`min-width`), mobile d'abord.
  **Deux exceptions validées par Landry le 18/09/2026**, pour les très petits
  téléphones seulement : sous 360 px, les chiffres en or du chapitre 04
  descendent à `--taille-h2` (sinon ils débordent, et une taille
  intermédiaire sortirait de l'échelle) ; sous 400 px, l'en-tête se resserre
  pour que « 0X / 07 » tienne sur une ligne. N'en ajouter aucune autre.
- Disposition en **zigzag** (décision de Landry du 18/09), **resserrée le
  25/09/2026** après la critique Impeccable : l'alternance systématique
  laissait 50 à 60 % de plusieurs écrans vides et éloignait les blocs liés
  plus que les blocs sans rapport. `.bloc-zigzag--droite` ne se pose plus
  que sur un bloc qui porte un **objet à regarder** — aujourd'hui le seul
  schéma du tournage groupé (03) ; le portrait (06) garde son décalage par
  `.bloc-portrait`. Tout le reste (les cinq étapes, « Les règles du jeu »,
  « Comment nous travaillons », « Notre principe ») se lit en colonne unique
  à gauche. `.bloc-zigzag` garde son rôle de largeur de colonne. Ne pas
  rétablir l'alternance automatique sur du texte seul.
- **Échelle des titres** (25/09/2026) : `.titre-bloc` (h3) reste à
  `--taille-h3` à **toutes** les largeurs. Il montait à `--taille-h2` au-delà
  de 768 px, exactement la taille de `.titre-chapitre` : 17 titres sur 22
  faisaient alors 32 px et plus rien ne ressortait. Ne pas rétablir.
- **Confort tactile** (25/09/2026) : toutes les cibles cliquables tenaient
  sous 44 px de haut en mobile (de 17 à 40 px). Les creux verticaux ont été
  ouverts d'un cran, sans toucher à une seule taille de texte. Trois de ces
  règles corrigent des classes de `components.css`, qui est **généré** :
  elles vivent dans le bloc « Confort tactile et survol » de `site.css` et
  doivent être **reportées dans `regista-site/`** à la prochaine génération,
  sinon elles seront perdues (`.rg-bouton` à 48 px, son survol en filet
  complet, `.rg-nav__marque` / `.rg-nav__lien`).
- Le pied de page est un `<footer>` (repère « contentinfo »), pas un `<div>` :
  sans lui, aucun lecteur d'écran ne pouvait sauter au pied de page.
- **Intitulés de chapitre centrés** (décision de Landry du 18/09), sur tous
  les écrans : étiquette, titre h2 (deux lignes au plus en grand écran,
  lignes équilibrées) et courte introduction ; le numéro « 0X / 07 » reste
  calé à droite. Le chapitre 07 Contact est entièrement centré
  (coordonnées, arrivée de la passe sur « Votre projet », note).
- `src/app/globals.css` ne sert plus qu'à son reset (box-sizing, marges),
  au décalage des ancres sous l'en-tête collant (`scroll-padding-top`) et au
  défilement doux (`html.defilement-doux`, posé après le chargement). Ses
  variables de couleur appartiennent à l'ancienne charte et ne sont plus
  utilisées par aucune page.


## En cas de doute

Se référer à `regista-site/CLAUDE.md` (le design system source, à jour sur
toutes les règles détaillées) et à
`PROJETS CC/REGISTA/CONTENU/Architecture_site.md` (le compte rendu du
portage, les points en suspens). Si une demande entre en conflit avec ces
documents, le dire plutôt que de trancher seul.
