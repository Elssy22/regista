import type { Metadata } from "next";
import { Quadrillage, Trajectoire } from "@/components/design-system";
import { Marque } from "@/components/site/Marque";

/**
 * Gabarit de l'image de partage (Open Graph), rendu à 1200 x 630.
 *
 * Cette page n'est PAS destinée aux visiteurs : elle sert à fabriquer
 * public/og-image.jpg, en capturant le rendu réel du site — vraies polices,
 * vraies couleurs, mêmes composants. Pour la régénérer après un changement
 * de texte, voir le mode d'emploi dans CONTENU/Image_de_partage.md.
 *
 * Elle est exclue du plan du site et interdite aux robots.
 */
export const metadata: Metadata = {
  title: "Gabarit de l'image de partage",
  robots: { index: false, follow: false },
};

export default function GabaritPartage() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        position: "relative",
        overflow: "hidden",
        background: "var(--fond)",
        color: "var(--texte)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "var(--e-8)",
        boxSizing: "border-box",
      }}
    >
      {/* Le voyant de développement de Next.js n'existe qu'en local, mais il
          apparaîtrait sur la capture : on le masque ici, sans effet en production. */}
      <style>{"nextjs-portal{display:none!important}"}</style>

      <Quadrillage />

      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "var(--e-4)" }}>
        <Marque hauteur={44} />
        <span className="etiquette">Communication · Financement · Tech</span>
      </div>

      <div style={{ position: "relative" }}>
        <h1
          className="display"
          style={{ margin: 0, maxWidth: "16ch" }}
        >
          Le travail vous appartient. La <em className="rg-recit">lumière</em> aussi.
        </h1>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "var(--e-6)",
        }}
      >
        <p className="texte" style={{ margin: 0, maxWidth: "46ch" }}>
          Nous faisons sortir les structures du football de leur sphère.
          Ligues, districts, clubs, académies.
        </p>
        <Trajectoire largeur={220} epaisseur={5} />
      </div>
    </div>
  );
}
