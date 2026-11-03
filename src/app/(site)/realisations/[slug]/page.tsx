import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { realisations, trouverRealisation, titreRealisation } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { Galerie } from "@/components/blocs/Galerie";
import styles from "./realisation.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const r = trouverRealisation((await params).slug);
  if (!r) return {};
  return {
    title: `${r.metier} — ${titreRealisation(r)}`,
    description: r.description[0],
    openGraph: { images: [{ url: r.couverture.src.src, alt: r.couverture.alt }] },
  };
}

/** La fiche d'une réalisation (« Single project » du template). */
export default async function PageRealisation({ params }: PageProps<"/realisations/[slug]">) {
  const r = trouverRealisation((await params).slug);
  if (!r) notFound();

  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={titreRealisation(r)} texte={r.description[0]} />

        <div className={styles.couverture}>
          <Image src={r.couverture.src} alt={r.couverture.alt} placeholder="blur" preload sizes="100vw" />
        </div>

        <section className={`fond-bleu ${styles.projet}`} aria-label="Le projet">
          <div className={`conteneur ${styles.fiche}`}>
            <dl className={styles.infos} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
              <div>
                <dt>Année</dt>
                <dd>{r.annee}</dd>
              </div>
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
            <div className={styles.description} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
              <h2>Le projet</h2>
              {r.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {r.galerie.length > 0 && (
            <div className={`conteneur ${styles.galerie}`}>
              <Galerie photos={r.galerie} />
            </div>
          )}
        </section>
      </main>
      <PiedDePage />
    </>
  );
}
