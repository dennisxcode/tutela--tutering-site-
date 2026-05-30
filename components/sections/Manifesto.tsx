"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Arch } from "@/components/Arch";

// The bold full-bleed moment: the teaching philosophy as a deep-green manifesto,
// the intro set large in serif like a printed statement.
export function Manifesto() {
  const { t } = useLanguage();
  return (
    <section id="philosophy" className="grain relative overflow-hidden bg-ink text-cream">
      {/* a large arch that draws itself as you reach the manifesto — the mid-page echo of the hero */}
      <Arch
        strokeWidth={2.5}
        className="pointer-events-none absolute right-[-14%] top-1/2 h-[34rem] w-auto -translate-y-1/2 text-cream/[0.13] sm:right-[-4%]"
      />

      <div className="relative z-10 mx-auto max-w-content px-5 py-24 sm:py-32">
        <p className="font-display text-xl italic text-accent">04</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-[2.5rem]">
          {t(content.philosophy.title)}
        </h2>
        <p className="mt-7 max-w-2xl font-serif text-2xl leading-snug text-cream/90 sm:text-[2rem] sm:leading-snug">
          {t(content.philosophy.intro)}
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {content.philosophy.principles.map((p, i) => (
            <div key={i}>
              <div className="font-display text-2xl italic text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-serif text-lg font-semibold">{t(p.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{t(p.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
