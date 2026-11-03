import { metiers } from "@/lib/contenu";
import { CarteMetier } from "../blocs/CarteMetier";
import { TitreSection } from "../blocs/TitreSection";
import styles from "./Metiers.module.css";

/**
 * Les métiers en grille alternée (services du template). Sur l'accueil
 * (court), chaque carte n'a qu'un résumé de deux lignes, pour garder la taille
 * des cartes du template, et mène à la page Métiers, qui a les textes
 * complets.
 */
export function Metiers({ avecTitre = true, court = false }: { avecTitre?: boolean; court?: boolean }) {
  return (
    <section id="metiers" className="section fond-creme" aria-labelledby={avecTitre ? "titre-metiers" : undefined} aria-label={avecTitre ? undefined : "Nos métiers"}>
      <div className="conteneur">
        {avecTitre && <TitreSection id="titre-metiers">Nos métiers</TitreSection>}
        <ul className={styles.grille}>
          {metiers.map((m, i) => (
            <li key={m.titre}>
              <CarteMetier
                numero={i + 1}
                titre={m.titre}
                texte={court ? m.resume : m.texte}
                href={court ? "/metiers" : undefined}
                delai={0.2 + (i % 4) * 0.2}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
