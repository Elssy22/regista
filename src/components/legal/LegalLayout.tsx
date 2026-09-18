import Link from "next/link";
import Image from "next/image";
// L'ancien pied de page (Footer) est archivé dans _ancien/ avec le reste de
// l'habillage visuel qui disparaît, mais reste importable : LegalLayout en
// dépend encore le temps que les pages légales soient reprises dans la
// nouvelle charte. Ne pas supprimer ce fichier tant que ce lien existe.
import Footer from "@/_ancien/components/layout/Footer";
import styles from "./LegalLayout.module.css";

// Styles partagés réexportés pour que les pages composent leurs sections
// (titres, paragraphes, listes) avec la même charte.
export { styles as legalStyles };

// Marqueur visible pour les informations qu'il reste à fournir avant mise en ligne.
export function ToDo({ children }: { children: React.ReactNode }) {
  return <span className={styles.todo}>[À COMPLÉTER : {children}]</span>;
}

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  title,
  updated,
  children,
}: LegalLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Regista — accueil"
        >
          <Image
            src="/regista-r-transparent.png"
            alt="Regista"
            width={1373}
            height={1146}
            className={styles.logo}
          />
        </Link>
        <Link href="/" className={styles.backLink}>
          ← Retour à l&apos;accueil
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>{updated}</p>
        {children}
      </main>

      <Footer />
    </div>
  );
}
