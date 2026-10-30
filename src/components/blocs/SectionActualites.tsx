import { listerArticles } from "@/lib/blog";
import { CarteActualite } from "./CarteActualite";
import { TitreSection } from "./TitreSection";

/**
 * Les actualités sur fond bleu (« Stories » du template), lues dans le
 * back office. Sans article publié, la section ne s'affiche pas.
 */
export async function SectionActualites({ avecTitre = true, limite }: { avecTitre?: boolean; limite?: number }) {
  const articles = (await listerArticles()).slice(0, limite);
  if (!articles.length) {
    return avecTitre ? null : (
      <section className="section fond-bleu texture" aria-label="Articles">
        <p className="conteneur">Les premiers articles arrivent bientôt.</p>
      </section>
    );
  }
  return (
    <section
      className="section fond-bleu texture"
      aria-labelledby={avecTitre ? "titre-actualites" : undefined}
      aria-label={avecTitre ? undefined : "Articles"}
    >
      <div className="conteneur">
        {avecTitre && <TitreSection id="titre-actualites">Actualités</TitreSection>}
        <div style={{ marginTop: avecTitre ? 60 : 0 }}>
          {articles.map((a) => (
            <CarteActualite key={a.slug} actualite={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
