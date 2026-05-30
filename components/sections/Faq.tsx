"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-4 text-left font-semibold text-ink"
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-4 text-base leading-relaxed text-body/80">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <Section id="faq" title={title} icon={<HelpCircle size={22} />}>
      <div className="border-t border-ink/10">
        {content.faq.map((item, i) => (
          <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
        ))}
      </div>
    </Section>
  );
}
