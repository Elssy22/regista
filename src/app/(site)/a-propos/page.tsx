import type { Metadata } from "next";
import Image from "next/image";
import { aPropos, fondateur } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { TitreSection } from "@/components/blocs/TitreSection";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Regista, agence football : pourquoi elle existe, qui l'a fondée et le principe qui la guide. Le travail que nous produisons est le vôtre.",
};

/** La page « About » du template : l'accroche, le fondateur (pourquoi
    l'agence existe), puis le principe de l'agence. La méthode est sur
    l'accueil, en frise, dans le bloc « Parlons-en ». */
export default function APropos() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={aPropos.titre} texte={aPropos.intro} />

        {/* Le fondateur : la photo inclinée du template (elle se redresse au
            survol). */}
        <section className="section fond-creme" aria-labelledby="titre-pourquoi" style={{ paddingTop: 40 }}>
          <div className={`conteneur ${styles.fondateur}`}>
            <div className={styles.photo} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
              <Image
                src={fondateur.photo.src}
                alt={fondateur.photo.alt}
                placeholder="blur"
                sizes="(min-width: 992px) 420px, 80vw"
              />
            </div>
            <div data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
              <TitreSection id="titre-pourquoi">{aPropos.pourquoi}</TitreSection>
              <h3 className={styles.nom}>{fondateur.nom}</h3>
              <p className={styles.fonction}>{fondateur.role}</p>
              {fondateur.bio.map((paragraphe) => (
                <p key={paragraphe.slice(0, 24)} className={styles.bio}>
                  {paragraphe}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className={`section fond-bleu ${styles.principe}`} aria-labelledby="titre-principe">
          <div className={`conteneur ${styles.grillePrincipe}`}>
            <TitreSection id="titre-principe">{aPropos.principe.titre}</TitreSection>
            <div data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
              {aPropos.principe.paragraphes.map((paragraphe, i) => (
                <p key={paragraphe.slice(0, 24)} className={i === 0 ? styles.engagement : styles.suite}>
                  {paragraphe}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PiedDePage />
    </>
  );
}
