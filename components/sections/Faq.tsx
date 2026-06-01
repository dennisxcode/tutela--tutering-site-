"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-5 text-left font-semibold text-ink"
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 text-base leading-relaxed text-body/80">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ num = "06" }: { num?: string }) {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <EditorialSection id="faq" num={num} title={title}>
      <div className="border-t border-ink/10">
        {content.faq.map((item, i) => (
          <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
        ))}
      </div>
    </EditorialSection>
  );
}
