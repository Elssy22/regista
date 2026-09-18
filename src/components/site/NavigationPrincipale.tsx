'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { chapitres, navLinks, type IdChapitre } from '@/lib/site-config'
import { Marque } from './Marque'

const TOTAL = chapitres.length.toString().padStart(2, '0')

export type NavigationPrincipaleProps = {
  /**
   * Faux sur la page 404 (CONTENU/Plan_one_page.md, section 2 et 7.3) : ni
   * indicateur de chapitre, ni suivi par IntersectionObserver, ni « actif »
   * sur les liens du menu — la 404 n'appartient à aucun chapitre.
   */
  suivreChapitres?: boolean
}

/**
 * En-tête collant du site (CONTENU/Plan_one_page.md, section 2 et 7.3) :
 * lien d'évitement, logotype vers /#accueil, menu en ancres absolues avec
 * indicateur « 0X / 07 » tenu par un seul IntersectionObserver, et — sous
 * 768 px — un bouton « Sommaire » qui ouvre les 7 chapitres.
 *
 * Le panneau <nav id="rg-sommaire"> reste toujours monté dans le DOM (masqué
 * par l'attribut hidden quand fermé) : aria-controls du bouton désigne donc
 * toujours un id existant (CODE-3/ROBUSTE-6). Un observateur de largeur
 * referme aussi le sommaire si la fenêtre repasse en format bureau pendant
 * qu'il est ouvert (ROBUSTE-6, point 2).
 *
 * Choisir un chapitre dans le sommaire ferme le panneau ; le focus qui suit
 * est ensuite posé par FocusAncres.tsx sur le h2 du chapitre visé — pas sur
 * ce bouton (voir sa docstring, ROBUSTE-5). Le focus ne revient sur ce
 * bouton qu'à la fermeture par Échap, ci-dessous.
 *
 * Ne réécrit jamais l'adresse (pas de history.pushState/replaceState) : le
 * chapitre courant ne vit qu'en état React, voir CLAUDE.md racine sur les
 * changements du design system — ce composant est une composition du site,
 * pas une modification du <Navigation> partagé (components/design-system).
 */
export function NavigationPrincipale({ suivreChapitres = true }: NavigationPrincipaleProps) {
  const [chapitreActifId, setChapitreActifId] = useState<IdChapitre>(chapitres[0].id)
  const [sommaireOuvert, setSommaireOuvert] = useState(false)
  const boutonSommaireRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!suivreChapitres) return

    const elements = chapitres
      .map((chapitre) => document.getElementById(chapitre.id))
      .filter((element): element is HTMLElement => element !== null)
    if (elements.length === 0) return

    // Bande fine au centre de l'écran : un chapitre y « entre » quand son
    // bloc occupe la zone de lecture, pas dès qu'un pixel apparaît en bas.
    const visibles = new Set<IdChapitre>()
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          const id = entree.target.id as IdChapitre
          if (entree.isIntersecting) visibles.add(id)
          else visibles.delete(id)
        }
        // Parmi les chapitres visibles dans la bande, le plus bas dans la
        // page (le dernier de la liste ordonnée) est le chapitre courant.
        const courant = chapitres.filter((chapitre) => visibles.has(chapitre.id)).pop()
        if (courant) setChapitreActifId(courant.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((element) => observateur.observe(element))
    return () => observateur.disconnect()
  }, [suivreChapitres])

  useEffect(() => {
    if (!sommaireOuvert) return
    function surEchap(evenement: KeyboardEvent) {
      if (evenement.key !== 'Escape') return
      setSommaireOuvert(false)
      boutonSommaireRef.current?.focus()
    }
    document.addEventListener('keydown', surEchap)
    return () => document.removeEventListener('keydown', surEchap)
  }, [sommaireOuvert])

  useEffect(() => {
    if (!sommaireOuvert) return
    // Referme le sommaire si la fenêtre repasse au-dessus du point de rupture
    // mobile (tablette qu'on tourne, fenêtre agrandie) : sans ça, le panneau
    // resterait ouvert en état React même si le CSS le masque (ROBUSTE-6).
    const media = window.matchMedia('(min-width: 768px)')
    function surChangement(evenement: MediaQueryListEvent) {
      if (evenement.matches) setSommaireOuvert(false)
    }
    media.addEventListener('change', surChangement)
    return () => media.removeEventListener('change', surChangement)
  }, [sommaireOuvert])

  const indicateur = `${chapitres.find((c) => c.id === chapitreActifId)?.numero ?? chapitres[0].numero} / ${TOTAL}`

  function choisirDansLeSommaire() {
    // Ne gère PAS le focus de retour : FocusAncres (écouteur global sur
    // document) traite aussi ce clic — stopPropagation() ne l'en empêchait
    // pas (deux écouteurs sur le même nœud), et ce comportement est le bon
    // (focus posé sur le h2 du chapitre, voir FocusAncres.tsx). On se
    // contente donc de refermer le panneau ici (ROBUSTE-5).
    setSommaireOuvert(false)
  }

  return (
    <header className="rg-entete">
      <a className="rg-evitement" href="#contenu">
        Aller au contenu
      </a>

      <div className="enveloppe rg-entete__barre">
        <Link href="/#accueil" className="rg-nav__marque" aria-label="Regista, accueil">
          <Marque />
        </Link>

        <nav className="rg-entete__nav" aria-label="Navigation principale">
          <ul className="rg-entete__liste">
            {navLinks.map((lien) => {
              const actif = suivreChapitres && (lien.chapitres as readonly string[]).includes(chapitreActifId)
              return (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className={'rg-nav__lien' + (actif ? ' est-courant' : '')}
                    aria-current={actif ? 'location' : undefined}
                  >
                    {lien.libelle}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {suivreChapitres && (
          <span className="rg-entete__indicateur" aria-hidden="true">
            {indicateur}
          </span>
        )}

        <button
          ref={boutonSommaireRef}
          type="button"
          className="rg-entete__bouton-sommaire"
          aria-expanded={sommaireOuvert}
          aria-controls="rg-sommaire"
          onClick={() => setSommaireOuvert((ouvert) => !ouvert)}
        >
          Sommaire
        </button>
      </div>

      {/* Toujours monté (masqué par hidden quand fermé) : aria-controls du
          bouton ci-dessus désigne alors toujours un id existant, ouvert ou
          non (CODE-3/ROBUSTE-6). */}
      <nav id="rg-sommaire" className="rg-sommaire" aria-label="Sommaire" hidden={!sommaireOuvert}>
        <ul className="rg-sommaire__liste">
          {chapitres.map((chapitre) => (
            <li key={chapitre.id}>
              <Link href={`/#${chapitre.id}`} className="rg-focusable" onClick={choisirDansLeSommaire}>
                <span aria-hidden="true">{chapitre.numero}</span>
                {chapitre.nomMenu}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
