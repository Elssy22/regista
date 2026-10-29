import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { actualites, trouverActualite } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import styles from "./article.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return actualites.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/actualites/[slug]">): Promise<Metadata> {
  const a = trouverActualite((await params).slug);
  return a ? { title: a.titre, robots: { index: false, follow: true } } : {};
}

export default async function Article({ params }: PageProps<"/actualites/[slug]">) {
  const a = trouverActualite((await params).slug);
  if (!a) notFound();
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={a.titre} texte={`${a.categorie} · ${a.date}`} />
        <section className="section fond-bleu texture" aria-label="Article">
          <div className={`conteneur ${styles.article}`}>
            <Image src={a.image.src} alt={a.image.alt} placeholder="blur" sizes="(min-width: 900px) 860px, 100vw" className={styles.image} />
            {a.paragraphes.map((p, i) => (
              <p key={i} data-apparait>
                {p}
              </p>
            ))}
            <Link href="/actualites" className={styles.retour}>
              ← Toutes les actualités
            </Link>
          </div>
        </section>
      </main>
      <PiedDePage />
    </>
  );
}
