/**
 * Tous les textes du site, repris du deck « Présentation agence 2026 ».
 * Une seule source : pour changer un texte, on le change ici.
 */
import type { StaticImageData } from "next/image";
import { sanityRelie } from "@/sanity/env";
import { rubriques } from "./site-config";

import landry from "@/assets/equipe/landry-celina.jpg";

import logoRocquancourt from "@/assets/clients/fc-rocquancourt.png";
import logoTfm from "@/assets/clients/the-football-market.png";
import logoDokiDoki from "@/assets/clients/doki-doki.png";
import logoAllParisian from "@/assets/clients/all-parisian.png";
import logoPanagon from "@/assets/clients/panagon.png";
import logoMaisonLiterie from "@/assets/clients/maison-de-la-literie.png";
import logoFacesCachees from "@/assets/clients/faces-cachees-editions.png";

import roc00 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-equipe-trophee-vestiaire.jpg";
import roc01 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-maillot-grenat-pompette.jpg";
import roc02 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-maillot-noir.jpg";
import roc07 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-soiree-artiste.jpg";
import roc08 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-joueurs-shooting-studio.jpg";
import roc09 from "@/assets/realisations/fc-rocquancourt/fc-rocquancourt-maillot-blanc.jpg";

import lit01 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-parures-de-lit-une-seule-couleur.jpg";
import lit02 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-matelas-marcilly-medium.jpg";
import lit03 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-matelas-fontenay.jpg";
import lit04 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-draps-rose-et-bleu.jpg";
import lit05 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-3-criteres-choisir-matelas.jpg";
import lit06 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-sondage-matelas-ferme-dos.jpg";
import lit07 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-bien-dormir-se-faire-desirer.jpg";
import lit08 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-taille-du-lit.jpg";
import lit09 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-draps-vert-sauge.jpg";
import lit10 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-quand-vient-la-nuit-rentree.jpg";
import lit11 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-3-conseils-mieux-dormir.jpg";
import lit12 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-nuits-changent-de-saison.jpg";
import lit13 from "@/assets/realisations/maison-de-la-literie/maison-de-la-literie-sommier-somflex-onea.jpg";

import ap01 from "@/assets/realisations/all-parisian/all-african-celebration-dunk-tribunes.jpg";
import ap02 from "@/assets/realisations/all-parisian/all-african-celebration-maillots-africa-vestiaire.jpg";
import ap03 from "@/assets/realisations/all-parisian/all-african-celebration-panneau-basket.jpg";
import ap04 from "@/assets/realisations/all-parisian/all-african-celebration-manche-drapeaux.jpg";
import ap05 from "@/assets/realisations/all-parisian/all-african-celebration-joueur-maillot-rouge.jpg";
import ap06 from "@/assets/realisations/all-parisian/all-african-celebration-sweat-logo-2025.jpg";
import ap07 from "@/assets/realisations/all-parisian/all-african-celebration-vainqueur-trophee.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const fondateur = {
  nom: "Landry Célina",
  role: "Fondateur",
  photo: {
    src: landry,
    alt: "Portrait de Landry Célina, fondateur de Regista, en sweat gris, qui éclate de rire.",
  } satisfies Photo,
  bio: [
    "Landry Célina a cofondé un média lifestyle — football, cinéma, mode, cuisine, art, et plus d’un million d’abonnés cumulés. Il y a été rédacteur et animateur, puis en a dirigé la rédaction pendant six ans. Il a été formé en club amateur, où il a joué défenseur gauche, gardien et milieu relayeur.",
    "De ces deux histoires vient la même conviction : une structure de football produit en permanence de la matière — des parcours, des rencontres, des gens qui tiennent tout à bout de bras — et presque personne ne la raconte. Non par manque d’envie. Par manque de temps, et parce que raconter est un métier. Regista fait ce métier pour elles.",
  ],
};

/** La page À propos (textes de Landry, 03/11/2026). */
export const aPropos = {
  titre: "Raconter, c’est déjà servir",
  intro:
    "Regista est une agence football. Le mot désigne, en italien, le chef d’orchestre. Sur un terrain, c’est le meneur de jeu : celui qui oriente le jeu et fait briller les autres.",
  pourquoi: "Pourquoi l’agence existe",
  principe: {
    titre: "Notre principe",
    paragraphes: [
      "Regista n’appose jamais sa signature sur les livrables de ses clients. Le travail que nous produisons est le vôtre, et il porte votre nom. Nous nous mettons devant quand il faut encaisser : les démarches ingrates, les relances, les refus, la complexité administrative. Vous, vous jouez.",
      "C’est aussi pour cette raison que nos propres supports sont les seuls que nous signons. Ils sont notre unique vitrine.",
    ],
  },
};

export const accroche = {
  titre: "Le meneur qui fait briller vos projets.",
  // Espaces insécables : « les académies, les marques. » ne se coupe pas et
  // passe en entier à la ligne (demande de Landry).
  resume: "Contenus, podcasts, identités, financements. Pour les clubs, les\u00a0académies,\u00a0les\u00a0marques.",
  bouton: "Parlons de votre projet",
};

export const manifeste =
  "Regista est une agence qui se positionne au cœur de votre équipe et vous accompagne dans votre développement en utilisant ce que vous avez de plus précieux : votre histoire.";

export const chiffres = [
  { valeur: "13+", libelle: "ans d'expérience" },
  { valeur: "5", libelle: "métiers" },
  { valeur: "1", libelle: "interlocuteur unique" },
  { valeur: "100 %", libelle: "sur-mesure" },
  { valeur: "24 h", libelle: "temps de réponse" },
] as const;

/**
 * Logos des clients (noms confirmés par Landry le 03/11/2026). Un logo
 * ajouté sans nom connu prend `aConfirmer: true` : il bloque la production.
 */
export const clients: { nom: string; logo: StaticImageData; aConfirmer?: boolean }[] = [
  { nom: "FC Rocquancourt", logo: logoRocquancourt },
  { nom: "The Football Market", logo: logoTfm },
  { nom: "Doki Doki", logo: logoDokiDoki },
  { nom: "All Parisian", logo: logoAllParisian },
  { nom: "Panagon", logo: logoPanagon },
  { nom: "Maison de la Literie", logo: logoMaisonLiterie },
  { nom: "Faces Cachées Éditions", logo: logoFacesCachees },
];

/**
 * Les trois piliers de l'agence (page Métiers, textes de Landry du
 * 03/11/2026) : le détail de ce que recouvrent les cinq métiers.
 */
export const piliers: {
  titre: string;
  suite: string;
  paragraphes: string[];
  note?: { titre: string; texte: string };
}[] = [
  {
    titre: "Mieux raconter,",
    suite: "c’est être vu plus loin.",
    paragraphes: [
      "Raconter votre structure de façon qu’elle soit vue au-delà de ceux qui la connaissent déjà. Stratégie éditoriale, production vidéo et photo, formats pour les réseaux, relations avec les médias, couverture de vos temps forts, création d’événements.",
    ],
  },
  {
    titre: "Accéder aux bons circuits,",
    suite: "c’est financer plus grand.",
    paragraphes: [
      "Monter les dossiers de subvention, identifier les partenaires, construire les argumentaires, relancer et suivre.",
      "Nous connaissons des circuits et des interlocuteurs qui restent invisibles de l’intérieur d’une structure.",
    ],
    note: {
      titre: "Périmètre",
      texte:
        "Regista n’est pas agent sportif. L’agence ne négocie aucun contrat de joueur et ne perçoit aucune rémunération sur ces contrats. Elle facture ses prestations — communication, contenus, dossiers, outils — et ne travaille pas en direct avec des mineurs.",
    },
  },
  {
    titre: "S’outiller,",
    suite: "c’est durer.",
    paragraphes: [
      "Sites, applications, outils de suivi, automatisations. Ce qui permet à une structure de tenir dans la durée sans y passer ses soirées.",
      "Nous développons actuellement Vigie, un outil conçu pour accompagner les clubs dans leur quotidien. Il est en construction : nous en parlons volontiers, nous ne le vendons pas encore.",
    ],
  },
];

export const metiers = [
  {
    titre: "Storytelling",
    // Résumé pour la carte de l'accueil : deux lignes au plus, comme le template.
    resume: "Votre histoire mérite d'être racontée : interviews, articles, photos et vidéos, en formats courts et longs, pour la rendre vivante.",
    texte:
      "Chaque club, joueur et créateur a une histoire qui mérite d'être racontée. Regista la met en récit à travers des interviews, des articles, des formats courts et longs, et des contenus qui la rendent vivante : photos, vidéos, animations, sites internet et applications.",
  },
  {
    titre: "Social média",
    // Résumé pour la carte de l'accueil : deux lignes au plus, comme le template.
    resume: "Une présence cohérente pour faire connaître votre structure.",
    texte:
      "Une communauté se construit au quotidien, et votre structure mérite d'être connue de ses publics. Regista définit la stratégie éditoriale, gère les échanges et suit les tendances pour garder une présence cohérente et vivante. Elle conçoit aussi vos newsletters internes et partenaires et anime votre blog, pour relier votre structure à ceux qui la soutiennent.",
  },
  {
    titre: "Événementiel",
    // Résumé pour la carte de l'accueil : deux lignes au plus, comme le template.
    resume: "Tournois, festivals, soirées : vos temps forts mis en valeur.",
    texte:
      "Chaque temps fort mérite d'être célébré. Regista imagine et met en valeur vos pop-up, festivals, tournois, merchandising, mais aussi les rendez-vous plus formels comme vos réunions administratives et soirées partenaires. Chaque moment devient une occasion de partager votre histoire, et d'en garder un souvenir fort.",
  },
  {
    titre: "Financement",
    // Résumé pour la carte de l'accueil : deux lignes au plus, comme le template.
    resume: "Subventions, mécénat, partenariats : nous trouvons les bons dispositifs, montons vos dossiers et suivons chaque démarche.",
    texte:
      "Nous accompagnons les clubs, académies et structures dans la recherche de financements. Regista identifie les dispositifs adaptés, démarche les partenaires, monte le budget et suit le dossier. Pour les subventions et le mécénat, elle met aussi en relation et assure le suivi juridique. Elle rédige les dossiers aux couleurs de la structure et construit l'argumentaire qui fait la différence.",
  },
  {
    titre: "Digital",
    // Résumé pour la carte de l'accueil : deux lignes au plus, comme le template.
    resume: "Sites vitrines, e-shops, blogs et applications web ou mobiles, pour gagner en visibilité et en productivité.",
    texte:
      "Un site internet fait connaître votre structure, une application lui fait gagner du temps. Regista conçoit des sites vitrines, e-shops, portfolios et blogs pour gagner en visibilité, ainsi que des applications sur Mac, Windows, Linux, en version web, sur iOS et Android, pour gagner en productivité.",
  },
] as const;

export const methode = [
  {
    titre: "Premier échange",
    texte: "On commence par écouter, comprendre vos besoins et vous présenter l'approche de notre agence.",
  },
  {
    titre: "Audit & stratégie",
    texte: "Nous réalisons un audit complet de votre structure et bâtissons un plan d'action et un budget clairs.",
  },
  {
    titre: "Validation",
    texte: "Rien ne démarre tant que vous ne l'avez pas validé.",
  },
  {
    // Le deck répète ici le texte du « Premier échange » : seule la première
    // phrase est reprise, en attendant le texte définitif de Landry.
    titre: "Production",
    texte: "Une stratégie qui ignore vos moyens ne sert à personne.",
  },
  {
    titre: "Livraison",
    texte: "On vous présente les créations.",
  },
] as const;

export type Realisation = {
  slug: string;
  client: string;
  metier: string;
  annee: string;
  /** true quand l'année n'est pas confirmée par Landry (donnée fictive). */
  anneeFictive?: boolean;
  /** Nom du projet quand il diffère du client (ex. la marque du client final) : titre de la page. */
  projet?: string;
  /** Le résultat en une ligne, affiché sur la carte et dans la fiche. */
  resultat: string;
  description: string[];
  couverture: Photo;
  galerie: Photo[];
};

/** Les réalisations, la plus récente en premier : c'est l'ordre de la grille et du menu. */
export const realisations: Realisation[] = [
  {
    slug: "doki-doki",
    client: "Doki Doki",
    projet: "Maison de la Literie",
    metier: "Social média",
    annee: "2026",
    resultat: "+1 500 abonnés en 3 mois",
    description: [
      "L'agence Doki Doki a fait appel à Regista pour intervenir sur les réseaux sociaux de l'un de ses clients, Maison de la Literie. Notre mission : créer une ligne éditoriale capable d'engager la communauté de la marque et de faire grandir son compte Instagram.",
      "Pour le compte de Doki Doki, nous avons construit un calendrier éditorial sur 6 mois, imaginé les concepts de contenus et produit les visuels et vidéos publiés. Après 3 mois : +1 500 abonnés, une quarantaine de contenus par mois et une communauté chaque jour un peu plus réactive et engagée.",
    ],
    couverture: {
      src: lit11,
      alt: "Visuel Instagram « 3 conseils pour mieux dormir ce soir » sur fond terracotta.",
    },
    galerie: [
      { src: lit10, alt: "Visuel Instagram « Quand vient la nuit . 01 — La veille de la rentrée » : une femme endormie sous une couette orange." },
      { src: lit01, alt: "Visuel Instagram : quatre parures de lit de couleurs différentes et l'étiquette « Une seule couleur à choisir… vous prenez laquelle ? »." },
      { src: lit12, alt: "Visuel Instagram « Les nuits changent de saison… » sur un lit aux draps taupe." },
      { src: lit13, alt: "Visuel Instagram du sommier Somflex d'Onéa sur fond terracotta." },
      { src: lit02, alt: "Visuel Instagram du matelas Marcilly Medium dans une chambre bleu clair." },
      { src: lit03, alt: "Visuel Instagram du matelas Fontenay dans une chambre au parquet clair." },
      { src: lit04, alt: "Visuel Instagram : draps rose et bleu, jeu de couleurs croisées." },
      { src: lit05, alt: "Visuel Instagram « 3 critères pour choisir votre matelas » sur fond terracotta." },
      { src: lit06, alt: "Visuel Instagram « Un matelas ferme, c'est meilleur pour le dos ? » avec un sondage en story." },
      { src: lit07, alt: "Visuel Instagram « Bien dormir, c'est bien. Se faire désirer, c'est mieux ! »." },
      { src: lit08, alt: "Visuel Instagram « Et si mieux dormir passait aussi par la taille du lit ? »." },
      { src: lit09, alt: "Visuel Instagram d'un lit aux draps vert sauge." },
    ],
  },
  {
    slug: "fc-rocquancourt",
    client: "FC Rocquancourt",
    metier: "Stratégie",
    annee: "2025",
    resultat: "500 maillots vendus en moins d'une semaine",
    description: [
      "Pour le club normand du FC Rocquancourt (D2), nous avons été consultés sur la stratégie d'amplification de la sortie de ses deux maillots, sortis chez l'équipementier Nike.",
      "En collaboration avec les équipes du club, nous avons mis en place une stratégie de communication sur les réseaux sociaux ainsi qu'une liste de seeding. Résultat : 500 maillots vendus en moins d'une semaine.",
    ],
    couverture: {
      src: roc00,
      alt: "L'équipe du FC Rocquancourt, en maillots grenat « Pompette », fête un trophée dans le vestiaire.",
    },
    galerie: [
      { src: roc01, alt: "Le maillot grenat à rayures du FC Rocquancourt porté, avec l'inscription « Pompette » et des colliers dorés." },
      { src: roc02, alt: "Le maillot noir du FC Rocquancourt porté, inscription ton sur ton et collier doré." },
      // Joueurs et modèle : accord pour la publication confirmé par Landry (03/11/2026).
      { src: roc08, alt: "Trois joueurs du FC Rocquancourt posent en studio, en maillots grenat et noir, sur un tapis de feuilles d'automne." },
      { src: roc09, alt: "Une jeune femme porte le maillot blanc du FC Rocquancourt devant un abri de terrain au toit bleu." },
      // Artiste : accord pour la publication confirmé par Landry (03/11/2026).
      { src: roc07, alt: "Un artiste, un cierge magique à la main, au milieu des invités d'une soirée." },
    ],
  },
  {
    slug: "all-parisian",
    client: "All Parisian",
    metier: "Événementiel",
    annee: "2025",
    resultat: "Un événement complet",
    description: [
      "Pour la première édition du « All African Celebration », l'association All Parisian a fait appel à nos services afin de promouvoir l'événement sur les réseaux sociaux et de générer de la présence le jour de l'événement.",
      "Le jour J, nous avons coordonné les équipes All Parisian pour que l'événement soit relayé en direct via différents canaux. Une mission couronnée de succès, avec un événement complet, une communication avant, pendant et après l'événement, ainsi qu'un accompagnement des jeunes de l'association.",
    ],
    couverture: {
      // Personnes reconnaissables : majeures, accord confirmé par Landry (03/11/2026).
      src: ap07,
      alt: "Deux hommes posent avec le trophée du All African Celebration, l'un en maillot vert « Africa », devant les tribunes du gymnase.",
    },
    galerie: [
      { src: ap02, alt: "Les maillots verts « Africa » du All African Celebration suspendus dans le vestiaire." },
      // Personnes reconnaissables : majeures, accord confirmé par Landry (03/11/2026).
      { src: ap05, alt: "Un joueur en maillot rouge « Africa » n° 19 tend un ballon vers l'objectif, devant la bâche colorée du All African Celebration." },
      { src: ap03, alt: "Le panneau de basket habillé aux motifs colorés du All African Celebration." },
      { src: ap06, alt: "Un jeune homme de profil, en sweat gris marqué du logo All African Celebration 2025, des drapeaux colorés sur la manche." },
      { src: ap04, alt: "Gros plan sur la manche blanche du sweat All African Celebration, ornée de drapeaux colorés, et un bracelet de perles." },
      { src: ap01, alt: "Un joueur en maillot vert « Africa » s'envole pour un dunk devant les tribunes pleines du gymnase." },
    ],
  },
];

/**
 * Le nom affiché d'une réalisation (titre de sa page, vignette, menu) : le
 * projet s'il est précisé (ex. Maison de la Literie, client final de
 * l'agence Doki Doki), sinon le client.
 */
export function titreRealisation(r: Realisation) {
  return r.projet ?? r.client;
}

export function trouverRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}

/* ————————————————————————————————————————————————————————————————
 * CONTENU FICTIF
 * Demandé par Landry le 29/10/2026 pour remplir le template en attendant
 * les vraies informations. Tout ce qui suit est à remplacer.
 * Garde-fou : tant qu'il en reste, la construction de PRODUCTION échoue
 * (voir verifierContenuFictif, appelée dans app/layout.tsx), pour que ces
 * données ne puissent jamais partir sur regista-a.com par erreur.
 * ———————————————————————————————————————————————————————————————— */

export type Temoignage = { nom: string; role: string; texte: string; fictif: true };

export const temoignages: Temoignage[] = [
  {
    nom: "Thomas R.",
    role: "Président de club · exemple",
    texte:
      "Regista a compris notre histoire avant même qu'on ait fini de la raconter. Nos réseaux n'ont jamais été aussi vivants.",
    fictif: true,
  },
  {
    nom: "Sarah B.",
    role: "Directrice d'académie · exemple",
    texte:
      "Un seul interlocuteur, des réponses rapides et un dossier de financement monté de A à Z. Exactement ce qu'il nous fallait.",
    fictif: true,
  },
  {
    nom: "Karim L.",
    role: "Responsable communication · exemple",
    texte: "Le tournage s'est fait en une journée, les contenus ont tenu toute la saison.",
    fictif: true,
  },
  {
    nom: "Julie M.",
    role: "Fondatrice de marque · exemple",
    texte: "Des idées, de la rigueur et une vraie culture foot. On a lancé notre collection avec eux.",
    fictif: true,
  },
  {
    nom: "Mehdi A.",
    role: "Organisateur de tournoi · exemple",
    texte: "Avant, pendant, après : l'événement a été suivi et relayé du début à la fin.",
    fictif: true,
  },
];

export const avisClients = {
  // Les trois pastilles du haut de page reprennent de vrais logos clients.
  logos: [logoRocquancourt, logoDokiDoki, logoTfm],
  titre: "8 clients",
  detail: "nous font déjà confiance.",
};

export type Actualite = {
  slug: string;
  categorie: string;
  date: string;
  titre: string;
  image: Photo;
  paragraphes: string[];
  fictif: true;
};

export const actualites: Actualite[] = [
  {
    slug: "raconter-histoire-club",
    categorie: "Storytelling",
    date: "Publié le 14 octobre 2026",
    titre: "Pourquoi l'histoire de votre club vaut de l'or",
    image: { src: ap01, alt: "Un joueur s'envole pour un dunk devant les tribunes pleines." },
    paragraphes: [
      "Article d'exemple, à remplacer. Chaque club a une histoire : ses fondateurs, ses saisons, ses visages. Bien racontée, elle devient le meilleur argument auprès des partenaires comme des supporters.",
      "Dans cet article, nous verrons comment repérer les moments forts de votre structure et les transformer en contenus : portraits, formats courts, podcasts.",
    ],
    fictif: true,
  },
  {
    slug: "reussir-sortie-maillot",
    categorie: "Social média",
    date: "Publié le 2 octobre 2026",
    titre: "Réussir la sortie d'un maillot en cinq étapes",
    image: { src: roc02, alt: "Le maillot noir du FC Rocquancourt porté." },
    paragraphes: [
      "Article d'exemple, à remplacer. Une sortie de maillot se prépare des semaines à l'avance : teasing, révélation, mise en avant des porteurs, puis suivi des ventes.",
      "Nous détaillerons ici la méthode appliquée pour le FC Rocquancourt.",
    ],
    fictif: true,
  },
  {
    slug: "financer-projets-academie",
    categorie: "Financement",
    date: "Publié le 18 septembre 2026",
    titre: "Financer les projets de votre académie : par où commencer ?",
    image: { src: lit05, alt: "Visuel « 3 critères » sur fond terracotta." },
    paragraphes: [
      "Article d'exemple, à remplacer. Subventions, mécénat, partenariats privés : les pistes sont nombreuses, encore faut-il choisir les bonnes et monter un dossier solide.",
      "Nous verrons comment identifier les dispositifs adaptés à votre structure et construire un argumentaire qui fait la différence.",
    ],
    fictif: true,
  },
];

/** Réseaux sociaux de l'agence (liens donnés par Landry le 03/11/2026). */
export const reseaux: { nom: string; href: string | null; fictif?: true }[] = [
  { nom: "Instagram", href: "https://www.instagram.com/regista_agnc/" },
  { nom: "LinkedIn", href: "https://www.linkedin.com/company/regista-a/" },
  { nom: "Facebook", href: "https://www.facebook.com/profile.php?id=61596082326374" },
  { nom: "X", href: "https://x.com/Regista_agnc" },
];

/**
 * Bloque la construction de production tant qu'il reste du contenu fictif.
 * Les prévisualisations (branches) ne sont pas concernées.
 */
export function verifierContenuFictif() {
  if (process.env.VERCEL_ENV !== "production") return;
  const restes = [
    // Une rubrique éteinte (site-config.ts, rubriques) ne s'affiche pas :
    // son contenu fictif ne bloque pas.
    rubriques.temoignages && temoignages.length && "témoignages",
    // Les actualités d'exemple ne s'affichent jamais en production quand le
    // back office est relié ; sans lui, il n'y aurait que des exemples.
    rubriques.actualites && !sanityRelie && "actualités (back office Sanity non relié)",
    reseaux.some((r) => r.fictif) && "réseaux sociaux",
    realisations.some((r) => r.anneeFictive) && "année d'une réalisation",
    clients.some((c) => c.aConfirmer) && "noms de clients à confirmer",
  ].filter(Boolean);
  if (restes.length) {
    throw new Error(
      `Contenu fictif encore présent (${restes.join(", ")}) : remplacez-le dans src/lib/contenu.ts avant la mise en production.`,
    );
  }
}
