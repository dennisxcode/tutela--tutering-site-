"use client";

import { useEffect, useState } from "react";

// A small fixed arch that fills with terracotta in proportion to how far down the
// page you've scrolled — you literally complete the arch (pass all the way through
// the passage) by reaching the bottom. Reduced-motion → shown complete.
const D = "M16 144 Q16 40 60 16 Q104 40 104 144";

export function ScrollArch() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40" aria-hidden>
      <svg viewBox="0 0 120 150" fill="none" className="h-10 w-10">
        <path d={D} stroke="currentColor" className="text-ink/15" strokeWidth={3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path
          d={D}
          pathLength={1}
          stroke="currentColor"
          className="text-accent"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDasharray: 1, strokeDashoffset: 1 - progress }}
        />
      </svg>
    </div>
  );
}
