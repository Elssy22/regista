import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { verifierContenuFictif } from "@/lib/contenu";
import { policeTitre, policeTexte } from "@/lib/polices";

// Empêche toute mise en production tant qu'il reste du contenu fictif.
verifierContenuFictif();

// Titres et descriptions Google validés par Landry le 12/11/2026.
const titre = "Regista — Agence de communication football en Île-de-France";
const description =
  "Communication, réseaux sociaux, événementiel, financement et sites internet pour les clubs de foot, ligues, académies et joueurs. Agence basée en Île-de-France.";

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
 * Il pose aussi "rideau-vu" si l'écran de chargement a déjà joué pendant
 * cette visite (sessionStorage) : il ne rejoue pas à chaque arrivée.
 */
const scriptAnimations =
  "if(matchMedia('(prefers-reduced-motion: no-preference)').matches){var h=document.documentElement;h.classList.add('anim');try{if(sessionStorage.getItem('regista-rideau'))h.classList.add('rideau-vu')}catch(e){}setTimeout(function(){if(!h.hasAttribute('data-pret'))h.classList.remove('anim')},4000)}";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${policeTitre.variable} ${policeTexte.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAnimations }} />
      </head>
      {/* Les styles et les animations du site vivent dans (site)/layout.tsx :
          le back office (/studio) n'en hérite pas. */}
      <body>{children}</body>
    </html>
  );
}
