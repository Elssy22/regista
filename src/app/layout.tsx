import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { archivo, newsreader } from "@/lib/fonts";
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/site.css";

// Anton et Work Sans, les polices de l'ancienne charte, ont été retirées le
// 18/09/2026 : les pages légales sont passées à la charte v1.0 et plus aucune
// page servie n'en dépend. Elles pesaient 61 Ko sur chaque chargement.
// globals.css reste importé pour son reset (box-sizing, marges), dont les
// pages neuves dépendent ; seules ses variables de couleur sont obsolètes.

// Titre et description repris de l'accroche validée de l'Accueil
// (CONTENU/Regista_accueil.md). L'image de partage (og-image.jpg) est
// une capture de la page /og, donc à la charte v1.0 : pour la régénérer
// après un changement d'accroche, voir CONTENU/Image_de_partage.md.
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
      className={`${archivo.variable} ${newsreader.variable}`}
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
