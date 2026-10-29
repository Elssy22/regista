import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { realisations } from "@/lib/contenu";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...realisations.map((r) => ({
      url: `${base}/realisations/${r.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
