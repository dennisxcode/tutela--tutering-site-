"use client";

import { useEffect, useRef, useState } from "react";

// The signature motion: the pointed arch drawn in FOUR parts that all move at the
// same time, at the brand's calm pace (1.7s, easing cubic-bezier(0.45,0,0.15,1)).
//
// Crucially this is ONE continuous path drawn four times, each copy revealing a
// different quarter via stroke-dasharray. Because every copy traces the *same*
// curve, the four growing pieces meet seamlessly with no gaps at the joins (the
// earlier version used four separate sub-paths, which left hairline gaps where
// they met when scaled up). Reduced-motion shows the complete arch immediately.
const ARCH = "M16 144 Q16 40 60 16 Q104 40 104 144";
const PARTS = 4;

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
      className={`seg-arch ${className}`}
    >
      {Array.from({ length: PARTS }).map((_, i) => {
        const start = i / PARTS; // where this quarter begins along the path
        const len = 1 / PARTS; // each quarter is 1/4 of the path
        // dasharray: [dash0=0, gap=start, dash=visible, gap=rest]. The visible dash
        // grows from 0 to `len`, starting at `start`, so all four reveal at once.
        const dash = `0 ${start} ${shown ? len : 0} 1`;
        return (
          <path
            key={i}
            d={ARCH}
            pathLength={1}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ strokeDasharray: dash }}
          />
        );
      })}
    </svg>
  );
}
