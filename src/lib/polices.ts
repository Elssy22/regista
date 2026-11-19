import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";

/*
 * Les deux polices de la charte Regista, hébergées par le site lui-même :
 * next/font télécharge Work Sans à la construction, le visiteur ne contacte
 * jamais Google (ce que promettent les mentions légales).
 *
 * - TAN St. Canard : les titres. Une seule graisse (Regular) : on n'en
 *   simule jamais d'autre (font-synthesis: none là où elle s'applique).
 * - Work Sans : le texte, les surtitres, les boutons, les formulaires.
 */
export const policeTitre = localFont({
  src: "../fonts/tan-st-canard-regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-titre",
  fallback: ["Georgia", "serif"],
});

export const policeTexte = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-texte",
});
