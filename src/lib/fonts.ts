/**
 * Polices de la nouvelle charte Regista (v1.0) — Archivo et Newsreader.
 *
 * Chargées via next/font/local plutôt qu'en @font-face brut dans le CSS :
 * les fichiers sont auto-hébergés (aucun appel à Google Fonts, ce qui est
 * interdit par la charte), next/font les précharge et calcule une police de
 * secours ajustée à leurs métriques pour éviter le décalage de mise en page
 * (CLS) le temps qu'elles arrivent. C'est aussi la méthode déjà en usage
 * dans ce dépôt pour les polices précédentes (voir src/app/layout.tsx).
 *
 * Les fichiers sources viennent de src/fonts/ (copiés depuis le prototype
 * regista-site/src/fonts/, sans modification).
 */
import localFont from "next/font/local";

// Archivo variable : sert à la fois --font-titre et --font-texte (poids et
// axe de chasse 'wdth' pilotés au cas par cas par les composants, via
// font-variation-settings — voir tokens.css et CLAUDE.md).
export const archivo = localFont({
  src: "../fonts/Archivo-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
});

// Newsreader italique variable : réservée à la classe .recit (un mot ou une
// phrase, une fois par page — jamais en texte courant).
export const newsreader = localFont({
  src: "../fonts/Newsreader-Italic-Variable.woff2",
  weight: "200 800",
  style: "italic",
  variable: "--font-newsreader",
  display: "swap",
});
