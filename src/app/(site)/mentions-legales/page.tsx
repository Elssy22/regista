import type { Metadata } from "next";
import Link from "next/link";
import { PageLegale, legal as styles } from "@/components/legal/PageLegale";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Regista.",
};

export default function MentionsLegalesPage() {
  const { contact, legal } = siteConfig;

  return (
    <PageLegale titre="Mentions légales" miseAJour="Dernière mise à jour : août 2026">
      <section className={styles.section}>
        <h2 className={styles.h2}>1. Éditeur du site</h2>
        <div className={styles.dl}>
          <span className={styles.dt}>{"Dénomination sociale"}</span>
          <p className={styles.dd}>{legal.raisonSociale}</p>

          <span className={styles.dt}>{"Forme juridique"}</span>
          <p className={styles.dd}>
            {legal.formeJuridique}
          </p>

          <span className={styles.dt}>{"Capital social"}</span>
          <p className={styles.dd}>
            {legal.capitalSocial}
          </p>

          <span className={styles.dt}>{"Siège social"}</span>
          <p className={styles.dd}>{legal.adresse.join(", ")}</p>

          <span className={styles.dt}>{"SIREN"}</span>
          <p className={styles.dd}>{legal.siren}</p>

          <span className={styles.dt}>{"RCS"}</span>
          <p className={styles.dd}>
            {legal.siren}
            {" R.C.S. "}
            {legal.villeGreffe}
          </p>

          <span className={styles.dt}>{"TVA"}</span>
          <p className={styles.dd}>{legal.mentionTva}</p>

          <span className={styles.dt}>{"E-mail"}</span>
          <p className={styles.dd}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>

          <span className={styles.dt}>{"Téléphone"}</span>
          <p className={styles.dd}>
            <a href={`tel:${contact.telephoneLien}`}>{contact.telephoneAffiche}</a>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Directeur de la publication</h2>
        <p className={styles.p}>
          {"Le directeur de la publication du site est "}
          {legal.directeurPublication}
          {", représentant légal de "}
          {legal.raisonSociale}
          {"."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Hébergement</h2>
        <p className={styles.p}>
          {`Le site est hébergé par ${legal.hebergeur.nom}, dont les services sont accessibles à l'adresse `}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          {"."}
        </p>
        <p className={styles.p}>
          <span className={styles.dt}>{"Adresse postale de l'hébergeur : "}</span>
          {legal.hebergeur.adresse}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Propriété intellectuelle</h2>
        <p className={styles.p}>
          {"L'ensemble des éléments du site (textes, visuels, photographies, logo, charte graphique, mise en page) est la propriété de "}
          {legal.raisonSociale}
          {", sauf mention contraire, et est protégé par le droit d'auteur et le droit des marques."}
        </p>
        <p className={styles.p}>
          {"Toute reproduction, représentation, modification ou exploitation, totale ou partielle, de ces éléments, par quelque procédé que ce soit, sans autorisation écrite préalable, est interdite et constituerait une contrefaçon."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Données personnelles</h2>
        <p className={styles.p}>
          {"Le site ne collecte pas directement de données personnelles lors de la navigation. Son formulaire de contact n'envoie rien par lui-même : il ouvre votre logiciel de messagerie avec votre message prérempli, que vous restez libre d'envoyer."}
        </p>
        <p className={styles.p}>
          {"Si vous nous écrivez, nous appelez ou réservez un rendez-vous, les coordonnées que vous nous transmettez sont utilisées uniquement pour vous répondre. La prise de rendez-vous se fait sur Calendly, un service tiers soumis à sa propre politique de confidentialité."}
        </p>
        <p className={styles.p}>
          {"Pour en savoir plus sur le traitement de vos données et vos droits, consultez notre "}
          <Link href="/politique-confidentialite">politique de confidentialité</Link>
          {"."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Cookies</h2>
        <p className={styles.p}>
          {"Le site ne dépose aucun cookie : ni mesure d'audience, ni publicité, ni service tiers. Les polices de caractères sont hébergées sur nos propres serveurs, et aucune ressource n'est chargée depuis un site extérieur."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>7. Responsabilité</h2>
        <p className={styles.p}>
          {legal.raisonSociale}
          {" s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, mais ne peut en garantir l'exhaustivité. Le site peut contenir des liens vers des sites tiers dont "}
          {legal.raisonSociale}
          {" ne maîtrise pas le contenu et ne saurait être tenue responsable."}
        </p>
      </section>
    </PageLegale>
  );
}
