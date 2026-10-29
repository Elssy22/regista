import type { Metadata } from "next";
import Image from "next/image";
import { methode, partenaires, fondateur } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { TitreSection } from "@/components/blocs/TitreSection";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description: "Regista, l'agence qui se positionne au cœur de votre équipe : notre méthode et nos partenaires.",
};

/** La page « About » du template : parcours en cartes, puis compétences. */
export default function APropos() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="À propos" texte={`${fondateur.nom} — ${fondateur.role}. ${fondateur.pointsForts}`} />

        <section className="section fond-creme texture" aria-labelledby="titre-methode" style={{ paddingTop: 40 }}>
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

        <section className="section fond-creme texture" aria-labelledby="titre-partenaires" style={{ paddingTop: 0 }}>
          <div className="conteneur">
            <TitreSection id="titre-partenaires">Nos partenaires</TitreSection>
            <p className="chapo">En fonction de vos besoins, nous faisons appel à des personnes compétentes et pertinentes.</p>
            <ul className={styles.competences}>
              {partenaires.map((p, i) => (
                <li
                  key={p.nom}
                  className={styles.competence}
                  data-apparait
                  style={{ "--delai": `${0.2 + (i % 4) * 0.1}s` } as React.CSSProperties}
                >
                  <Image src={p.logo} alt="" width={55} height={55} className={styles.logo} />
                  <h3>{p.nom}</h3>
                  <p className={styles.role}>{p.role}</p>
                  <p className={styles.texte}>{p.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <PiedDePage />
    </>
  );
}
