"use client";

import { useEffect, useRef, useState } from "react";

// A wide, shallow version of the arch used as a section divider: a single span
// that *draws across* the column as it enters view, like ruling an arched line on
// the page. Same draw mechanic as the brand arch (`.arch`/`.arch.in`), turned on
// its side and stretched. A different expression of the one gesture.
export function ArchDivider({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`mx-auto max-w-content px-5 ${className}`} aria-hidden>
      <svg
        ref={ref}
        viewBox="0 0 600 48"
        fill="none"
        preserveAspectRatio="none"
        className={`arch ${shown ? "in" : ""} h-6 w-full text-ink/25`}
      >
        {/* shallow pointed span: two eased curves meeting at a soft apex */}
        <path
          pathLength={1}
          d="M2 44 Q150 8 300 6 Q450 8 598 44"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
