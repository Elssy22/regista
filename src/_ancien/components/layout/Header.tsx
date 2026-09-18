"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/site-config";
import styles from "./Header.module.css";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apparence du header au scroll : transparent au-dessus du hero,
  // puis vert translucide + flou une fois le hero passé.
  // On se contente de basculer une classe CSS (pas de couleur en dur, pas de re-rendu).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const onScroll = () => {
      const hero = document.getElementById("accueil");
      const headerH = el.offsetHeight;
      const past = hero
        ? window.scrollY > hero.offsetHeight - headerH
        : window.scrollY > 40;
      el.classList.toggle(styles.scrolled, past);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <nav className={`${styles.navDesktop} ${styles.navLeft}`}>
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.libelle}
            </a>
          ))}
        </nav>

        <a href="#accueil" className={styles.logoLink} aria-label="Regista — accueil">
          <Image
            src="/regista-r-transparent.png"
            alt="Regista"
            width={1373}
            height={1146}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={`${styles.navDesktop} ${styles.navRight}`}>
          {navLinks.slice(2).map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.libelle}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={styles.mobileLink}
              >
                {link.libelle}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
