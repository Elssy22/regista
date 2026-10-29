"use client";

import { useEffect, useRef, useState } from "react";
import { defilerVers } from "./lenis";
import styles from "./RetourHaut.module.css";

const LONGUEUR = 307.9; // périmètre du cercle (rayon 49)

/**
 * Le bouton « remonter en haut » du template : il apparaît après 150 px
 * de défilement, et son cercle se remplit avec la progression dans la page.
 */
export function RetourHaut() {
  const [visible, setVisible] = useState(false);
  const trait = useRef<SVGPathElement>(null);

  useEffect(() => {
    const maj = () => {
      const haut = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (trait.current) trait.current.style.strokeDashoffset = String(LONGUEUR - (haut * LONGUEUR) / Math.max(max, 1));
      setVisible(haut > 150);
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    return () => {
      window.removeEventListener("scroll", maj);
      window.removeEventListener("resize", maj);
    };
  }, []);

  return (
    <button
      type="button"
      className={`${styles.bouton} ${visible ? styles.visible : ""}`}
      onClick={() => defilerVers(0, 0.55)}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span className="visuellement-cache">Remonter en haut de la page</span>
      <svg viewBox="0 0 24 24" className={styles.fleche} aria-hidden="true">
        <path d="m7 14 5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <svg className={styles.cercle} viewBox="-1 -1 102 102" aria-hidden="true">
        <path ref={trait} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ strokeDasharray: `${LONGUEUR} ${LONGUEUR}`, strokeDashoffset: LONGUEUR }} />
      </svg>
    </button>
  );
}
