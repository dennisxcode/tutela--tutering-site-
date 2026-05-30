"use client";

import { useEffect, useRef } from "react";

// The brand arch as a large background motif that drifts slowly against the
// scroll — a subtle depth cue. Pure transform (GPU), throttled with rAF, and
// disabled entirely for reduced-motion users.
export function ParallaxArch({
  className = "",
  speed = 0.06,
}: {
  className?: string;
  speed?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-fromCenter * speed).toFixed(1)}px, 0)`;
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
  }, [speed]);

  return (
    <svg ref={ref} viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <path d="M8 25 Q8 11 16 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M24 25 Q24 11 16 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}
