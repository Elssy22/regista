# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Avant tout : les dirigeants et bénévoles de clubs amateurs et
d'associations sportives (confirmé par Landry, 03/11/2026). Peu de temps,
peu de budget, souvent seuls à porter la communication et la recherche
d'argent de leur structure. Ils arrivent sur le site pour savoir si Regista
peut les aider à se faire connaître, à trouver des financements ou à se
doter d'outils numériques.

Publics secondaires, servis par les mêmes pages : académies et centres de
formation, marques qui veulent parler football, agences qui sous-traitent
du contenu (cas Doki Doki).

## Product Purpose

Site vitrine de Regista, agence de communication, de financement et de
technologie dédiée au football, fondée par Landry « Elssy » Célina
(Île-de-France). Son but : que le visiteur prenne contact pour parler de
son projet (formulaire, téléphone ou e-mail). Montrer les réalisations et
expliquer l'offre servent ce but, ils ne le remplacent pas.

## Positioning

- **Tout-en-un** : contenus et réseaux sociaux, événementiel, montage de
  dossiers de financement (subventions, mécénat, partenariats) et outils
  numériques (sites, e-shops, applications) au même endroit, pour des
  structures qui n'ont pas les moyens de multiplier les prestataires.
- **Le storytelling comme point de départ** : tout part de l'histoire de
  la structure (« ce que vous avez de plus précieux : votre histoire »).

## Operating Context

- Cinq métiers : Storytelling, Social média, Événementiel, Financement,
  Digital.
- Méthode en cinq étapes : premier échange, audit et stratégie, validation,
  production, livraison.
- Le formulaire de contact n'envoie rien par le site : il ouvre la
  messagerie du visiteur (`mailto:`).
- Le blog (Sanity, `/studio`) et les témoignages existent mais sont éteints
  en attendant du contenu réel (`rubriques` dans `src/lib/site-config.ts`).

## Capabilities and Constraints

- Next.js 16, déployé sur Vercel ; textes dans `src/lib/contenu.ts`.
- Français, vouvoiement.
- Périmètre (texte de Landry, page Métiers) : Regista n'est pas agent
  sportif, ne négocie aucun contrat de joueur, ne perçoit rien sur ces
  contrats, facture ses prestations et ne travaille pas en direct avec des
  mineurs.
- Vigie, l'outil pour les clubs, est en construction : on en parle, on ne
  le vend pas. Ne jamais le présenter comme disponible.
- Aucun prix, aucune fourchette, aucun taux.
- Pas de mineur identifiable, pas de visage reconnaissable sans accord
  confirmé par Landry, pas de personnalité citée sans accord. Logos et
  photos de clients seulement avec leur accord.
- Décidé : mise en page et animations reprises du template ThemeForest
  « Nino » ; direction artistique tirée du deck « Présentation agence
  2026 » (détails dans `CLAUDE.md`).
- À décider ou à fournir : texte définitif de l'étape « Production »,
  fichiers de la police Sanserata.

## Brand Commitments

- Nom : Regista (le meneur de jeu qui oriente le jeu depuis le milieu).
  Logotype et R seul dans `public/brand/`, à ne jamais redessiner.
- Signature : « Regista se positionne au cœur de votre équipe ».
- Voix : directe, chaleureuse, vocabulaire du football, vouvoiement.

## Evidence on Hand

- Trois réalisations réelles, avec photos (`src/assets/realisations/`) :
  - Maison de la Literie, pour l'agence Doki Doki (social média, 2026) :
    +1 500 abonnés en 3 mois, une quarantaine de contenus par mois ;
  - FC Rocquancourt (stratégie) ;
  - All African Celebration, pour l'association All Parisian
    (événementiel, 2025) : événement complet.
- Le parcours du fondateur (texte de Landry, page À propos) : cofondateur
  d'un média lifestyle (plus d'un million d'abonnés cumulés), rédacteur,
  animateur puis six ans à la tête de la rédaction ; formé en club amateur.
  Le site ne nomme pas le média : garder ce choix.
- Le principe de l'agence : Regista ne signe jamais les livrables de ses
  clients ; ses propres supports sont sa seule vitrine.
- Bandeau de huit logos clients, tous nommés (`clients` dans
  `src/lib/contenu.ts`).
- Absences à ne pas combler par de l'invention : aucun témoignage réel,
  aucun article publié, aucun chiffre au-delà de ceux ci-dessus.

## Product Principles

1. Chaque page mène au contact ; rien ne doit l'éclipser.
2. Montrer le concret (réalisations, chiffres réels) plutôt que des
   promesses.
3. Parler à un dirigeant de club pressé : clair, court, sans jargon
   d'agence.
4. Ne rien publier qui engage un tiers sans son accord (images, logos,
   noms).

## Accessibility & Inclusion

- Contrastes : texte bleu sur or (5:1), jamais crème sur or ; sur crème,
  l'or ne porte pas de texte.
- Toutes les animations s'arrêtent avec « réduire les animations », et
  rien n'est caché sans JavaScript.
