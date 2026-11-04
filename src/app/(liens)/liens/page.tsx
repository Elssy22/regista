import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { accroche, reseaux } from "@/lib/contenu";
import { Logotype } from "@/components/Logo";
import { Fleche, IconeReseau } from "@/components/Icones";
import styles from "./page.module.css";

/*
 * La page de liens des réseaux sociaux (« link in bio », façon Linktree) :
 * le site, la prise de rendez-vous (Calendly), puis les réseaux. Servie à la racine de liens.regista-a.com
 * (réécriture dans next.config.ts) et aussi à www.regista-a.com/liens.
 * Pensée d'abord pour le téléphone : tout tient sur un écran.
 *
 * En production, les liens vers le site sont absolus : depuis le
 * sous-domaine, ils ramènent sur www (et pas sur une copie du site en
 * liens.regista-a.com). En prévisualisation, ils restent relatifs pour
 * qu'on navigue dans la même version.
 */
const base = process.env.VERCEL_ENV === "production" ? siteConfig.siteUrl : "";
const site = (chemin: string) => `${base}${chemin}`;

const description = "Agence football : contenus, identités, financements. Le site et les réseaux de Regista.";

export const metadata: Metadata = {
  title: "Liens",
  description,
  // Une page de passage : c'est le site qui doit sortir dans les recherches.
  robots: { index: false, follow: true },
  openGraph: { title: "Regista — Liens", description, url: siteConfig.liens.url },
};

const delai = (s: number) => ({ "--delai": `${s}s` }) as React.CSSProperties;

export default function PageLiens() {
  const comptes = reseaux.filter((r): r is { nom: string; href: string } => Boolean(r.href));

  return (
    <main className={`fond-creme ${styles.page}`}>
      <div className={styles.colonne}>
        <header className={styles.haut}>
          <h1 className={styles.titre} data-apparait style={delai(0.1)}>
            <Logotype className={styles.logotype} classeR={styles.r} titre="Regista" />
            <span className="visuellement-cache">, agence football.</span>
          </h1>
          <p className={styles.signature} data-apparait style={delai(0.2)}>
            {accroche.titre}
          </p>
        </header>

        <nav aria-label="Liens Regista">
          <ul className={styles.liste}>
            <li data-apparait style={delai(0.3)}>
              <Link href={site("/")} className={`bouton bouton--plein ${styles.lien}`}>
                <span className={styles.icone} aria-hidden="true" />
                <span>Le site de l’agence</span>
                <Fleche />
              </Link>
            </li>
            <li data-apparait style={delai(0.4)}>
              <a
                href={siteConfig.contact.rendezVous}
                target="_blank"
                rel="noopener noreferrer"
                className={`bouton bouton--plein ${styles.lien}`}
              >
                <span className={styles.icone}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4 6h16v14H4zM4 10h16M8 3v5M16 3v5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span>
                  Prendre rendez-vous
                  <span className="visuellement-cache"> (Calendly, nouvel onglet)</span>
                </span>
                <Fleche />
              </a>
            </li>
            {comptes.map((r, i) => (
              <li key={r.nom} data-apparait style={delai(0.5 + i * 0.1)}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className={`bouton ${styles.lien}`}>
                  <span className={styles.icone}>
                    <IconeReseau nom={r.nom} />
                  </span>
                  <span>
                    {r.nom}
                    <span className="visuellement-cache"> (nouvel onglet)</span>
                  </span>
                  <Fleche />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className={styles.pied}>
          <ul>
            <li>
              <Link href={site("/mentions-legales")}>Mentions légales</Link>
            </li>
            <li>
              <Link href={site("/politique-confidentialite")}>Confidentialité</Link>
            </li>
            <li>© {new Date().getFullYear()} Regista</li>
          </ul>
        </footer>
      </div>
    </main>
  );
}
