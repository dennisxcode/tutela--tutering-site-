"use client";

import { useEffect, useRef, useState } from "react";

// The arch motion: one continuous pointed-arch stroke that draws itself at the
// brand's calm pace (1.7s, easing cubic-bezier(0.45,0,0.15,1) via the global
// `.arch` / `.arch.in` rules).
//
// Note on "4 parts": we tried splitting the arch into separate sub-paths so the
// pieces would draw simultaneously, but separately-stroked sub-paths always leave
// visible seams/gaps at their joins (each dashed sub-path renders a hair short,
// and across joins that reads as gaps — exactly the "not completed" look). A
// single continuous path is the only way to draw the arch with zero gaps, so the
// signature is one clean unbroken stroke. Reduced-motion shows it complete.
const ARCH = "M16 144 Q16 40 60 16 Q104 40 104 144";

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
      <path
        pathLength={1}
        d={ARCH}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
