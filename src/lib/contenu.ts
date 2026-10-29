/**
 * Tous les textes du site, repris du deck « Présentation agence 2026 ».
 * Une seule source : pour changer un texte, on le change ici.
 */
import type { StaticImageData } from "next/image";

import landry from "@/assets/equipe/landry-celina.jpg";

import logoRocquancourt from "@/assets/clients/fc-rocquancourt.png";
import logoTfm from "@/assets/clients/the-football-market.png";
import logoDokiDoki from "@/assets/clients/doki-doki.png";
import logoAllParisian from "@/assets/clients/all-parisian.png";
import logoClientO from "@/assets/clients/client-o.png";
import logoMaisonLiterie from "@/assets/clients/maison-de-la-literie.png";
import logoBao from "@/assets/clients/bao-family.png";
import logoClientProfil from "@/assets/clients/client-profil.png";

import roc01 from "@/assets/realisations/fc-rocquancourt/01.jpg";
import roc02 from "@/assets/realisations/fc-rocquancourt/02.jpg";
import roc03 from "@/assets/realisations/fc-rocquancourt/03.jpg";
import roc04 from "@/assets/realisations/fc-rocquancourt/04.jpg";
import roc05 from "@/assets/realisations/fc-rocquancourt/05.jpg";
import roc06 from "@/assets/realisations/fc-rocquancourt/06.jpg";

import lit01 from "@/assets/realisations/maison-de-la-literie/01.jpg";
import lit02 from "@/assets/realisations/maison-de-la-literie/02.jpg";
import lit03 from "@/assets/realisations/maison-de-la-literie/03.jpg";
import lit04 from "@/assets/realisations/maison-de-la-literie/04.jpg";
import lit05 from "@/assets/realisations/maison-de-la-literie/05.jpg";
import lit06 from "@/assets/realisations/maison-de-la-literie/06.jpg";
import lit07 from "@/assets/realisations/maison-de-la-literie/07.jpg";
import lit08 from "@/assets/realisations/maison-de-la-literie/08.jpg";
import lit09 from "@/assets/realisations/maison-de-la-literie/09.jpg";

import ap01 from "@/assets/realisations/all-parisian/01.jpg";
import ap02 from "@/assets/realisations/all-parisian/02.jpg";
import ap03 from "@/assets/realisations/all-parisian/03.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const fondateur = {
  nom: "Landry « Elssy » Célina",
  role: "Fondateur · Chef de projet · DA",
  photo: {
    src: landry,
    alt: "Landry Célina, fondateur de Regista, en sweat gris, éclate de rire.",
  } satisfies Photo,
  pointsForts:
    "Vision de jeu, altruisme, créativité, précision : il a toutes les qualités du Regista.",
};

export const accroche = {
  titre: "Le meneur qui fait briller vos projets.",
  resume: "Contenus, podcasts, identités, financements. Pour les clubs, les académies, les marques.",
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
 * Logos des clients. Deux noms restent à confirmer par Landry : ils
 * apparaissent dans le deck sans être nommés (`aConfirmer: true`).
 */
export const clients: { nom: string; logo: StaticImageData; aConfirmer?: boolean }[] = [
  { nom: "FC Rocquancourt", logo: logoRocquancourt },
  { nom: "The Football Market", logo: logoTfm },
  { nom: "Doki Doki", logo: logoDokiDoki },
  { nom: "All Parisian", logo: logoAllParisian },
  { nom: "Client (nom à confirmer)", logo: logoClientO, aConfirmer: true },
  { nom: "Maison de la Literie", logo: logoMaisonLiterie },
  { nom: "BAO Family", logo: logoBao },
  { nom: "Client (nom à confirmer)", logo: logoClientProfil, aConfirmer: true },
];

export const metiers = [
  {
    titre: "Storytelling",
    texte:
      "Chaque club, joueur et créateur a une histoire qui mérite d'être racontée. Regista la met en récit à travers des interviews, des articles, des formats courts et longs, et des contenus qui la rendent vivante : photos, vidéos, animations, sites internet et applications.",
  },
  {
    titre: "Social média",
    texte:
      "Une communauté se construit au quotidien, et votre structure mérite d'être connue de ses publics. Regista définit la stratégie éditoriale, gère les échanges et suit les tendances pour garder une présence cohérente et vivante. Elle conçoit aussi vos newsletters internes et partenaires et anime votre blog, pour relier votre structure à ceux qui la soutiennent.",
  },
  {
    titre: "Événementiel",
    texte:
      "Chaque temps fort mérite d'être célébré. Regista imagine et met en valeur vos pop-up, festivals, tournois, merchandising, mais aussi les rendez-vous plus formels comme vos réunions administratives et soirées partenaires. Chaque moment devient une occasion de partager votre histoire, et d'en garder un souvenir fort.",
  },
  {
    titre: "Financement",
    texte:
      "Nous accompagnons les clubs, académies et structures dans la recherche de financements. Regista identifie les dispositifs adaptés, démarche les partenaires, monte le budget et suit le dossier. Pour les subventions et le mécénat, elle met aussi en relation et assure le suivi juridique. Elle rédige les dossiers aux couleurs de la structure et construit l'argumentaire qui fait la différence.",
  },
  {
    titre: "Digital",
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

export const partenaires = [
  {
    nom: "Carré Croix",
    role: "Studio créatif",
    texte: "Créativité, passion, bosseur. Le studio créatif de vos créatifs préférés.",
  },
  {
    nom: "Doki Doki",
    role: "Agence social média",
    texte: "Avec Doki Doki, faire battre le cœur de votre communauté est un jeu d'enfant.",
  },
  {
    nom: "All Média Training",
    role: "Media training · Animation d'événements",
    texte:
      "Isoline est la meilleure pour mettre à l'aise vos intervenants ou pour animer toutes les sortes d'événements.",
  },
  {
    nom: "CMR Consulting",
    role: "Développeur web & app",
    texte: "Créer un site internet, un logiciel de gestion ou une app mobile sur mesure : CMR est la solution.",
  },
  {
    nom: "Sapha Hamdani",
    role: "Juriste",
    texte: "Sapha est la meilleure pour assurer vos arrières sur le plan juridique.",
  },
] as const;

export type Realisation = {
  slug: string;
  client: string;
  metier: string;
  /** Le résultat en une ligne, affiché sur la carte et dans la fiche. */
  resultat: string;
  description: string[];
  couverture: Photo;
  galerie: Photo[];
};

export const realisations: Realisation[] = [
  {
    slug: "fc-rocquancourt",
    client: "FC Rocquancourt",
    metier: "Pilotage",
    resultat: "500 maillots vendus en moins d'une semaine",
    description: [
      "Pour le club normand du FC Rocquancourt (D2), nous avons été consultés sur la stratégie d'amplification de la sortie de ses deux maillots, sortis chez l'équipementier Nike.",
      "En collaboration avec les équipes du club, nous avons mis en place une stratégie de communication sur les réseaux sociaux ainsi qu'une liste de seeding. Résultat : 500 maillots vendus en moins d'une semaine.",
    ],
    couverture: {
      src: roc01,
      alt: "Le maillot grenat à rayures du FC Rocquancourt porté, avec l'inscription « Pompette » et des colliers dorés.",
    },
    galerie: [
      { src: roc02, alt: "Le maillot noir du FC Rocquancourt porté, inscription ton sur ton et collier doré." },
      { src: roc03, alt: "Couverture de l'épisode « La pluie » de la série « Faire un maillot »." },
      { src: roc04, alt: "Couverture de l'épisode « Pompette » de la série « Faire un maillot »." },
      { src: roc05, alt: "Couverture de l'épisode « Le reveal » de la série « Faire un maillot »." },
      { src: roc06, alt: "Couverture de l'épisode « Le débrief » de la série « Faire un maillot »." },
    ],
  },
  {
    slug: "doki-doki",
    client: "Doki Doki",
    metier: "Social média",
    resultat: "+1 500 abonnés en 3 mois",
    description: [
      "Pour l'agence Doki Doki, nous avons été missionnés pour gérer les réseaux sociaux de l'un de ses clients, Maison de la Literie. L'objectif était de créer une ligne éditoriale capable d'engager la communauté de l'entreprise et de faire évoluer le compte Instagram.",
      "Nous avons réalisé un calendrier éditorial sur 6 mois, créé des concepts de contenus et produit les visuels et vidéos publiés. Après 3 mois : +1 500 abonnés, une quarantaine de contenus par mois et une communauté chaque jour un peu plus réactive et engagée.",
    ],
    couverture: {
      src: lit01,
      alt: "Visuel Instagram : quatre parures de lit de couleurs différentes et l'étiquette « Une seule couleur à choisir… vous prenez laquelle ? ».",
    },
    galerie: [
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
    slug: "all-parisian",
    client: "All Parisian",
    metier: "Événementiel",
    resultat: "Un événement complet",
    description: [
      "Pour la première édition du « All African Celebration », l'association All Parisian a fait appel à nos services afin de promouvoir l'événement sur les réseaux sociaux et de générer de la présence le jour de l'événement.",
      "Le jour J, nous avons coordonné les équipes All Parisian pour que l'événement soit relayé en direct via différents canaux. Une mission couronnée de succès, avec un événement complet, une communication avant, pendant et après l'événement, ainsi qu'un accompagnement des jeunes de l'association.",
    ],
    couverture: {
      src: ap01,
      alt: "Un joueur en maillot vert « Africa » s'envole pour un dunk devant les tribunes pleines du gymnase.",
    },
    galerie: [
      { src: ap02, alt: "Les maillots verts « Africa » du All African Celebration suspendus dans le vestiaire." },
      { src: ap03, alt: "Le panneau de basket habillé aux motifs colorés du All African Celebration." },
    ],
  },
];

export function trouverRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
