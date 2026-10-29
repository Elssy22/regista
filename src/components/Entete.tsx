"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { menu } from "@/lib/site-config";
import { Logotype } from "./Logo";
import styles from "./Entete.module.css";

/**
 * En-tête collant : logo à gauche, menu à droite. Sur mobile, le menu
 * s'ouvre en plein écran sur fond bleu (Échap ou un lien le referment).
 */
export function Entete() {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);
  const bouton = useRef<HTMLButtonElement>(null);

  // Un filet apparaît sous l'en-tête dès qu'on a quitté le haut de page.
  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 8);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    document.body.style.overflow = "hidden";
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOuvert(false);
        bouton.current?.focus();
      }
    };
    window.addEventListener("keydown", surTouche);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", surTouche);
    };
  }, [ouvert]);

  const fermer = () => setOuvert(false);

  return (
    <header className={`${styles.entete} ${defile ? styles.defile : ""}`}>
      <a href="#contenu" className={styles.evitement}>
        Aller au contenu
      </a>
      <div className={`conteneur ${styles.barre}`}>
        <Link href="/" className={styles.logo} aria-label="Regista, retour à l'accueil" onClick={fermer}>
          <Logotype className={styles.logotype} titre="Regista" />
        </Link>

        <nav aria-label="Menu principal" className={styles.navLarge}>
          <ul>
            {menu.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href}>{lien.libelle}</Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" className={styles.contact}>
            Contact
          </Link>
        </nav>

        <button
          ref={bouton}
          type="button"
          className={styles.burger}
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          onClick={() => setOuvert((v) => !v)}
        >
          <span className="visuellement-cache">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span aria-hidden="true" className={styles.burgerTraits} data-ouvert={ouvert} />
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menu principal"
        className={styles.navMobile}
        data-ouvert={ouvert}
        hidden={!ouvert}
      >
        <ul>
          {[...menu, { libelle: "Contact", href: "/#contact" }].map((lien, i) => (
            <li key={lien.href} style={{ "--i": i } as React.CSSProperties}>
              <Link href={lien.href} onClick={fermer}>
                {lien.libelle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
