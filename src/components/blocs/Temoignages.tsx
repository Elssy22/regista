import { temoignages } from "@/lib/contenu";
import { TitreSection } from "./TitreSection";
import styles from "./Temoignages.module.css";

/** Les témoignages (testimonials du template). Contenu fictif pour l'instant. */
export function Temoignages() {
  return (
    <section className="section fond-creme texture" aria-labelledby="titre-temoignages">
      <div className="conteneur">
        <TitreSection id="titre-temoignages">Témoignages</TitreSection>
        <ul className={styles.grille}>
          {temoignages.map((t, i) => (
            <li
              key={t.nom}
              className={styles.carte}
              data-apparait
              style={{ "--delai": `${[0.2, 0.4, 0.6, 0.8, 0.9][i] ?? 0.2}s` } as React.CSSProperties}
            >
              <span className={styles.avatar} aria-hidden="true">
                {t.nom.charAt(0)}
              </span>
              <blockquote className={styles.texte}>{t.texte}</blockquote>
              <p className={styles.nom}>{t.nom}</p>
              <p className={styles.role}>{t.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
