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
      // Temporaire (307) le temps de vérifier le nouveau plan ; à repasser
      // en permanent (308) au lancement — voir le point de vigilance sur la
      // mise en cache des redirections 308.
      { source: "/methode", destination: "/#methode", permanent: false },
      { source: "/offres", destination: "/#offres", permanent: false },
      { source: "/a-propos", destination: "/#a-propos", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
