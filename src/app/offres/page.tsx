import type { Metadata } from "next";
import { Badge, Bouton, Etiquette, Note, Quadrillage, Trajectoire } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";
import { TraceEnScene } from "@/components/site/mouvement";

export const metadata: Metadata = {
  title: "Offres — Regista",
  description:
    "Communication, financement et tech : trois pôles, une seule ligne pour faire exister votre structure au-delà de sa sphère.",
};

/**
 * Offres (CONTENU/UX_site.md section 3, Brief_design_site.md écran 3).
 *
 * Une seule page, trois sections identiques dans leur traitement — aucune
 * couleur par pôle. Une seule trajectoire, en haut de page : les trois
 * sections restent des blocs de texte simples (pas de CarteOffre, qui
 * porterait chacune sa propre trajectoire — voir UX_site.md section 6).
 * Aucune occurrence de récit sur cette page fonctionnelle.
 */
export default function OffresPage() {
  return (
    <Gabarit section="Offres" page="03 / 05">
      <Quadrillage>
        <div className="enveloppe">
          <div className="entete">
            <Etiquette texte="Offres" />
          </div>

          <h1 className="titre-page">
            Les trois répondent à la même question : comment une structure existe au-delà de sa
            sphère.
          </h1>

          <p className="chapo">
            Mieux raconter, c&rsquo;est être vu plus loin. Accéder aux bons circuits, c&rsquo;est
            financer plus grand. S&rsquo;outiller, c&rsquo;est durer. Nous ne vendons pas trois
            métiers séparés, nous en tirons une seule ligne.
          </p>

          <div className="piste">
            <TraceEnScene largeur={240}>
              <Trajectoire largeur={240} epaisseur={5} />
            </TraceEnScene>
          </div>

          <div className="offre-section">
            <div className="offre-section__entete">
              <Badge texte="COM" />
              <Etiquette numero="01" texte="Communication" />
            </div>
            <p className="paragraphe">
              Raconter votre structure de façon qu&rsquo;elle soit vue au-delà de ceux qui la
              connaissent déjà. Stratégie éditoriale, production vidéo et photo, formats pour les
              réseaux, relations avec les médias, couverture de vos temps forts, création
              d&rsquo;événements.
            </p>
          </div>

          <div className="offre-section">
            <div className="offre-section__entete">
              <Badge texte="FIN" />
              <Etiquette numero="02" texte="Financement" />
            </div>
            <p className="paragraphe">
              Monter les dossiers, identifier les partenaires, construire les argumentaires,
              relancer et suivre.
            </p>
            <div className="section">
              <Note
                etiquette="Périmètre"
                texte="Regista n'est pas agent sportif. L'agence ne négocie aucun contrat de joueur et ne perçoit aucune rémunération sur ces contrats. Elle facture ses prestations — communication, contenus, dossiers, outils — et ne travaille pas en direct avec des mineurs."
              />
            </div>
          </div>

          <div className="offre-section">
            <div className="offre-section__entete">
              <Badge texte="TECH" />
              <Etiquette numero="03" texte="Tech" />
            </div>
            <p className="paragraphe">
              Sites, applications, outils de suivi, automatisations. Ce qui permet à une structure
              de tenir dans la durée sans y passer ses soirées.
            </p>
            <p className="paragraphe">
              Nous développons actuellement Vigie, un outil conçu pour accompagner les clubs dans
              leur quotidien. Il est en construction : nous en parlons volontiers, nous ne le
              vendons pas encore.
            </p>
          </div>

          <div className="actions">
            <Bouton texte="Parler du projet" href="/contact" />
          </div>
        </div>
      </Quadrillage>
    </Gabarit>
  );
}
