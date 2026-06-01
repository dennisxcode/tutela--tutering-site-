"use client";

import { useEffect, useRef, useState } from "react";

// The signature motion: the pointed arch cut into FOUR parts that all draw
// themselves at the same time (no stagger), at the same calm pace as the rest of
// the site. Reuses the global `.arch` / `.arch.in` CSS (1.7s stroke draw with the
// brand easing). One gesture, reused at different sizes across the site.
//
// The four sub-paths are the two legs of `M16 144 Q16 40 60 16 Q104 40 104 144`
// each split at its midpoint, so together they reform the exact brand arch.
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
          pathLength={1}
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
