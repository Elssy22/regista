import type Lenis from "lenis";

/**
 * L'instance Lenis partagée (défilement doux du template). Elle n'existe que
 * si l'appareil accepte les animations ; sinon on retombe sur le défilement
 * natif du navigateur.
 */
let instance: Lenis | null = null;

export function definirLenis(l: Lenis | null) {
  instance = l;
}

export function lenis() {
  return instance;
}

/** Défile jusqu'à une position, avec Lenis si disponible. */
export function defilerVers(cible: number | HTMLElement, duree = 1) {
  if (instance) instance.scrollTo(cible, { duration: duree, offset: typeof cible === "number" ? 0 : -100 });
  else if (typeof cible === "number") window.scrollTo({ top: cible });
  else cible.scrollIntoView();
}
