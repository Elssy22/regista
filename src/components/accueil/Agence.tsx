import { chiffres, manifeste } from "@/lib/contenu";
import { Courbe, Guillemet } from "../Icones";
import styles from "./Agence.module.css";

/** Le manifeste du deck et les chiffres clés (« About me » du template). */
export function Agence() {
  return (
    <section id="agence" className={`section fond-bleu texture ${styles.agence}`} aria-labelledby="titre-agence">
      <Courbe className={styles.courbe} />
      <div className={`conteneur ${styles.grille}`}>
        <h2 id="titre-agence" className="surtitre" data-apparait>
          L&apos;agence
        </h2>
        <div>
          <Guillemet className={styles.guillemet} />
          <p className={styles.manifeste} data-apparait>
            {manifeste}
          </p>
        </div>
      </div>

      <div className="conteneur">
        <ul className={styles.chiffres}>
          {chiffres.map((c, i) => (
            <li key={c.libelle} data-apparait style={{ "--delai": `${i * 0.08}s` } as React.CSSProperties}>
              <span className={styles.valeur}>{c.valeur}</span>
              <span className={styles.libelle}>{c.libelle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
