import Image from "next/image";
import Link from "next/link";
import { accroche, fondateur } from "@/lib/contenu";
import { Logotype } from "../Logo";
import { Fleche } from "../Icones";
import styles from "./Ouverture.module.css";

/**
 * L'ouverture reprend le haut de page du template : le nom en très grand,
 * une carte photo inclinée qui le chevauche, et deux colonnes de part et
 * d'autre. Le « nom » est ici le vrai logotype, pas du texte composé.
 */
export function Ouverture() {
  return (
    <section id="accueil" className={`fond-creme texture ${styles.ouverture}`} aria-labelledby="titre-accueil">
      <div className="conteneur">
        <h1 id="titre-accueil" className={styles.titre}>
          <Logotype className={styles.logotype} titre="Regista" />
          <span className="visuellement-cache">, agence football. {accroche.titre}</span>
        </h1>

        <div className={styles.grille}>
          <div className={styles.gauche} data-apparait>
            <p className={styles.chiffre}>
              13<span>+</span>
            </p>
            <p className={styles.chiffreLibelle}>ans d&apos;expérience</p>
            <p className={styles.resume}>{accroche.resume}</p>
          </div>

          <figure className={styles.carte}>
            <div className={styles.cartePhoto}>
              <Image
                src={fondateur.photo.src}
                alt={fondateur.photo.alt}
                placeholder="blur"
                preload
                sizes="(min-width: 1024px) 340px, 72vw"
              />
            </div>
            <figcaption>
              <span className={styles.carteNom}>{fondateur.nom}</span>
              <span className={styles.carteRole}>{fondateur.role}</span>
            </figcaption>
          </figure>

          <div className={styles.droite} data-apparait style={{ "--delai": "0.15s" } as React.CSSProperties}>
            <p className={styles.accroche} aria-hidden="true">
              {accroche.titre}
            </p>
            <Link href="/#contact" className="bouton bouton--plein">
              {accroche.bouton}
              <Fleche />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
