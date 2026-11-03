import type { Metadata } from "next";
import Image from "next/image";
import { methode, fondateur, manifeste } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { TitreSection } from "@/components/blocs/TitreSection";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description: "Regista, l'agence qui se positionne au cœur de votre équipe : son fondateur et sa méthode.",
};

/** La page « About » du template : le fondateur, puis la méthode en cartes. */
export default function APropos() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="À propos" texte={manifeste} />

        {/* Le fondateur : la photo inclinée du template (elle se redresse au
            survol), déplacée de l'accueil à la demande de Landry. */}
        <section className="section fond-creme" aria-labelledby="titre-fondateur" style={{ paddingTop: 40 }}>
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
              <TitreSection id="titre-fondateur">Le fondateur</TitreSection>
              <h3 className={styles.nom}>{fondateur.nom}</h3>
              <p className={styles.fonction}>{fondateur.role}</p>
              <p className={styles.bio}>{fondateur.pointsForts}</p>
            </div>
          </div>
        </section>

        <section className="section fond-creme" aria-labelledby="titre-methode" style={{ paddingTop: 0 }}>
          <div className="conteneur">
            <TitreSection id="titre-methode">Notre méthode</TitreSection>
            <div className={styles.parcours}>
              {[0, 1].map((col) => (
                <div key={col} className={styles.colonne} data-apparait style={{ "--delai": `${0.2 + col * 0.2}s` } as React.CSSProperties}>
                  {methode.map((etape, i) =>
                    i % 2 === col ? (
                      <article key={etape.titre} className={styles.carte}>
                        <span className={styles.date}>Étape {i + 1}</span>
                        <h3>{etape.titre}</h3>
                        <p>{etape.texte}</p>
                      </article>
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <PiedDePage />
    </>
  );
}
