/**
 * Configuration centrale du site Regista.
 * Coordonnées, liens Calendly et routes vivent ici :
 * on ne recopie jamais ces valeurs en dur dans les composants.
 *
 * ATTENTION — À FOURNIR AVANT MISE EN LIGNE :
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
 * Les sept chapitres de la page unique (CONTENU/Plan_one_page.md, section 2),
 * dans l'ordre de défilement. Source commune à l'indicateur « 0X / 07 » de
 * l'en-tête (NavigationPrincipale.tsx, suivi par IntersectionObserver) et au
 * sommaire mobile — un seul endroit où ajouter un chapitre si la page évolue.
 */
export const chapitres = [
  { id: "accueil", numero: "01", nomMenu: "Accueil" },
  { id: "offres", numero: "02", nomMenu: "Offres" },
  { id: "methode", numero: "03", nomMenu: "Méthode" },
  { id: "preuve", numero: "04", nomMenu: "Ce que ça donne" },
  { id: "deroule", numero: "05", nomMenu: "Comment ça se passe" },
  { id: "a-propos", numero: "06", nomMenu: "À propos" },
  { id: "contact", numero: "07", nomMenu: "Contact" },
] as const;

export type IdChapitre = (typeof chapitres)[number]["id"];

/**
 * Liens du menu principal — ancres absolues vers la page unique (et non plus
 * des routes séparées, voir CONTENU/Plan_one_page.md section 7.1). Chaque
 * lien porte la liste des chapitres qui le gardent actif (« Méthode » reste
 * actif sur 03, 04 et 05 — le principe, la preuve, le déroulé).
 */
export const navLinks = [
  { libelle: "Offres", href: "/#offres", chapitres: ["offres"] },
  { libelle: "Méthode", href: "/#methode", chapitres: ["methode", "preuve", "deroule"] },
  { libelle: "À propos", href: "/#a-propos", chapitres: ["a-propos"] },
  { libelle: "Contact", href: "/#contact", chapitres: ["contact"] },
] as const satisfies readonly { libelle: string; href: string; chapitres: readonly IdChapitre[] }[];

/**
 * Les références du bandeau « Ils travaillent avec nous » (chapitre 04, sous
 * les trois cas). Décision de Landry du 18/09/2026 : exception à l'interdit 12
 * de CLAUDE.md, limitée aux logos des clients et partenaires qui ont donné
 * leur accord écrit pour cet affichage, tous en une seule couleur (crème de
 * la charte, fichiers dans public/references/). Pour en ajouter un : le
 * fichier PNG (crème sur fond transparent, 240 px de haut) et une ligne ici,
 * JAMAIS sans l'accord de l'entreprise concernée.
 */
/**
 * Les photos du cas principal du chapitre 04 (décision de Landry du
 * 25/09/2026, après la critique Impeccable : l'agence vendait de la
 * production vidéo et photo sans montrer une seule image de son travail).
 * Ce sont de VRAIES photos de la sortie de maillot du FC Rocquancourt,
 * client ayant donné son accord écrit — jamais des images générées, qui
 * seraient une fausse preuve. L'écusson du club, son sponsor et
 * l'équipementier apparaissent tels qu'ils sont sur le vêtement réel
 * (voir l'interdit n°12 de CLAUDE.md, quatrième exception).
 */
export const casImages = [
  {
    fichier: "/cas/maillot-rocquancourt.jpg",
    alt: "Le maillot du FC Rocquancourt porté : rayures grenat, écusson du club et nom de son sponsor.",
  },
  {
    fichier: "/cas/maillot-noir-rocquancourt-porte.jpg",
    alt: "Le maillot noir du FC Rocquancourt, porté : grande inscription ton sur ton, en relief brillant.",
  },
] as const;

/**
 * `echelle` : compensation optique du bandeau « Ils travaillent avec nous »
 * (critique Impeccable du 25/09/2026, accord de Landry). À hauteur
 * rigoureusement égale, un logo à traits fins paraît plus petit qu'un aplat
 * plein, et une marque ronde plus petite qu'une marque rectangulaire : la
 * rangée semblait mal réglée. Le facteur vient de la part de pixels opaques
 * de chaque fichier (mesurée : 14,6 % pour The Football Market, 65,5 % pour
 * Panagon), corrigée du bonus habituel des marques rondes, et borné à ±12 %
 * pour que rien ne paraisse redessiné. Aucun fichier n'est modifié.
 */
export const references = [
  { nom: "FC Rocquancourt", fichier: "/references/fc-rocquancourt.png", largeur: 240, hauteur: 240, echelle: 0.95 },
  { nom: "The Football Market", fichier: "/references/the-football-market.png", largeur: 226, hauteur: 240, echelle: 1.12 },
  { nom: "All Parisian Games", fichier: "/references/all-parisian-games.png", largeur: 187, hauteur: 240, echelle: 1.12 },
  { nom: "Panagon", fichier: "/references/panagon.png", largeur: 184, hauteur: 240, echelle: 0.88 },
  { nom: "Doki Doki", fichier: "/references/doki-doki.png", largeur: 334, hauteur: 240, echelle: 0.9 },
  { nom: "Carré Croix", fichier: "/references/carre-croix.png", largeur: 158, hauteur: 240, echelle: 1.12 },
] as const;
