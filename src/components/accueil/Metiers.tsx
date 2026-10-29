import { metiers } from "@/lib/contenu";
import { CarteMetier } from "../blocs/CarteMetier";
import { TitreSection } from "../blocs/TitreSection";
import styles from "./Metiers.module.css";

/** Les métiers en grille alternée (services du template). */
export function Metiers({ avecTitre = true }: { avecTitre?: boolean }) {
  return (
    <section id="metiers" className="section fond-creme texture" aria-labelledby={avecTitre ? "titre-metiers" : undefined} aria-label={avecTitre ? undefined : "Nos métiers"}>
      <div className="conteneur">
        {avecTitre && <TitreSection id="titre-metiers">Nos métiers</TitreSection>}
        <ul className={styles.grille}>
          {metiers.map((m, i) => (
            <li key={m.titre}>
              <CarteMetier numero={i + 1} titre={m.titre} texte={m.texte} delai={0.2 + (i % 4) * 0.2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
