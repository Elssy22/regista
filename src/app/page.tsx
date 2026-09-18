import { Bouton, CarteOffre, CarteProfil, Etiquette } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";
import { GrilleAnimee } from "@/components/site/mouvement";

/**
 * Accueil (CONTENU/UX_site.md section 3, Brief_design_site.md écran 1).
 *
 * La grille des trois `CarteOffre` porte la trajectoire de la page (chaque
 * carte en dessine une au survol) : le bloc de preuve, en bandeau, reste
 * donc entièrement typographique — trois `CarteProfil` en
 * `trajectoire={false}`.
 *
 * Récit unique de la page : le mot « lumière » dans le titre.
 */
export default function AccueilPage() {
  return (
    <Gabarit section="Accueil" page="01 / 05">
      <section className="hero">
        <GrilleAnimee />
        <div className="hero__contenu">
          <Etiquette texte="Communication · Financement · Tech" />
          <h1 className="titre-accueil">
            Le travail vous appartient. La <em className="rg-recit">lumière</em> aussi.
          </h1>
          <p className="chapo">
            Nous faisons sortir les structures du football de leur sphère.
            Ligues, districts, clubs, académies.
          </p>
          <div className="actions">
            <Bouton texte="Parler du projet" href="/contact" />
          </div>
        </div>
      </section>

      <div className="enveloppe">
        <div className="grille">
          <CarteOffre
            numero="01"
            etiquette="Communication"
            titre="Stratégie éditoriale, production vidéo et photo, relations médias, temps forts."
            href="/offres"
          />
          <CarteOffre
            numero="02"
            etiquette="Financement"
            titre="Dossiers de subvention, partenaires, argumentaires, relance et suivi."
            href="/offres"
          />
          <CarteOffre
            numero="03"
            etiquette="Tech"
            titre="Sites, applications, outils de suivi, automatisations."
            href="/offres"
          />
        </div>
      </div>

      <section className="bandeau rg-inverse">
        <div className="grille" style={{ marginTop: 0 }}>
          <CarteProfil
            etiquette="Faire exister"
            titre="Cinq cents maillots vendus"
            donnees={[
              "Un club de district. Trois millions de vues cumulées et une reprise par la presse nationale, sans un euro de budget.",
            ]}
            trajectoire={false}
            className="carte-preuve--or"
          />
          <CarteProfil
            etiquette="Mettre en relation"
            titre="Une plateforme reliée à son écosystème"
            donnees={["Communication reprise, mise en relation, partenariat de vente en ligne."]}
            trajectoire={false}
          />
          <CarteProfil
            etiquette="Tenir le choc"
            titre="Un événement tenu en deux jours"
            donnees={["Stratégie d'urgence, coordination des équipes, objectif d'affluence atteint."]}
            trajectoire={false}
          />
        </div>
      </section>

      <div className="enveloppe">
        <div className="actions" style={{ justifyContent: "center" }}>
          <Bouton texte="Parler du projet" href="/contact" />
        </div>
      </div>
    </Gabarit>
  );
}
