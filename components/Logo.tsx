// Tutela mark: a pointed arch (the threshold into secondary school) capped at
// the crown by a KEYSTONE — the wedge that bears the arch's weight and locks it
// together. The meaningful heart of the mark, in warm accent.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M8 25 Q8 11 16 7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <path d="M24 25 Q24 11 16 7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <polygon points="13.6 3 18.4 3 16.8 7.4 15.2 7.4" className="fill-accent" />
    </svg>
  );
}
