import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import styles from "./PageLegale.module.css";

export { styles as legal };

/**
 * Gabarit des pages légales : sobre, fait pour être lu.
 * Le texte vient des pages d'origine (complétées depuis l'extrait KBis) :
 * seule la présentation a changé.
 */
export function PageLegale({
  titre,
  miseAJour,
  children,
}: {
  titre: string;
  miseAJour: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Entete />
      <main id="contenu" className={`fond-creme ${styles.page}`}>
        <div className={`conteneur ${styles.colonne}`}>
          <h1 className={styles.titre}>{titre}</h1>
          <p className={styles.date}>{miseAJour}</p>
          {children}
        </div>
      </main>
      <PiedDePage />
    </>
  );
}
