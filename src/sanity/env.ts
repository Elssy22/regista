/**
 * Identifiants du projet Sanity (le back office du blog). L'identifiant de
 * projet n'est pas un secret : il est visible dans le code de toute page
 * qui lit Sanity. Tant qu'il est vide, le site affiche les articles
 * d'exemple de src/lib/contenu.ts et /studio explique quoi faire.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-10-01";
export const sanityRelie = projectId.length > 0;
