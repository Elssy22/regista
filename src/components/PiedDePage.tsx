import Link from "next/link";
import styles from "./PiedDePage.module.css";

/**
 * Le pied de page du template, sur toutes les pages : « Un projet en tête ? »
 * et le très grand appel, puis la ligne de bas de page.
 */
export function PiedDePage() {
  return (
    <footer className={`fond-or ${styles.pied}`}>
      <div className={`conteneur ${styles.haut}`}>
        <p className={styles.question}>Un projet en tête ?</p>
        <p className={styles.geant}>
          <Link href="/contact">Parlons-en</Link>
        </p>
      </div>
      <div className={`conteneur ${styles.bas}`}>
        <p>Regista · Agence football</p>
        <ul>
          <li>
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </li>
          <li>© {new Date().getFullYear()} Regista</li>
        </ul>
      </div>
    </footer>
  );
}
