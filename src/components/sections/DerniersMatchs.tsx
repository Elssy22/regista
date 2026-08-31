import { Fragment } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./DerniersMatchs.module.css";

type Match = {
  titre: string;
  src: string;
  /** Lignes de description (séparées par un saut de ligne dans le rendu). */
  description: string[];
};

const matchs: Match[] = [
  {
    titre: "FC Rocquancourt",
    src: "/terrain-rocquancourt.jpg",
    description: [
      "Conseils stratégie de lancement de produit.",
      "Seeding produits (Pierre Bouby, SDM, Jean Jass etc...)",
    ],
  },
  {
    titre: "All African Celebration",
    src: "/aac-photo.jpg",
    description: [
      "Communication Réseaux Sociaux",
      " Avant-Pendant-Après l'evenement ",
    ],
  },
  {
    titre: "La Maison de la Literie",
    src: "/terrain-maison-literie.jpeg",
    description: ["Création de contenus pour les réseaux sociaux."],
  },
];

export default function DerniersMatchs() {
  return (
    <section id="terrain" className={styles.section}>
      <Container>
        <SectionHeading>Nos derniers matchs</SectionHeading>

        <div className={styles.grid}>
          {matchs.map((match, index) => (
            <Reveal key={match.titre} className={styles.item} index={index}>
              <div className={styles.photoWrap}>
                <Image
                  src={match.src}
                  alt={match.titre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.photo}
                />
              </div>
              <h3 className={styles.itemTitle}>{match.titre}</h3>
              <p className={styles.itemDesc}>
                {match.description.map((ligne, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {ligne}
                  </Fragment>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
