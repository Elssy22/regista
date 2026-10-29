import { Fleche } from "../Icones";
import styles from "./CarteMetier.module.css";

/** Une carte de métier (service-item du template). */
export function CarteMetier({ numero, titre, texte, delai }: { numero: number; titre: string; texte: string; delai: number }) {
  return (
    <article className={styles.carte} data-apparait style={{ "--delai": `${delai}s` } as React.CSSProperties}>
      <span className={styles.numero}>{String(numero).padStart(2, "0")}</span>
      <span className={styles.fleche} aria-hidden="true">
        <Fleche />
      </span>
      <h3 className={styles.titre}>{titre}</h3>
      <p className={styles.texte}>{texte}</p>
    </article>
  );
}
