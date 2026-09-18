/**
 * Configuration centrale du site Regista.
 * Coordonnées, liens Calendly et routes vivent ici :
 * on ne recopie jamais ces valeurs en dur dans les composants.
 *
 * ⚠️ À FOURNIR AVANT MISE EN LIGNE :
 *  - le numéro de téléphone (masqué tant qu'il vaut null),
 *  - les URLs des réseaux sociaux LinkedIn / Instagram (masquées tant qu'elles valent null).
 * Les informations légales viennent de l'extrait KBis à jour au 18/06/2026 ; seul le
 * téléphone reste [À COMPLÉTER] dans /mentions-legales.
 */

export const siteConfig = {
  nom: "Regista",

  /**
   * URL de production du site (sans slash final).
   * Par défaut regista-a.com (domaine de l'e-mail) — surchargée par la variable
   * d'environnement NEXT_PUBLIC_SITE_URL le jour où le domaine final est confirmé.
   */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://regista-a.com").replace(
    /\/$/,
    "",
  ),

  /**
   * Autorise (ou non) l'indexation du site par les moteurs de recherche.
   * Par défaut FALSE = site bloqué (noindex + robots disallow) tant qu'on finalise
   * (coordonnées, mentions légales, relecture juriste). Le jour du vrai lancement,
   * définir la variable d'environnement NEXT_PUBLIC_SITE_INDEXABLE=true sur Vercel.
   */
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",

  contact: {
    // Coordonnées reprises mot pour mot de CONTENU/Regista_methode.md, section 9
    // (contenu validé), cohérentes avec le portage de référence regista-site/.
    email: "landry@regista-a.com",
    telephoneAffiche: "07 68 17 69 80" as string | null,
    telephoneLien: "+33768176980" as string | null,
  },

  legal: {
    // Dénomination exacte du KBis (la forme juridique est affichée à part).
    raisonSociale: "Regista",
    formeJuridique: "Société par actions simplifiée unipersonnelle (SASU)",
    capitalSocial: "10,00 €",
    // Numéro brut ; chaque affichage ajoute son propre libellé.
    siren: "103 786 752",
    villeGreffe: "Pontoise",
    // Franchise en base de TVA : aucun numéro de TVA à publier.
    mentionTva: "TVA non applicable, article 293 B du CGI",
    adresse: ["31 rue Gabriel Péri", "95240 Cormeilles-en-Parisis"],
    hebergeur: {
      nom: "Vercel Inc.",
      // Vérifiée sur vercel.com/legal/terms (mise à jour du 1er juin 2026).
      adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    },
    dureeConservation: "3 ans à compter du dernier contact",
    mentionsLegalesUrl: "/mentions-legales",
    politiqueConfidentialiteUrl: "/politique-confidentialite",
  },

  // Réseaux masqués tant que les vraies URLs ne sont pas fournies (null = non affiché).
  reseaux: {
    linkedin: null as string | null,
    instagram: null as string | null,
  },

  calendly: {
    /** Widget inline intégré en bas de page (section Prendre RDV), chargé après consentement. */
    inlineUrl:
      "https://calendly.com/registaa/30min?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=f7f5f0&text_color=254222&primary_color=c9a227",
  },
} as const;

/**
 * Liens de la navigation principale — cinq pages, routage Next.js réel
 * (et non plus des ancres d'une seule page). Ordre repris de la carte des
 * écrans (CONTENU/UX_site.md, section 3) ; à confirmer par le développeur
 * front-end / la maquette avant intégration définitive.
 */
export const navLinks = [
  { libelle: "Accueil", href: "/" },
  { libelle: "Méthode", href: "/methode" },
  { libelle: "Offres", href: "/offres" },
  { libelle: "À propos", href: "/a-propos" },
  { libelle: "Contact", href: "/contact" },
] as const;
