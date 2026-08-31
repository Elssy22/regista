import type { Metadata } from "next";
import LegalLayout, { legalStyles as styles, ToDo } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales — Regista",
  description: "Mentions légales du site Regista.",
};

export default function MentionsLegalesPage() {
  const { contact, legal } = siteConfig;

  return (
    <LegalLayout title="Mentions légales" updated="Dernière mise à jour : août 2026">
      <section className={styles.section}>
        <h2 className={styles.h2}>1. Éditeur du site</h2>
        <div className={styles.dl}>
          <span className={styles.dt}>{"Dénomination sociale"}</span>
          <p className={styles.dd}>{legal.raisonSociale}</p>

          <span className={styles.dt}>{"Forme juridique"}</span>
          <p className={styles.dd}>
            {"Société par actions simplifiée unipersonnelle (SASU)"}
          </p>

          <span className={styles.dt}>{"Capital social"}</span>
          <p className={styles.dd}>
            <ToDo>montant du capital social</ToDo>
          </p>

          <span className={styles.dt}>{"Siège social"}</span>
          <p className={styles.dd}>{legal.adresse.join(", ")}</p>

          <span className={styles.dt}>{"SIREN"}</span>
          <p className={styles.dd}>{legal.siren}</p>

          <span className={styles.dt}>{"RCS"}</span>
          <p className={styles.dd}>
            {legal.siren}
            {" R.C.S. "}
            <ToDo>ville du greffe</ToDo>
          </p>

          <span className={styles.dt}>{"N° TVA intracommunautaire"}</span>
          <p className={styles.dd}>
            <ToDo>numéro de TVA, le cas échéant</ToDo>
          </p>

          <span className={styles.dt}>{"E-mail"}</span>
          <p className={styles.dd}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>

          <span className={styles.dt}>{"Téléphone"}</span>
          <p className={styles.dd}>
            <ToDo>numéro de téléphone</ToDo>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Directeur de la publication</h2>
        <p className={styles.p}>
          {"Le directeur de la publication du site est Landry Célina, représentant légal de "}
          {legal.raisonSociale}
          {"."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Hébergement</h2>
        <p className={styles.p}>
          {"Le site est hébergé par Vercel Inc., dont les services sont accessibles à l'adresse "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          {"."}
        </p>
        <p className={styles.p}>
          <span className={styles.dt}>{"Adresse postale de l'hébergeur : "}</span>
          <ToDo>
            adresse de Vercel Inc. à reporter depuis sa page légale, ou coordonnées de
            l&apos;hébergeur définitif
          </ToDo>
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
          {"Le site ne comporte aucun formulaire et ne collecte pas directement de données personnelles lors de la navigation."}
        </p>
        <p className={styles.p}>
          {"La prise de rendez-vous est assurée par le service tiers Calendly. Lorsque vous réservez un créneau, les informations que vous saisissez (nom, e-mail, éventuelles réponses) sont traitées par Calendly selon sa propre politique de confidentialité."}
        </p>
        <p className={styles.p}>
          {"Pour en savoir plus sur le traitement de vos données et vos droits, consultez notre "}
          <a href="/politique-confidentialite">politique de confidentialité</a>
          {"."}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Cookies</h2>
        <p className={styles.p}>
          {"Le site n'utilise pas de cookies de suivi ou de mesure d'audience à des fins publicitaires. Le widget de prise de rendez-vous Calendly, intégré à la page, est toutefois susceptible de déposer des cookies nécessaires à son fonctionnement lors de son utilisation."}
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
    </LegalLayout>
  );
}
