import Image from "next/image";
import Link from "next/link";
import { accroche, avisClients } from "@/lib/contenu";
import { Fleche } from "../Icones";
import { LogoAccroche } from "./LogoAccroche";
import styles from "./Ouverture.module.css";

/**
 * Le haut de page du template : le logotype Regista en très grand (son R
 * penché se redresse au survol), les avis à gauche et l'accroche à droite.
 * La photo du template est sur la page À propos.
 */
export function Ouverture() {
  return (
    <section id="accueil" className={`fond-creme texture ${styles.ouverture}`} aria-labelledby="titre-accueil">
      <div className="conteneur">
        <h1 id="titre-accueil" className={styles.titre} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <LogoAccroche />
          <span className="visuellement-cache">, agence football. {accroche.titre}</span>
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
            <Link href="/contact" className={`bouton bouton--plein ${styles.bouton}`}>
              {accroche.bouton}
              <Fleche />
            </Link>
          </div>

          <div className={styles.droite} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            <p className={styles.accroche}>{accroche.titre}</p>
            <p className={styles.resume}>{accroche.resume}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
