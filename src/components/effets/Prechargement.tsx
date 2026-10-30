"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Logotype } from "../Logo";
import styles from "./Prechargement.module.css";

/**
 * L'écran de chargement du template : le logotype Regista clignote,
 * remonte, puis le rideau bleu se courbe et se lève. Une fois par visite (au premier
 * chargement), jamais en naviguant d'une page à l'autre.
 * Sans JavaScript ou avec « réduire les animations », il n'existe pas.
 */
export function Prechargement() {
  const [fini, setFini] = useState(false);
  const racine = useRef<HTMLDivElement>(null);
  const courbe = useRef<SVGPathElement>(null);
  const texte = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sans html.anim, le CSS le cache déjà : rien à lancer.
    if (!document.documentElement.classList.contains("anim")) return;
    let tl: gsap.core.Timeline | undefined;
    const lancer = () => {
      tl = gsap.timeline({
        onComplete: () => {
          setFini(true);
          // Signal pour le haut de l'accueil (le R du logo se redresse).
          document.documentElement.setAttribute("data-rideau-leve", "");
          window.dispatchEvent(new Event("rideau-leve"));
        },
      });
      tl.to(texte.current, { delay: 1.5, y: -100, opacity: 0 });
      tl.to(courbe.current, { duration: 0.5, attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" }, ease: "power2.in" })
        .to(courbe.current, { duration: 0.5, attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }, ease: "power2.out" });
      tl.to(racine.current, { y: -1500 });
    };
    if (document.readyState === "complete") lancer();
    else window.addEventListener("load", lancer, { once: true });
    return () => {
      window.removeEventListener("load", lancer);
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
