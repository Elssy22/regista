import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Tant que le site n'est pas finalisé (siteConfig.indexable = false), on interdit
  // tout crawl. Au lancement, NEXT_PUBLIC_SITE_INDEXABLE=true rétablit l'accès normal.
  if (!siteConfig.indexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
