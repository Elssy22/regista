import Image from "next/image";
import Link from "next/link";
import type { Realisation } from "@/lib/contenu";
import { Fleche } from "./Icones";
import styles from "./CarteRealisation.module.css";

/** Une réalisation en carte : image, étiquette du métier, client, résultat. */
export function CarteRealisation({ realisation, grand = false }: { realisation: Realisation; grand?: boolean }) {
  const { slug, client, metier, resultat, couverture } = realisation;
  return (
    <Link href={`/realisations/${slug}`} className={`${styles.carte} ${grand ? styles.grand : ""}`}>
      <div className={styles.image}>
        <Image
          src={couverture.src}
          alt={couverture.alt}
          placeholder="blur"
          sizes={grand ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
        />
        <span className={styles.etiquette}>{metier}</span>
      </div>
      <div className={styles.texte}>
        <h3 className={styles.client}>{client}</h3>
        <p className={styles.resultat}>{resultat}</p>
        <span className={styles.lire}>
          Voir la réalisation
          <Fleche />
        </span>
      </div>
    </Link>
  );
}
