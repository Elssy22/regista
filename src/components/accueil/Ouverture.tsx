import Image from "next/image";
import Link from "next/link";
import { accroche, avisClients, fondateur } from "@/lib/contenu";
import { Logotype } from "../Logo";
import { Fleche } from "../Icones";
import styles from "./Ouverture.module.css";

/**
 * Le haut de page du template : le nom en très grand, une photo inclinée
 * qui le chevauche (elle se redresse au survol), les avis à gauche et
 * l'accroche à droite. Le « nom » est le vrai logotype, pas du texte.
 */
export function Ouverture() {
  return (
    <section id="accueil" className={`fond-creme texture ${styles.ouverture}`} aria-labelledby="titre-accueil">
      <div className="conteneur">
        <h1 id="titre-accueil" className={styles.titre} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <Logotype className={styles.logotype} titre="Regista" />
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
            <p className={styles.resume}>{accroche.resume}</p>
          </div>

          <div className={styles.photo}>
            <Image
              src={fondateur.photo.src}
              alt={fondateur.photo.alt}
              placeholder="blur"
              preload
              sizes="(min-width: 992px) 400px, 80vw"
            />
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
