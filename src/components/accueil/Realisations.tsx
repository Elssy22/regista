import { realisations } from "@/lib/contenu";
import { CarteRealisation } from "../CarteRealisation";
import styles from "./Realisations.module.css";

/** Les réalisations (« Projects » du template), chacune avec sa page. */
export function Realisations() {
  return (
    <section id="realisations" className="section fond-bleu texture" aria-labelledby="titre-realisations">
      <div className="conteneur">
        <p className="surtitre" data-apparait>
          Réalisations
        </p>
        <h2 id="titre-realisations" className="titre-section" data-apparait>
          Une sélection de nos réalisations.
        </h2>

        <ul className={styles.grille}>
          {realisations.map((r, i) => (
            <li key={r.slug} data-apparait style={{ "--delai": `${i * 0.1}s` } as React.CSSProperties}>
              <CarteRealisation realisation={r} grand={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
