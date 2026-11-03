import { methode } from "@/lib/contenu";
import styles from "./FriseMethode.module.css";

/**
 * La méthode en frise chronologique (accueil, dans le bloc « Parlons-en »).
 * Horizontale sur grand écran, verticale en dessous de 992 px. Le trait se
 * dessine au fil du défilement et chaque pastille s'allume quand il
 * l'atteint (CSS seul, voir le module). Sans animation, la frise s'affiche
 * directement complète.
 */
export function FriseMethode() {
  return (
    <div className={styles.cadre}>
      <h2 id="titre-methode" className={`titre-section ${styles.titre}`}>
        Notre méthode
      </h2>
      <ol className={styles.frise} aria-labelledby="titre-methode">
        {methode.map((etape, i) => (
          <li key={etape.titre} className={styles.etape} style={{ "--i": i } as React.CSSProperties}>
            <span className={styles.point} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={styles.contenu}>
              <p className={styles.numero}>Étape {i + 1}</p>
              <h3>{etape.titre}</h3>
              <p className={styles.texte}>{etape.texte}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
