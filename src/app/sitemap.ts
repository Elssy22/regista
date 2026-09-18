import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Depuis la fusion en page unique (CONTENU/Plan_one_page.md, section 7.1),
// il n'y a plus que trois adresses réelles à soumettre aux moteurs : les
// anciennes (/offres, /methode, /a-propos, /contact) sont des redirections
// dans next.config.ts, pas des pages à indexer.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-confidentialite`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
