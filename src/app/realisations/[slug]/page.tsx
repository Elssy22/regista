import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { realisations, trouverRealisation } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { Contact } from "@/components/Contact";
import { CarteRealisation } from "@/components/CarteRealisation";
import { FlecheDroite } from "@/components/Icones";
import styles from "./realisation.module.css";

// Une page par réalisation, générée à la construction du site.
export const dynamicParams = false;

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = trouverRealisation(slug);
  if (!r) return {};
  return {
    title: `${r.metier} — ${r.client}`,
    description: r.description[0],
    openGraph: { images: [{ url: r.couverture.src.src, alt: r.couverture.alt }] },
  };
}

/** La fiche d'une réalisation (« Single project » du template). */
export default async function PageRealisation({ params }: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const r = trouverRealisation(slug);
  if (!r) notFound();

  const index = realisations.indexOf(r);
  const suivante = realisations[(index + 1) % realisations.length];

  return (
    <>
      <Entete />
      <main id="contenu">
        <section className={`fond-creme texture ${styles.tete}`} aria-labelledby="titre-realisation">
          <div className="conteneur">
            <Link href="/#realisations" className={styles.retour}>
              <FlecheDroite />
              Toutes les réalisations
            </Link>
            <p className={styles.metier}>{r.metier}</p>
            <h1 id="titre-realisation" className={styles.titre}>
              {r.client}
            </h1>
            <p className={styles.resultat}>{r.resultat}</p>
          </div>
        </section>

        <div className={styles.couverture}>
          <Image
            src={r.couverture.src}
            alt={r.couverture.alt}
            placeholder="blur"
            preload
            sizes="100vw"
          />
        </div>

        <section className="section fond-bleu texture" aria-label="Le projet">
          <div className={`conteneur ${styles.fiche}`}>
            <dl className={styles.infos}>
              <div>
                <dt>Client</dt>
                <dd>{r.client}</dd>
              </div>
              <div>
                <dt>Métier</dt>
                <dd>{r.metier}</dd>
              </div>
              <div>
                <dt>Résultat</dt>
                <dd>{r.resultat}</dd>
              </div>
            </dl>
            <div className={styles.description}>
              <h2 className={styles.descriptionTitre}>Le projet</h2>
              {r.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {r.galerie.length > 0 && (
            <div className="conteneur">
              <ul className={styles.galerie} data-nombre={r.galerie.length}>
                {r.galerie.map((photo, i) => (
                  <li key={i} data-apparait style={{ "--delai": `${(i % 3) * 0.08}s` } as React.CSSProperties}>
                    <Image src={photo.src} alt={photo.alt} placeholder="blur" sizes="(min-width: 768px) 33vw, 50vw" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {suivante && suivante.slug !== r.slug && (
          <section className="section fond-creme texture" aria-labelledby="titre-suivante">
            <div className={`conteneur ${styles.suivante}`}>
              <h2 id="titre-suivante" className="surtitre">
                Réalisation suivante
              </h2>
              <CarteRealisation realisation={suivante} />
            </div>
          </section>
        )}

        <Contact />
      </main>
      <PiedDePage />
    </>
  );
}
