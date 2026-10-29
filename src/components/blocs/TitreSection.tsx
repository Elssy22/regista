/** Le titre de section du template (60 px, capitales), avec son apparition. */
export function TitreSection({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`titre-section ${className ?? ""}`} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
      {children}
    </h2>
  );
}
