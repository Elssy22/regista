import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { verifierContenuFictif } from "@/lib/contenu";
import { Animations } from "@/components/effets/Animations";
import { Prechargement } from "@/components/effets/Prechargement";
import { Curseur } from "@/components/effets/Curseur";
import { RetourHaut } from "@/components/effets/RetourHaut";
import { DefilementDoux } from "@/components/effets/DefilementDoux";
import "./globals.css";

// Empêche toute mise en production tant qu'il reste du contenu fictif.
verifierContenuFictif();

const titre = "Regista — Agence football : contenus, identités, financements";
const description =
  "Regista accompagne les clubs, les académies et les marques du football : storytelling, social média, événementiel, financement et digital.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: titre, template: "%s — Regista" },
  description,
  robots: siteConfig.indexable ? undefined : { index: false, follow: false },
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: siteConfig.nom,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Regista" }],
  },
  twitter: { card: "summary_large_image", title: titre, description, images: ["/og-image.jpg"] },
};

/*
 * Ce script s'exécute avant le premier affichage. Il pose la classe "anim"
 * (qui cache les blocs avant leur apparition) seulement si l'appareil
 * accepte les animations. Si React n'a pas démarré au bout de 4 s
 * (JavaScript en échec), il la retire : le contenu ne reste jamais caché.
 */
const scriptAnimations =
  "if(matchMedia('(prefers-reduced-motion: no-preference)').matches){var h=document.documentElement;h.classList.add('anim');setTimeout(function(){if(!h.hasAttribute('data-pret'))h.classList.remove('anim')},4000)}";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAnimations }} />
      </head>
      <body>
        <Prechargement />
        <Curseur />
        {children}
        <RetourHaut />
        <Animations />
        <DefilementDoux />
      </body>
    </html>
  );
}
