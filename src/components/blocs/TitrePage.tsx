import styles from "./TitrePage.module.css";

/** Le grand titre des pages intérieures (single-page-hero du template). */
export function TitrePage({ titre, texte, children }: { titre: string; texte?: string; children?: React.ReactNode }) {
  return (
    <section className={`fond-creme ${styles.titrePage}`}>
      <div className="conteneur">
        {children}
        <h1 className={styles.titre} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          {titre}
        </h1>
        {texte && (
          <p className={styles.texte} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            {texte}
          </p>
        )}
      </div>
    </section>
  );
}
