import Image from "next/image";
import Container from "@/_ancien/components/ui/Container";
import SectionHeading from "@/_ancien/components/ui/SectionHeading";
import Reveal from "@/_ancien/components/ui/Reveal";
import styles from "./NotreRegista.module.css";

export default function NotreRegista() {
  return (
    <section id="apropos" className={styles.section}>
      <Container>
        <SectionHeading>Notre regista</SectionHeading>

        <div className={styles.grid}>
          <Reveal className={styles.portraitCol} index={0}>
            <Image
              src="/landry.jpg"
              alt="Landry Célina"
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 100vw, 320px"
              className={styles.portrait}
            />
          </Reveal>

          <Reveal index={1}>
            <div className={styles.bio}>
              <p>{"Landry Célina, fondateur de Regista."}</p>
              <p>
                {"On l'appelle Landry, Elssy ou encore Ronaldo. Écrivain et historien du football à ses heures perdues."}
              </p>
              <p>
                {"Ces 13 dernières années, il a été cofondateur et rédacteur en chef de Camino TV, président d'une association proposant des ateliers numériques et organisateur d'événements. Créer du contenu, construire des projets, rencontrer les bonnes personnes, trouver des financements, organiser des événements : tout ça a été son quotidien."}
              </p>
              <p>
                {"C'est en se cognant à ces murs-là qu'il a appris à les contourner. Le regista qu'il est aujourd'hui, il l'a construit obstacle après obstacle."}
              </p>
              <p>
                {"Il aime le foot. Zidane pour le contrôle, Garrincha pour la ginga (lancez-le sur le sujet, vous êtes prévenus)."}
              </p>
              <p>
                {"Vous avez le terrain, les joueurs, les résultats. Ce qu'il sait faire, lui, c'est la passe : celle qui fait naître un projet, qui débloque un budget, qui ouvre une porte. Vous marquez, il s'occupe du reste."}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
