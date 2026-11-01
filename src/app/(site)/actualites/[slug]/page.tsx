import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { listerArticles, trouverArticle } from "@/lib/blog";
import { urlImage } from "@/sanity/client";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { ImageArticle } from "@/components/blocs/ImageArticle";
import styles from "./article.module.css";

// Un article publié après la construction du site s'affiche quand même :
// sa page est créée à la première visite, puis rafraîchie chaque minute.
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await listerArticles()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/actualites/[slug]">): Promise<Metadata> {
  const a = await trouverArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.titre,
    description: a.extrait,
    // Les articles d'exemple ne doivent pas être indexés.
    robots: a.fictif ? { index: false, follow: true } : undefined,
    openGraph: a.image.type === "sanity" ? { images: [{ url: a.image.src, alt: a.image.alt }] } : undefined,
  };
}

/** Mise en forme du texte saisi dans le back office. */
const composants: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className={styles.figure}>
        <Image
          src={urlImage(value).width(1600).fit("max").url()}
          alt={value.alt ?? ""}
          width={1600}
          height={Math.round(1600 / (value.asset?.metadata?.dimensions?.aspectRatio ?? 1.5))}
          sizes="(min-width: 900px) 860px, 100vw"
        />
        {value.legende && <figcaption>{value.legende}</figcaption>}
      </figure>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const externe = typeof value?.href === "string" && value.href.startsWith("http");
      return (
        <a href={value?.href} {...(externe ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  },
};

export default async function Article({ params }: PageProps<"/actualites/[slug]">) {
  const a = await trouverArticle((await params).slug);
  if (!a) notFound();
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={a.titre} texte={`${a.categorie} · ${a.date}`} />
        <section className="section fond-bleu" aria-label="Article">
          <div className={`conteneur ${styles.article}`}>
            <ImageArticle image={a.image} sizes="(min-width: 900px) 860px, 100vw" className={styles.image} preload />
            {a.corps ? (
              <div className={styles.texte}>
                <PortableText value={a.corps} components={composants} />
              </div>
            ) : (
              a.paragraphes?.map((p, i) => <p key={i}>{p}</p>)
            )}
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
