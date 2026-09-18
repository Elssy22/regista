import Image from "next/image";
import Reveal from "@/_ancien/components/ui/Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="accueil" className={styles.hero}>
      <Image
        src="/hero-stade.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <Reveal as="h1" className={styles.title} index={0}>
          <span className={styles.lineTerrain}>VOUS AVEZ LE TERRAIN.</span>
          <span className={styles.lineReste}>ON A LE RESTE.</span>
        </Reveal>

        <Reveal index={1}>
          <a href="#contact" className={styles.cta}>
            ON S&apos;APPELLE&nbsp;?
          </a>
        </Reveal>
      </div>
    </section>
  );
}
