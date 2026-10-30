import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Indexation fermée tant que NEXT_PUBLIC_SITE_INDEXABLE n'est pas à "true".
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
