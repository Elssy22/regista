import Reveal from "@/components/ui/Reveal";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  children: React.ReactNode;
  /** Limite la largeur du bloc titre à 560px (sections services / contact). */
  narrow?: boolean;
};

export default function SectionHeading({
  children,
  narrow = false,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap}${narrow ? ` ${styles.narrow}` : ""}`}>
      <Reveal as="h2" className={styles.title}>
        {children}
      </Reveal>
    </div>
  );
}
