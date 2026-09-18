'use client'

// Composant client séparé de src/app/page.tsx (composant serveur) pour la
// même raison que OuvertureChapitre.tsx et HeroTrace.tsx : <EnScene> a
// besoin d'une fonction en enfant. `children` (le cas principal, le duo de
// cartes, la citation…) reste fourni tel quel par page.tsx : de la JSX
// ordinaire traverse la frontière serveur → client sans problème, seule une
// fonction ne le peut pas.

import type { ReactNode } from 'react'
import { EnScene } from './mouvement'
import { PointPasse, TraitVersPoint } from './Passe'

export type BandeauCoeurProps = {
  children: ReactNode
}

/**
 * Le point de la passe (M3, « 03 → résultats du client », or sur bleu)
 * arrive ici, sur le cas principal — directement depuis le chapitre 03
 * (REG-RENDU-1 : l'entête du chapitre 04 ne sert plus de repère
 * intermédiaire) ; le tronçon repart ensuite vers le chapitre 05, mesuré en
 * continu (montage, redimensionnement, chargement des polices —
 * REG-RENDU-3), pas seulement au déclenchement, puisque tout le reste du
 * bandeau (cas-duo, citation, bouton, liseré) le sépare du chapitre 05 d'une
 * hauteur qui varie avec le texte et la largeur d'écran (ROBUSTE-2).
 */
export function BandeauCoeur({ children }: BandeauCoeurProps) {
  return (
    <EnScene as="div" className="bandeau__coeur" seuil={0.3}>
      {() => (
        <>
          <PointPasse id="passe-04" />
          <TraitVersPoint cibleId="passe-05" />
          {children}
        </>
      )}
    </EnScene>
  )
}
