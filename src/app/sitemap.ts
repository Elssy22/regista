import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/offres`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/methode`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/a-propos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
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
