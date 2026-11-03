import styles from "./TitrePage.module.css";

/** Au-delà de cette longueur, le titre peut passer à la ligne (entre deux mots). */
const LONGUEUR_UNE_LIGNE = 24;

/**
 * Le grand titre des pages intérieures (single-page-hero du template).
 * Sa taille dépend du nombre de lettres et de la largeur disponible : un
 * titre court (nom de client, de page) tient toujours sur une ligne ; un
 * titre long passe à la ligne entre deux mots, jamais au milieu d'un mot.
 */
export function TitrePage({ titre, texte, children }: { titre: string; texte?: string; children?: React.ReactNode }) {
  const uneLigne = titre.length <= LONGUEUR_UNE_LIGNE;
  const lettres = uneLigne ? titre.length : Math.max(...titre.split(/\s+/).map((mot) => mot.length));
  return (
    <section className={`fond-creme ${styles.titrePage}`}>
      <div className={`conteneur ${styles.cadre}`}>
        {children}
        <h1
          className={`${styles.titre} ${uneLigne ? styles.uneLigne : ""}`}
          data-apparait
          style={{ "--delai": "0.2s", "--lettres": lettres } as React.CSSProperties}
        >
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
