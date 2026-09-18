'use client'

// « La passe » (CONTENU/Plan_one_page.md, section 3, M2 à M4) : la seule
// trajectoire de la page, option A validée par Landry — une chaîne de
// tronçons reliés par des points compte comme UNE seule trajectoire (charte
// p.12, « points et trajectoires »). Composants DU SITE : ils reprennent la
// géométrie de <Trajectoire> (src/components/design-system/primitives.tsx,
// pleine au départ, effilée à l'arrivée) tournée à la verticale, mais ne
// modifient pas le design system (CLAUDE.md racine, structure du dépôt).
//
// Chaque tronçon relie EXACTEMENT le point de son chapitre au point du
// chapitre suivant (hero → 02 → 03 → 04 → 05 ; rien sur 06 ; l'arrivée sur
// Contact reste horizontale, voir .arrivee-passe dans page.tsx). La seule
// façon fiable de tomber pile sur son point, sans jamais le deviner, est de
// mesurer la vraie distance jusqu'à lui (`getBoundingClientRect`) — voir
// <TraitVersPoint> ci-dessous. Deux précisions issues d'une relecture
// (REG-RENDU-1, REG-RENDU-3), toutes deux dans TraitVersPoint :
//  - ce n'est jamais le point lui-même qui sert de repère de mesure (il est
//    déplacé par `translate(-50%,-50%)`, voir .point-passe dans site.css :
//    mesurer SON rectangle donnerait un bord décalé d'environ 4 px, pas son
//    centre réel, dès qu'il est déjà affiché à pleine échelle), mais le haut
//    non transformé de son PARENT — qui coïncide exactement avec le centre
//    du point, puisque celui-ci est posé en `top:0` avant d'être recentré ;
//  - la mesure ne se fait plus une seule fois au déclenchement : elle est
//    reprise au montage, à chaque changement de taille de la page
//    (`ResizeObserver`) et une fois les polices chargées (`document.fonts`,
//    qui peuvent décaler le texte donc la distance). Tant que le tronçon n'a
//    pas été déclenché, il reste de toute façon masqué par le clip-path
//    (site.css, `html.mvt .passe`) : rien ne se rejoue jamais à l'écran.

import { useEffect, useLayoutEffect, useRef } from 'react'

// useLayoutEffect ne fait rien côté serveur (React avertit dans la console) :
// cet alias bascule sur useEffect pendant le rendu serveur (`typeof window`
// n'existe pas alors), et sur useLayoutEffect dans le navigateur — motif
// standard (« isomorphic layout effect »), voir son usage dans TraitVersPoint
// ci-dessous.
const useLayoutEffectIsomorphe = typeof window === 'undefined' ? useEffect : useLayoutEffect

export type PasseProps = {
  /** Épaisseur au départ (haut). Elle s'annule à l'arrivée (bas), comme
   *  Trajectoire. */
  epaisseur?: number
  couleur?: string
  className?: string
}

/**
 * Forme du tronçon : plein en haut (départ), effilé à un point en bas
 * (arrivée). `preserveAspectRatio="none"` + hauteur fluide (100 % de son
 * conteneur, voir .passe dans site.css) : aucune mesure de pixels n'est
 * jamais écrite dans ce composant — c'est toujours le conteneur qui fixe la
 * longueur réelle, mesurée par `TraitVersPoint` ci-dessous.
 */
export function Passe({ epaisseur = 5, couleur = 'var(--accent)', className }: PasseProps) {
  const m = epaisseur / 2
  const d = `M0 0 L${epaisseur} 0 L${m} 100 Z`
  return (
    <svg
      viewBox={`0 0 ${epaisseur} 100`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={'passe' + (className ? ' ' + className : '')}
      style={{ display: 'block', width: epaisseur }}
    >
      <path d={d} fill={couleur} />
    </svg>
  )
}

export type PointPasseProps = {
  /** id DOM du point : sert de cible à `TraitVersPoint` depuis un chapitre
   *  antérieur, quand ce point vit plus loin dans la page. */
  id?: string
  className?: string
}

/**
 * Point de la passe : cercle de 8 px en `currentColor`, pour rester bleu
 * nuit sur crème et crème sur bleu sans jamais utiliser `fill="var(--texte)"`
 * (invisible sur le bandeau bleu — CONTENU/.analyse-one-page.json, M3).
 */
export function PointPasse({ id, className }: PointPasseProps) {
  return (
    <svg
      id={id}
      viewBox="0 0 8 8"
      width={8}
      height={8}
      aria-hidden="true"
      className={'point-passe' + (className ? ' ' + className : '')}
    >
      <circle cx={4} cy={4} r={4} fill="currentColor" />
    </svg>
  )
}

export type TraitVersPointProps = PasseProps & {
  /** id DOM du point à atteindre : peut vivre dans un autre chapitre, à une
   *  distance qui varie avec le texte et la largeur d'écran. */
  cibleId: string
}

/**
 * Tronçon qui rejoint EXACTEMENT le point du chapitre suivant, où qu'il vive
 * dans la page (ROBUSTE-2, MOI-3, REG-RENDU-1, REG-RENDU-3) : mesure, dès le
 * montage puis à chaque changement de taille de la page ou chargement de
 * police, la distance réelle entre son propre départ et le haut du PARENT du
 * point visé (jamais le point lui-même, voir le commentaire en tête de
 * fichier), fixe la hauteur du tronçon dessus, et dérive la durée du tracé de
 * cette même mesure — bornée entre 900 et 2 200 ms, ~1 ms par pixel
 * (CONTENU/Plan_one_page.md, section 3, point 1 des corrections mouvement).
 * La révélation elle-même reste pilotée en CSS par la classe "est-visible"
 * (voir html.mvt .est-visible .passe, site.css) : remesurer avant qu'elle ne
 * soit posée ne rejoue jamais rien à l'écran, le tronçon restant masqué par
 * le clip-path jusque-là.
 *
 * Mesure posée en useLayoutEffect, pas useEffect (corrections mouvement,
 * point 6) : useEffect s'exécute APRÈS la peinture, de façon asynchrone —
 * mesuré en direct, la toute première transition (M2, déclenchée par un
 * simple délai plutôt qu'un défilement) pouvait déjà démarrer avant que
 * --duree-passe soit posée, et se rejouait alors avec le repli CSS
 * (1200ms) au lieu de la durée réelle. useLayoutEffect s'exécute avant la
 * peinture ET avant tout useEffect du reste de l'arbre (donc avant que
 * useEnVue, mouvement.tsx, ne puisse déclencher "est-visible") : la mesure
 * est donc garantie posée avant que la transition ne puisse jamais démarrer.
 */
export function TraitVersPoint({ cibleId, epaisseur, couleur, className }: TraitVersPointProps) {
  const ref = useRef<HTMLSpanElement | null>(null)

  useLayoutEffectIsomorphe(() => {
    const conteneur = ref.current
    // Le point (<PointPasse>) est centré par `translate(-50%,-50%)` sur sa
    // propre position `top:0` (site.css, .point-passe) : mesurer SON
    // rectangle donnerait le bord haut de ce décalage (environ -4px de trop
    // haut dès que le point est affiché à pleine échelle), jamais son centre
    // réel. Le haut de son PARENT, lui, n'est jamais transformé et coïncide
    // exactement avec ce centre.
    const cible = document.getElementById(cibleId)?.parentElement
    if (!conteneur || !cible) return

    const mesurer = () => {
      const depart = conteneur.getBoundingClientRect().top
      const arrivee = cible.getBoundingClientRect().top
      const hauteur = Math.max(0, Math.round(arrivee - depart))
      conteneur.style.height = `${hauteur}px`
      conteneur.style.setProperty('--duree-passe', `${Math.min(2200, Math.max(900, hauteur))}ms`)
    }

    mesurer()
    document.fonts?.ready.then(mesurer)

    const observateur = new ResizeObserver(mesurer)
    observateur.observe(document.documentElement)
    return () => observateur.disconnect()
  }, [cibleId])

  return (
    <span ref={ref} className="passe-piste">
      <Passe epaisseur={epaisseur} couleur={couleur} className={className} />
    </span>
  )
}
