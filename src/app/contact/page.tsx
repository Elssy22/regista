import type { Metadata } from "next";
import { Etiquette, Lien, Note, Trajectoire } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";
import { TraceEnScene } from "@/components/site/mouvement";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Regista",
  description: "Écrivez ou appelez directement : un appel de vingt minutes suffit pour commencer.",
};

/**
 * Contact (CONTENU/UX_site.md section 3, Brief_design_site.md écran 5).
 *
 * Décision validée : coordonnées directes (mail, téléphone) cliquables,
 * comme contenu principal de la page. Pas de formulaire dans cette version
 * — un formulaire hérité qui affichait une confirmation sans rien envoyer a
 * été retiré (voir CLAUDE.md racine, « ce qui reste à faire », point 1 du
 * prototype de référence). Une seule trajectoire, orientée vers les
 * coordonnées. Aucune occurrence de récit sur cette page fonctionnelle.
 */
export default function ContactPage() {
  const { email, telephoneAffiche, telephoneLien } = siteConfig.contact;

  return (
    <Gabarit section="Contact" page="05 / 05">
      <div className="enveloppe">
        <div className="entete">
          <Etiquette texte="Contact" />
        </div>

        <h1 className="titre-page">
          Un appel de vingt minutes suffit à savoir si nous pouvons vous être utiles.
        </h1>

        <p className="chapo">
          Vous n&rsquo;avez rien à préparer. Nous venons avec des questions, pas avec un
          catalogue.
        </p>

        <div className="piste">
          <TraceEnScene largeur={220}>
            <Trajectoire largeur={220} epaisseur={5} />
          </TraceEnScene>
        </div>

        <div className="coordonnees">
          {telephoneAffiche && telephoneLien && (
            <p className="coordonnees__lien">
              <Lien texte={telephoneAffiche} href={`tel:${telephoneLien}`} />
            </p>
          )}
          <p className="coordonnees__lien">
            <Lien texte={email} href={`mailto:${email}`} />
          </p>
        </div>

        <div className="section">
          <Note texte="Aucun tarif n'est communiqué avant devis." />
        </div>
      </div>
    </Gabarit>
  );
}
