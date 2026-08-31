import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page introuvable — Regista",
};

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Cette page est hors-jeu</h1>
      <p className={styles.text}>
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenons sur
        le terrain.
      </p>
      <Link href="/football" className={styles.cta}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
