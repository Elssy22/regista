import { defineArrayMember, defineField, defineType } from "sanity";

// Les cinq métiers de Regista (mêmes intitulés que src/lib/contenu.ts).
const CATEGORIES = ["Storytelling", "Social média", "Événementiel", "Financement", "Digital"];

/** Un article du blog, tel qu'il se remplit dans le back office. */
export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Adresse de la page",
      description: "Générée depuis le titre : cliquez sur « Générer ». Elle ne doit plus changer une fois l'article publié.",
      type: "slug",
      options: { source: "titre", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: { list: CATEGORIES, layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "datePublication",
      title: "Date de publication",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Description de l'image",
          description: "Ce que montre l'image, pour les personnes qui ne la voient pas (lecteurs d'écran) et pour Google.",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "extrait",
      title: "Résumé",
      description: "Une ou deux phrases. Elles apparaissent dans Google et sur les réseaux quand l'article est partagé.",
      type: "text",
      rows: 3,
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "corps",
      title: "Texte de l'article",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraphe", value: "normal" },
            { title: "Intertitre", value: "h2" },
            { title: "Sous-intertitre", value: "h3" },
            { title: "Citation", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Description de l'image", type: "string", validation: (r) => r.required() }),
            defineField({ name: "legende", title: "Légende (facultative)", type: "string" }),
          ],
        }),
      ],
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Date de publication, la plus récente d'abord",
      name: "dateDesc",
      by: [{ field: "datePublication", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titre", subtitle: "categorie", media: "image" },
  },
});
