/**
 * Les articles du blog. Ils viennent du back office (Sanity) dès qu'il est
 * relié ; sinon, et seulement hors production, on affiche les articles
 * d'exemple de contenu.ts pour garder le template rempli.
 */
import type { StaticImageData } from "next/image";
import type { PortableTextBlock } from "next-sanity";
import { defineQuery } from "next-sanity";
import { client, urlImage } from "@/sanity/client";
import { sanityRelie } from "@/sanity/env";
import { actualites } from "./contenu";

export type ImageArticle =
  | { type: "locale"; src: StaticImageData; alt: string }
  | { type: "sanity"; src: string; alt: string; largeur: number; hauteur: number; flou?: string };

export type ArticleVue = {
  slug: string;
  titre: string;
  categorie: string;
  date: string;
  extrait?: string;
  image: ImageArticle;
  corps?: PortableTextBlock[];
  paragraphes?: string[];
  fictif?: boolean;
};

/** Les pages du blog se mettent à jour au plus tard une minute après une publication. */
export const DELAI_MISE_A_JOUR = 60;

const CHAMPS = `
  "slug": slug.current,
  titre,
  categorie,
  datePublication,
  extrait,
  image { alt, asset->{ _id, metadata { lqip, dimensions { width, height } } }, hotspot, crop },
`;

const REQUETE_LISTE = defineQuery(`*[_type == "article" && defined(slug.current) && datePublication <= now()]
  | order(datePublication desc) { ${CHAMPS} }`);

const REQUETE_ARTICLE = defineQuery(`*[_type == "article" && slug.current == $slug && datePublication <= now()][0]
  { ${CHAMPS} corps[]{ ..., _type == "image" => { ..., asset->{ _id, metadata { dimensions } } } } }`);

type ResultatSanity = {
  slug: string;
  titre: string;
  categorie: string;
  datePublication: string;
  extrait?: string;
  image: {
    alt: string;
    asset: { _id: string; metadata: { lqip?: string; dimensions: { width: number; height: number } } };
  };
  corps?: PortableTextBlock[];
};

const formatDate = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" });

function versVue(a: ResultatSanity): ArticleVue {
  // Image recadrée au format des cartes du template (1400 × 788).
  return {
    slug: a.slug,
    titre: a.titre,
    categorie: a.categorie,
    date: `Publié le ${formatDate.format(new Date(a.datePublication))}`,
    extrait: a.extrait,
    corps: a.corps,
    image: {
      type: "sanity",
      src: urlImage(a.image).width(1400).height(788).fit("crop").url(),
      alt: a.image.alt,
      largeur: 1400,
      hauteur: 788,
      flou: a.image.asset.metadata.lqip,
    },
  };
}

function exemples(): ArticleVue[] {
  if (process.env.VERCEL_ENV === "production") return [];
  return actualites.map((a) => ({
    slug: a.slug,
    titre: a.titre,
    categorie: a.categorie,
    date: a.date,
    paragraphes: a.paragraphes,
    image: { type: "locale", src: a.image.src, alt: a.image.alt },
    fictif: true,
  }));
}

export async function listerArticles(): Promise<ArticleVue[]> {
  if (!client) return exemples();
  try {
    const resultats = await client.fetch<ResultatSanity[]>(REQUETE_LISTE, {}, { next: { revalidate: DELAI_MISE_A_JOUR } });
    return resultats.length ? resultats.map(versVue) : exemples();
  } catch (erreur) {
    console.error("Lecture des articles impossible :", erreur);
    return [];
  }
}

export async function trouverArticle(slug: string): Promise<ArticleVue | undefined> {
  if (client) {
    try {
      const a = await client.fetch<ResultatSanity | null>(REQUETE_ARTICLE, { slug }, { next: { revalidate: DELAI_MISE_A_JOUR } });
      if (a) return versVue(a);
    } catch (erreur) {
      console.error("Lecture de l'article impossible :", erreur);
    }
  }
  return exemples().find((a) => a.slug === slug);
}

export { sanityRelie };
