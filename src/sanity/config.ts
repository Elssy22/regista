"use client";

/**
 * Configuration du back office (Sanity Studio), servi à l'adresse /studio.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { frFRLocale } from "@sanity/locale-fr-fr";
import { apiVersion, dataset, projectId } from "./env";
import { article } from "./schemas/article";

export default defineConfig({
  name: "regista",
  title: "Regista — Back office",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  schema: { types: [article] },
  plugins: [
    structureTool({
      title: "Contenu",
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Articles du blog")
              .schemaType("article")
              .child(S.documentTypeList("article").title("Articles du blog").defaultOrdering([{ field: "datePublication", direction: "desc" }])),
          ]),
    }),
    frFRLocale(),
  ],
});
