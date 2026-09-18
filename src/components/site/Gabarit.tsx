import type { ReactNode } from 'react'
import { PiedDePage } from '@/components/design-system'
import { NavigationPrincipale } from './NavigationPrincipale'
import { FocusAncres } from './FocusAncres'
import { LiensLegaux, Signature } from './Marque'
import { SocleMouvement } from './mouvement'

export type GabaritProps = {
  /** Étiquette de gauche du pied de page système. */
  section: string
  /** Numéro affiché à droite du pied de page (ex. « 07 / 07 »). */
  page: string
  /** Faux sur la page 404 : ni indicateur de chapitre, ni « actif » de menu. */
  indicateurChapitres?: boolean
  children: ReactNode
}

/**
 * Gabarit commun à la page unique et à la 404 : en-tête collant, pied de
 * page système en bas (CONTENU/Plan_one_page.md, section 2, 6 et 7). Le
 * contenu (`children`) n'est pas enveloppé dans un conteneur à largeur
 * fixe : chaque page compose elle-même ses blocs padés (`.enveloppe`) et
 * ses sections pleine largeur (`.hero`, `.bandeau`) — voir src/styles/site.css.
 * Les pages légales ont leur propre gabarit (components/legal/LegalLayout.tsx),
 * plus sobre : elles ne passent pas par ici.
 *
 * `.rg-quadrillage` (design system, classes générées) pose ici le quadrillage
 * de repos (jetons --quadrillage/--quadrillage-pas, sans vague ni animation)
 * en fond de TOUT <main> — donc de tous les chapitres crème (02, 03, 05, 06,
 * 07 ; le haut de page garde en plus sa propre vague, .hero::before/::after,
 * voir site.css). Un seul calque, jamais réinitialisé section par section :
 * la grille reste continue (mêmes lignes) du haut de page jusqu'à Contact.
 * Le bandeau bleu (04, .bandeau.rg-inverse) a son propre fond opaque, peint
 * par-dessus : il masque cette grille sans qu'il soit besoin de l'exclure
 * explicitement. Jamais sur l'en-tête ni le pied de page (tous deux HORS de
 * <main>, voir plus bas), ni sur les pages légales (gabarit à part).
 */
export function Gabarit({ section, page, indicateurChapitres = true, children }: GabaritProps) {
  return (
    <div className="page">
      <SocleMouvement />
      <NavigationPrincipale suivreChapitres={indicateurChapitres} />
      <FocusAncres />
      <main id="contenu" className="rg-focusable rg-quadrillage" tabIndex={-1}>
        {children}
      </main>
      <div className="enveloppe">
        <Signature />
        <LiensLegaux />
        <div className="pied">
          <PiedDePage section={section} page={page} />
        </div>
      </div>
    </div>
  )
}
