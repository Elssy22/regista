"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { definirLenis, lenis } from "./lenis";

/**
 * Défilement doux (Lenis), piloté par l'horloge de GSAP comme dans le
 * template. Coupé si l'appareil demande moins d'animations.
 */
export function DefilementDoux() {
  const chemin = usePathname();

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    // anchors : les liens #section défilent en douceur, sous l'en-tête fixe.
    const l = new Lenis({ anchors: { offset: -100 }, stopInertiaOnNavigate: true });
    definirLenis(l);
    const tic = (temps: number) => l.raf(temps * 1000);
    gsap.ticker.add(tic);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tic);
      l.destroy();
      definirLenis(null);
    };
  }, []);

  // Après un changement de page, Lenis se recale sur la position réelle.
  useEffect(() => {
    const l = lenis();
    if (!l) return;
    l.resize();
    if (!window.location.hash) l.scrollTo(0, { immediate: true, force: true });
  }, [chemin]);

  return null;
}
