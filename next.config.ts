import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Obligatoire depuis Next 16 : la liste des qualités autorisées.
    qualities: [75],
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
