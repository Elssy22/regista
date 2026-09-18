import type { ReactNode } from 'react'
import { PiedDePage } from '@/components/design-system'
import { NavigationPrincipale } from './NavigationPrincipale'
import { Signature } from './Marque'

export type GabaritProps = {
  /** Étiquette de gauche du pied de page système. */
  section: string
  /** Numéro affiché à droite du pied de page (ex. « 02 / 05 »). */
  page: string
  children: ReactNode
}

/**
 * Gabarit commun aux cinq pages : navigation en haut, pied de page système
 * en bas (CONTENU/UX_site.md, section 3). Le contenu (`children`) n'est pas
 * enveloppé dans un conteneur à largeur fixe : chaque page compose elle-même
 * ses blocs padés (`.enveloppe`) et ses sections pleine largeur (`.hero`,
 * `.bandeau`) — voir src/styles/site.css.
 */
export function Gabarit({ section, page, children }: GabaritProps) {
  return (
    <div className="page">
      <div className="enveloppe">
        <NavigationPrincipale />
      </div>
      <main>{children}</main>
      <div className="enveloppe">
        <Signature />
        <div className="pied">
          <PiedDePage section={section} page={page} />
        </div>
      </div>
    </div>
  )
}
