import { partenaires } from "@/lib/contenu";
import { Courbe } from "../Icones";
import styles from "./Partenaires.module.css";

/** Les partenaires du deck, en cartes (« Testimonials » du template). */
export function Partenaires() {
  return (
    <section
      id="partenaires"
      className={`section fond-bleu texture ${styles.partenaires}`}
      aria-labelledby="titre-partenaires"
    >
      <Courbe className={styles.courbe} />
      <div className="conteneur">
        <p className="surtitre" data-apparait>
          Le collectif
        </p>
        <h2 id="titre-partenaires" className="titre-section" data-apparait>
          Nos partenaires.
        </h2>
        <p className="chapo" data-apparait>
          En fonction de vos besoins, nous faisons appel à des personnes compétentes et pertinentes.
        </p>

        <ul className={styles.grille}>
          {partenaires.map((p, i) => (
            <li
              key={p.nom}
              className={styles.case}
              data-apparait
              style={{ "--delai": `${(i % 3) * 0.08}s` } as React.CSSProperties}
            >
              <article className={styles.carte}>
                <h3 className={styles.nom}>{p.nom}</h3>
                <p className={styles.role}>{p.role}</p>
                <p className={styles.question}>Ses points forts ?</p>
                <p className={styles.texte}>{p.texte}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
