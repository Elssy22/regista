import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Badge,
  Bouton,
  CarteProfil,
  Etiquette,
  MotifMaison,
  Note,
  Trajectoire,
} from "@/components/design-system";
import { BandeauCoeur } from "@/components/site/BandeauCoeur";
import { Gabarit } from "@/components/site/Gabarit";
import { HeroTrace } from "@/components/site/HeroTrace";
import { EnScene } from "@/components/site/mouvement";
import { OuvertureChapitre } from "@/components/site/OuvertureChapitre";
import { casImages, references, siteConfig } from "@/lib/site-config";

// L'adresse officielle du site est désormais "/" (page unique) : les autres
// routes qui existaient (voir next.config.ts) sont des redirections, jamais
// des pages concurrentes — d'où le canonical posé ici, et nulle part ailleurs
// (CONTENU/Plan_one_page.md, section 7.5).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const ETAPES = [
  {
    numero: "01",
    titre: "Le premier échange",
    phrase: "Une stratégie qui ignore les moyens réels ne sert à personne.",
    motsCles: ["Appel", "Budget", "Échéances"],
  },
  {
    numero: "02",
    titre: "L’audit et la stratégie",
    phrase: "Rien ne démarre tant que vous ne l’avez pas validée.",
    motsCles: ["Audit", "Plan des trois mois", "Validation avant démarrage"],
  },
  {
    numero: "03",
    titre: "La production",
    phrase: "Rien ne vous est imposé, ni sur les tournages, ni sur la publication.",
    motsCles: ["Tournage groupé", "Montage", "Consignes si tournage par la structure"],
  },
  {
    numero: "04",
    titre: "La livraison",
    phrase: "Nous n’envoyons pas au compte-gouttes.",
    motsCles: ["Bloc complet de livrables", "Trois allers-retours"],
  },
  {
    numero: "05",
    titre: "Les trois mois",
    phrase: "Une stratégie de communication ne se juge pas en trois semaines.",
    motsCles: ["Durée minimale", "Ajustement continu"],
  },
] as const;

// Données des schémas animés (décision de Landry du 25/09/2026). Chaque
// libellé reprend mot pour mot le texte qu'il remplace (CONTENU/Regista_*.md) :
// un schéma ne dit rien de plus que la phrase d'origine.
const POLES_SCHEMA = [
  { sigle: "COM", action: "Mieux raconter,", effet: "c’est être vu plus loin." },
  { sigle: "FIN", action: "Accéder aux bons circuits,", effet: "c’est financer plus grand." },
  { sigle: "TECH", action: "S’outiller,", effet: "c’est durer." },
] as const;

const OCCASIONS = [
  "Compétitions",
  "Finales",
  "Remises de maillots",
  "Soirées de tirage",
  "Formations",
  "Parcours de bénévoles",
] as const;

const CHIFFRES_CONSTAT = [
  { nombre: "3", libelle: "personnes en communication" },
  { nombre: "12", libelle: "districts" },
  { nombre: "250 km", libelle: "entre les deux sièges" },
  { nombre: "1", libelle: "magazine à faire paraître chaque trimestre" },
] as const;

/**
 * Accueil, Offres, Méthode, Ce que ça donne, Comment ça se passe, À propos
 * et Contact réunis en une seule page (CONTENU/Plan_one_page.md) : sept
 * chapitres, sept ancres (#accueil à #contact), un seul h1 et un h2 par
 * chapitre. Les cinq pages d'origine sont redirigées vers leur chapitre
 * dans next.config.ts.
 *
 * CarteOffre, PointsTrajectoires et les Trajectoire isolées d'Offres et de
 * Contact ont été retirées : la seule trajectoire de la page est désormais
 * la « passe » (option A, CONTENU/Plan_one_page.md, section 3) — une chaîne
 * de tronçons <PointPasse>/<TraitVersPoint> (src/components/site/Passe.tsx)
 * posés par le hero, OuvertureChapitre et .bandeau__coeur, plus un dernier
 * <Trajectoire> horizontal en 07 (M4) —
 * comptée comme UNE seule trajectoire (charte p.12, décision de Landry).
 * Récit unique de la page (règle 4 de CLAUDE.md) : le mot « lumière » du h1 ;
 * « servir » et la citation de preuve sont repassés en romain (décision de
 * Landry, Plan_one_page.md en tête de fichier).
 */
export default function AccueilPage() {
  const { email } = siteConfig.contact;

  return (
    <Gabarit>
      {/* 01 — Accueil (CONTENU/Regista_accueil.md, « L'accroche »).
          M1 (le quadrillage se pose en vague) est du CSS pur sur .hero
          (voir site.css) : il n'a besoin d'aucun balisage ici. */}
      <section id="accueil" aria-labelledby="accueil-titre" className="hero">
        {/* M2 — le coup d'envoi (voir HeroTrace.tsx, composant client séparé
            de cette page : <EnScene> a besoin d'une fonction en enfant, ce
            qui ne traverse pas la frontière serveur → client). */}
        <HeroTrace />
        <div className="hero__contenu">
          <div className="hero__ouverture">
            <Etiquette texte="Communication · Financement · Tech" />
            <h1 id="accueil-titre" className="titre-accueil rg-focusable" tabIndex={-1}>
              Le travail vous appartient. La <em className="rg-recit">lumière</em> aussi.
            </h1>
            <p className="chapo">
              Nous faisons sortir les structures du football de leur sphère. Ligues, districts,
              clubs, académies.
            </p>
          </div>
          <div className="actions">
            <Bouton texte="Parler du projet" href="/#contact" />
          </div>
        </div>
      </section>

      {/* 02 — Offres : trois pôles, une seule ligne (src/app/offres/page.tsx,
          CONTENU/Regista_methode.md §4) */}
      <section id="offres" aria-labelledby="offres-titre">
        <div className="enveloppe marge-passe">
          <OuvertureChapitre
            numero="02"
            etiquette="Offres"
            idPoint="passe-02"
            cibleSuivante="passe-03"
          >
            <h2 id="offres-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
              Les trois répondent à la même question&nbsp;: comment une structure existe au-delà de
              sa sphère.
            </h2>
          </OuvertureChapitre>

          <p className="chapo chapo--gras">
            Nous ne vendons pas trois métiers séparés, nous en tirons une seule ligne.
          </p>

          {/* Les pôles portent chacun leur accroche (les trois phrases de
              l'ancien chapô, mot pour mot) et un filet bleu qui se trace de
              gauche à droite, d'un pôle au suivant : les trois filets forment
              « une seule ligne » (décision de Landry du 25/09/2026, qui
              fusionne l'ancien schéma COM/FIN/TECH avec les pôles pour ne
              plus répéter les trois sigles deux fois). Le filet n'est pas une
              trajectoire (droit, bleu, sans point) : la passe reste la seule. */}
          <div className="poles">
            <EnScene className="pole" seuil={0.35} style={{ "--i": 0 } as CSSProperties}>
              <span className="pole__filet" aria-hidden="true" />
              <div className="offre-section__entete">
                <Badge texte="COM" />
                <h3 className="pole__titre">
                  <Etiquette numero="01" texte="Communication" />
                </h3>
              </div>
              <p className="pole__accroche">
                <span className="pole__action">{POLES_SCHEMA[0].action}</span>{" "}
                {POLES_SCHEMA[0].effet}
              </p>
              <p className="paragraphe">
                Raconter votre structure de façon qu&rsquo;elle soit vue au-delà de ceux qui la
                connaissent déjà. Stratégie éditoriale, production vidéo et photo, formats pour
                les réseaux, relations avec les médias, couverture de vos temps forts, création
                d&rsquo;événements.
              </p>
            </EnScene>

            <EnScene className="pole" seuil={0.35} style={{ "--i": 1 } as CSSProperties}>
              <span className="pole__filet" aria-hidden="true" />
              <div className="offre-section__entete">
                <Badge texte="FIN" />
                <h3 className="pole__titre">
                  <Etiquette numero="02" texte="Financement" />
                </h3>
              </div>
              <p className="pole__accroche">
                <span className="pole__action">{POLES_SCHEMA[1].action}</span>{" "}
                {POLES_SCHEMA[1].effet}
              </p>
              <p className="paragraphe">
                Monter les dossiers de subvention, identifier les partenaires, construire les
                argumentaires, relancer et suivre.
              </p>
              <p className="paragraphe">
                Nous connaissons des circuits et des interlocuteurs qui restent invisibles de
                l&rsquo;intérieur d&rsquo;une structure.
              </p>
              {/* Note obligatoire dès que la page décrit l'offre de financement
                  (CLAUDE.md racine, « les règles de mention »). */}
              <Note
                etiquette="Périmètre"
                texte="Regista n’est pas agent sportif. L’agence ne négocie aucun contrat de joueur et ne perçoit aucune rémunération sur ces contrats. Elle facture ses prestations — communication, contenus, dossiers, outils — et ne travaille pas en direct avec des mineurs."
              />
            </EnScene>

            <EnScene className="pole" seuil={0.35} style={{ "--i": 2 } as CSSProperties}>
              <span className="pole__filet" aria-hidden="true" />
              <div className="offre-section__entete">
                <Badge texte="TECH" />
                <h3 className="pole__titre">
                  <Etiquette numero="03" texte="Tech" />
                </h3>
              </div>
              <p className="pole__accroche">
                <span className="pole__action">{POLES_SCHEMA[2].action}</span>{" "}
                {POLES_SCHEMA[2].effet}
              </p>
              <p className="paragraphe">
                Sites, applications, outils de suivi, automatisations. Ce qui permet à une
                structure de tenir dans la durée sans y passer ses soirées.
              </p>
              <p className="paragraphe">
                Nous développons actuellement Vigie, un outil conçu pour accompagner les clubs
                dans leur quotidien. Il est en construction&nbsp;: nous en parlons volontiers, nous
                ne le vendons pas encore.
              </p>
            </EnScene>
          </div>
        </div>
      </section>

      {/* 03 — Le principe : constat et tournage groupé (src/app/methode/page.tsx,
          CONTENU/Regista_methode.md §1 et §2) */}
      <section id="methode" aria-labelledby="methode-titre">
        <div className="enveloppe marge-passe">
          <OuvertureChapitre
            numero="03"
            etiquette="Méthode"
            idPoint="passe-03"
            cibleSuivante="passe-04"
          >
            <h2 id="methode-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
              Vous jouez. On absorbe le reste.
            </h2>
          </OuvertureChapitre>

          {/* « Le constat » et « Le tournage groupé » côte à côte à partir de
              768 px, alignés en haut (décision de Landry du 25/09/2026 : ils
              étaient en zigzag, le second très bas à droite). Un SEUL
              déclencheur pour les deux : leurs animations partent ensemble
              et finissent ensemble (voir M7 et M6 dans site.css). */}
          <EnScene className="methode-duo" seuil={0.35}>
          <div className="section">
            <h3 className="titre-bloc">Le constat</h3>
            {/* Cette ligne est du CONTENU — la liste de ce que Regista sait
                couvrir — et non l'intitulé d'une section. En <Etiquette>
                (capitales de 12 px, interlettrage 0,18 em, interligne 1,20)
                elle faisait 101 caractères sur trois lignes serrées en
                mobile : le format qu'un dirigeant de district de 55 ans ne
                lit pas (critique Impeccable du 25/09/2026, accord de Landry
                le même jour). Elle repasse en casse normale, à la taille du
                texte courant. Les points médians et l'ordre des mots ne
                changent pas. */}
            {/* Schéma animé (décision de Landry du 25/09/2026) : la liste
                des occasions devient six cases qui s'empilent une à une — la
                matière qui s'accumule, juste avant « La matière ne manque
                pas ». Mêmes six mots, même ordre. */}
            <ul className="schema-anime schema-occasions" role="list">
              {OCCASIONS.map((occasion, i) => (
                <li key={occasion} className="case" style={{ "--i": i } as CSSProperties}>
                  {occasion}
                </li>
              ))}
            </ul>
            <p className="paragraphe paragraphe--marquant">
              La matière ne manque pas. Le temps, si.
            </p>
            {/* Schéma animé (même décision) : les trois phrases chiffrées
                deviennent quatre cases, lues comme du texte (« 3 personnes en
                communication »…). Chiffres en bleu nuit, jamais en or. */}
            <EnScene as="ul" className="schema-anime schema-chiffres" role="list" seuil={0.35}>
              {CHIFFRES_CONSTAT.map((item, i) => (
                <li key={item.libelle} className="schema-chiffres__case" style={{ "--i": i } as CSSProperties}>
                  <span className="schema-chiffres__nombre">{item.nombre}</span>{" "}
                  <span className="schema-chiffres__libelle">{item.libelle}</span>
                </li>
              ))}
            </EnScene>
            <p className="paragraphe">
              Nous ne remplaçons pas votre équipe. Nous absorbons ce qu&rsquo;elle ne peut pas
              faire en plus.
            </p>
          </div>

          {/* Bloc 2 du chapitre : colonne de droite. */}
          <div className="section">
            <h3 className="titre-bloc">Le tournage groupé</h3>
            <p className="paragraphe" style={{ marginTop: "var(--e-4)" }}>
              <strong>
                Bloquez une ou deux journées de tournage. Vous avez de quoi tenir les trois mois
                qui suivent.
              </strong>
            </p>

            {/* M6 — le tournage groupé se remplit : « 1 OU 2 JOURNÉES »
                d'abord, puis les trois mois en série (site.css). À partir de
                768 px, déclenché par .methode-duo en même temps que le
                constat ; en mobile (blocs empilés), à sa propre arrivée.
                aria-label reconstruit avec les seuls libellés validés
                (CONTENU/Plan_one_page.md, section 6) — jamais de phrase
                inventée (CHARTE-3). */}
            <EnScene
              as="div"
              className="schema-tournage"
              seuil={0.4}
              role="img"
              aria-label="1 ou 2 journées ; mois 01, mois 02, mois 03."
            >
              {/* Deux couches superposées par barre (ROBUSTE-3, MOI-2) : la
                  couche « vide » (libellé bleu nuit, seule lue par les
                  lecteurs d'écran) reste toujours en place ; la couche
                  « pleine » (aplat bleu, libellé crème, aria-hidden, même
                  texte redondant) se révèle par-dessus, de gauche à droite,
                  via clip-path — jamais un fond qui bascule d'un coup sous un
                  texte resté bleu sur bleu. */}
              <div className="schema-tournage__bloc">
                <span className="schema-tournage__texte">1 OU 2 JOURNÉES</span>
                <span className="schema-tournage__remplissage" aria-hidden="true">
                  1 OU 2 JOURNÉES
                </span>
              </div>
              <div className="schema-tournage__mois">
                <div className="schema-tournage__bloc">
                  <span className="schema-tournage__texte">MOIS 01</span>
                  <span className="schema-tournage__remplissage" aria-hidden="true">
                    MOIS 01
                  </span>
                </div>
                <div className="schema-tournage__bloc">
                  <span className="schema-tournage__texte">MOIS 02</span>
                  <span className="schema-tournage__remplissage" aria-hidden="true">
                    MOIS 02
                  </span>
                </div>
                <div className="schema-tournage__bloc">
                  <span className="schema-tournage__texte">MOIS 03</span>
                  <span className="schema-tournage__remplissage" aria-hidden="true">
                    MOIS 03
                  </span>
                </div>
              </div>
            </EnScene>

            <p className="paragraphe">
              Nous ne fonctionnons pas au coup par coup. Nous groupons&nbsp;: une session de
              tournage dense, préparée en amont, dont sortent les contenus de toute une période.
            </p>
            <p className="paragraphe">
              Vos équipes sont mobilisées une fois. Pas tous les week-ends.
            </p>

          </div>
          </EnScene>

          {/* Image de preuve du métier (interdit n°12 de CLAUDE.md, décision
              de Landry du 25/09/2026) : Landry lui-même en tournage, de
              trois quarts arrière (profil visible) — droit à l'image acquis. Recadrée pour
              retirer le public (visages, mineurs possibles) et le logo
              d'équipementier du pantalon ; la marque du micro est floutée. Sortie
              des deux colonnes et centrée dessous (25/09/2026) : dans la
              colonne du tournage, elle la rendait 300 px plus longue que celle
              du constat. */}
          <figure className="photo-metier">
            <Image
              src="/metier/tournage-landry.jpg"
              alt="Le fondateur de Regista en tournage, au pied d’une scène."
              width={588}
              height={425}
              sizes="(min-width: 768px) 460px, 90vw"
              className="photo-metier__image"
            />
            <figcaption className="legende">En tournage, au pied de la scène.</figcaption>
          </figure>
        </div>
      </section>

      {/* 04 — Ce que ça donne : le bloc de preuve unique (CONTENU/Regista_methode.md §7) */}
      <section id="preuve" aria-labelledby="preuve-titre" className="bandeau rg-inverse">
        {/* .bandeau porte déjà sa marge gauche (voir site.css) : pas de
            .marge-passe ici, elle doublerait le décalage. Pas de point ni de
            tronçon dans cette entête : le point réel de ce chapitre marque
            les résultats du client plus bas (.bandeau__coeur) ; le tronçon
            venu du chapitre 03 le rejoint directement, en un seul morceau
            (REG-RENDU-1 : l'ancien repère intermédiaire posé sur l'entête
            cassait la liaison, son tracé s'arrêtant net avant le point). */}
        <OuvertureChapitre numero="04" etiquette="Ce que ça donne">
          <h2 id="preuve-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
            Trois interventions, trois besoins différents.
          </h2>
        </OuvertureChapitre>

        {/* Le point de la passe (M3, « 03 → résultats du client », or sur
            bleu) arrive ici, sur le cas principal ; le tronçon repart vers
            05 (voir BandeauCoeur.tsx, composant client séparé de cette page
            pour la même raison que HeroTrace.tsx). */}
        <BandeauCoeur>
          <div className="cas-principal">
            <Etiquette texte="Faire exister" />
            {/* Le résultat en tête, puis le contexte et la presse côte à côte
                à partir de 768 px (décision de Landry du 25/09/2026 : en
                grand écran, une colonne de texte à gauche laissait la moitié
                droite du cadre vide). « Trois millions de vues, tous relais
                confondus. » retiré à la demande de Landry (18/09/2026) : un
                seul résultat en or. */}
            <p className="cas-principal__chiffres">Cinq cents maillots vendus sur la collection.</p>
            <div className="cas-principal__textes">
            <p className="paragraphe">
              Un club de district. Une sortie de maillot. Aucun budget publicitaire. Stratégie,
              calendrier, contenus, mise en relation avec des personnalités&nbsp;: porté par un rappeur
              à large audience, un ancien joueur professionnel devenu animateur, remarqué par un
              ancien designer de maillots.
            </p>
            <p className="cas-principal__detail">
              <strong>
                Repris par la presse nationale — quotidien sportif, radios, journal télévisé — sans
                un euro de budget presse.
              </strong>{" "}
              Un grand quotidien régional a classé ce club de district aux côtés de clubs européens
              connus dans le monde entier pour leurs maillots. D&rsquo;autres clubs ont depuis
              repris la recette.
            </p>
            </div>

            {/* La preuve en images (décision de Landry du 25/09/2026, après la
                critique Impeccable : cinq chapitres sur sept ne montraient
                aucune image alors que l'agence vend de la production vidéo et
                photo). Vraies photos du cas raconté juste au-dessus, jamais
                d'image générée — une image générée ici serait une fausse
                pièce à conviction. Liste dans site-config.ts. */}
            <figure className="cas-images">
              <div className="cas-images__grille">
                {casImages.map((image) => (
                  <Image
                    key={image.fichier}
                    src={image.fichier}
                    alt={image.alt}
                    width={1400}
                    height={933}
                    sizes="(min-width: 768px) 620px, 90vw"
                    className="cas-images__photo"
                  />
                ))}
              </div>
              <figcaption className="legende cas-images__legende">
                La sortie de maillot du FC Rocquancourt.
              </figcaption>
            </figure>
          </div>

          <div className="cas-duo">
            <CarteProfil
              etiquette="Mettre en relation"
              titre="Une plateforme reliée à son écosystème"
              donnees={[
                "Reprise de sa communication et d’une partie de son site, mise en relation avec des personnalités passionnées, accompagnement vers un partenariat avec une grande plateforme de vente en ligne.",
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
                  Agence appelée à deux jours de l&rsquo;ouverture&nbsp;: stratégie d&rsquo;urgence,
                  tenue des équipes, coordination pendant et après.{" "}
                  <strong>Objectif d&rsquo;affluence atteint.</strong>
                </p>
              </div>
            </div>
          </div>

          <p className="citation-preuve">
            <strong>«&nbsp;Notre meilleur travail, personne ne sait que c&rsquo;est nous.&nbsp;»</strong>
          </p>

          {/* Les références (décision de Landry du 18/09/2026, accord écrit de
              chacune) : logos en une seule couleur, crème sur le bleu. Liste
              dans src/lib/site-config.ts. */}
          <div className="references">
            <Etiquette texte="Ils travaillent avec nous" />
            <ul
              className="references__liste"
              role="list"
              style={{ "--nb-references": references.length } as CSSProperties}
            >
              {references.map((reference) => (
                <li key={reference.nom}>
                  <Image
                    src={reference.fichier}
                    alt={reference.nom}
                    width={reference.largeur}
                    height={reference.hauteur}
                    className="references__logo"
                    style={{ "--echelle-logo": reference.echelle } as CSSProperties}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="actions" style={{ justifyContent: "center" }}>
            <Bouton texte="Parler du projet" href="/#contact" />
          </div>

          <div className="bandeau__liseré" aria-hidden="true">
            <MotifMaison largeur={1200} hauteur={18} />
          </div>
        </BandeauCoeur>
      </section>

      {/* 05 — Comment ça se passe : solution budget, cinq étapes. « Les règles du
          jeu » retirées le 25/09/2026 à la demande de Landry : c'est le discours
          à tenir en rendez-vous, pas sur le site.
          (src/app/methode/page.tsx, CONTENU/Regista_methode.md §3, §5, §6) */}
      <section id="deroule" aria-labelledby="deroule-titre">
        <div className="enveloppe marge-passe">
          {/* Dernier point de la passe (M3, « 04 → 05 ») : après lui, plus
              aucun tronçon ni point (rien sur 06 — À propos). */}
          <OuvertureChapitre numero="05" etiquette="Comment ça se passe" idPoint="passe-05">
            {/* Titre choisi par Landry le 18/09/2026 : l'étiquette dit déjà
                « Comment ça se passe » (et reste le nom du chapitre dans le
                sommaire), le titre nomme la méthode. */}
            <h2 id="deroule-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
              La méthode Regista
            </h2>
          </OuvertureChapitre>

          {/* Zigzag à partir de 768px (site.css, décision de Landry du
              18/09/2026) : bloc 1 du chapitre, calé à gauche. */}
          {/* Deux colonnes à partir de 768 px (décision de Landry du
              25/09/2026) : le texte à gauche, la phrase-clé en grand à droite,
              au lieu d'une colonne étroite au-dessus d'une frise pleine
              largeur. Même traitement que « La matière ne manque pas ». */}
          <div className="section solution-duo">
            <div>
            <h3 className="titre-bloc">Il y a toujours une solution</h3>
            <p className="paragraphe" style={{ marginTop: "var(--e-4)" }}>
              Une structure nous dit rarement «&nbsp;je n&rsquo;ai pas d&rsquo;idée&nbsp;». Elle nous
              dit «&nbsp;je n&rsquo;ai pas les moyens&nbsp;». Un beau maillot n&rsquo;est pas
              forcément un
              maillot cher. C&rsquo;est la raison pour laquelle nous parlons de votre enveloppe dès
              le premier appel.
            </p>
            </div>
            <p className="paragraphe paragraphe--marquant solution-duo__phrase">
              Nous n&rsquo;adaptons pas votre ambition à votre budget. Nous adaptons les moyens.
            </p>
          </div>

          <ol className="etapes" role="list">
            {/* Les cinq étapes SORTENT de l'alternance (critique Impeccable du
                25/09/2026, problème P1, accord de Landry le même jour) : elles
                alternaient gauche/droite, ce qui faisait traverser 1 440 px au
                regard sept fois dans ce seul chapitre, avec des vides
                verticaux de ~280 px entre des blocs pourtant liés — les
                éléments liés se retrouvaient plus éloignés que les éléments
                sans rapport. Une suite ordonnée se lit en colonne. */}
            {/* Frise animée (décision de Landry du 25/09/2026) : chaque
                « Étape 0X » devient une case qui se remplit de gauche à
                droite, sur le modèle du tournage groupé (deux couches, voir
                .schema-tournage). En grand écran, les cinq cases forment une
                frise qui se remplit dans l'ordre ; en mobile, chacune se
                remplit en arrivant à l'écran. */}
            {ETAPES.map((etape, i) => (
              <EnScene
                as="li"
                key={etape.numero}
                className="etapes__item"
                seuil={0.3}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="etapes__numero">
                  <span className="etapes__numero-texte">Étape {etape.numero}</span>
                  <span className="etapes__numero-remplissage" aria-hidden="true">
                    Étape {etape.numero}
                  </span>
                </span>
                <div>
                  <h3 className="titre-bloc">{etape.titre}</h3>
                  <p className="paragraphe etapes__phrase">{etape.phrase}</p>
                  <p className="petit etapes__mots">{etape.motsCles.join(" · ")}</p>
                </div>
              </EnScene>
            ))}
          </ol>

        </div>
      </section>

      {/* 06 — À propos (src/app/a-propos/page.tsx, CONTENU/Regista_apropos.md) */}
      <section id="a-propos" aria-labelledby="a-propos-titre">
        <div className="enveloppe marge-passe">
          {/* Aucun tronçon ni point ici (CONTENU/Plan_one_page.md, section 3,
              M3) : Regista y parle d'elle-même, aucun or sur ce chapitre. */}
          <OuvertureChapitre numero="06" etiquette="À propos">
            <h2 id="a-propos-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
              Raconter, c&rsquo;est déjà servir
            </h2>
          </OuvertureChapitre>

          <p className="paragraphe">
            Regista est une agence football. Le mot désigne, en italien, le chef d&rsquo;orchestre.
            Sur un terrain, c&rsquo;est le meneur de jeu&nbsp;: celui qui oriente le jeu et fait briller
            les autres.
          </p>

          {/* Zigzag à partir de 768px (site.css, décision de Landry du
              18/09/2026) : bloc 1 du chapitre, calé à gauche. Le paragraphe
              d'intro juste au-dessus n'a pas de sous-titre : il ne compte pas
              dans l'alternance et ne change pas. */}
          {/* Portrait de Landry (choix de Landry du 18/09/2026, couleurs
              naturelles, logo Rosyne du sweat gardé à sa demande) : le seul
              visage du site, ici et nulle part ailleurs — là où Regista parle
              d'elle-même, jamais en haut de page. Sur téléphone, entre le
              sous-titre et le texte ; à partir de 768 px, à droite du texte
              (voir .bloc-portrait dans site.css). */}
          <div className="section bloc-zigzag bloc-portrait">
            <h3 className="titre-bloc">Pourquoi l&rsquo;agence existe</h3>
            <figure className="portrait">
              <Image
                src="/equipe/landry-celina.jpg"
                alt="Portrait de Landry Célina"
                width={800}
                height={1000}
                sizes="(min-width: 768px) 340px, 70vw"
                className="portrait__image"
              />
              <figcaption>
                <Etiquette texte="Landry Célina — Fondateur" />
              </figcaption>
            </figure>
            <p className="paragraphe" style={{ marginTop: "var(--e-4)" }}>
              Landry Célina a cofondé un média lifestyle — football, cinéma, mode, cuisine, art, et
              plus d&rsquo;un million d&rsquo;abonnés cumulés. Il y a été rédacteur et animateur,
              puis en a dirigé la rédaction pendant six ans. Il a été formé en club amateur, où il a
              joué défenseur gauche, gardien et milieu relayeur.
            </p>
            <p className="paragraphe">
              De ces deux histoires vient la même conviction&nbsp;: une structure de football produit en
              permanence de la matière — des parcours, des rencontres, des gens qui tiennent tout à
              bout de bras — et presque personne ne la raconte. Non par manque d&rsquo;envie. Par
              manque de temps, et parce que raconter est un métier. Regista fait ce métier pour
              elles.
            </p>
          </div>

          {/* « Comment nous travaillons » (interlocuteur unique, réseau de
              partenaires) retiré le 25/09/2026 à la demande de Landry. */}
          <div className="section bloc-zigzag">
            <h3 className="titre-bloc">Notre principe</h3>
            <p className="paragraphe" style={{ marginTop: "var(--e-4)" }}>
              Regista n&rsquo;appose jamais sa signature sur les livrables de ses clients. Le
              travail que nous produisons est le vôtre, et il porte votre nom. Nous nous mettons
              devant quand il faut encaisser&nbsp;: les démarches ingrates, les relances, les refus, la
              complexité administrative. Vous, vous jouez.
            </p>
            <p className="paragraphe">
              C&rsquo;est aussi pour cette raison que nos propres supports sont les seuls que nous
              signons. Ils sont notre unique vitrine.
            </p>
          </div>

          {/* La carte « Postes — Sur le terrain » a été retirée à la demande
              de Landry (18/09/2026) ; les postes restent cités dans le texte
              de « Pourquoi l'agence existe ». */}
        </div>
      </section>

      {/* 07 — Contact : l'arrivée (src/app/contact/page.tsx, CONTENU/Regista_methode.md §9) */}
      <section id="contact" aria-labelledby="contact-titre">
        <div className="enveloppe marge-passe">
          <OuvertureChapitre numero="07" etiquette="Contact">
            <h2 id="contact-titre" className="titre-chapitre rg-focusable" tabIndex={-1}>
              Un appel de vingt minutes suffit à savoir si nous pouvons vous être utiles.
            </h2>
          </OuvertureChapitre>

          <p className="chapo">
            Vous n&rsquo;avez rien à préparer. Nous venons avec des questions, pas avec un
            catalogue.
          </p>

          {/* Le numéro de téléphone n'est plus affiché ici (demande de Landry
              du 18/09/2026) : le contact se fait par e-mail. Il reste dans
              siteConfig pour les mentions légales, où la loi l'exige.

              Critique Impeccable du 25/09/2026, problème P0 (accord de Landry
              le même jour) : le bouton plein disparaissait à l'endroit exact
              où il faut agir — le chapitre 07 n'offrait qu'un lien texte de
              28 px de haut, et un « mailto: » échoue EN SILENCE sur un poste
              sans client mail configuré (cas courant dans un district). Les
              deux chemins coexistent donc désormais : le bouton pour ceux qui
              ont un client mail, l'adresse en clair juste dessous pour les
              autres — sélectionnable d'un seul clic (.coordonnees__adresse,
              site.css). */}
          <div className="coordonnees">
            <div className="actions">
              <Bouton texte="Écrire à Landry" href={`mailto:${email}`} />
            </div>
            {/* La réassurance au moment d'agir (critique Impeccable du
                25/09/2026) : rien, sur la page, ne disait au visiteur ce qui
                se passe après son mail. Délai donné par Landry le
                25/09/2026 — à corriger ici, et nulle part ailleurs, s'il
                change. */}
            <p className="coordonnees__reponse">Réponse sous 24 heures.</p>
            <p className="coordonnees__adresse">
              Ou copiez l&rsquo;adresse&nbsp;:{" "}
              <span className="coordonnees__valeur">{email}</span>
            </p>
          </div>

          {/* M4 — l'arrivée : la dernière passe, horizontale, pointe « VOTRE
              PROJET » (CONTENU/Plan_one_page.md, section 3). Reprend
              <Trajectoire> du design system telle quelle (pas de nouveau
              composant), révélée de gauche à droite par clip-path — jamais de
              max-width, qui rétrécissait le SVG dans l'ancien TraceEnScene. */}
          <EnScene as="div" className="arrivee-passe" seuil={0.3}>
            <span className="arrivee-passe__trait">
              <Trajectoire largeur={64} epaisseur={5} />
            </span>
            <div className="point-arrivee">
              <span className="point-arrivee__point" aria-hidden="true" />
              <Etiquette texte="Votre projet" ton="forte" />
            </div>
          </EnScene>

          <div className="section">
            <Note texte="Aucun tarif n’est communiqué avant devis." />
          </div>
        </div>
      </section>
    </Gabarit>
  );
}
