// Tutela mark: a single, elegant pointed arch — the threshold a child passes
// through into secondary school. One unbroken stroke, nothing extra.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M7 26 Q7 10 16 5 Q25 10 25 26"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  );
}
