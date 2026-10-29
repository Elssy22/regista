import Link from "next/link";
import { Monogramme } from "./Logo";
import styles from "./PiedDePage.module.css";

/** Le pied de page reprend le bandeau bas des pages du deck. */
export function PiedDePage() {
  return (
    <footer className={`fond-bleu ${styles.pied}`}>
      <div className={`conteneur ${styles.barre}`}>
        <p className={styles.signature}>Regista · Agence football · 2026</p>
        <ul className={styles.liens}>
          <li>
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </li>
        </ul>
        <Monogramme className={styles.r} titre="Regista" />
      </div>
    </footer>
  );
}
