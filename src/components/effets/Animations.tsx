"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * L'équivalent de WOW.js + animate.css du template : chaque bloc marqué
 * `data-apparait` monte et apparaît (fadeInUp, 1 s) quand il entre à l'écran,
 * avec son délai (`--delai`). Une seule fois par bloc.
 */
export function Animations() {
  const chemin = usePathname();

  useEffect(() => {
    const racine = document.documentElement;
    racine.setAttribute("data-pret", "");
    if (!racine.classList.contains("anim")) return;

    const blocs = Array.from(document.querySelectorAll<HTMLElement>("[data-apparait]:not(.est-visible)"));
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.isIntersecting || entree.boundingClientRect.bottom < 0) {
            entree.target.classList.add("est-visible");
            observateur.unobserve(entree.target);
          }
        }
      },
      { threshold: 0 },
    );
    for (const bloc of blocs) observateur.observe(bloc);
    return () => observateur.disconnect();
  }, [chemin]);

  return null;
}
