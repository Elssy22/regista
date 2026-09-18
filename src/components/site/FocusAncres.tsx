'use client'

import { useEffect } from 'react'
import { chapitres } from '@/lib/site-config'

const IDS_CHAPITRES = new Set<string>(chapitres.map((chapitre) => chapitre.id))

/** Pose le focus sur le h1/h2 du chapitre désigné par l'ancre donnée, si elle
 *  correspond bien à un chapitre existant (jamais « #contenu », l'ancre du
 *  lien d'évitement). preventScroll : le défilement est déjà géré par le
 *  navigateur (ou par Next lors d'un changement de route), on ne fait que
 *  déplacer le focus. */
function focaliserChapitre(id: string | undefined) {
  if (!id || !IDS_CHAPITRES.has(id)) return
  const section = document.getElementById(id)
  const titre = section?.querySelector<HTMLElement>('h1, h2')
  if (!titre) return
  titre.focus({ preventScroll: true })
}

/**
 * Pose le focus sur le titre (h1 ou h2) du chapitre visé par une ancre de
 * chapitre (« /#offres », etc.) — CONTENU/Plan_one_page.md, section 2 et 7.3.
 * Chaque titre de chapitre porte tabIndex={-1} dans src/app/page.tsx. Trois
 * déclencheurs :
 *  1. clic sur un lien interne de la page unique elle-même (écouteur global,
 *     y compris les liens du sommaire mobile : NavigationPrincipale ne ferme
 *     le panneau qu'à la sélection, elle ne bloque plus ce clic — voir sa
 *     docstring, ROBUSTE-5) ;
 *  2. montage de la page avec une ancre de chapitre déjà dans l'adresse
 *     (arrivée depuis une autre page, ex. la 404 ou une page légale,
 *     ROBUSTE-11) ;
 *  3. changement de hash sans clic sur un lien interne (retour/avance du
 *     navigateur, adresse modifiée à la main).
 *
 * Ignore le lien d'évitement (« #contenu » n'est pas un chapitre) : le
 * comportement natif du navigateur suffit là, <main> porte déjà tabIndex={-1}.
 */
export function FocusAncres() {
  useEffect(() => {
    // Laisse le défilement (natif ou celui de Next lors du changement de
    // route) s'engager avant de déplacer le focus.
    const id = requestAnimationFrame(() =>
      focaliserChapitre(window.location.hash.replace(/^#/, '')),
    )

    function surChangementDeHash() {
      focaliserChapitre(window.location.hash.replace(/^#/, ''))
    }

    function surClic(evenement: MouseEvent) {
      const cible = evenement.target
      if (!(cible instanceof Element)) return
      const lien = cible.closest('a[href*="#"]')
      if (!lien) return

      const href = lien.getAttribute('href') ?? ''
      const correspondance = href.match(/#([^/?]+)$/)

      // Laisse le défilement natif s'engager avant de déplacer le focus.
      requestAnimationFrame(() => focaliserChapitre(correspondance?.[1]))
    }

    document.addEventListener('click', surClic)
    window.addEventListener('hashchange', surChangementDeHash)
    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('click', surClic)
      window.removeEventListener('hashchange', surChangementDeHash)
    }
  }, [])

  return null
}
