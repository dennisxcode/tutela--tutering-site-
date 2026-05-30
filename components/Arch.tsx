"use client";

import { useEffect, useRef, useState } from "react";

// The pointed arch that draws itself when it scrolls into view — the brand's one
// signature motion, reused everywhere so the whole page feels like one structure
// being drawn as you descend. `non-scaling-stroke` keeps the line weight constant
// in px at any size. Reduced-motion → shown complete.
export function Arch({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 150"
      fill="none"
      aria-hidden
      className={`arch ${shown ? "in" : ""} ${className}`}
    >
      <path
        pathLength={1}
        d="M16 144 Q16 40 60 16 Q104 40 104 144"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
