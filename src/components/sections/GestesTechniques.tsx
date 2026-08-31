import { Fragment } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./GestesTechniques.module.css";

/** Un segment de texte : chaîne normale, ou { b } pour un passage en gras. */
type Segment = string | { b: string };
/** Un paragraphe = suite de segments ; un corps de carte = suite de paragraphes. */
type Body = Segment[][];

type Service = {
  titre: string;
  corps: Body;
};

const services: Service[] = [
  {
    titre: "Communication / Événementiel",
    corps: [
      [
        "Votre histoire, c'est ce que vous avez de plus cher, alors ",
        { b: "autant bien la raconter" },
        ". On vous accompagne pas à pas : ",
        { b: "audit des réseaux, stratégie, création de contenu" },
        ", jusqu'à l'entretien. Rien n'est laissé au hasard, vous repartez avec un ",
        { b: "plan d'action sur mesure" },
        ".",
      ],
      [
        "Les moments forts comme une soirée caritative, un repas, un pop-up, une exposition ou un festival ",
        { b: "tissent des liens" },
        " avec vos équipes et votre communauté. L'idéal est simple : ",
        { b: "on crée l'occasion, vous vivez le moment" },
        ".",
      ],
      [
        "Chaque projet est pensé ",
        { b: "sur mesure" },
        ", du brief à la logistique du jour J, pour que vous n'ayez qu'à profiter de l'instant. Une bonne histoire racontée et un bon moment vécu, c'est la même ",
        { b: "fidélité" },
        " qui se construit des deux côtés.",
      ],
    ],
  },
  {
    titre: "Financements",
    corps: [
      [
        "Les soirées et week-ends à se torturer l'esprit avec les chiffres, ou le pincement au cœur de devoir ",
        { b: "abandonner un projet faute de moyens" },
        ", on l'a vécu aussi. Parce que votre temps et votre énergie ne sont pas illimités, nous recherchons les financements (",
        { b: "subventions, sponsoring, mécénat" },
        ") qui correspondent à vos projets, sportifs ou non, et ",
        { b: "montons le dossier" },
        " pour que vous puissiez vous concentrer sur le plus important.",
      ],
      [
        "On connaît ",
        { b: "les rouages, les bons interlocuteurs et les pièges à éviter" },
        " dans chaque dossier. De la recherche du bon dispositif jusqu'au ",
        { b: "suivi après obtention" },
        ", on reste à vos côtés pour que le financement ne soit plus un frein, mais un ",
        { b: "levier" },
        ".",
      ],
    ],
  },
  {
    titre: "Merchandising",
    corps: [
      [
        "Qui n'aime pas avoir un maillot ou un accessoire aux couleurs de son équipe préférée ? ",
        { b: "Écharpes, maillots, goodies" },
        ", nous mettons toute notre expérience et notre créativité à votre service pour créer des produits ",
        { b: "fidèles à votre identité" },
        ".",
      ],
      [
        "Du ",
        { b: "design à la production" },
        ", chaque pièce raconte votre histoire et devient un ",
        { b: "souvenir pour votre communauté" },
        ", un totem à porter fièrement en tribune comme au quotidien. C'est aussi un ",
        { b: "vecteur de visibilité" },
        " qui prolonge votre image au-delà des terrains, et une ",
        { b: "nouvelle source de revenus" },
        " pour votre structure. On s'occupe de tout, du premier croquis à la livraison.",
      ],
    ],
  },
];

function renderBody(corps: Body) {
  return corps.map((paragraphe, pIndex) => (
    <Fragment key={pIndex}>
      {pIndex > 0 && (
        <>
          <br />
          <br />
        </>
      )}
      {paragraphe.map((seg, sIndex) =>
        typeof seg === "string" ? (
          <Fragment key={sIndex}>{seg}</Fragment>
        ) : (
          <strong key={sIndex}>{seg.b}</strong>
        ),
      )}
    </Fragment>
  ));
}

export default function GestesTechniques() {
  return (
    <section id="gestes" className={styles.section}>
      <Container>
        <SectionHeading narrow>Nos gestes techniques</SectionHeading>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.titre} className={styles.card} index={index}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{service.titre}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{renderBody(service.corps)}</p>
              </div>
              <a href="#contact" className={styles.cardBtn}>
                En savoir +
              </a>
            </Reveal>
          ))}

          <Reveal className={styles.ctaCell} index={3}>
            <div className={styles.ctaCard}>
              <div>
                <h3 className={styles.ctaTitle}>
                  Un besoin qui n&apos;est pas dans la liste&nbsp;?
                </h3>
                <p className={styles.ctaText}>
                  Que vous souhaitiez une prestation sur mesure, ou que vous
                  soyez une PME/TPE ou une association non sportive, on
                  s&apos;adapte à votre besoin.
                </p>
              </div>
              <a href="#contact" className={styles.ctaBtn}>
                On s&apos;appelle 20 minutes&nbsp;?
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
