import type { CSSProperties, ReactNode } from 'react'
import { Monogramme } from './Monogramme'

/* ====================================================================== */
/* Éléments de la charte graphique Regista v1.0.                          */
/* Les couleurs viennent des tokens : une prop `couleur` attend une valeur */
/* CSS, normalement une variable — var(--accent), var(--texte)…           */
/* ====================================================================== */

export type CouleurCSS = string

/* --- Étiquette ------------------------------------------------------- */

export type EtiquetteProps = {
  texte: string
  /** Numéro de section, suivi d'un tiret cadratin. */
  numero?: string
  /** « forte » pour passer de texte-secondaire à texte. */
  ton?: 'normale' | 'forte'
}

/** Intitulé en capitales espacées. Le seul emploi des capitales du système. */
export function Etiquette({ texte, numero, ton = 'normale' }: EtiquetteProps) {
  return (
    <span className={'rg-etiquette' + (ton === 'forte' ? ' rg-etiquette--forte' : '')}>
      {numero && (
        <>
          <span className="rg-etiquette__numero">{numero}</span>
          <span aria-hidden="true">—</span>
        </>
      )}
      <span>{texte}</span>
    </span>
  )
}

/* --- Badge ----------------------------------------------------------- */

export type BadgeProps = {
  texte: string
  /** « plein » (bleu, sur crème) ou « cercle » (crème, sur bleu). */
  ton?: 'plein' | 'cercle'
}

/** Pastille à angles de 2 px : le seul arrondi du système. */
export function Badge({ texte, ton = 'plein' }: BadgeProps) {
  return <span className={'rg-badge' + (ton === 'cercle' ? ' rg-badge--cercle' : '')}>{texte}</span>
}

/* --- Trajectoire ------------------------------------------------------ */

export type TrajectoireProps = {
  largeur?: number
  /** Épaisseur au départ. Elle s'annule à l'arrivée. */
  epaisseur?: number
  sens?: 'droite' | 'gauche'
  couleur?: CouleurCSS
  className?: string
}

/**
 * L'élément signature. UNE SEULE PAR COMPOSITION.
 * Elle indique une direction : elle relie, fait converger, souligne.
 * Sur un support formel ou imprimé en une couleur, passer `couleur` en var(--texte).
 */
export function Trajectoire({
  largeur = 320,
  epaisseur = 5,
  sens = 'droite',
  couleur = 'var(--accent)',
  className,
}: TrajectoireProps) {
  const hauteur = epaisseur + 2
  const m = hauteur / 2
  const d =
    sens === 'gauche'
      ? `M${largeur} ${m - epaisseur / 2} L0 ${m} L${largeur} ${m + epaisseur / 2} Z`
      : `M0 ${m - epaisseur / 2} L${largeur} ${m} L0 ${m + epaisseur / 2} Z`
  return (
    <svg
      viewBox={`0 0 ${largeur} ${hauteur}`}
      width={largeur}
      height={hauteur}
      aria-hidden="true"
      className={className}
      style={{ display: 'block', overflow: 'visible', maxWidth: '100%' }}
    >
      <path d={d} fill={couleur} />
    </svg>
  )
}

/* --- Courbe ----------------------------------------------------------- */

export type CourbeProps = {
  largeur?: number
  hauteur?: number
  epaisseur?: number
  couleur?: CouleurCSS
}

/** La trajectoire ample. Couvertures et ouvertures de partie SEULEMENT. */
export function Courbe({ largeur = 480, hauteur = 120, epaisseur = 7, couleur = 'var(--accent)' }: CourbeProps) {
  const bas = hauteur - epaisseur
  const d =
    `M0 ${bas - epaisseur / 2}` +
    ` C${largeur * 0.5} ${bas - epaisseur / 2} ${largeur * 0.72} ${hauteur * 0.55} ${largeur} 0` +
    ` C${largeur * 0.74} ${hauteur * 0.62} ${largeur * 0.52} ${bas + epaisseur / 2} 0 ${bas + epaisseur / 2} Z`
  return (
    <svg
      viewBox={`0 0 ${largeur} ${hauteur}`}
      width={largeur}
      height={hauteur}
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible', maxWidth: '100%' }}
    >
      <path d={d} fill={couleur} />
    </svg>
  )
}

/* --- Points et trajectoires -------------------------------------------- */

export type PointsTrajectoiresProps = {
  points?: string[]
  cible?: string
  largeur?: number
  hauteur?: number
  className?: string
}

/** Schéma tactique. COMPTE COMME LA TRAJECTOIRE DE LA PAGE.
 *  Les groupes `rg-pt-point` (cercles, texte) et `rg-pt-trait` (triangles de
 *  liaison) sont de simples points d'ancrage CSS pour l'entrée en scène du
 *  schéma (voir Brief_design_site.md, section 4) : aucune valeur, aucune
 *  couleur, aucune géométrie n'est modifiée par leur présence. */
export function PointsTrajectoires({
  points = ['COM', 'FIN', 'TECH'],
  cible = 'VOTRE PROJET',
  largeur = 460,
  hauteur = 190,
  className,
}: PointsTrajectoiresProps) {
  const yHaut = 24
  const yBas = hauteur - 34
  const xCible = largeur / 2
  return (
    <svg
      viewBox={`0 0 ${largeur} ${hauteur}`}
      width={largeur}
      height={hauteur}
      role="img"
      aria-label={`${points.join(', ')} convergent vers ${cible}`}
      className={className}
      style={{ display: 'block', maxWidth: '100%' }}
    >
      {points.map((nom, i) => {
        const x = points.length === 1 ? xCible : largeur * 0.12 + i * ((largeur * 0.76) / (points.length - 1))
        const dx = xCible - x
        const dy = yBas - yHaut
        const norme = Math.sqrt(dx * dx + dy * dy) || 1
        const nx = (-dy / norme) * 2.5
        const ny = (dx / norme) * 2.5
        return (
          <g key={nom}>
            <path
              className="rg-pt-trait"
              d={`M${x + nx} ${yHaut + ny} L${xCible} ${yBas - 10} L${x - nx} ${yHaut - ny} Z`}
              fill="var(--accent)"
            />
            <g className="rg-pt-point">
              <circle cx={x} cy={yHaut} r={4} fill="var(--texte)" />
              <text
                x={x}
                y={yHaut - 14}
                textAnchor="middle"
                fill="var(--texte)"
                fontFamily="var(--font-texte)"
                fontSize="12"
                fontWeight="600"
                letterSpacing="2.16"
              >
                {nom}
              </text>
            </g>
          </g>
        )
      })}
      <g className="rg-pt-point">
        <circle cx={xCible} cy={yBas} r={6} fill="var(--texte)" />
        <text
          x={xCible}
          y={yBas + 26}
          textAnchor="middle"
          fill="var(--texte)"
          fontFamily="var(--font-texte)"
          fontSize="12"
          fontWeight="600"
          letterSpacing="2.16"
        >
          {cible}
        </text>
      </g>
    </svg>
  )
}

/* --- Carte de profil --------------------------------------------------- */

export type CarteProfilProps = {
  etiquette: string
  titre: string
  donnees?: string[]
  /** false quand la page porte déjà sa trajectoire ailleurs. */
  trajectoire?: boolean
  largeurTrajectoire?: number
  className?: string
}

/** Fiche de jeu de gestion. Module ponctuel : trois ou quatre par page au plus. */
export function CarteProfil({
  etiquette,
  titre,
  donnees = [],
  trajectoire = true,
  largeurTrajectoire = 96,
  className,
}: CarteProfilProps) {
  return (
    <div className={'rg-carte' + (className ? ' ' + className : '')}>
      <div className="rg-carte__bandeau">
        <Etiquette texte={etiquette} />
      </div>
      <div className="rg-carte__corps">
        <p className="rg-carte__titre">{titre}</p>
        {donnees.length > 0 && <p className="rg-carte__donnees">{donnees.join(' · ')}</p>}
        {trajectoire && (
          <div style={{ marginTop: 'var(--e-3)' }}>
            <Trajectoire largeur={largeurTrajectoire} epaisseur={4} />
          </div>
        )}
      </div>
    </div>
  )
}

/* --- Pied de page ------------------------------------------------------ */

export type PiedDePageProps = {
  section: string
  page: string
  hauteurLogo?: number
}

/** Sur TOUS les documents. C'est lui qui fait tenir la famille de supports. */
export function PiedDePage({ section, page, hauteurLogo = 16 }: PiedDePageProps) {
  return (
    <div className="rg-pied">
      <Etiquette texte={section} />
      <div className="rg-pied__droite">
        <Monogramme hauteur={hauteurLogo} />
        <span className="rg-pied__page">{page}</span>
      </div>
    </div>
  )
}

/* --- Quadrillage -------------------------------------------------------- */

export type QuadrillageProps = {
  children?: ReactNode
  /** Surcharge du pas, ex. « 48px ». */
  pas?: string
  className?: string
  style?: CSSProperties
}

/** Grille pâle de fond. Supports publics uniquement, jamais un devis. */
export function Quadrillage({ children, pas, className, style }: QuadrillageProps) {
  const s = pas ? ({ ...style, ['--quadrillage-pas' as string]: pas } as CSSProperties) : style
  return (
    <div className={'rg-quadrillage' + (className ? ' ' + className : '')} style={s}>
      {children}
    </div>
  )
}

/* --- Motif maison -------------------------------------------------------- */

export type MotifMaisonProps = {
  largeur?: number
  hauteur?: number
  pas?: number
  couleur?: CouleurCSS
}

/** Liseré de pointes obliques. BORD DE PAGE uniquement, jamais en fond. */
export function MotifMaison({ largeur = 320, hauteur = 18, pas = 14, couleur = 'var(--texte)' }: MotifMaisonProps) {
  const pointes: number[] = []
  for (let x = 0; x < largeur; x += pas) pointes.push(x)
  return (
    <svg
      viewBox={`0 0 ${largeur} ${hauteur}`}
      width={largeur}
      height={hauteur}
      aria-hidden="true"
      style={{ display: 'block', maxWidth: '100%' }}
    >
      {pointes.map((x) => (
        <path key={x} d={`M${x} ${hauteur} L${x + pas * 0.55} 0 L${x + pas * 0.72} 0 Z`} fill={couleur} />
      ))}
    </svg>
  )
}

/* --- Note ----------------------------------------------------------------- */

export type NoteProps = {
  texte: string
  etiquette?: string
}

/**
 * Réserve ou précision, ouverte par un filet d'appel en or.
 * OBLIGATOIRE sur tout support décrivant l'offre de financement :
 * « Regista n'est pas agent sportif. » Ne porte jamais un tarif.
 */
export function Note({ texte, etiquette }: NoteProps) {
  return (
    <aside className="rg-note">
      {etiquette && <Etiquette texte={etiquette} />}
      <p className="rg-note__texte">{texte}</p>
    </aside>
  )
}
