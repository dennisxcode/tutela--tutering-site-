"use client";

import { useEffect, useRef, useState } from "react";

// The signature motion: the pointed arch drawn in FOUR parts that all move at the
// same time, at the brand's calm pace (1.7s stroke draw, easing
// cubic-bezier(0.45,0,0.15,1) via the global `.arch` / `.arch.in` rules).
//
// Each part is a real sub-path of the arch, drawn with stroke-dashOFFSET (the dash
// stays full-length and is only offset out of view, so it NEVER shrinks to a
// zero-length dash — that, with round caps, is what produced stray dots and gaps
// in earlier attempts). The four sub-paths share exact endpoints, so their round
// caps overlap and the joins are seamless. Reduced-motion shows it complete.
//
// The sub-paths are the two legs of `M16 144 Q16 40 60 16 Q104 40 104 144`, each
// split at its midpoint (De Casteljau), so together they reform the exact arch.
const SEGMENTS = [
  "M16 144 Q16 92 27 60",
  "M27 60 Q38 28 60 16",
  "M60 16 Q82 28 93 60",
  "M93 60 Q104 92 104 144",
];

export function SegmentedArch({
  className = "",
  strokeWidth = 3,
  // "scroll" waits until the arch enters the viewport; in the hero it's already
  // in view on load, so it draws immediately.
  trigger = "scroll",
}: {
  className?: string;
  strokeWidth?: number;
  trigger?: "scroll" | "load";
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || trigger === "load" || typeof IntersectionObserver === "undefined") {
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 150"
      fill="none"
      aria-hidden
      className={`arch ${shown ? "in" : ""} ${className}`}
    >
      {SEGMENTS.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
