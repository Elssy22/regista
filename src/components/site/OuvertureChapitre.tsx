'use client'

// Composant client (et non plus défini dans src/app/page.tsx, un composant
// serveur) : il doit passer une fonction à <EnScene> (rendu conditionné à
// `enVue`, voir mouvement.tsx), et React interdit de faire traverser une
// fonction depuis un composant serveur vers un composant client — d'où ce
// fichier séparé. `children` (le h2 du chapitre, fourni par page.tsx) reste
// lui de la JSX ordinaire : ça, un composant serveur peut le transmettre.

import type { ReactNode } from 'react'
import { Etiquette } from '@/components/design-system'
import { chapitres } from '@/lib/site-config'
import { EnScene } from './mouvement'
import { PointPasse, TraitVersPoint } from './Passe'

const TOTAL_CHAPITRES = chapitres.length.toString().padStart(2, '0')

export type OuvertureChapitreProps = {
  numero: string
  etiquette: string
  /** Pose ici le point d'arrivée de CE chapitre (02, 03, 05) : le chapitre 04
   *  n'en pose pas ici, son point réel vit plus bas, sur les résultats du
   *  client (voir .bandeau__coeur, BandeauCoeur.tsx). */
  idPoint?: string
  /** À partir du point de CE chapitre, trace le tronçon qui rejoint le point
   *  du chapitre suivant, où qu'il vive dans la page (voir TraitVersPoint,
   *  Passe.tsx) — y compris quand ce point vit plus bas qu'une simple
   *  entête, comme le chapitre 03 qui rejoint directement le point du
   *  chapitre 04 dans .bandeau__coeur (REG-RENDU-1). */
  cibleSuivante?: string
  children?: ReactNode
}

/**
 * Bloc d'ouverture des chapitres 02 à 07 : un filet qui se trace de gauche à
 * droite (M5), l'étiquette du chapitre, sa position « 0X / 07 »
 * (CONTENU/Plan_one_page.md, section 2 et 3). `children` reçoit le h2 du
 * chapitre : il reste dans la même zone observée que le filet (une seule
 * IntersectionObserver par chapitre, voir mouvement.tsx).
 *
 * La passe (M2-M3) relie EXACTEMENT le point d'un chapitre au point du
 * suivant, quelle que soit la quantité de texte entre les deux (ROBUSTE-2,
 * MOI-3, ROBUSTE-8, REG-RENDU-1) : voir `idPoint` et `cibleSuivante`
 * ci-dessus — y compris pour le chapitre 04, dont l'entête ne pose plus de
 * repère intermédiaire : le chapitre 03 vise directement son point réel,
 * plus bas dans .bandeau__coeur. Aucun point ni tronçon sur le chapitre 06
 * (À propos).
 */
export function OuvertureChapitre({
  numero,
  etiquette,
  idPoint,
  cibleSuivante,
  children,
}: OuvertureChapitreProps) {
  return (
    <EnScene as="div" className="entete-chapitre">
      {() => (
        <>
          {idPoint && <PointPasse id={idPoint} />}
          {cibleSuivante && <TraitVersPoint cibleId={cibleSuivante} />}
          <span className="entete-chapitre__filet" aria-hidden="true" />
          <div className="entete-chapitre__ligne">
            <Etiquette texte={etiquette} />
            <span className="entete-chapitre__numero" aria-hidden="true">
              {numero} / {TOTAL_CHAPITRES}
            </span>
          </div>
          {children}
        </>
      )}
    </EnScene>
  )
}
