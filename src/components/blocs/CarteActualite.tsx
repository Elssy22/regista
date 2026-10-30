import Link from "next/link";
import type { ArticleVue } from "@/lib/blog";
import { ImageArticle } from "./ImageArticle";
import { FlecheDroite } from "../Icones";
import styles from "./CarteActualite.module.css";

/** Un article en bandeau (blog-post-box du template). */
export function CarteActualite({ actualite }: { actualite: ArticleVue }) {
  const lien = `/actualites/${actualite.slug}`;
  return (
    <article className={styles.boite}>
      <Link href={lien} className={styles.image} tabIndex={-1} aria-hidden="true">
        <ImageArticle image={actualite.image} decorative sizes="(min-width: 768px) 45vw, 100vw" />
        <span className={styles.categorie}>{actualite.categorie}</span>
      </Link>
      <div className={styles.legende}>
        <p className={styles.date}>{actualite.date}</p>
        <h3 className={styles.titre}>
          <Link href={lien}>{actualite.titre}</Link>
        </h3>
        <Link href={lien} className={styles.lire}>
          Lire la suite
          <FlecheDroite />
        </Link>
      </div>
    </article>
  );
}
