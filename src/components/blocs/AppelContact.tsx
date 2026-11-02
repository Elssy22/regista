import Link from "next/link";
import styles from "./AppelContact.module.css";

/**
 * Le très grand appel du template, « Un projet en tête ? Parlons-en », sur
 * fond or. En bas des pages, il mène à la page Contact ; juste avant le
 * formulaire (accueil), il descend jusqu'à lui (href="#contact").
 */
export function AppelContact({ href = "/contact" }: { href?: string }) {
  return (
    <section className={`fond-or ${styles.appel}`} aria-label="Nous contacter">
      <div className="conteneur">
        <p className={styles.question}>Un projet en tête ?</p>
        <p className={styles.geant}>
          <Link href={href}>Parlons-en</Link>
        </p>
      </div>
    </section>
  );
}
