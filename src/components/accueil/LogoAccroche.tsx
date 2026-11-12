"use client";

import { useEffect, useRef } from "react";
import { Logotype } from "../Logo";
import styles from "./Ouverture.module.css";

/**
 * Le logotype géant du haut de l'accueil. Son R est penché vers l'arrière
 * (-10°) et se redresse :
 * - à la souris, au survol (en CSS) ;
 * - sur écran tactile (pas de survol), une fois le rideau de l'écran de
 *   chargement levé, puis à chaque fois qu'on touche le logo.
 * L'inclinaison n'existe qu'avec html.anim : sans JavaScript ou avec
 * « réduire les animations », le logo reste droit, tel qu'il est dessiné.
 */
export function LogoAccroche() {
  const cadre = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const r = cadre.current?.querySelector<SVGGElement>("[data-r]");
    const html = document.documentElement;
    if (!r || !html.classList.contains("anim")) return;
    if (!matchMedia("(hover: none)").matches) return; // la souris : le CSS s'en charge

    let minuteur: number | undefined;
    const redresser = (delai: number) => {
      window.clearTimeout(minuteur);
      minuteur = window.setTimeout(() => r.setAttribute("data-droit", ""), delai);
    };
    // Rideau déjà levé (on revient sur l'accueil) ou pas d'écran de chargement.
    const attendre = () => redresser(400);
    if (html.hasAttribute("data-rideau-leve")) redresser(600);
    else window.addEventListener("rideau-leve", attendre, { once: true });

    // Au toucher : il se penche à nouveau, puis se redresse.
    const toucher = () => {
      r.removeAttribute("data-droit");
      redresser(450);
    };
    const zone = cadre.current;
    zone?.addEventListener("pointerdown", toucher);
    return () => {
      window.clearTimeout(minuteur);
      window.removeEventListener("rideau-leve", attendre);
      zone?.removeEventListener("pointerdown", toucher);
    };
  }, []);

  return (
    <span ref={cadre} className={styles.cadreLogo}>
      <Logotype className={styles.logotype} classeR={styles.r} titre="" />
    </span>
  );
}
