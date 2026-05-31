"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { guides } from "@/lib/guides";

export function GuidesIndex() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-content px-5 py-16 sm:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {t(content.nav.guides)}
      </p>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {t(content.guidesIndex.title)}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-body/70">
        {t(content.guidesIndex.intro)}
      </p>
      <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="group block py-6">
              <h2 className="font-serif text-xl font-semibold text-ink transition group-hover:text-accent">
                {t(g.title)}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-body/70">{t(g.description)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
