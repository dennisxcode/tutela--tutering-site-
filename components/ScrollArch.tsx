"use client";

import { useEffect, useRef } from "react";

const D = "M16 144 Q16 40 60 16 Q104 40 104 144";

export function ScrollArch() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // CSS prefers-reduced-motion rule shows it complete

    let raf = 0;
    const update = () => {
      // Recalculate max every tick so late-loading content doesn't throw it off.
      const max =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      // pathLength="1" normalises the path to 1 unit; dashoffset 1→0 draws it.
      path.style.strokeDashoffset = String(1 - p);
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
        {/* ghost arch — always visible as a guide */}
        <path
          d={D}
          pathLength={1}
          stroke="currentColor"
          className="text-ink/15"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* fill arch — CSS sets dasharray:1 via .scroll-arch-path; JS sets dashoffset */}
        <path
          ref={pathRef}
          d={D}
          pathLength={1}
          stroke="currentColor"
          className="scroll-arch-path text-accent"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
