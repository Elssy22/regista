import type { Metadata } from "next";
import { Bouton, CarteProfil, Etiquette, Lien, PointsTrajectoires } from "@/components/design-system";
import { Gabarit } from "@/components/site/Gabarit";
import { SchemaEnScene } from "@/components/site/mouvement";

export const metadata: Metadata = {
  title: "Méthode — Regista",
  description:
    "Comment se passe un accompagnement Regista : le premier échange, l'audit et la stratégie, la production, la livraison, les trois mois.",
};

const ETAPES = [
  {
    etiquette: "Étape 01",
    titre: "Le premier échange",
    donnees: ["Appel", "Budget", "Échéances"],
  },
  {
    etiquette: "Étape 02",
    titre: "L'audit et la stratégie",
    donnees: ["Audit", "Plan des trois mois", "Validation avant démarrage"],
  },
  {
    etiquette: "Étape 03",
    titre: "La production",
    donnees: ["Tournage groupé", "Montage", "Consignes si tournage par la structure"],
  },
  {
    etiquette: "Étape 04",
    titre: "La livraison",
    donnees: ["Bloc complet de livrables", "Trois allers-retours"],
  },
  {
    etiquette: "Étape 05",
    titre: "Les trois mois",
    donnees: ["Durée minimale", "Ajustement continu"],
  },
];

const REGLES: { mot: string; texte: string }[] = [
  {
    mot: "Vous choisissez",
    texte: "Publier vous-même, ou nous confier la publication. C'est votre décision, jamais la nôtre.",
  },
  { mot: "Trois allers-retours", texte: "Sur chaque bloc de livrables." },
  { mot: "Trois mois", texte: "Durée minimale d'un accompagnement." },
  { mot: "Un interlocuteur", texte: "Le même du premier appel à la livraison." },
  {
    mot: "Délais",
    texte: "Variables selon le projet. Une livraison dans la journée est possible quand l'événement l'exige.",
  },
  {
    mot: "Aucune signature",
    texte: "Regista n'appose jamais son nom sur vos livrables. Le travail vous appartient.",
  },
];

/**
 * Méthode (CONTENU/UX_site.md section 4, Brief_design_site.md écran 2).
 *
 * Dix blocs courts, jamais de fondu au défilement (règle explicite, voir
 * UX_site.md section 7). `PointsTrajectoires` porte la trajectoire de la
 * page : les cinq cartes d'étapes sont donc en `trajectoire={false}`, ainsi
 * que les deux cartes courtes du bloc de preuve.
 *
 * Récit unique de la page : la citation de preuve, aux deux tiers — pas le
 * titre, qui reste sobre (décision de Landry, Brief_design_site.md section 2).
 */
export default function MethodePage() {
  return (
    <Gabarit section="Méthode" page="02 / 05">
      <div className="enveloppe">
        <div className="entete">
          <Etiquette numero="03" texte="Méthode" />
        </div>

        <h1 className="titre-page">Vous jouez. On absorbe le reste.</h1>

        <p className="chapo">Regista fait sortir les structures du football de leur sphère.</p>

        <div className="section">
          <p className="titre-bloc">Le constat</p>
          <p className="paragraphe">La matière ne manque pas. Le temps, si.</p>
          <p className="paragraphe">
            Trois personnes en communication pour douze districts. Deux sièges distants de deux
            cent cinquante kilomètres. Un magazine à faire paraître chaque trimestre.
          </p>
          <p className="paragraphe">
            Nous ne remplaçons pas votre équipe. Nous absorbons ce qu&rsquo;elle ne peut pas faire
            en plus.
          </p>
        </div>

        <div className="section">
          <p className="titre-bloc">Le tournage groupé</p>
          <p className="paragraphe">
            Nous ne fonctionnons pas au coup par coup. Nous groupons : une session de tournage
            dense, préparée en amont, dont sortent les contenus de toute une période.
          </p>
          <p className="paragraphe">
            <strong>
              Bloquez une ou deux journées de tournage. Vous avez de quoi tenir les trois mois qui
              suivent.
            </strong>
          </p>
        </div>

        <div className="section">
          <p className="titre-bloc">Il y a toujours une solution</p>
          <p className="paragraphe">
            Une structure nous dit rarement « je n&rsquo;ai pas d&rsquo;idée ». Elle nous dit « je
            n&rsquo;ai pas les moyens ». C&rsquo;est la raison pour laquelle nous parlons de votre
            enveloppe dès le premier appel.
          </p>
          <p className="paragraphe">
            <strong>Nous n&rsquo;adaptons pas votre ambition à votre budget. Nous adaptons les moyens.</strong>
          </p>
        </div>

        <div className="section">
          <SchemaEnScene className="schema">
            <PointsTrajectoires largeur={460} hauteur={190} />
          </SchemaEnScene>
          <div className="actions" style={{ justifyContent: "center" }}>
            <Bouton texte="Voir les offres" href="/offres" variante="secondaire" />
          </div>
        </div>

        <div className="grille grille--cinq">
          {ETAPES.map((etape) => (
            <CarteProfil key={etape.etiquette} {...etape} trajectoire={false} />
          ))}
        </div>

        <div className="section">
          <p className="titre-bloc">Les règles du jeu</p>
          <ul className="regles">
            {REGLES.map((regle) => (
              <li key={regle.mot}>
                <strong>{regle.mot}</strong> — {regle.texte}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="bandeau rg-inverse" style={{ marginTop: "var(--e-7)" }}>
        <Etiquette texte="Ce que ça donne" />

        <div className="cas-principal">
          <p className="titre-bloc">Faire exister — un maillot vu trois millions de fois</p>
          <p className="paragraphe" style={{ marginTop: "var(--e-3)" }}>
            Un club de district. Une sortie de maillot. Aucun budget publicitaire. Stratégie,
            calendrier, contenus, mise en relation avec des personnalités : porté par un rappeur à
            large audience, un ancien joueur professionnel devenu animateur, remarqué par un ancien
            designer de maillots.
          </p>
          <p className="cas-principal__chiffres">
            Cinq cents maillots vendus. Trois millions de vues.
          </p>
          <p className="cas-principal__detail">
            Repris par la presse nationale — quotidien sportif, radios, journal télévisé — sans un
            euro de budget presse. Un grand quotidien a classé ce club de district aux côtés de
            clubs européens connus dans le monde entier pour leurs maillots. D’autres clubs ont
            depuis repris la recette.
          </p>
        </div>

        <div className="cas-duo">
          <CarteProfil
            etiquette="Mettre en relation"
            titre="Une plateforme reliée à son écosystème"
            donnees={[
              "Reprise de sa communication et d'une partie de son site, mise en relation avec des personnalités passionnées, accompagnement vers un partenariat avec une grande plateforme de vente en ligne.",
            ]}
            trajectoire={false}
          />
          <div className="rg-carte">
            <div className="rg-carte__bandeau">
              <Etiquette texte="Tenir le choc" />
            </div>
            <div className="rg-carte__corps">
              <p className="rg-carte__titre">Un événement tenu en deux jours</p>
              <p className="rg-carte__donnees">
                Agence appelée à deux jours de l&rsquo;ouverture : stratégie d&rsquo;urgence, tenue
                des équipes, coordination pendant et après.{" "}
                <strong>Objectif d&rsquo;affluence atteint.</strong>
              </p>
            </div>
          </div>
        </div>

        <p className="recit citation-preuve">« Notre meilleur travail, personne ne sait que c&rsquo;est nous. »</p>
      </section>

      <div className="enveloppe">
        <div className="section">
          <p className="texte">
            Un interlocuteur unique, du premier appel à la livraison.{" "}
            <Lien texte="En savoir plus sur l'agence" href="/a-propos" />
          </p>
        </div>

        <div className="actions">
          <Bouton texte="Parler du projet" href="/contact" />
        </div>
      </div>
    </Gabarit>
  );
}
