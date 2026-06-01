"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { SegmentedArch } from "@/components/SegmentedArch";

// Compact page header for /program. Echoes the home hero (blueprint surface,
// segmented arch drawing in on load) but quieter, since the page is content-led.
export function ProgramHero() {
  const { t } = useLanguage();
  return (
    <section className="blueprint relative overflow-hidden border-b border-ink/10 bg-cream">
      <SegmentedArch
        trigger="load"
        strokeWidth={2.5}
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[26rem] w-auto -translate-y-1/2 text-ink/[0.10] sm:right-[2%]"
      />
      <div className="relative mx-auto max-w-content px-5 py-20 sm:py-24">
        <p className="rise text-xs font-semibold uppercase tracking-[0.22em] text-accent" style={{ animationDelay: "200ms" }}>
          {t(content.program.tag)}
        </p>
        <h1
          className="rise mt-4 max-w-[16ch] font-serif text-[clamp(2.2rem,6vw,3.4rem)] font-semibold leading-[1.1] tracking-tight text-ink"
          style={{ animationDelay: "320ms" }}
        >
          {t(content.program.title)}
        </h1>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-body/75" style={{ animationDelay: "440ms" }}>
          {t(content.program.intro)}
        </p>
        <div className="rise mt-8" style={{ animationDelay: "560ms" }}>
          <CtaButton className="!px-6 !py-3 !text-base" />
        </div>
      </div>
    </section>
  );
}
