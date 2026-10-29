"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Curseur.module.css";

/**
 * Le curseur du template : un rond qui suit la souris avec un léger
 * retard, et s'efface en grossissant au survol d'un lien. Seulement avec
 * une souris (pas sur écran tactile), et pas avec « réduire les animations ».
 */
export function Curseur() {
  const balle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const souris = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const mouvement = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const el = balle.current;
    if (!souris || !mouvement || !el) return;

    const surDeplacement = (e: MouseEvent) =>
      gsap.to(el, { duration: 0.3, x: e.clientX, y: e.clientY, opacity: 1, ease: "power2.out" });

    // Délégation : marche aussi pour les liens ajoutés après coup.
    const surEntree = (e: MouseEvent) => {
      if ((e.target as Element).closest?.("a, button")) {
        el.classList.add(styles.survol);
        gsap.to(el, { duration: 0.3, scale: 2, opacity: 0, ease: "power1.out" });
      }
    };
    const surSortie = (e: MouseEvent) => {
      const vers = e.relatedTarget as Element | null;
      if ((e.target as Element).closest?.("a, button") && !vers?.closest?.("a, button")) {
        el.classList.remove(styles.survol);
        gsap.to(el, { duration: 0.3, scale: 1, opacity: 1, ease: "power2.out" });
      }
    };

    document.addEventListener("mousemove", surDeplacement);
    document.addEventListener("mouseover", surEntree);
    document.addEventListener("mouseout", surSortie);
    return () => {
      document.removeEventListener("mousemove", surDeplacement);
      document.removeEventListener("mouseover", surEntree);
      document.removeEventListener("mouseout", surSortie);
    };
  }, []);

  return (
    <div className={styles.conteneur} aria-hidden="true">
      <div ref={balle} className={styles.balle} />
    </div>
  );
}
