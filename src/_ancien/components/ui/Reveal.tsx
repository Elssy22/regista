"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Position dans le groupe : pilote le décalage (min(index, 5) × 90 ms). */
  index?: number;
  /** Balise HTML rendue (div par défaut). */
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Enveloppe un élément pour le faire apparaître au scroll.
 * L'état visuel (opacité/translation) est porté par `[data-rv]` dans globals.css ;
 * ici on ajoute simplement la classe `rv-in` quand l'élément entre dans le viewport.
 * `prefers-reduced-motion` est géré en CSS : tout reste visible, l'observer est inoffensif.
 */
export default function Reveal({
  children,
  index = 0,
  as,
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-rv=""
      style={{ transitionDelay: `${Math.min(index, 5) * 90}ms` }}
    >
      {children}
    </Tag>
  );
}
