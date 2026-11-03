import type { Metadata } from "next";
import { PageLegale, legal as styles } from "@/components/legal/PageLegale";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Regista : données collectées, finalités, droits (RGPD).",
};

export default function PolitiqueConfidentialitePage() {
  const { contact, legal } = siteConfig;

  return (
    <PageLegale titre="Politique de confidentialité" miseAJour="Dernière mise à jour : août 2026">
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
          {"La simple consultation du site ne nécessite pas la création de compte. Comme tout site web, notre hébergeur (Vercel) enregistre toutefois des données techniques de connexion (adresse IP, type de navigateur, pages consultées) à des fins de fonctionnement et de sécurité. Ces journaux sont conservés pour une durée limitée."}
        </p>
        <p className={styles.p}>
          {`Aucune autre donnée n'est collectée par le site lui-même. Le formulaire de contact prépare un e-mail dans votre messagerie, que vous envoyez vous-même. La prise de rendez-vous renvoie vers Calendly, service tiers soumis à sa propre politique de confidentialité : nous recevons alors les informations que vous y indiquez. Les coordonnées et informations que vous nous transmettez, par e-mail, par téléphone ou via Calendly, sont utilisées uniquement pour traiter votre demande, et conservées pendant ${legal.dureeConservation}.`}
        </p>
        <p className={styles.p}>
          {"Regista s'adresse à des structures et à leurs représentants majeurs. L'agence ne collecte pas sciemment de données concernant des mineurs et ne travaille pas en direct avec eux."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Finalités et base légale</h2>
        <p className={styles.p}>
          {"Ces données sont utilisées uniquement pour répondre à votre demande et en assurer le suivi. La base légale est l'exécution de mesures précontractuelles prises à votre demande, et notre intérêt légitime à répondre aux personnes qui nous sollicitent."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Destinataires et sous-traitants</h2>
        <p className={styles.p}>
          {"Vos données ne sont ni vendues, ni cédées à des tiers à des fins commerciales. Le seul prestataire destinataire de données techniques est notre hébergeur, Vercel Inc."}
        </p>
        <p className={styles.p}>
          {"Ce prestataire étant établi en dehors de l'Union européenne (aux États-Unis), les transferts de données correspondants sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types ou mécanismes équivalents)."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Durée de conservation</h2>
        <p className={styles.p}>
          {`Les informations que vous nous transmettez par e-mail ou par téléphone sont conservées le temps nécessaire au traitement de votre demande, puis pendant ${legal.dureeConservation}.`}
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
          {"Le site ne dépose aucun cookie : ni mesure d'audience, ni publicité, ni service tiers. Les polices de caractères sont hébergées sur nos propres serveurs, et aucune ressource n'est chargée depuis un site extérieur."}
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
    </PageLegale>
  );
}
