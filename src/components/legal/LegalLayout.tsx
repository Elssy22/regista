import Link from "next/link";
import { PiedDePage } from "@/components/design-system";
import { LiensLegaux, Marque, Signature } from "@/components/site/Marque";
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

/**
 * Gabarit des pages légales, à la charte v1.0.
 *
 * Il reste volontairement plus sobre que les pages du site : la charte
 * réserve aux documents formels « un simple filet, rien de plus ». Pas de
 * trajectoire, pas de quadrillage, pas de récit en italique — ces pages se
 * lisent, elles ne séduisent pas.
 *
 * LE TEXTE ENCADRÉ PAR CE GABARIT NE SE MODIFIE PAS : il a été complété
 * depuis l'extrait KBis. Seule sa présentation relève de ce fichier.
 */
export default function LegalLayout({
  title,
  updated,
  children,
}: LegalLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <Link href="/" className={styles.logoLink} aria-label="Regista — accueil">
          <Marque hauteur={26} />
        </Link>
        <Link href="/" className={styles.backLink}>
          Retour à l&apos;accueil
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>{updated}</p>
        {children}
      </main>

      {/* <footer> et non <div> depuis le 25/09/2026, comme sur la page
          unique (critique Impeccable) : sans ce repère « contentinfo », un
          lecteur d'écran ne peut pas sauter au pied de page. Le texte
          encadré et le rendu ne changent pas. */}
      <footer className={styles.pied}>
        <Signature />
        <LiensLegaux />
        <PiedDePage section={title} page="—" />
      </footer>
    </div>
  );
}
