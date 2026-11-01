import type { Metadata } from "next";
import Link from "next/link";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { Fleche } from "@/components/Icones";
// La page 404 vit hors du groupe (site) : elle importe elle-même les styles.
import "./globals.css";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function PageIntrouvable() {
  return (
    <>
      <Entete />
      <main id="contenu" className="section fond-creme" style={{ textAlign: "center", paddingTop: "calc(var(--entete) + 80px)" }}>
        <div className="conteneur">
          <p className="surtitre">Erreur 404</p>
          <h1 className="titre-section">Cette page est hors-jeu.</h1>
          <p className="chapo" style={{ marginInline: "auto" }}>
            L&apos;adresse que vous avez suivie n&apos;existe pas, ou elle a été déplacée.
          </p>
          <p style={{ marginTop: 40 }}>
            <Link href="/" className="bouton bouton--plein">
              Retour à l&apos;accueil
              <Fleche />
            </Link>
          </p>
        </div>
      </main>
      <PiedDePage />
    </>
  );
}
