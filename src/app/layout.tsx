import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Anton — tous les titres (poids unique 400, police non variable)
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

// Work Sans — tout le texte courant
const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const titre = "Regista — Vous avez le terrain. On a le reste.";
const description =
  "Regista accompagne clubs, joueurs et structures du football : communication et événementiel, financements, merchandising. Vingt minutes pour en parler.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    url: "/football",
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
    <html lang="fr" className={`${anton.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
