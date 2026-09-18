/**
 * Regista — composants du design system.
 *
 * Éléments de la charte v1.0 : Monogramme, Etiquette, Badge, Trajectoire,
 * Courbe, PointsTrajectoires, CarteProfil, PiedDePage, Quadrillage,
 * MotifMaison, Note.
 *
 * Ajouts pour le site (états d'interface, non figés par la charte) :
 * Bouton, Lien, Champ, Navigation, CarteOffre.
 *
 * Les règles d'emploi sont dans CLAUDE.md, à la racine du projet.
 */

export { Monogramme } from './Monogramme'
export type { MonogrammeProps } from './Monogramme'

export {
  Etiquette,
  Badge,
  Trajectoire,
  Courbe,
  PointsTrajectoires,
  CarteProfil,
  PiedDePage,
  Quadrillage,
  MotifMaison,
  Note,
} from './primitives'
export type {
  CouleurCSS,
  EtiquetteProps,
  BadgeProps,
  TrajectoireProps,
  CourbeProps,
  PointsTrajectoiresProps,
  CarteProfilProps,
  PiedDePageProps,
  QuadrillageProps,
  MotifMaisonProps,
  NoteProps,
} from './primitives'

export { Bouton, Lien, Champ, Navigation, CarteOffre } from './interface'
export type {
  BoutonProps,
  LienProps,
  ChampProps,
  LienNav,
  NavigationProps,
  CarteOffreProps,
} from './interface'
