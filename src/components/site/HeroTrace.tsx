'use client'

// Composant client séparé de src/app/page.tsx (composant serveur) pour la
// même raison que OuvertureChapitre.tsx : <EnScene> a besoin d'une fonction
// en enfant, ce qui ne peut pas traverser la frontière serveur → client.

import { EnScene } from './mouvement'
import { TraitVersPoint } from './Passe'

/**
 * M2 — le coup d'envoi : le trait part de sous le logotype (au plus près du
 * R, tout en haut de .hero, juste sous l'en-tête collant), 400 ms après le
 * début de M1 (le quadrillage se pose en vague), sans attendre l'entrée dans
 * l'écran — elle y est déjà. Il traverse la hauteur du bouton « Parler du
 * projet » au passage (un simple repère visuel, plus une arrivée : voir
 * CODE-4) et rejoint le vrai point du chapitre 02, où qu'il soit — mesuré en
 * continu, pas seulement au déclenchement (ROBUSTE-2, REG-RENDU-3, voir
 * TraitVersPoint).
 */
export function HeroTrace() {
  return (
    <EnScene as="div" className="hero__trace" delaiMs={400}>
      {() => <TraitVersPoint cibleId="passe-02" />}
    </EnScene>
  )
}
