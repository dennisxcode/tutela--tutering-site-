// The pointed arch as an architect's line drawing. On mount the two legs draw
// themselves up to the crown (CSS stroke animation in globals.css), then the
// KEYSTONE settles into place — the wedge that locks the arch.
export function ArchDraw({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 150"
      fill="none"
      aria-hidden
      className={`arch-draw ${className}`}
    >
      <path
        pathLength={1}
        d="M12 144 Q12 42 60 26"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        pathLength={1}
        d="M108 144 Q108 42 60 26"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <polygon points="50 8 70 8 64.5 27 55.5 27" className="keystone fill-accent" />
    </svg>
  );
}
