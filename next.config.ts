import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Les adresses de l'ancien site, encore présentes dans des messages déjà
  // envoyés : la signature mail verte et les messages de prospection
  // pointaient vers agency.regista-a.com/football. Sans ces redirections,
  // chacun de ces liens tomberait sur une page 404 le jour de la mise en ligne.
  // Redirection permanente : les moteurs de recherche transfèrent l'adresse.
  async redirects() {
    return [
      { source: "/football", destination: "/", permanent: true },
      { source: "/football/:chemin*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
