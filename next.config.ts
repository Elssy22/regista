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
      // Les cinq pages ont fusionné en une seule (CONTENU/Plan_one_page.md,
      // section 7.1) : les anciennes adresses renvoient vers leur chapitre.
      // Permanentes (308) depuis la mise en ligne du 18/09/2026 (accord de
      // Landry) : les moteurs de recherche transfèrent l'adresse.
      { source: "/methode", destination: "/#methode", permanent: true },
      { source: "/offres", destination: "/#offres", permanent: true },
      { source: "/a-propos", destination: "/#a-propos", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
