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
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const scrollY = window.pageYOffset;
      // Anchor progress to the footer's DOM position rather than scrollHeight/
      // clientHeight — those browser APIs are unreliable across devices, sticky
      // headers, and iOS Safari viewport changes.
      //
      // p = scrollY / (footerAbsoluteTop - innerHeight)
      //   = 0 at page top
      //   = 1 when the footer first enters the bottom of the viewport
      //
      // footer.getBoundingClientRect().top + scrollY = footerAbsoluteTop,
      // which is a constant independent of scroll position.
      const footer = document.getElementById("join");
      const max = footer
        ? footer.getBoundingClientRect().top + scrollY - window.innerHeight
        : 0;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      path.style.setProperty("stroke-dashoffset", String(1 - p));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
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
