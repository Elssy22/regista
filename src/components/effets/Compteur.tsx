"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Un chiffre qui défile de 0 à sa valeur quand il apparaît à l'écran
 * (compteur du template : 3 s, progression linéaire). Sans animation,
 * la valeur finale s'affiche directement.
 */
/** Nombre à la française : 1500 → « 1 500 » (espace fine insécable). */
const nombre = (n: number) => n.toLocaleString("fr-FR");

export function Compteur({
  valeur,
  prefixe = "",
  suffixe = "",
  duree = 3000,
}: {
  valeur: number;
  prefixe?: string;
  suffixe?: string;
  duree?: number;
}) {
  const [affiche, setAffiche] = useState(valeur);
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!document.documentElement.classList.contains("anim") || !el.current) return;
    setAffiche(0);
    let raf = 0;
    const observateur = new IntersectionObserver(([entree]) => {
      if (!entree.isIntersecting) return;
      observateur.disconnect();
      const debut = performance.now();
      const pas = (t: number) => {
        const p = Math.min((t - debut) / duree, 1);
        setAffiche(Math.floor(p * valeur));
        if (p < 1) raf = requestAnimationFrame(pas);
      };
      raf = requestAnimationFrame(pas);
    });
    observateur.observe(el.current);
    return () => {
      observateur.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valeur, duree]);

  return (
    <span ref={el}>
      <span aria-hidden="true">
        {prefixe}
        {nombre(affiche)}
        {suffixe}
      </span>
      <span className="visuellement-cache">
        {prefixe}
        {nombre(valeur)}
        {suffixe}
      </span>
    </span>
  );
}
