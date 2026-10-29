"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fait apparaître les blocs marqués `data-apparait` quand ils entrent à
 * l'écran. Une seule fois par bloc, jamais rejoué. Un bloc déjà dépassé
 * (arrivée par une ancre, rechargement en bas de page) s'affiche aussitôt.
 */
export function Animations() {
  const chemin = usePathname();

  useEffect(() => {
    const racine = document.documentElement;
    racine.setAttribute("data-pret", "");
    if (!racine.classList.contains("anim")) return;

    const blocs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-apparait]:not(.est-visible)"),
    );

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          const dejaDepasse = entree.boundingClientRect.bottom < 0;
          if (entree.isIntersecting || dejaDepasse) {
            entree.target.classList.add("est-visible");
            observateur.unobserve(entree.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const bloc of blocs) observateur.observe(bloc);
    return () => observateur.disconnect();
  }, [chemin]);

  return null;
}
