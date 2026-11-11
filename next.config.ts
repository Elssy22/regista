import type { NextConfig } from "next";
import { siteConfig } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  images: {
    // Obligatoire depuis Next 16 : la liste des qualités autorisées.
    qualities: [75],
    // Images des articles du back office : servies via l'optimiseur du site.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },

  // liens.regista-a.com (la page de liens des réseaux) affiche /liens à sa
  // racine. « beforeFiles » : sinon l'accueil, qui répond aussi à « / »,
  // passerait avant. Le reste du sous-domaine (images, scripts) est servi
  // normalement.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", has: [{ type: "host", value: siteConfig.liens.hote }], destination: "/liens" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // Les anciennes adresses du site, encore présentes dans des e-mails déjà
  // envoyés : sans ces redirections, elles tomberaient sur une page 404.
  async redirects() {
    return [
      { source: "/football", destination: "/", permanent: true },
      { source: "/football/:chemin*", destination: "/", permanent: true },
      // /a-propos et /contact existent de nouveau comme pages.
      { source: "/methode", destination: "/a-propos", permanent: true },
      { source: "/offres", destination: "/metiers", permanent: true },
    ];
  },
};

export default nextConfig;
