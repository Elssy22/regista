"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menu } from "@/lib/site-config";
import { realisations, titreRealisation } from "@/lib/contenu";
import styles from "./Entete.module.css";

const sousMenu = [
  { libelle: "Toutes les réalisations", href: "/realisations" },
  ...realisations.map((r) => ({ libelle: titreRealisation(r), href: `/realisations/${r.slug}` })),
];

/**
 * L'en-tête du template : fixe en haut, transparent au départ. Après 100 px
 * de défilement, il prend un fond, un filet, et se resserre. Sans logo
 * (demande de Landry du 30/10/2026) : le menu est centré. Sous 992 px, il
 * passe dans un panneau qui glisse depuis la droite.
 */
export function Entete() {
  const [fixe, setFixe] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [sousOuvert, setSousOuvert] = useState(false);
  const chemin = usePathname();

  useEffect(() => {
    const maj = () => setFixe(window.scrollY >= 100);
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => e.key === "Escape" && setOuvert(false);
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [ouvert]);

  const actif = (href: string) => (href === "/" ? chemin === "/" : chemin.startsWith(href));

  return (
    <>
      <a href="#contenu" className={styles.evitement}>
        Aller au contenu
      </a>
      <header className={`${styles.entete} ${fixe ? styles.fixe : ""}`}>
        <div className={`conteneur ${styles.barre}`}>
          <nav aria-label="Menu principal" className={styles.menu}>
            <ul>
              {menu.map((lien) => (
                <li key={lien.href} className={"sousMenu" in lien ? styles.aSousMenu : undefined}>
                  <Link
                    href={lien.href}
                    // Contact, le but du site, se détache en bouton (revue de design, 19/11/2026).
                    className={lien.href === "/contact" ? `${styles.lien} ${styles.lienContact}` : styles.lien}
                    aria-current={actif(lien.href) ? "page" : undefined}
                  >
                    {lien.libelle}
                  </Link>
                  {"sousMenu" in lien && (
                    <ul className={styles.sousMenu}>
                      {sousMenu.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href}>{s.libelle}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={ouvert}
            aria-controls="panneau-menu"
            onClick={() => setOuvert(true)}
          >
            <span className="visuellement-cache">Ouvrir le menu</span>
            <span aria-hidden="true" className={styles.burgerTraits} />
          </button>
        </div>
      </header>

      {/* Le panneau mobile et son voile (sidebar__area + body-overlay du template). */}
      <div
        id="panneau-menu"
        className={`${styles.panneau} ${ouvert ? styles.ouvert : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!ouvert}
        data-lenis-prevent
      >
        <button type="button" className={styles.fermer} onClick={() => setOuvert(false)}>
          <span className="visuellement-cache">Fermer le menu</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <nav aria-label="Menu principal" className={styles.navMobile}>
          <ul>
            {menu.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} onClick={() => setOuvert(false)}>
                  {lien.libelle}
                </Link>
                {"sousMenu" in lien && (
                  <>
                    <button
                      type="button"
                      className={`${styles.deplier} ${sousOuvert ? styles.deplie : ""}`}
                      aria-expanded={sousOuvert}
                      onClick={() => setSousOuvert((v) => !v)}
                    >
                      <span className="visuellement-cache">Afficher les réalisations</span>
                      <svg viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </button>
                    <div className={`${styles.sousMobile} ${sousOuvert ? styles.sousMobileOuvert : ""}`}>
                      <ul>
                        {sousMenu.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} onClick={() => setOuvert(false)}>
                              {s.libelle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`${styles.voile} ${ouvert ? styles.voileVisible : ""}`} onClick={() => setOuvert(false)} aria-hidden="true" />
    </>
  );
}
