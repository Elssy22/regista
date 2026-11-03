import { piliers } from "@/lib/contenu";
import styles from "./Piliers.module.css";

/**
 * Les trois piliers de l'agence (page Métiers) : en trois colonnes sur grand
 * écran, l'une sous l'autre sur mobile. Un filet sépare l'accroche du texte ;
 * la note « Périmètre » est soulignée d'un filet or (un trait, jamais du
 * texte or sur crème).
 */
export function Piliers() {
  return (
    <section className={`section fond-creme ${styles.piliers}`} aria-label="Ce que nous faisons">
      <div className={`conteneur ${styles.grille}`}>
        {piliers.map((p, i) => (
          <article key={p.titre} className={styles.pilier} data-apparait style={{ "--delai": `${0.2 + i * 0.2}s` } as React.CSSProperties}>
            <h2 className={styles.titre}>
              {p.titre} <span className={styles.suite}>{p.suite}</span>
            </h2>
            <div className={styles.corps}>
              {p.paragraphes.map((texte) => (
                <p key={texte.slice(0, 24)}>{texte}</p>
              ))}
              {p.note && (
                <aside className={styles.note}>
                  <h3>{p.note.titre}</h3>
                  <p>{p.note.texte}</p>
                </aside>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
