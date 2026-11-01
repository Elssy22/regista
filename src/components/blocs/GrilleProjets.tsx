import { realisations } from "@/lib/contenu";
import { CarteProjet } from "./CarteProjet";
import styles from "./GrilleProjets.module.css";

/** La grille des réalisations, sur fond bleu (« Some recent work » du template). */
export function GrilleProjets() {
  return (
    <section id="realisations" className={`fond-bleu ${styles.section}`} aria-labelledby="titre-projets">
      <div className={styles.cadre}>
        <h2 id="titre-projets" className={styles.etiquette}>
          Nos dernières réalisations
          <svg viewBox="0 0 60 70" aria-hidden="true">
            <path
              d="M55 4C38 6 26 14 24 26c-1 8 6 11 9 6 3-6-6-9-12-3C12 37 8 50 7 64m0 0-5-9m5 9 6-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </h2>
        <ul className={styles.grille}>
          {realisations.map((r, i) => (
            <li key={r.slug}>
              <CarteProjet realisation={r} delai={0.2 + i * 0.2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
