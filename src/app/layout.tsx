import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { archivo, newsreader } from "@/lib/fonts";
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/site.css";

// Anton et Work Sans — polices de l'ANCIENNE charte (fond vert). Conservées
// uniquement parce que le Header/Footer archivés et les pages légales
// (src/components/legal/LegalLayout.tsx, qui affiche encore l'ancien Footer)
// en dépendent via --font-titres / --font-corps dans globals.css. À retirer
// dès que src/_ancien/ est supprimé et que les pages légales sont reprises
// dans la nouvelle charte — voir Architecture_site.md.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

// Titre et description repris de l'accroche validée de l'Accueil
// (CONTENU/Regista_accueil.md). L'image de partage (og-image.jpg) porte
// encore l'ancienne charte visuelle : à refaire avec les nouveaux tokens
// avant mise en ligne (voir Architecture_site.md, point en suspens n°2).
const titre = "Regista — Agence football";
const description =
  "Regista fait sortir les structures du football de leur sphère. Communication, financement, tech — pour les ligues, les districts, les clubs et les académies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: titre,
  description,
  // Tant que le site n'est pas finalisé, on bloque l'indexation (cf siteConfig.indexable).
  robots: siteConfig.indexable ? undefined : { index: false, follow: false },
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: siteConfig.nom,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Regista — accompagnement football",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${workSans.variable} ${archivo.variable} ${newsreader.variable}`}
    >
      {/* rg-racine applique le fond, le texte et la police de la NOUVELLE
          charte (tokens.css / components.css). Le Footer archivé et les
          pages légales restent inchangés : ils fixent leur propre couleur et
          police sur chacun de leurs éléments, donc rg-racine ne les affecte
          pas visuellement — voir Architecture_site.md pour le détail. */}
      <body className="rg-racine">{children}</body>
    </html>
  );
}
