"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";

// Editorial section header: a Fraunces section number, a big Chinese-serif
// title, and a hairline rule that *draws* across as the section enters — like
// ruling a line on a drawing. One crafted motion per section, not a fade-stack.
export function EditorialSection({
  id,
  num,
  title,
  intro,
  children,
  surface = false,
}: {
  id: string;
  num: string;
  title: string;
  intro?: string;
  children: ReactNode;
  surface?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className={surface ? "bg-white" : "bg-cream"}>
      <div ref={ref} className="mx-auto max-w-content px-5 py-20 sm:py-28">
        <header className="mb-12">
          <Logo className="mb-4 h-5 w-5 text-ink/30" />
          <div className="flex items-baseline gap-4">
            <span className="font-display text-xl font-semibold italic text-accent">{num}</span>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
              {title}
            </h2>
          </div>
          <span
            data-shown={shown}
            className="rule-draw mt-5 block h-px w-full bg-ink/20"
            aria-hidden
          />
          {intro && (
            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed text-body/70 transition-all duration-700 ease-out ${
                shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
