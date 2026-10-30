/**
 * Identifiants du projet Sanity (le back office du blog), créé par Landry
 * le 30/10/2026. L'identifiant de projet n'est pas un secret : il est
 * visible dans le code de toute page qui lit Sanity. Une variable
 * NEXT_PUBLIC_SANITY_PROJECT_ID sur Vercel le remplace si besoin.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "xax83f5z";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-10-01";
export const sanityRelie = projectId.length > 0;
