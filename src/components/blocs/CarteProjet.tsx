import Image from "next/image";
import Link from "next/link";
import type { Realisation } from "@/lib/contenu";
import styles from "./CarteProjet.module.css";

/**
 * Une réalisation en vignette (portfolio-box du template) : au survol,
 * l'image grossit et se floute légèrement, un dégradé monte et le titre
 * glisse depuis le bas.
 */
export function CarteProjet({ realisation, delai = 0 }: { realisation: Realisation; delai?: number }) {
  const { slug, client, metier, couverture } = realisation;
  return (
    <Link
      href={`/realisations/${slug}`}
      className={styles.boite}
      data-apparait
      style={{ "--delai": `${delai}s` } as React.CSSProperties}
    >
      <Image src={couverture.src} alt={couverture.alt} placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" />
      <span className={styles.categorie}>{metier}</span>
      <span className={styles.legende}>
        <span>{client}</span>
      </span>
    </Link>
  );
}
