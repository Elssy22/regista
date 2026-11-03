import styles from "./TitrePage.module.css";

/** Au-delà de cette longueur, le titre peut passer à la ligne (entre deux mots). */
const LONGUEUR_UNE_LIGNE = 24;

/**
 * Le grand titre des pages intérieures (single-page-hero du template).
 * Sa taille dépend du nombre de lettres et de la largeur disponible : un
 * titre court (nom de client, de page) tient toujours sur une ligne ; un
 * titre long passe à la ligne entre deux mots, jamais au milieu d'un mot.
 * Un « \n » dans le titre impose les lignes (ex. À propos) : à partir de la
 * tablette, chaque ligne tient d'un bloc et la taille suit la plus longue ;
 * sur mobile, le titre repasse à la ligne librement.
 */
export function TitrePage({ titre, texte, children }: { titre: string; texte?: string; children?: React.ReactNode }) {
  const lignes = titre.split("\n");
  const motLePlusLong = Math.max(...titre.split(/\s+/).map((mot) => mot.length));
  if (lignes.length > 1) {
    return (
      <Cadre texte={texte}>
        {children}
        <h1
          className={`${styles.titre} ${styles.lignes}`}
          data-apparait
          style={
            {
              "--delai": "0.2s",
              "--lettres-ligne": Math.max(...lignes.map((l) => l.length)),
              "--lettres-mot": motLePlusLong,
            } as React.CSSProperties
          }
        >
          {lignes.map((ligne) => (
            <span key={ligne} className={styles.ligne}>
              {ligne}{" "}
            </span>
          ))}
        </h1>
      </Cadre>
    );
  }
  const uneLigne = titre.length <= LONGUEUR_UNE_LIGNE;
  const lettres = uneLigne ? titre.length : motLePlusLong;
  return (
    <Cadre texte={texte}>
      {children}
      <h1
        className={`${styles.titre} ${uneLigne ? styles.uneLigne : ""}`}
        data-apparait
        style={{ "--delai": "0.2s", "--lettres": lettres } as React.CSSProperties}
      >
        {titre}
      </h1>
    </Cadre>
  );
}

/** La section du titre et son texte d'introduction. */
function Cadre({ texte, children }: { texte?: string; children: React.ReactNode }) {
  return (
    <section className={`fond-creme ${styles.titrePage}`}>
      <div className={`conteneur ${styles.cadre}`}>
        {children}
        {texte && (
          <p className={styles.texte} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            {texte}
          </p>
        )}
      </div>
    </section>
  );
}
