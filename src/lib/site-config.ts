/**
 * Données fixes du site : coordonnées, informations légales, menu.
 * On ne recopie jamais ces valeurs en dur dans les composants.
 */

export const siteConfig = {
  nom: "Regista",

  /**
   * La page de liens (« link in bio », src/app/(liens)/) : servie à la
   * racine de ce sous-domaine grâce à une réécriture dans next.config.ts.
   */
  liens: { hote: "liens.regista-a.com", url: "https://liens.regista-a.com" },

  /** URL de production, sans slash final. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.regista-a.com").replace(/\/$/, ""),

  /**
   * Indexation par les moteurs de recherche. Fermée par défaut : il faut
   * NEXT_PUBLIC_SITE_INDEXABLE=true sur Vercel (déjà le cas en production).
   */
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",

  contact: {
    email: "landry@regista-a.com",
    telephoneAffiche: "07 68 17 69 80",
    telephoneLien: "+33768176980",
    // Prise de rendez-vous : un lien vers la page Calendly (rien n'est chargé
    // sur le site, donc ni cookie tiers ni bandeau de consentement).
    rendezVous: "https://calendly.com/registaa",
  },

  // Informations légales issues de l'extrait KBis (juin 2026).
  legal: {
    raisonSociale: "Regista",
    formeJuridique: "Société par actions simplifiée unipersonnelle (SASU)",
    capitalSocial: "10,00 €",
    siren: "103 786 752",
    villeGreffe: "Pontoise",
    mentionTva: "TVA non applicable, article 293 B du CGI",
    adresse: ["31 rue Gabriel Péri", "95240 Cormeilles-en-Parisis"],
    directeurPublication: "Landry Célina",
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    },
    dureeConservation: "3 ans à compter du dernier contact",
  },
} as const;

/**
 * Les rubriques qu'on peut éteindre en attendant d'avoir assez de contenu
 * (décision de Landry du 03/11/2026). Éteinte, une rubrique disparaît de
 * l'accueil et du menu, ses pages répondent 404, elle sort du plan du site
 * et son contenu fictif ne bloque plus la production. Rien n'est supprimé :
 * passer à true suffit pour la remettre en ligne. Le back office (/studio)
 * reste ouvert : les articles s'écrivent en attendant.
 */
export const rubriques = {
  temoignages: false,
  actualites: false,
};

/** Le menu principal, dans l'ordre du template (Home, About, Services, Projects, Blog, Contact). */
export const menu = [
  { libelle: "Accueil", href: "/" },
  { libelle: "À propos", href: "/a-propos" },
  { libelle: "Métiers", href: "/metiers" },
  { libelle: "Réalisations", href: "/realisations", sousMenu: true },
  { libelle: "Actualités", href: "/actualites" },
  { libelle: "Contact", href: "/contact" },
].filter((lien) => lien.href !== "/actualites" || rubriques.actualites);
