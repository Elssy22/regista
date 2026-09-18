'use client'

// Ce fichier regroupe des composants interactifs (Bouton avec onClick, Champ
// avec useId + état contrôlé) : ils ont besoin du JavaScript client. C'est le
// SEUL fichier du design system qui porte la directive 'use client' —
// Monogramme.tsx et primitives.tsx restent des composants serveur, sans hook
// ni gestionnaire d'événement.

import { useId } from 'react'
import type { ReactNode } from 'react'
import { Monogramme } from './Monogramme'
import { Etiquette, Trajectoire } from './primitives'

/* ====================================================================== */
/* Composants d'interface — AJOUT au système.                             */
/* La charte v1.0 ne traite pas les états d'interface. Tout ici est bâti   */
/* sur les tokens existants : AUCUNE couleur nouvelle.                    */
/* Le survol est un liseré accent de 1 px, l'état pressé le même liseré    */
/* sur tout le contour. L'or est un trait, jamais une information.         */
/* ====================================================================== */

/* --- Bouton ------------------------------------------------------------ */

type BoutonCommun = {
  texte: string
  /** primaire (défaut), secondaire, discret. Une seule action primaire par écran. */
  variante?: 'primaire' | 'secondaire' | 'discret'
  desactive?: boolean
  /** id du texte qui dit POURQUOI le bouton est désactivé. Obligatoire si desactive. */
  raisonId?: string
}

export type BoutonProps = BoutonCommun & {
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

function classesBouton(variante: BoutonCommun['variante']) {
  let c = 'rg-bouton'
  if (variante === 'secondaire') c += ' rg-bouton--secondaire'
  if (variante === 'discret') c += ' rg-bouton--discret'
  return c
}

/** Le bouton du site. Angles droits, libellé en capitales espacées. */
export function Bouton({ texte, variante = 'primaire', href, type = 'button', desactive, raisonId, onClick }: BoutonProps) {
  const className = classesBouton(variante)
  if (href) {
    return (
      <a
        className={className}
        href={desactive ? undefined : href}
        aria-disabled={desactive || undefined}
        aria-describedby={raisonId}
      >
        {texte}
      </a>
    )
  }
  return (
    <button className={className} type={type} disabled={desactive} aria-describedby={raisonId} onClick={onClick}>
      {texte}
    </button>
  )
}

/* --- Lien -------------------------------------------------------------- */

export type LienProps = {
  texte: string
  href: string
}

/**
 * Lien dans le texte courant. Il garde la couleur du texte et se signale par
 * son soulignement : l'information ne passe jamais par la couleur seule.
 */
export function Lien({ texte, href }: LienProps) {
  return (
    <a className="rg-lien" href={href}>
      {texte}
    </a>
  )
}

/* --- Champ ------------------------------------------------------------- */

export type ChampProps = {
  /** Obligatoire. Le placeholder ne remplace JAMAIS l'étiquette. */
  label: string
  nom?: string
  type?: string
  multiligne?: boolean
  lignes?: number
  /** Le placeholder : un exemple de format, jamais la consigne. */
  exemple?: string
  aide?: string
  /**
   * Message d'erreur. Sa présence déclenche l'état d'erreur : filet porté à
   * 2 px, message préfixé « Erreur — », aria-invalid. PAS DE ROUGE : la charte
   * interdit les couleurs saturées et l'information portée par la couleur seule.
   */
  erreur?: string
  valeur?: string
  onChange?: (valeur: string) => void
  desactive?: boolean
  requis?: boolean
}

export function Champ({
  label,
  nom,
  type = 'text',
  multiligne = false,
  lignes = 4,
  exemple,
  aide,
  erreur,
  valeur,
  onChange,
  desactive,
  requis,
}: ChampProps) {
  const id = useId()
  const idAide = `${id}-aide`
  const idErreur = `${id}-erreur`
  const decrit = [aide ? idAide : null, erreur ? idErreur : null].filter(Boolean).join(' ') || undefined

  const communs = {
    id,
    name: nom ?? id,
    className: 'rg-champ__saisie',
    placeholder: exemple,
    value: valeur,
    disabled: desactive,
    required: requis,
    'aria-invalid': erreur ? (true as const) : undefined,
    'aria-describedby': decrit,
    onChange: (e: { target: { value: string } }) => onChange?.(e.target.value),
  }

  return (
    <div
      className={
        'rg-champ' + (erreur ? ' rg-champ--erreur' : '') + (desactive ? ' rg-champ--desactive' : '')
      }
    >
      <label className="rg-champ__label" htmlFor={id}>
        {label}
      </label>
      {multiligne ? <textarea rows={lignes} {...communs} /> : <input type={type} {...communs} />}
      {aide && (
        <p className="rg-champ__aide" id={idAide}>
          {aide}
        </p>
      )}
      {erreur && (
        <p className="rg-champ__erreur" id={idErreur}>
          <span className="rg-champ__marque">Erreur —</span> {erreur}
        </p>
      )}
    </div>
  )
}

/* --- Navigation --------------------------------------------------------- */

export type LienNav = {
  texte: string
  href: string
  /** Page courante : filet accent de 2 px ET aria-current="page". */
  actif?: boolean
}

export type NavigationProps = {
  liens: LienNav[]
  /**
   * Disposition en ligne. Passée par une requête de média sur rupture-large
   * (768 px) : le mobile est la mise en page de référence, pas une réduction.
   */
  large?: boolean
  accueil?: string
  intitule?: string
  /** Rend chaque lien avec un composant de routage plutôt qu'un <a>. */
  rendreLien?: (lien: LienNav, className: string) => ReactNode
  /** Remplace le monogramme seul par un autre verrouillage du logo.
   *  La charte réserve le R seul aux avatars : sur le site, on passe ici
   *  la version avec le nom (voir components/site/Marque.tsx). */
  marque?: ReactNode
}

export function Navigation({
  liens,
  large = false,
  accueil = '/',
  intitule = 'Navigation principale',
  rendreLien,
  marque,
}: NavigationProps) {
  return (
    <nav className={'rg-nav' + (large ? ' rg-nav--large' : '')} aria-label={intitule}>
      <a className="rg-nav__marque" href={accueil} aria-label="Regista, accueil">
        {marque ?? <Monogramme hauteur={24} />}
      </a>
      <ul className="rg-nav__liste">
        {liens.map((lien) => {
          const className = 'rg-nav__lien' + (lien.actif ? ' est-courant' : '')
          return (
            <li className="rg-nav__item" key={lien.href + lien.texte}>
              {rendreLien ? (
                rendreLien(lien, className)
              ) : (
                <a className={className} href={lien.href} aria-current={lien.actif ? 'page' : undefined}>
                  {lien.texte}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* --- Carte d'offre -------------------------------------------------------- */

export type CarteOffreProps = {
  numero?: string
  etiquette: string
  titre: string
  texte?: string
  href?: string
}

/**
 * Carte cliquable d'offre. Au survol, la trajectoire se dessine de 48 à 128 px
 * en 400 ms — la seule animation du système, neutralisée sous prefers-reduced-motion.
 * Une grille de cartes CONSOMME la trajectoire de la page.
 */
export function CarteOffre({ numero, etiquette, titre, texte, href = '#' }: CarteOffreProps) {
  return (
    <a className="rg-offre" href={href}>
      <Etiquette numero={numero} texte={etiquette} />
      <p className="rg-offre__titre">{titre}</p>
      {texte && <p className="rg-offre__texte">{texte}</p>}
      <span className="rg-offre__piste">
        <Trajectoire largeur={128} epaisseur={4} />
      </span>
    </a>
  )
}
