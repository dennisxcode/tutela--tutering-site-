"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { content, type Bi } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

function MathIcon() {
  return (
    <svg width="38" height="48" viewBox="0 0 38 48" fill="none" aria-hidden>
      <path d="M2 48 Q2 13 19 4 Q36 13 36 48 Z" fill="#c4673a" stroke="#1f4733" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M25 16 L13 16 L20 26 L13 36 L25 36" stroke="#f5f0e8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FrenchIcon() {
  return (
    <svg width="38" height="48" viewBox="0 0 38 48" fill="none" aria-hidden>
      <path d="M2 48 Q2 13 19 4 Q36 13 36 48 Z" fill="#c4673a" stroke="#1f4733" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M19 14 L26 26 L19 36 L12 26 Z" stroke="#f5f0e8" strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="19" y1="36" x2="19" y2="40" stroke="#f5f0e8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function EnglishIcon() {
  return (
    <svg width="38" height="48" viewBox="0 0 38 48" fill="none" aria-hidden>
      <path d="M2 48 Q2 13 19 4 Q36 13 36 48 Z" fill="#c4673a" stroke="#1f4733" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="13" y1="20" x2="25" y2="20" stroke="#f5f0e8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="26" x2="25" y2="26" stroke="#f5f0e8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="32" x2="20" y2="32" stroke="#f5f0e8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const tutors: { label: Bi; line: Bi; Icon: () => JSX.Element }[] = [
  { label: { zh: "数学", en: "Math" }, line: content.tutors.math, Icon: MathIcon },
  { label: { zh: "英语", en: "English" }, line: content.tutors.english, Icon: EnglishIcon },
  { label: { zh: "法语", en: "French" }, line: content.tutors.french, Icon: FrenchIcon },
];

export function Tutors({ num = "04" }: { num?: string }) {
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <EditorialSection
      id="tutors"
      num={num}
      title={t(content.tutors.title)}
      intro={t(content.subjects.special)}
    >
      <ul ref={listRef} className="divide-y divide-ink/10 border-y border-ink/10">
        {tutors.map((tt, i) => (
          <li
            key={i}
            className="flex items-start gap-4 py-6 transition-all duration-700 ease-out"
            style={{
              transitionDelay: `${i * 120}ms`,
              opacity: shown ? 1 : 0,
              transform: shown ? "none" : "translateY(12px)",
            }}
          >
            <span className="shrink-0">
              <tt.Icon />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">{t(tt.label)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body/75">{t(tt.line)}</p>
            </div>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
