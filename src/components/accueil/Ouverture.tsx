import Image from "next/image";
import Link from "next/link";
import { accroche, avisClients } from "@/lib/contenu";
import { Fleche } from "../Icones";
import { LogoAccroche } from "./LogoAccroche";
import styles from "./Ouverture.module.css";

/**
 * Le haut de page du template : le logotype Regista en très grand (son R
 * penché se redresse au survol) signé de l'accroche, les avis à gauche, la
 * description et le bouton à droite.
 * La photo du template est sur la page À propos.
 */
export function Ouverture() {
  return (
    <section id="accueil" className={`fond-creme ${styles.ouverture}`} aria-labelledby="titre-accueil">
      <div className={`conteneur ${styles.haut}`}>
        <h1 id="titre-accueil" className={styles.titre} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <LogoAccroche />
          <span className="visuellement-cache">, agence football.</span>
        </h1>
        <p className={styles.signature} data-apparait style={{ "--delai": "0.3s" } as React.CSSProperties}>
          {accroche.titre}
        </p>

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
          </div>

          <div className={styles.droite} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            <p className={styles.resume}>{accroche.resume}</p>
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
