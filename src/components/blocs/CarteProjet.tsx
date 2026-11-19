import Image from "next/image";
import Link from "next/link";
import { titreRealisation, type Realisation } from "@/lib/contenu";
import styles from "./CarteProjet.module.css";

/**
 * Une réalisation en vignette (portfolio-box du template). Le titre et le
 * résultat chiffré restent toujours visibles, sur un dégradé bleu : la
 * preuve se lit sans survol (décision de Landry du 19/11/2026). Au survol,
 * l'image grossit et se floute légèrement.
 */
export function CarteProjet({ realisation, delai = 0 }: { realisation: Realisation; delai?: number }) {
  const { slug, metier, couverture, resultat } = realisation;
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
        <span className={styles.titre}>{titreRealisation(realisation)}</span>
        <span className={styles.resultat}>{resultat}</span>
      </span>
    </Link>
  );
}
