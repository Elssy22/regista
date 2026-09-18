import type { Metadata } from "next";
import { Bouton, CarteProfil, Etiquette, Note, PointsTrajectoires } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";
import { SchemaEnScene } from "@/components/site/mouvement";

export const metadata: Metadata = {
  title: "À propos — Regista",
  description:
    "Regista est une agence football : un interlocuteur unique, une équipe qui se forme selon le projet.",
};

/**
 * À propos (CONTENU/UX_site.md section 3, CONTENU/Regista_apropos.md,
 * Brief_design_site.md écran 4).
 *
 * Règles de mention (CLAUDE.md) : aucun nom d'ancien média, d'ancien
 * employeur ni de personnalité. Le parcours reste secondaire, jamais un
 * argument d'accroche. `PointsTrajectoires` porte la trajectoire de la
 * page : la carte des postes de joueur reste en `trajectoire={false}`, et
 * ne porte aucun or (la règle de l'or ne marque jamais Regista elle-même).
 *
 * Récit unique de la page : le mot « servir » dans le titre.
 */
export default function AProposPage() {
  return (
    <Gabarit section="À propos" page="04 / 05">
      <div className="enveloppe">
        <div className="entete">
          <Etiquette texte="À propos" />
        </div>

        <h1 className="titre-page">
          Raconter, c&rsquo;est déjà <em className="rg-recit">servir</em>
        </h1>

        <p className="chapo">
          Regista est une agence football. Le mot désigne, en italien, le chef d&rsquo;orchestre.
          Sur un terrain, c&rsquo;est le meneur de jeu : celui qui oriente le jeu et fait briller
          les autres.
        </p>

        <p className="paragraphe">
          Landry Célina a cofondé un média lifestyle — football, cinéma, mode, cuisine, art, et
          plus d&rsquo;un million d&rsquo;abonnés cumulés. Il y a été rédacteur et animateur, puis
          en a dirigé la rédaction pendant six ans. Il a été formé en club amateur, où il a joué
          défenseur gauche, gardien et milieu relayeur.
        </p>

        <p className="paragraphe">
          De ces deux histoires vient la même conviction : une structure de football produit en
          permanence de la matière — des parcours, des rencontres, des gens qui tiennent tout à
          bout de bras — et presque personne ne la raconte. Non par manque d&rsquo;envie. Par
          manque de temps, et parce que raconter est un métier. Regista fait ce métier pour elles.
        </p>

        <p className="paragraphe">
          Vous avez un interlocuteur unique, du premier appel à la livraison. Derrière lui, un
          réseau de partenaires : deux studios de production, une société de développement pour
          les projets techniques, et des professionnels avec qui nous travaillons régulièrement.
          L&rsquo;équipe se forme selon le projet. C&rsquo;est ce qui permet d&rsquo;absorber une
          campagne complète sans vous imposer de coordonner six prestataires.
        </p>

        <p className="paragraphe">
          Regista n&rsquo;appose jamais sa signature sur les livrables de ses clients. Le travail
          que nous produisons est le vôtre, et il porte votre nom. Nous nous mettons devant quand
          il faut encaisser : les démarches ingrates, les relances, les refus, la complexité
          administrative. Vous, vous jouez.
        </p>
      </div>

      <section className="bandeau rg-inverse" style={{ marginTop: "var(--e-7)" }}>
        <SchemaEnScene className="schema">
          <PointsTrajectoires largeur={460} hauteur={200} />
        </SchemaEnScene>
      </section>

      <div className="enveloppe">
        <div className="duo">
          <CarteProfil
            etiquette="Postes"
            titre="Sur le terrain"
            donnees={["Défenseur gauche", "Gardien", "Milieu relayeur"]}
            trajectoire={false}
          />
          <Note
            etiquette="Discrétion"
            texte="Parcours secondaire, présenté ici à titre de repère — jamais comme argument."
          />
        </div>

        <div className="actions">
          <Bouton texte="Parler du projet" href="/contact" />
        </div>
      </div>
    </Gabarit>
  );
}
