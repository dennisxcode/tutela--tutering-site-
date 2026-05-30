"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

// Trust band directly under the hero: numbers + checkable credentials. No
// testimonials shown until they're real.
export function CredibilityBar() {
  const { t } = useLanguage();
  return (
    <section id="credibility" className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-16">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t(content.credibility.title)}
          </p>
        </Reveal>
        <Reveal delay={70}>
          <dl className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-ink/10">
            {content.stats.map((s, i) => (
              <div key={i} className="px-2 text-center">
                <dt className="text-3xl font-bold text-ink sm:text-4xl">{t(s.value)}</dt>
                <dd className="mt-1.5 text-xs text-body/60">{t(s.label)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {content.credibility.items.map((it, i) => (
            <Reveal key={i} delay={i * 90}>
              <li className="flex h-full items-start gap-2.5 rounded-xl border border-ink/10 bg-cream/60 p-4 text-sm leading-relaxed text-body/80">
                <Check size={18} className="mt-0.5 shrink-0 text-ink" aria-hidden />
                {t(it)}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
