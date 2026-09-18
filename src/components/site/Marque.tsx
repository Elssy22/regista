import Link from 'next/link'
import { Monogramme } from '@/components/design-system'
import { siteConfig } from '@/lib/site-config'

/**
 * Les verrouillages du logo, tels que la charte les définit (section 3).
 *
 * Quatre versions existent. Le R seul est réservé à l'avatar, à la favicon,
 * au merch et aux signatures discrètes — PAS au site. La charte attribue
 * explicitement au site la version avec le nom et la ligne descriptive.
 *
 * D'où les deux composants ci-dessous :
 * - `Marque` (R + REGISTA) dans l'en-tête, pour que le nom soit lu tout de suite ;
 * - `Signature` (R + REGISTA + ligne descriptive) en pied de page, qui ferme
 *   la page comme la charte ferme ses documents.
 *
 * Le bloc texte est repris mot pour mot de la charte : il ne se réécrit pas.
 */

export type MarqueProps = {
  /** Hauteur du monogramme en px. 24 dans l'en-tête. */
  hauteur?: number
  className?: string
}

export function Marque({ hauteur = 24, className }: MarqueProps) {
  return (
    <span className={'rg-marque' + (className ? ' ' + className : '')}>
      <Monogramme hauteur={hauteur} titre="" />
      <span className="rg-marque__nom">Regista</span>
    </span>
  )
}

export function Signature() {
  return (
    <div className="rg-signature">
      <Monogramme hauteur={40} titre="" />
      <p className="rg-signature__nom">Regista</p>
      <p className="rg-signature__ligne">
        Agence football — Communication · Financement · Tech
      </p>
    </div>
  )
}

/**
 * Les liens vers les pages légales, en pied de TOUTES les pages.
 *
 * Obligation, pas option : les mentions légales doivent être « facilement et
 * directement accessibles » (loi pour la confiance dans l'économie
 * numérique, article 6-III), et la politique de confidentialité aussi
 * (RGPD, articles 12 et 13). L'ancien pied de page les portait ; il a été
 * remplacé par la refonte, et ces liens avaient disparu avec lui.
 */
export function LiensLegaux() {
  const { mentionsLegalesUrl, politiqueConfidentialiteUrl } = siteConfig.legal
  return (
    <nav className="rg-liens-legaux" aria-label="Informations légales">
      <Link href={mentionsLegalesUrl}>Mentions légales</Link>
      <span aria-hidden="true">·</span>
      <Link href={politiqueConfidentialiteUrl}>Politique de confidentialité</Link>
    </nav>
  )
}
