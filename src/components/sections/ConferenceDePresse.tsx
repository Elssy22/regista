import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./ConferenceDePresse.module.css";

export default function ConferenceDePresse() {
  return (
    <section id="pourqui" className={styles.section}>
      <Container>
        <SectionHeading>La conférence de presse</SectionHeading>
        <div className={styles.video}>
          <span className={styles.playButton} aria-hidden="true">
            <span className={styles.playTriangle} />
          </span>
          <span className={styles.caption}>Vidéo — à venir</span>
        </div>
      </Container>
    </section>
  );
}
