import { actualites } from "@/lib/contenu";
import { CarteActualite } from "./CarteActualite";
import { TitreSection } from "./TitreSection";

/** Les actualités sur fond bleu (« Stories » du template). Contenu fictif. */
export function SectionActualites({ avecTitre = true }: { avecTitre?: boolean }) {
  return (
    <section className="section fond-bleu texture" aria-labelledby={avecTitre ? "titre-actualites" : undefined} aria-label={avecTitre ? undefined : "Articles"}>
      <div className="conteneur">
        {avecTitre && <TitreSection id="titre-actualites">Actualités</TitreSection>}
        <div style={{ marginTop: avecTitre ? 60 : 0 }}>
          {actualites.map((a) => (
            <CarteActualite key={a.slug} actualite={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
