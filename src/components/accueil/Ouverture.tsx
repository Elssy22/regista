import Image from "next/image";
import Link from "next/link";
import { accroche, avisClients } from "@/lib/contenu";
import { Monogramme } from "../Logo";
import { Fleche } from "../Icones";
import styles from "./Ouverture.module.css";

/**
 * Le haut de page du template : une phrase d'accroche en très grand, le R
 * de Regista qui la chevauche, les avis à gauche et l'accroche à droite.
 */
export function Ouverture() {
  return (
    <section id="accueil" className={`fond-creme texture ${styles.ouverture}`} aria-labelledby="titre-accueil">
      <div className="conteneur">
        <h1 id="titre-accueil" className={styles.titre} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <span className="visuellement-cache">Regista, agence football : </span>
          {accroche.geante}
        </h1>

        <div className={styles.grille}>
          <div className={styles.gauche} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
            <ul className={styles.pastilles} aria-hidden="true">
              {avisClients.logos.map((logo, i) => (
                <li key={i}>
                  <Image src={logo} alt="" sizes="60px" />
                </li>
              ))}
            </ul>
            <p className={styles.avis}>
              {avisClients.titre} <span>{avisClients.detail}</span>
            </p>
            <p className={styles.resume}>{accroche.resume}</p>
          </div>

          <div className={styles.photo}>
            <Monogramme className={styles.monogramme} titre="Regista" />
          </div>

          <div className={styles.droite} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            <p>{accroche.titre}</p>
            <Link href="/contact" className="bouton bouton--plein">
              {accroche.bouton}
              <Fleche />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
