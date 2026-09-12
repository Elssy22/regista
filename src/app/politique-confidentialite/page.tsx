import type { Metadata } from "next";
import LegalLayout, { legalStyles as styles } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Regista",
  description:
    "Politique de confidentialité du site Regista : données collectées, finalités, droits (RGPD).",
};

export default function PolitiqueConfidentialitePage() {
  const { contact, legal } = siteConfig;

  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="Dernière mise à jour : août 2026"
    >
      <section className={styles.section}>
        <p className={styles.p}>
          {"La présente politique explique quelles données personnelles sont traitées dans le cadre de l'utilisation du site "}
          {legal.raisonSociale}
          {", à quelles fins, et quels sont vos droits. Elle est établie conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés »."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Responsable du traitement</h2>
        <p className={styles.p}>
          {"Le responsable du traitement est "}
          {legal.raisonSociale}
          {", "}
          {legal.adresse.join(", ")}
          {". Pour toute question relative à vos données, vous pouvez écrire à "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {"."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Données que nous traitons</h2>
        <p className={styles.p}>
          {"La simple consultation du site ne nécessite pas la création de compte et le site ne comporte aucun formulaire. Comme tout site web, notre hébergeur (Vercel) enregistre toutefois des données techniques de connexion (adresse IP, type de navigateur, pages consultées) à des fins de fonctionnement et de sécurité. Ces journaux sont conservés pour une durée limitée."}
        </p>
        <p className={styles.p}>
          {"Une action entraîne un traitement de données que vous fournissez vous-même : la prise de rendez-vous. Elle s'effectue via le service tiers Calendly, chargé uniquement après un clic de votre part. Lors d'une réservation, vous communiquez notamment :"}
        </p>
        <ul className={styles.list}>
          <li>{"votre nom ;"}</li>
          <li>{"votre adresse e-mail ;"}</li>
          <li>{"le créneau choisi et, le cas échéant, les réponses aux questions du formulaire de réservation."}</li>
        </ul>
        <p className={styles.p}>
          {"La prise de rendez-vous est destinée aux personnes majeures (dirigeants, responsables, entraîneurs…). Si vous êtes mineur, merci de faire réserver le créneau par un parent ou un responsable légal."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Finalités et base légale</h2>
        <p className={styles.p}>
          {"Ces données sont utilisées uniquement pour organiser et confirmer l'entretien que vous avez réservé, puis pour assurer le suivi de votre demande. La base légale est l'exécution de mesures précontractuelles prises à votre demande, et notre intérêt légitime à répondre aux personnes qui nous sollicitent."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Destinataires et sous-traitants</h2>
        <p className={styles.p}>
          {"Vos données de réservation sont traitées par Calendly, qui agit en qualité de prestataire. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales. Le site est par ailleurs hébergé par Vercel Inc."}
        </p>
        <p className={styles.p}>
          {"Ces prestataires étant susceptibles d'être établis en dehors de l'Union européenne (notamment aux États-Unis), les transferts de données correspondants sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types ou mécanismes équivalents)."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Durée de conservation</h2>
        <p className={styles.p}>
          {`Les données liées à une demande de rendez-vous sont conservées le temps nécessaire au traitement de votre demande, puis pendant ${legal.dureeConservation}`}
          {". Les données gérées via Calendly sont conservées conformément aux paramètres de notre compte et à la politique de Calendly."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Vos droits</h2>
        <p className={styles.p}>
          {"Vous disposez des droits suivants sur vos données : droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité."}
        </p>
        <p className={styles.p}>
          {"Pour les exercer, écrivez à "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {". Nous répondons dans un délai maximum d'un mois. Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL ("}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>
          {")."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>7. Cookies</h2>
        <p className={styles.p}>
          {"Le site n'utilise pas de cookies de mesure d'audience ou de publicité. Le widget Calendly, lorsqu'il est utilisé, peut déposer des cookies strictement nécessaires à son fonctionnement."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>8. Contact</h2>
        <p className={styles.p}>
          {"Pour toute question sur cette politique ou sur le traitement de vos données, contactez-nous à "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {"."}
        </p>
      </section>
    </LegalLayout>
  );
}
