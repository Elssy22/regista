import type { Metadata } from "next";
import { Bouton, Etiquette } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";

export const metadata: Metadata = {
  title: "Page introuvable — Regista",
  robots: { index: false, follow: false },
};

/**
 * Page 404, à la charte v1.0.
 *
 * Elle reprend le gabarit du site plutôt qu'un écran isolé : un visiteur
 * perdu retrouve la navigation et le nom de l'agence, au lieu d'une impasse.
 * Pas de trajectoire, pas de récit : cette page dépanne, elle ne raconte rien.
 *
 * Les anciennes adresses (/football) ne passent pas par ici : elles sont
 * redirigées vers l'accueil dans next.config.ts.
 */
export default function NotFound() {
  return (
    <Gabarit section="Page introuvable" page="404" indicateurChapitres={false}>
      <div className="enveloppe">
        <section className="page-introuvable">
          <Etiquette texte="Erreur 404" />
          <h1 className="titre-page">Cette page est hors-jeu.</h1>
          <p className="chapo">
            L&apos;adresse que vous avez suivie n&apos;existe pas, ou elle a été déplacée.
          </p>
          <div className="actions">
            <Bouton texte="Retour à l'accueil" href="/" />
          </div>
        </section>
      </div>
    </Gabarit>
  );
}
