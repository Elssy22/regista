import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { accroche, realisations, reseaux, titreRealisation } from "@/lib/contenu";
import { Logotype } from "@/components/Logo";
import { Fleche, IconeReseau } from "@/components/Icones";
import { AppelContact } from "@/components/blocs/AppelContact";
import styles from "./page.module.css";

/*
 * La page de liens des réseaux sociaux (« link in bio »), servie à la racine
 * de liens.regista-a.com (réécriture dans next.config.ts) et aussi à
 * www.regista-a.com/liens. Pensée d'abord pour le téléphone : on y arrive
 * depuis la bio Instagram ou LinkedIn.
 *
 * En production, les liens vers le site sont absolus : depuis le
 * sous-domaine, ils ramènent sur www (et pas sur une copie du site en
 * liens.regista-a.com). En prévisualisation, ils restent relatifs pour
 * qu'on navigue dans la même version.
 */
const base = process.env.VERCEL_ENV === "production" ? siteConfig.siteUrl : "";
const site = (chemin: string) => `${base}${chemin}`;

const description = "Agence football : contenus, identités, financements. Prenez rendez-vous, découvrez nos réalisations.";

export const metadata: Metadata = {
  title: "Liens",
  description,
  // Une page de passage : c'est le site qui doit sortir dans les recherches.
  robots: { index: false, follow: true },
  openGraph: { title: "Regista — Liens", description, url: siteConfig.liens.url },
};

const liens = [
  { libelle: "Le site de l’agence", detail: "Qui nous sommes, comment nous travaillons", href: site("/") },
  { libelle: "Nos métiers", detail: "Raconter, financer, s’outiller", href: site("/metiers") },
  { libelle: "Nos réalisations", detail: "Clubs, associations, marques", href: site("/realisations") },
  { libelle: "Nous écrire", detail: "Le formulaire de contact", href: site("/contact") },
];

const delai = (s: number) => ({ "--delai": `${s}s` }) as React.CSSProperties;

export default function PageLiens() {
  return (
    <>
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
            <p className={styles.resume} data-apparait style={delai(0.3)}>
              {accroche.resume}
            </p>
          </header>

          <nav aria-label="Liens Regista">
            <a
              href={siteConfig.contact.rendezVous}
              target="_blank"
              rel="noopener noreferrer"
              className={`bouton bouton--plein ${styles.rdv}`}
              data-apparait
              style={delai(0.4)}
            >
              Prendre rendez-vous
              <span className="visuellement-cache"> (Calendly, nouvel onglet)</span>
              <Fleche />
            </a>
            <p className={styles.rdvDetail} data-apparait style={delai(0.4)}>
              30 minutes en visio, pour parler de votre projet.
            </p>

            <ul className={styles.liste}>
              {liens.map((l, i) => (
                <li key={l.libelle} data-apparait style={delai(0.5 + i * 0.1)}>
                  <Link href={l.href} className={styles.lien}>
                    <span className={styles.libelle}>{l.libelle}</span>
                    <span className={styles.detail}>{l.detail}</span>
                    <Fleche />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className={styles.bloc} aria-labelledby="titre-realisations">
            <h2 id="titre-realisations" className="surtitre">
              Dernières réalisations
            </h2>
            <ul className={styles.projets} data-apparait style={delai(0.2)}>
              {realisations.slice(0, 5).map((r) => (
                <li key={r.slug}>
                  <Link href={site(`/realisations/${r.slug}`)} className={styles.projet}>
                    <span className={styles.vignette}>
                      <Image src={r.couverture.src} alt={r.couverture.alt} placeholder="blur" sizes="(min-width: 560px) 240px, 70vw" />
                      <span className={styles.categorie}>{r.metier}</span>
                    </span>
                    <span className={styles.nomProjet}>{titreRealisation(r)}</span>
                    <span className={styles.resultat}>{r.resultat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.bloc} aria-labelledby="titre-reseaux">
            <h2 id="titre-reseaux" className="surtitre">
              Nous suivre
            </h2>
            <ul className={styles.reseaux}>
              {reseaux
                .filter((r) => r.href)
                .map((r) => (
                  <li key={r.nom}>
                    <a href={r.href!} target="_blank" rel="noopener noreferrer">
                      <IconeReseau nom={r.nom} />
                      <span className="visuellement-cache">{r.nom} (nouvel onglet)</span>
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </main>

      <AppelContact href={site("/contact")} />
      <footer className={`fond-or ${styles.pied}`}>
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
    </>
  );
}
