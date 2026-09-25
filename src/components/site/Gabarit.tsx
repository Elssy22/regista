import type { ReactNode } from 'react'
import { Monogramme } from '@/components/design-system'
import { NavigationPrincipale } from './NavigationPrincipale'
import { FocusAncres } from './FocusAncres'
import { LiensLegaux, Signature } from './Marque'
import { SocleMouvement } from './mouvement'

export type GabaritProps = {
  /** Faux sur la page 404 : ni indicateur de chapitre, ni « actif » de menu. */
  indicateurChapitres?: boolean
  children: ReactNode
}

/**
 * Gabarit commun à la page unique et à la 404 : en-tête collant, petit R
 * de signature en bas (CONTENU/Plan_one_page.md, section 2, 6 et 7). Le
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
export function Gabarit({ indicateurChapitres = true, children }: GabaritProps) {
  return (
    <div className="page">
      <SocleMouvement />
      <NavigationPrincipale suivreChapitres={indicateurChapitres} />
      <FocusAncres />
      <main id="contenu" className="rg-focusable rg-quadrillage" tabIndex={-1}>
        {children}
      </main>
      {/* <footer> et non <div> depuis le 25/09/2026 (critique Impeccable,
          accord de Landry) : mesuré en direct, la page ne portait AUCUN
          repère « contentinfo » — un lecteur d'écran ne pouvait donc pas
          sauter directement au pied de page, alors que <main> et <header>
          existaient bien. Le rendu ne change pas d'un pixel. */}
      <footer className="enveloppe">
        <Signature />
        <LiensLegaux />
        {/* Seul le petit R, centré (décision de Landry du 25/09/2026) :
            l'ancien pied de page système affichait « CONTACT … 07 / 07 »,
            un reste du site à plusieurs pages qui ne voulait plus rien dire
            sur une page unique. Signature discrète : l'usage du R seul que
            la charte autorise (interdit n°7 de CLAUDE.md). */}
        <div className="pied pied--signature">
          <Monogramme hauteur={16} />
        </div>
      </footer>
    </div>
  )
}
