import type { MetadataRoute } from "next";
import { siteConfig, rubriques } from "@/lib/site-config";
import { realisations } from "@/lib/contenu";
import { listerArticles } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = rubriques.actualites ? (await listerArticles()).filter((a) => !a.fictif) : [];
  const base = siteConfig.siteUrl;
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...["/a-propos", "/metiers", "/pour-qui", "/realisations", ...(rubriques.actualites ? ["/actualites"] : []), "/contact"].map((chemin) => ({
      url: `${base}${chemin}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...realisations.map((r) => ({
      url: `${base}/realisations/${r.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${base}/actualites/${a.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    // Pages légales absentes : elles sont en noindex (un plan du site ne liste que des pages à indexer).
  ];
}
