"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Logotype } from "../Logo";
import styles from "./Prechargement.module.css";

/**
 * L'écran de chargement du template : le logotype Regista clignote,
 * remonte, puis le rideau bleu se courbe et se lève. Une fois par visite
 * (mémorisé en sessionStorage), jamais en naviguant d'une page à l'autre.
 * Il attend le chargement des images, au plus 1,2 s.
 * Sans JavaScript ou avec « réduire les animations », il n'existe pas.
 */
export function Prechargement() {
  const [fini, setFini] = useState(false);
  const racine = useRef<HTMLDivElement>(null);
  const courbe = useRef<SVGPathElement>(null);
  const texte = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    // Sans html.anim, le CSS le cache déjà : rien à lancer.
    if (!html.classList.contains("anim")) return;
    // Signal pour le haut de l'accueil (le R du logo se redresse).
    const lever = () => {
      setFini(true);
      html.setAttribute("data-rideau-leve", "");
      window.dispatchEvent(new Event("rideau-leve"));
    };
    // Déjà joué pendant cette visite : le CSS le cache, on lève tout de suite.
    if (html.classList.contains("rideau-vu")) {
      lever();
      return;
    }
    let tl: gsap.core.Timeline | undefined;
    let minuteur: number | undefined;
    const lancer = () => {
      if (tl) return;
      window.clearTimeout(minuteur);
      try {
        sessionStorage.setItem("regista-rideau", "1");
      } catch {
        // Stockage bloqué (navigation privée) : il rejouera, sans gravité.
      }
      tl = gsap.timeline({ onComplete: lever });
      tl.to(texte.current, { delay: 1.5, y: -100, opacity: 0 });
      tl.to(courbe.current, { duration: 0.5, attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" }, ease: "power2.in" })
        .to(courbe.current, { duration: 0.5, attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }, ease: "power2.out" });
      tl.to(racine.current, { y: -1500 });
    };
    // On attend les images, mais jamais plus de 1,2 s (connexion mobile lente).
    if (document.readyState === "complete") lancer();
    else {
      window.addEventListener("load", lancer, { once: true });
      minuteur = window.setTimeout(lancer, 1200);
    }
    return () => {
      window.removeEventListener("load", lancer);
      window.clearTimeout(minuteur);
      tl?.kill();
    };
  }, []);

  if (fini) return null;

  return (
    <div ref={racine} className={styles.prechargement} aria-hidden="true">
      <svg className={styles.rideau} viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref={courbe} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div ref={texte} className={styles.texte}>
        <Logotype className={styles.logo} titre="Regista" />
      </div>
    </div>
  );
}
