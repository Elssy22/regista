import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
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
                {"On l'appelle, Landry, Elssy ou encore Ronaldo. Écrivain et historien du football à ses heures perdues."}
                <br />
                {"Ex-Rédacteur en chef de Camino TV, Ex-président d'association, organisateur d'événements. "}
                <br />
                <br />
                {"12 ans à monter des projets et autant à apprendre à la dure : "}
                <br />
                {"un budget trop serré, un dossier de subvention qui traîne, un sponsor aux abonnés absents. "}
                <br />
                <br />
                {"C'est en se cognant à ces murs-là qu'il a appris à les contourner. Le regista qu'il est aujourd'hui, il l'a construit obstacle après obstacle."}
              </p>
              <p>
                {"Il aime le foot. Zidane pour le contrôle, Garrincha pour la ginga (lancez le sur le sujet, vous êtes prévenus)."}
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
