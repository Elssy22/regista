"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/lib/contenu";
import { lenis } from "../effets/lenis";
import styles from "./Galerie.module.css";

/**
 * Galerie d'images qui s'agrandissent au clic (Magnific Popup du template) :
 * fond sombre en fondu, flèches et clavier (← → Échap), compteur « 1 / 4 ».
 */
export function Galerie({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const fermerBtn = useRef<HTMLButtonElement>(null);
  const declencheur = useRef<HTMLButtonElement | null>(null);

  const ouvrir = (i: number, el: HTMLButtonElement) => {
    declencheur.current = el;
    setIndex(i);
    requestAnimationFrame(() => setVisible(true));
  };

  const fermer = useCallback(() => {
    setVisible(false);
    // Comme removalDelay: 300 : on attend la fin du fondu avant de retirer.
    window.setTimeout(() => {
      setIndex(null);
      declencheur.current?.focus();
    }, 300);
  }, []);

  const aller = useCallback(
    (sens: number) =>
      setIndex((i) =>
        i === null ? i : (i + sens + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    lenis()?.stop();
    fermerBtn.current?.focus();
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowRight") aller(1);
      if (e.key === "ArrowLeft") aller(-1);
    };
    window.addEventListener("keydown", surTouche);
    return () => {
      window.removeEventListener("keydown", surTouche);
      lenis()?.start();
    };
  }, [index, fermer, aller]);

  return (
    <>
      <ul className={styles.grille}>
        {photos.map((photo, i) => (
          <li
            key={i}
            data-apparait
            style={
              { "--delai": `${0.2 + (i % 4) * 0.2}s` } as React.CSSProperties
            }
          >
            <button
              type="button"
              className={styles.vignette}
              onClick={(e) => ouvrir(i, e.currentTarget)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <span className="visuellement-cache">Agrandir l&apos;image</span>
            </button>
          </li>
        ))}
      </ul>

      {index !== null &&
        createPortal(
          <div
            className={`${styles.popup} ${visible ? styles.visible : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${index + 1} sur ${photos.length}`}
            onClick={(e) => e.target === e.currentTarget && fermer()}
          >
            <figure className={styles.figure}>
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                sizes="90vw"
                className={styles.grande}
              />
              <figcaption className={styles.compteur}>
                {index + 1} / {photos.length}
              </figcaption>
            </figure>
            <button
              ref={fermerBtn}
              type="button"
              className={styles.fermer}
              onClick={fermer}
            >
              <span aria-hidden="true">×</span>
              <span className="visuellement-cache">Fermer</span>
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.precedent}`}
                  onClick={() => aller(-1)}
                >
                  <span aria-hidden="true">‹</span>
                  <span className="visuellement-cache">Image précédente</span>
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.suivant}`}
                  onClick={() => aller(1)}
                >
                  <span aria-hidden="true">›</span>
                  <span className="visuellement-cache">Image suivante</span>
                </button>
              </>
            )}
          </div>,
          // Rendue à la racine de la page, au-dessus de tout (en-tête compris).
          document.body,
        )}
    </>
  );
}
