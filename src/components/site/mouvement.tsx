'use client'

// Le mouvement du site (Brief_design_site.md, section 4) : chaque trajectoire
// se trace en un geste, une seule fois, la première fois qu'elle entre dans
// le champ de vision. Elle ne rejoue jamais ensuite. Neutralisé sous
// prefers-reduced-motion (voir src/styles/site.css, qui porte les classes
// .rg-trace / .rg-schema / .rg-grille-animee utilisées ici).

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

function useEnVue<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [enVue, setEnVue] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setEnVue(true))
      return () => cancelAnimationFrame(id)
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.isIntersecting) {
            setEnVue(true)
            observateur.unobserve(el)
          }
        }
      },
      { threshold: 0.3 },
    )
    observateur.observe(el)
    return () => observateur.disconnect()
  }, [])

  return { ref, enVue }
}

/**
 * Fait entrer une `Trajectoire` (ou toute forme de largeur fixe) en scène :
 * elle se révèle de gauche à droite en 1000 ms, une seule fois, à son
 * entrée dans le champ de vision.
 */
export function TraceEnScene({ largeur, children }: { largeur: number; children: ReactNode }) {
  const { ref, enVue } = useEnVue<HTMLSpanElement>()
  const style = { '--rg-trace-largeur': `${largeur}px` } as CSSProperties
  return (
    <span ref={ref} className={'rg-trace' + (enVue ? ' rg-trace--visible' : '')} style={style}>
      {children}
    </span>
  )
}

/**
 * Fait entrer un `PointsTrajectoires` en scène : les points d'abord (fondu
 * de 150 ms), puis le trait qui les relie (1000 ms, ease-in-out), une seule
 * fois. S'appuie sur les classes `rg-pt-point` / `rg-pt-trait` posées dans
 * le composant source (voir primitives.tsx).
 */
export function SchemaEnScene({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, enVue } = useEnVue<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={'rg-schema' + (enVue ? ' rg-schema--visible' : '') + (className ? ' ' + className : '')}
    >
      {children}
    </div>
  )
}

/**
 * Le quadrillage de la section haute de l'Accueil : il se remplit case par
 * case au premier chargement (900 ms au total, 40 à 60 ms de décalage entre
 * cases voisines, ease-out). Purement décoratif — aria-hidden.
 */
export function GrilleAnimee({ cases = 96 }: { cases?: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className={'rg-grille-animee' + (visible ? ' rg-grille-animee--visible' : '')} aria-hidden="true">
      {Array.from({ length: cases }, (_, i) => (
        <span
          key={i}
          className="rg-grille-animee__case"
          style={{ animationDelay: `${Math.min(i * 45, 860)}ms` }}
        />
      ))}
    </div>
  )
}
