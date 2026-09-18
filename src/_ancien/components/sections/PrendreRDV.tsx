import Container from "@/_ancien/components/ui/Container";
import Reveal from "@/_ancien/components/ui/Reveal";
import CalendlyInline from "@/components/calendly/CalendlyInline";
import { siteConfig } from "@/lib/site-config";
import styles from "./PrendreRDV.module.css";

export default function PrendreRDV() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.head}>
            <Reveal as="h2" className={styles.title}>
              Prendre RDV
            </Reveal>
            <Reveal as="p" className={styles.accroche} index={1}>
              Vingt minutes pour comprendre votre projet
              <br />
              et voir si on peut le faire avancer.
            </Reveal>
          </div>

          <Reveal className={styles.widgetWrap}>
            <CalendlyInline url={siteConfig.calendly.inlineUrl} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
