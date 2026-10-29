import { siteConfig } from "@/lib/site-config";
import styles from "./Contact.module.css";

/** Le grand appel final, repris du « Let's work » du template. */
export function Contact() {
  const { email, telephoneAffiche, telephoneLien } = siteConfig.contact;
  return (
    <section id="contact" className={`section fond-creme texture ${styles.contact}`} aria-labelledby="titre-contact">
      <div className="conteneur">
        <p className={styles.question} data-apparait>
          Vous souhaitez nous contacter ?
        </p>
        <h2 id="titre-contact" className={styles.geant} data-apparait style={{ "--delai": "0.1s" } as React.CSSProperties}>
          <a href={`mailto:${email}`}>Parlons-en.</a>
        </h2>
        <ul className={styles.coordonnees} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <li>
            <span className={styles.libelle}>E-mail</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span className={styles.libelle}>Téléphone</span>
            <a href={`tel:${telephoneLien}`}>{telephoneAffiche}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
