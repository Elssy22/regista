import Link from "next/link";
import { Fleche } from "../Icones";
import styles from "./CarteMetier.module.css";

/**
 * Une carte de métier (service-item du template). Avec href, toute la carte
 * est cliquable (le lien du titre s'étend sur la carte).
 */
export function CarteMetier({
  numero,
  titre,
  texte,
  delai,
  href,
}: {
  numero: number;
  titre: string;
  texte: string;
  delai: number;
  href?: string;
}) {
  return (
    <article className={styles.carte} data-apparait style={{ "--delai": `${delai}s` } as React.CSSProperties}>
      <span className={styles.numero}>{String(numero).padStart(2, "0")}</span>
      <span className={styles.fleche} aria-hidden="true">
        <Fleche />
      </span>
      <h3 className={styles.titre}>
        {href ? (
          <Link href={href} className={styles.lien}>
            {titre}
          </Link>
        ) : (
          titre
        )}
      </h3>
      <p className={styles.texte}>{texte}</p>
    </article>
  );
}
