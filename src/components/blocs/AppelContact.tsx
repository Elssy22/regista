import Link from "next/link";
import { FriseMethode } from "./FriseMethode";
import styles from "./AppelContact.module.css";

/**
 * Le très grand appel du template, « Un projet en tête ? Parlons-en », sur
 * fond or. En bas des pages, il mène à la page Contact ; juste avant le
 * formulaire (accueil), il descend jusqu'à lui (href="#contact") et passe
 * sur crème, le formulaire en dessous prenant l'or. Sur l'accueil, il
 * porte aussi la frise de la méthode (`methode`), entre l'appel et le
 * formulaire. `question` remplace « Un projet en tête ? » (page Pour qui).
 */
export function AppelContact({
  href = "/contact",
  fond = "or",
  methode = false,
  question = "Un projet en tête ?",
}: {
  href?: string;
  fond?: "or" | "creme";
  methode?: boolean;
  question?: string;
}) {
  return (
    <section className={`fond-${fond} ${styles.appel}`} aria-label="Nous contacter">
      <div className="conteneur">
        <p className={styles.question}>{question}</p>
        <p className={styles.geant}>
          <Link href={href}>
            Parlons-en
            {/* La flèche dit que le mot est un lien (revue de design, 19/11/2026). */}
            <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.fleche}>
              <path d="M4 12 12 4M5 4h7v7" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </Link>
        </p>
        {methode && <FriseMethode />}
      </div>
    </section>
  );
}
