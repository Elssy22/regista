import { methode } from "@/lib/contenu";
import styles from "./Methode.module.css";

/**
 * Les cinq étapes, sur la ligne en pointillés dorés du deck. À l'écran,
 * la ligne se trace de gauche à droite (de haut en bas sur mobile).
 */
export function Methode() {
  return (
    <section id="methode" className={`section fond-creme texture ${styles.methode}`} aria-labelledby="titre-methode">
      <div className="conteneur">
        <p className="surtitre" data-apparait>
          Comment on travaille
        </p>
        <h2 id="titre-methode" className="titre-section" data-apparait>
          Notre méthode.
        </h2>

        <ol className={styles.etapes} data-apparait>
          {methode.map((etape, i) => (
            <li key={etape.titre} className={styles.etape} style={{ "--i": i } as React.CSSProperties}>
              <span className={styles.point} aria-hidden="true" />
              <span className={styles.numero}>Étape {i + 1}</span>
              <h3 className={styles.titre}>{etape.titre}</h3>
              <p className={styles.texte}>{etape.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
