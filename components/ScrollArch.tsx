"use client";

import { useEffect, useRef, useState } from "react";

const D = "M16 144 Q16 40 60 16 Q104 40 104 144";

export function ScrollArch() {
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Measure the real path length so dasharray/dashoffset work regardless of
    // browser pathLength attribute support.
    if (pathRef.current) setLen(pathRef.current.getTotalLength());

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40" aria-hidden>
      <svg viewBox="0 0 120 150" fill="none" className="h-10 w-10">
        <path d={D} stroke="currentColor" className="text-ink/15" strokeWidth={3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path
          ref={pathRef}
          d={D}
          stroke="currentColor"
          className="text-accent"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={len > 0 ? { strokeDasharray: len, strokeDashoffset: len * (1 - progress) } : { strokeDasharray: 1, strokeDashoffset: 1 }}
        />
      </svg>
    </div>
  );
}
