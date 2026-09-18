'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/design-system'
import { navLinks } from '@/lib/site-config'
import { Marque } from './Marque'

/**
 * Navigation principale, branchée sur le routage Next.js (next/link) via la
 * prop `rendreLien` prévue à cet effet par le design system — voir
 * Architecture_site.md, point 1.d. La disposition en ligne au-delà de
 * 768 px vient d'une requête de média sur `.rg-nav` (src/styles/site.css),
 * pas d'une prop `large` observée en JavaScript : le mobile reste la mise
 * en page de référence.
 *
 * Le logo (lien vers l'accueil) reste un <a> brut, géré par le composant
 * Navigation lui-même : un clic dessus recharge la page. Accepté pour cette
 * version (voir Architecture_site.md, point en suspens n°1).
 */
export function NavigationPrincipale() {
  const pathname = usePathname()
  const liens = navLinks
    .filter((lien) => lien.href !== '/')
    .map((lien) => ({ texte: lien.libelle, href: lien.href, actif: pathname === lien.href }))

  return (
    <Navigation
      liens={liens}
      marque={<Marque />}
      rendreLien={(lien, className) => (
        <Link href={lien.href} className={className} aria-current={lien.actif ? 'page' : undefined}>
          {lien.texte}
        </Link>
      )}
    />
  )
}
