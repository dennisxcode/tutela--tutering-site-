// The pointed arch as an architect's line drawing. On mount it draws itself in
// one unbroken stroke — up the left, over the apex, down the right (CSS stroke
// animation in globals.css). Colour comes from the parent via `currentColor`.
export function ArchDraw({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 150" fill="none" aria-hidden className={`arch-draw ${className}`}>
      <path
        pathLength={1}
        d="M16 144 Q16 40 60 16 Q104 40 104 144"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
