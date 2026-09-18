'use client'

// Le mouvement du site (CONTENU/Plan_one_page.md, section 3) : chaque geste
// se joue en un mouvement, une seule fois, la première fois qu'il entre dans
// le champ de vision (ou après un délai fixe pour M2, voir `delaiMs`). Il ne
// rejoue jamais ensuite. Neutralisé sous prefers-reduced-motion (le repli
// s'applique dès le montage, sans observateur) — et de toute façon, tout le
// CSS qui cache un état "avant animation" ne vit que sous la classe "mvt"
// posée par le script de src/app/layout.tsx (socle du mouvement), donc rien
// ne reste caché sans JavaScript non plus.

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react'

export type EnVueOptions = {
  /** Distance de déclenchement (rootMargin de l'IntersectionObserver),
   *  exprimée comme une fraction de la hauteur de l'écran retirée du bas :
   *  0.3 déclenche dès que le HAUT de l'élément passe les 70 % de l'écran ;
   *  0.4, un peu plus tard, à 60 % — plus la valeur est grande, plus il faut
   *  défiler loin, quelle que soit la hauteur totale de l'élément lui-même.
   *  Remplace un ancien réglage en `threshold` (fraction de l'élément
   *  visible), impossible à atteindre pour une zone plus haute que l'écran
   *  (ROBUSTE-1). Le HAUT de la zone d'observation est lui-même étiré très
   *  loin au-dessus de l'écran (voir rootMargin plus bas) : un élément déjà
   *  dépassé (arrivée en plein milieu de page, rechargement sur une ancre,
   *  saut instantané) compte donc comme atteint dès l'observation initiale,
   *  au lieu de rester non déclenché pour toujours faute d'avoir jamais
   *  traversé la ligne de déclenchement (trou dans la passe, correction
   *  mouvement point 1). */
  seuil?: number
  /** Si posé, ignore l'observateur : déclenche après ce délai fixe depuis le
   *  montage (M2, « le coup d'envoi », qui part au chargement plutôt qu'à
   *  l'arrivée dans l'écran). */
  delaiMs?: number
}

/**
 * Détecte l'entrée d'un élément dans le champ de vision, une seule fois : le
 * booléen passe à vrai au premier passage du seuil, puis ne repasse jamais à
 * faux. Sous « réduire les animations », vrai dès le montage.
 *
 * Aucune révélation de secours ici : un élément qu'on n'a pas encore atteint
 * doit rester non révélé, même après une longue attente sans défiler. Le
 * SEUL filet de secours du mouvement vit au socle (le script inline de
 * src/app/layout.tsx, qui retire la classe "mvt" si React n'a jamais signalé
 * son montage) : il protège du cas où JavaScript ne démarre pas, jamais du
 * cas où l'utilisateur n'a simplement pas encore défilé (ROBUSTE-1).
 */
export function useEnVue<T extends HTMLElement>({ seuil = 0.3, delaiMs }: EnVueOptions = {}) {
  const ref = useRef<T | null>(null)
  const [enVue, setEnVue] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setEnVue(true))
      return () => cancelAnimationFrame(id)
    }

    if (delaiMs !== undefined) {
      const id = window.setTimeout(() => setEnVue(true), delaiMs)
      return () => window.clearTimeout(id)
    }

    const el = ref.current
    if (!el) return

    const marge = Math.round(seuil * 100)
    // Haut de la zone étiré à 100000px (bien plus loin que la page la plus
    // longue) : un élément déjà entièrement au-dessus de l'écran au moment de
    // l'observation (arrivée en milieu de page, ancre, saut instantané)
    // intersecte donc quand même la zone observée, et se déclenche dès le
    // premier appel du callback — au lieu de rester invisible pour toujours
    // faute d'avoir un jour traversé la ligne de déclenchement (trou dans la
    // passe, correction mouvement point 1). Le bas de la zone garde son
    // réglage habituel (-marge%), inchangé pour ce qui reste à atteindre plus
    // bas dans la page.
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.isIntersecting) {
            setEnVue(true)
            observateur.unobserve(el)
          }
        }
      },
      { rootMargin: `100000px 0px -${marge}% 0px`, threshold: 0 },
    )
    observateur.observe(el)
    return () => observateur.disconnect()
  }, [seuil, delaiMs])

  return { ref, enVue }
}

/**
 * Signale au socle du mouvement (script inline de src/app/layout.tsx) que
 * React a démarré : pose l'attribut "data-mvt-pret" sur <html> dès le
 * montage. Le script inline retire la classe "mvt" au bout d'environ 4 s si
 * cet attribut n'est jamais posé (JavaScript désactivé ou hydratation en
 * échec) — le seul filet de secours du mouvement (ROBUSTE-1). Ne rend rien :
 * à monter une seule fois, tôt dans l'arbre (voir Gabarit.tsx).
 */
export function SocleMouvement() {
  useEffect(() => {
    document.documentElement.setAttribute('data-mvt-pret', '1')
  }, [])
  return null
}

export type EnSceneProps = EnVueOptions &
  Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'children'> & {
    className?: string
    /** Balise réellement rendue (div par défaut) : jamais une section entière,
     *  toujours un bloc court (CONTENU/Plan_one_page.md, section 7.7). */
    as?: ElementType
    /** Enfants classiques, OU fonction recevant `enVue` : sert aux tronçons
     *  de la passe (src/components/site/Passe.tsx), qui doivent mesurer et
     *  déclencher leur tracé exactement au moment où la zone devient
     *  visible, pas seulement lire la classe "est-visible" posée sur le DOM. */
    children: ReactNode | ((enVue: boolean) => ReactNode)
  }

/**
 * Généralisation de `useEnVue` : pose la classe "est-visible" sur le bloc
 * qu'elle rend dès qu'il entre en vue (ou après `delaiMs`). Le CSS de chaque
 * bloc (src/styles/site.css) définit son état cité (sous `html.mvt`) et son
 * état « est-visible » ; sans la classe "mvt" sur <html>, aucune règle de
 * mouvement ne s'applique et l'état final s'affiche directement. Les autres
 * props (role, aria-*…) passent telles quelles sur la balise rendue.
 */
export function EnScene({
  seuil,
  delaiMs,
  className,
  as: Balise = 'div',
  children,
  ...reste
}: EnSceneProps) {
  const { ref, enVue } = useEnVue<HTMLElement>({ seuil, delaiMs })
  const classe = (className ? className + ' ' : '') + (enVue ? 'est-visible' : '')
  return (
    <Balise ref={ref} className={classe} {...reste}>
      {typeof children === 'function' ? children(enVue) : children}
    </Balise>
  )
}
