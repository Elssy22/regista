import type { Metadata } from "next";
import Image from "next/image";
import { fondateur, manifeste } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { TitreSection } from "@/components/blocs/TitreSection";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description: "Regista, l'agence qui se positionne au cœur de votre équipe : son manifeste et son fondateur.",
};

/** La page « About » du template : le manifeste, puis le fondateur. (La
    méthode est sur l'accueil, en frise, dans le bloc « Parlons-en ».) */
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

      </main>
      <PiedDePage />
    </>
  );
}
