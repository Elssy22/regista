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

État au 18/09/2026 : le **squelette** de la refonte est posé (structure des
dossiers, styles, polices, cinq routes vides). **Le contenu, la mise en page
et le mouvement des pages restent à construire** par le développeur
front-end, à partir de `CONTENU/UX_site.md` et `CONTENU/Brief_design_site.md`
(dossier `PROJETS CC/REGISTA/CONTENU/`, hors de ce dépôt). Le détail du
portage est dans `PROJETS CC/REGISTA/CONTENU/Architecture_site.md`.

---

## Les interdits absolus de la nouvelle charte

Ne jamais faire ce qui suit dans le code neuf (routes `/`, `/offres`,
`/methode`, `/a-propos`, `/contact`), quelle que soit la demande — signaler
plutôt qu'exécuter.

1. **Ne pas introduire de couleur.** La palette compte cinq couleurs plus six
   couleurs de service, toutes dans `src/styles/tokens.css`. Pas de rouge
   d'erreur, pas de vert de succès, pas de nuance intermédiaire.
2. **Ne pas mettre de texte ni d'information en or.** `--or` échoue au seuil
   AA (4,5:1) pour le texte sur crème. L'or est un **trait**, jamais un mot,
   jamais un chiffre — sauf sur fond bleu (5,05:1), où il peut porter du
   texte.
3. **Une seule trajectoire par composition** (`Trajectoire`, `Courbe`,
   `PointsTrajectoires` comptent tous les trois, y compris via `CarteOffre`
   ou `CarteProfil`, qui en portent une chacune).
4. **Une seule occurrence de récit par page** (classe `.rg-recit`,
   Newsreader italique) — un mot ou une phrase, jamais en texte courant.
5. **Aucun prix, aucune fourchette, aucun taux, nulle part** sur le site.
6. **Ne jamais citer d'ancien employeur, d'ancien média ni de personnalité.**
7. **Ne pas redessiner le logo.** Les SVG de `public/brand/` sont la seule
   source ; `Monogramme` inline le tracé exact.
8. **Ne pas arrondir** (`--r-autre: 0`, seul le badge prend 2 px). Aucune
   ombre portée.
9. **Ne pas introduire de police.** Archivo et Newsreader, rien d'autre —
   **aucun appel à Google Fonts** pour la nouvelle charte (elles sont
   auto-hébergées via `next/font/local`, voir `src/lib/fonts.ts`).
10. **Ne jamais faire porter une information par la couleur seule.**
11. **Ne pas ajouter d'emoji**, dans le code comme dans les textes.
12. **Ne pas utiliser d'image de mineur identifiable**, de joueur
    professionnel, de personnalité, de marque, d'équipementier ou d'écusson
    de club.

Les règles de mention (parcours, périmètre juridique « Regista n'est pas
agent sportif », prix) et le ton (français à 100 %, vouvoiement, phrases
courtes, jamais « Regista » en premier mot d'un titre) sont détaillés dans
`regista-site/CLAUDE.md` — à relire avant d'écrire le moindre texte des
pages `/`, `/offres`, `/methode`, `/a-propos`, `/contact`.

---

## Structure du dépôt

```
src/
  app/                      routes Next.js (App Router)
    page.tsx                Accueil — squelette, à construire
    offres/page.tsx          idem
    methode/page.tsx         idem
    a-propos/page.tsx        idem
    contact/page.tsx         idem
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
  _ancien/                    ANCIEN habillage visuel (vert), archivé hors du
                               routage : Header, Footer, les six sections
                               (Hero, ConférenceDePresse, GestesTechniques,
                               DerniersMatchs, NotreRegista, PrendreRDV), la
                               page /football. Ne rien y construire ; sert
                               juste à repêcher un texte si besoin. Le Footer
                               y est encore importé par LegalLayout.tsx (les
                               pages légales n'ont pas encore la nouvelle
                               charte) — ne pas le supprimer avant d'avoir
                               refait ces pages.
  lib/
    site-config.ts             coordonnées, routes de nav, Calendly — ne rien
                               recopier en dur ailleurs
    fonts.ts                   Archivo + Newsreader via next/font/local
public/
  brand/                       les 5 SVG du logo + la signature PNG (nouvelle
                               charte)
```

## Deux systèmes de styles cohabitent, temporairement

- `src/app/globals.css` porte encore l'**ancienne** charte (variables
  `--vert-nocturne`, `--or-laiton`…) : uniquement pour que le Footer archivé
  et les pages légales continuent de s'afficher à l'identique. **Ne pas y
  toucher** sans vérifier l'impact sur `src/_ancien/components/layout/Footer.tsx`
  et `src/components/legal/LegalLayout.tsx`.
- `src/styles/tokens.css` et `src/styles/components.css` portent la
  **nouvelle** charte, importés globalement dans `src/app/layout.tsx`. Tout
  code neuf (les cinq pages) s'appuie dessus, jamais sur `globals.css`.
- Les deux cohabitent sans collision de sélecteurs (vérifié) : `globals.css`
  ne définit que des éléments bruts (`body`, `a`, `h1`…) et ses propres
  variables ; `tokens.css`/`components.css` ne touchent qu'à des classes
  `.rg-*` et leurs propres variables.
- `<body>` porte la classe `rg-racine` (fond, texte, police de la nouvelle
  charte). Une fois `_ancien/` supprimé et les pages légales reprises, ce
  fichier `globals.css` peut être nettoyé et les polices Anton/Work Sans
  retirées de `layout.tsx`.

## En cas de doute

Se référer à `regista-site/CLAUDE.md` (le design system source, à jour sur
toutes les règles détaillées) et à
`PROJETS CC/REGISTA/CONTENU/Architecture_site.md` (le compte rendu du
portage, les points en suspens). Si une demande entre en conflit avec ces
documents, le dire plutôt que de trancher seul.
