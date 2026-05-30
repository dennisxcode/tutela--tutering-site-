"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// The bold full-bleed moment: the teaching philosophy as a deep-green manifesto,
// the intro set large in serif like a printed statement.
export function Manifesto() {
  const { t } = useLanguage();
  return (
    <section id="philosophy" className="relative overflow-hidden bg-ink text-cream">
      {/* faint keystone arch in the corner */}
      <svg
        viewBox="0 0 120 150"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 h-[26rem] w-auto text-cream/[0.05]"
      >
        <path d="M12 144 Q12 42 60 12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
        <path d="M108 144 Q108 42 60 12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto max-w-content px-5 py-24 sm:py-32">
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
