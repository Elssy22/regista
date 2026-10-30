import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId, sanityRelie } from "./env";

/** Lecture seule des articles publiés (le jeu de données est public). */
export const client = sanityRelie ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null;

const constructeur = sanityRelie ? createImageUrlBuilder({ projectId, dataset }) : null;

/** L'adresse d'une image Sanity, recadrée selon le point d'intérêt choisi. */
export function urlImage(source: Parameters<NonNullable<typeof constructeur>["image"]>[0]) {
  if (!constructeur) throw new Error("Sanity n'est pas relié.");
  return constructeur.image(source).auto("format");
}
