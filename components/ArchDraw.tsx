// The pointed arch as an architect's line drawing. On mount the two legs draw
// themselves up to the apex (CSS stroke animation in globals.css), then the
// keystone dot settles in. Colour comes from the parent via `currentColor`.
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
        d="M12 144 Q12 42 60 12"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        pathLength={1}
        d="M108 144 Q108 42 60 12"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <circle cx="60" cy="12" r="3.2" className="fill-accent" />
    </svg>
  );
}
