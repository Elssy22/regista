/** Petites icônes en trait, qui prennent la couleur du texte. */

export function Fleche() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FlecheDroite() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Le guillemet du deck, en or. */
export function Guillemet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 0h26v26c0 14-8 23.5-24 26l-1.5-6.5C9 43 13 38 13.5 30H0V0Zm38 0h26v26c0 14-8 23.5-24 26l-1.5-6.5C47 43 51 38 51.5 30H38V0Z"
      />
    </svg>
  );
}

/**
 * La grande courbe claire des pages bleues du deck : le mouvement du R,
 * en fond, à droite. Purement décorative.
 */
export function Courbe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M520 0C760 90 905 250 915 420c10 170-70 390-200 580h285V0Z"
        opacity="0.07"
      />
      <path fill="currentColor" d="M1000 700C930 800 850 900 780 1000h220Z" opacity="0.06" />
    </svg>
  );
}
