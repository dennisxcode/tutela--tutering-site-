"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import type { Guide } from "@/lib/guides";

export function GuideArticle({ guide }: { guide: Guide }) {
  const { t } = useLanguage();
  return (
    <article className="mx-auto max-w-content px-5 py-14 sm:py-20">
      <Link href="/guides" className="text-sm font-medium text-accent hover:underline">
        ← {t(content.nav.guides)}
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
        {t(guide.title)}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-body/70">{t(guide.description)}</p>

      <div className="mt-12 space-y-10">
        {guide.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">{t(s.heading)}</h2>
            <div className="mt-3 space-y-4">
              {s.body.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-body/85">
                  {t(p)}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
