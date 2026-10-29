import { metiers } from "@/lib/contenu";
import styles from "./Metiers.module.css";

/** Les cinq métiers, en grille de cartes (« Services » du template). */
export function Metiers() {
  return (
    <section id="metiers" className="section fond-creme texture" aria-labelledby="titre-metiers">
      <div className="conteneur">
        <p className="surtitre" data-apparait>
          Nos métiers
        </p>
        <h2 id="titre-metiers" className="titre-section" data-apparait>
          Présents sur tous les terrains.
        </h2>

        <ol className={styles.grille}>
          {metiers.map((m, i) => (
            <li
              key={m.titre}
              className={styles.case}
              data-apparait
              style={{ "--delai": `${(i % 3) * 0.08}s` } as React.CSSProperties}
            >
              <div className={styles.carte}>
                <span className={styles.numero}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.titre}>{m.titre}</h3>
                <p className={styles.texte}>{m.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
