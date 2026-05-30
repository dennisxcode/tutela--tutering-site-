// Gives a section a pointed-arch top edge — the section literally rises out of
// the page as an arched doorway. Implemented as a full-width cap in the *previous*
// section's colour that carves a pointed arch out of this section's top.
export function ArchTop({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-16 w-full sm:h-28 ${className}`}
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0 0 H1200 V140 Q1200 26 600 0 Q0 26 0 140 Z" fill={color} />
    </svg>
  );
}
