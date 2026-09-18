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
      // Next 16 ne neutralise plus scroll-behavior:smooth pendant les
      // changements de route sans cet attribut (ROBUSTE-7) : sans lui, aller
      // d'une page légale vers "/#offres" ferait défiler en douceur sur toute
      // la longueur de la page unique, au lieu d'un saut net. Le défilement
      // doux ENTRE chapitres de la page unique (M8) n'est jamais concerné :
      // Next ne touche pas scroll-behavior pour un simple changement d'ancre
      // sur la même page.
      data-scroll-behavior="smooth"
      // Le script ci-dessous ajoute la classe "mvt" avant la première peinture
      // (CONTENU/Plan_one_page.md, section 3, socle du mouvement) : React ne
      // la connaît pas au rendu serveur, d'où l'avertissement d'hydratation
      // qu'on supprime volontairement ici (voir le guide Next "preventing
      // flash before hydration" — la classe posée par le script gagne).
      suppressHydrationWarning
    >
      <head>
        {/* Socle du mouvement : sans ce script (JS désactivé) ou si l'appareil
            demande de réduire les animations, "mvt" n'est jamais posée — tout
            le CSS de mouvement (site.css) n'existe que sous "html.mvt", donc
            tout s'affiche d'emblée dans son état final.
            Le minuteur de ~4 s est le SEUL filet de secours du mouvement
            (ROBUSTE-1) : il ne retire "mvt" que si React n'a jamais signalé
            son montage (data-mvt-pret, posé par <SocleMouvement>, voir
            src/components/site/mouvement.tsx) — donc seulement si le
            JavaScript de la page ou l'hydratation a échoué, jamais parce
            qu'un visiteur n'a pas encore défilé jusqu'à une zone animée. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){document.documentElement.classList.add('mvt');setTimeout(function(){if(!document.documentElement.hasAttribute('data-mvt-pret')){document.documentElement.classList.remove('mvt')}},4000)}",
          }}
        />
        {/* Défilement doux (corrections mouvement, point 7) : posée seulement
            à l'évènement "load" (toutes les ressources chargées), donc
            TOUJOURS après le défilement natif du navigateur vers une ancre
            déjà présente dans l'adresse au chargement (lui-même déclenché
            bien avant "load", dès que l'élément ciblé existe) — jamais avant
            un clic possible dans la page. Voir html.defilement-doux,
            globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.addEventListener('load',function(){document.documentElement.classList.add('defilement-doux')})",
          }}
        />
      </head>
      {/* rg-racine applique le fond, le texte et la police de la NOUVELLE
          charte (tokens.css / components.css). Le Footer archivé et les
          pages légales restent inchangés : ils fixent leur propre couleur et
          police sur chacun de leurs éléments, donc rg-racine ne les affecte
          pas visuellement — voir Architecture_site.md pour le détail. */}
      <body className="rg-racine">{children}</body>
    </html>
  );
}
