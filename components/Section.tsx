"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Sections quietly fade-and-rise as they enter the viewport — motion that
// communicates "you've arrived here," not decoration. Respects reduced-motion.
export function Section({
  id,
  title,
  children,
  surface = false,
}: {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  surface?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className={surface ? "bg-white" : ""}>
      <div
        ref={ref}
        className={`mx-auto max-w-content px-5 py-14 transition-all duration-700 ease-out ${
          shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <h2 className="mb-6 text-2xl font-bold text-ink">{title}</h2>
        {children}
      </div>
    </section>
  );
}
