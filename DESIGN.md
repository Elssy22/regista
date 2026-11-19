---
name: Regista
description: Agence de communication, de financement et de technologie dédiée au football. Au cœur du jeu, pas dans la lumière.
colors:
  bleu-nuit: "#16284a"
  creme: "#f3efe0"
  or: "#b8924a"
  bleu-doux: "rgb(22 40 74 / 0.06)"
  bleu-trait: "rgb(22 40 74 / 0.16)"
  bleu-texte: "rgb(22 40 74 / 0.78)"
  creme-trait: "rgb(243 239 224 / 0.16)"
  creme-texte: "rgb(243 239 224 / 0.8)"
typography:
  display:
    fontFamily: "TAN St. Canard, Georgia, serif"
    fontSize: "clamp(2.6rem, 12.5vw, 11rem)"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "TAN St. Canard, Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 6.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.04em"
  title:
    fontFamily: "TAN St. Canard, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: "0.04em"
  title-small:
    fontFamily: "TAN St. Canard, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.875rem)"
    fontWeight: 400
    letterSpacing: "0.04em"
  manifeste:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.7vw, 2.4rem)"
  body:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  label:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  champ: "8px"
  bloc: "16px"
  carte: "20px"
  pilule: "50px"
spacing:
  marge-mobile: "20px"
  marge: "48px"
  section-mobile: "80px"
  section: "100px"
  largeur: "1320px"
components:
  button-plein:
    backgroundColor: "{colors.bleu-nuit}"
    textColor: "{colors.creme}"
    typography: "{typography.label}"
    height: "56px"
    padding: "0 30px"
  button-plein-hover:
    backgroundColor: "transparent"
    textColor: "{colors.bleu-nuit}"
  button-contour:
    backgroundColor: "transparent"
    textColor: "{colors.bleu-nuit}"
    height: "56px"
    padding: "0 30px"
  carte-metier:
    backgroundColor: "{colors.bleu-doux}"
    textColor: "{colors.bleu-nuit}"
    rounded: "{rounded.carte}"
    padding: "clamp(36px, 4vw, 60px) clamp(24px, 3vw, 40px)"
  champ:
    backgroundColor: "transparent"
    textColor: "{colors.bleu-nuit}"
    rounded: "{rounded.champ}"
    padding: "16px 50px 16px 20px"
  appel-contact:
    backgroundColor: "{colors.or}"
    textColor: "{colors.bleu-nuit}"
    typography: "{typography.display}"
---

# Design System: Regista

## Overview

**Creative North Star: « Le meneur de jeu »**

Regista est le milieu qui oriente le jeu sans chercher la lumière. Le système visuel en a la posture : peu d'éléments, joués avec autorité. Trois couleurs, une seule famille de caractères en capitales espacées, le logotype comme titre. Le site ne décore pas : il met en avant ce que les clubs ont de plus précieux, leur histoire, et ramène chaque page vers une seule action, la prise de contact.

La structure de page et les animations reprennent le template « Nino », comme Landry l'a décidé. L'identité vient du deck « Présentation agence 2026 » : les panoramas de formes collées, qui défilent d'une section à l'autre et changent seulement de couleur, et le R du logotype qui se redresse. Densité aérée : de grandes sections de 100 px, des titres de 60 px, des cartes de 20 px d'arrondi.

**Key Characteristics:**
- Trois couleurs, aucune autre ; les variantes sont des transparences des mêmes couleurs.
- Deux polices : TAN St. Canard, condensée et grasse, pour les titres ; Work Sans pour tout le reste.
- Des surfaces plates, sans ombre ; la profondeur vient des aplats de couleur et des panoramas fixés à l'écran.
- Le logotype et le R ne sont jamais redessinés.
- Chaque page se termine sur l'appel « Parlons-en » en or.

## Colors

Une palette « drapeau » : deux dominantes qui alternent par section, et un or rare qui signe.

### Primary
- **Bleu nuit de vestiaire** (`bleu-nuit`) : la couleur du texte sur crème et sur or, et le fond des sections « fortes » (chiffres, bandeau de logos). C'est la voix de Regista.

### Secondary
- **Or de trophée** (`or`) : les détails (traits du surtitre, pastilles de la frise), le texte sur bleu, et le fond du grand appel « Parlons-en ». Jamais un texte sur crème.

### Neutral
- **Crème de maillot rétro** (`creme`) : le fond par défaut et le texte sur bleu.
- **Voiles de bleu** (`bleu-doux`, `bleu-trait`, `bleu-texte`) : fond des cartes, filets et bordures, texte secondaire sur crème.
- **Voiles de crème** (`creme-trait`, `creme-texte`) : les mêmes rôles sur fond bleu.

### Named Rules
**La règle des trois couleurs.** Bleu nuit, crème, or. Toute nuance supplémentaire est une transparence de l'une d'elles, jamais une teinte nouvelle.

**La règle de l'or muet.** Sur crème, l'or (2,5:1) ne porte que des traits et des formes. Sur bleu (5:1), il peut porter du texte. Sur or, le texte est toujours bleu nuit, jamais crème.

## Typography

**Display Font:** TAN St. Canard (repli : Georgia), une seule graisse
**Body Font:** Work Sans (repli : police système sans empattement), graisse variable

**Character:** Un contraste net : TAN St. Canard, condensée et très grasse, donne aux titres la présence d'un tableau d'affichage de stade ; Work Sans, sobre et lisible, porte le texte, les surtitres, les boutons et les formulaires. Les deux polices sont hébergées par le site (`src/lib/polices.ts`).

### Hierarchy
- **Display** (400, `clamp(2.6rem, 12.5vw, 11rem)`, 1) : le logotype géant de l'accueil et l'appel « Parlons-en ».
- **Headline** (400, `clamp(2.6rem, 7vw, 6.25rem)`) : le titre (h1) de chaque page, en capitales.
- **Title** (400, `clamp(2.5rem, 5vw, 3.75rem)`, 1.17, 0.04em) : les titres de section, en capitales, `text-wrap: balance`.
- **Title small** (600, `clamp(1.4rem, 2.2vw, 1.875rem)`, 0.04em) : les titres des cartes, en capitales.
- **Manifeste** (`clamp(1.45rem, 2.7vw, 2.4rem)`) : les grandes phrases d'intention.
- **Body** (400, 17 px, 1.6) : le texte courant ; les chapeaux sont limités à 46 caractères par ligne.
- **Label** (600, 13 px, 0.14em, capitales) : les surtitres et les boutons (14 px, 0.12em).

### Named Rules
**La règle des capitales.** Tout titre est en capitales espacées (0.04em). Le texte courant ne l'est jamais.

**La règle de la graisse unique.** TAN St. Canard n'existe qu'en Regular : on ne lui demande jamais de gras (`font-synthesis: none`). La hiérarchie des titres passe par la taille. Les petits libellés (surtitres, boutons, « Notre bureau : ») restent en Work Sans.

## Layout

Un conteneur de 1320 px, avec des marges de 20 px sur mobile et de 48 px à partir de 768 px. Les sections ont 100 px de marge verticale, et 80 px sous 992 px. L'en-tête fixe mesure 100 px (84 px sur mobile) et se resserre après 100 px de défilement. Les sections alternent les fonds crème, bleu et or : c'est ce changement de couleur qui rythme la page, pas des séparateurs. La grille des réalisations va par groupes de cinq (deux grandes cartes, puis trois moyennes). Le menu principal apparaît à partir de 992 px ; en dessous, un panneau latéral prend le relais.

## Elevation & Depth

Le système est plat. Aucune ombre sur les cartes, les boutons ni les champs. La seule ombre est celle du panneau de menu mobile, qui se détache sur le bord de l'écran. La profondeur vient de deux choses : l'alternance des aplats de couleur, et le panorama du deck, fixé à l'écran derrière chaque section (`position: fixed` découpé par `clip-path`), qui glisse de gauche à droite au fil du défilement.

### Named Rules
**La règle du terrain plat.** Pas d'ombre portée. Un état se montre par un changement de couleur ou de bordure, jamais par une élévation.

## Shapes

Des arrondis francs mais mesurés : 8 px pour les champs, 16 px pour les blocs, 20 px pour les cartes, des pilules (50 px) pour les éléments flottants. Les cercles servent au curseur, aux pastilles de la frise et au bouton de retour en haut. Les boutons principaux restent rectangulaires, avec une bordure de 1 px de la couleur du texte.

## Components

### Buttons
- **Shape:** rectangulaires, sans arrondi, 56 px de haut, bordure de 1 px `currentColor`.
- **Plein :** fond bleu nuit, texte crème, en capitales espacées (14 px, 600, 0.12em). Sur fond bleu, l'inverse : fond crème, texte bleu.
- **Hover / Focus :** le fond devient transparent et le texte reprend la couleur de la bordure ; la flèche glisse de 3 px en diagonale (0.3 s). Le focus clavier est un contour de 2 px.
- **Contour :** fond transparent, même géométrie.

### Cards / Containers
- **Carte métier :** arrondi de 20 px, fond `bleu-doux`, bordure `bleu-trait` qui passe en bleu plein au survol. Un numéro dans une étiquette de 6 px d'arrondi, une flèche qui pivote de 45°. Le lien du titre couvre toute la carte.
- **Carte réalisation :** image recadrée en 1200 × 1000, flou et légende au survol (légende visible en permanence sur écran tactile).
- **Shadow Strategy :** aucune (voir Elevation & Depth).

### Inputs / Fields
- **Style :** bordure de 1 px bleu nuit, arrondi de 8 px, fond transparent (crème sur fond or), icône à droite, libellé en capitales au-dessus.
- **Focus :** le contour global de 2 px.
- **Error :** un seul message général sous le formulaire.

### Navigation
- **Style :** en-tête fixe sans logo, menu centré en capitales à partir de 992 px, soulignement animé des liens, sous-menu Réalisations qui s'ouvre aussi au clavier. Sur mobile, un panneau latéral (rendu `inert` quand il est fermé).

### L'appel « Parlons-en » (Signature Component)
Un mot géant en display sur fond or, avec texte bleu nuit, en bas de chaque page. Sur l'accueil, il passe avant le formulaire, sur crème, et porte la frise de la méthode.

### Le logotype géant (Signature Component)
Le logotype Regista en pleine largeur. Son R, penché de -10°, se redresse au survol ou après le rideau d'ouverture.

## Do's and Don'ts

### Do:
- **Do** limiter la palette à bleu nuit, crème et or, et à leurs transparences.
- **Do** mettre le texte en bleu nuit sur fond or, toujours.
- **Do** écrire les titres en TAN St. Canard, en capitales espacées de 0.04em ; les surtitres en Work Sans, espacés de 0.14em.
- **Do** couper toute animation avec `prefers-reduced-motion`, et ne rien cacher sans JavaScript (classe `html.anim`).
- **Do** utiliser le logotype et le R de `public/brand/` tels quels.
- **Do** terminer chaque page sur l'appel « Parlons-en ».

### Don't:
- **Don't** mettre de texte or sur crème, ni de texte crème sur or.
- **Don't** ajouter d'ombre portée, de dégradé ou de nouvelle teinte.
- **Don't** redessiner le logotype ni composer « Regista » dans une police.
- **Don't** charger de police depuis Google Fonts : les polices sont hébergées par le site, comme le promettent les mentions légales.
- **Don't** utiliser l'or comme contour de focus sur crème ou sur or : il y est trop peu visible.
