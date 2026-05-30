"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-4 text-left font-semibold text-ink transition-colors hover:text-accent"
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {/* smooth grid-rows accordion */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-base leading-relaxed text-body/75">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <Section id="faq" title={title} icon={<HelpCircle size={20} />}>
      <div className="rounded-2xl border border-ink/10 bg-white px-5 shadow-sm">
        {content.faq.map((item, i) => (
          <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
        ))}
      </div>
    </Section>
  );
}
