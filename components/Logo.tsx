// Tutela mark: a pointed arch — classical (a nod to Brébeuf), reads as both an
// upward ascent (the path into secondary school) and a sheltering form
// (tutela = guardianship). The apex dot is the goal/guiding star.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M8 25 Q8 11 16 6" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M24 25 Q24 11 16 6" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" />
      <circle cx="16" cy="6" r="2.3" className="fill-accent" />
    </svg>
  );
}
