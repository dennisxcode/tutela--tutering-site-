"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

// Airy section shell with an optional accent eyebrow, large title, and intro.
// The header reveals on scroll; children supply their own Reveal stagger.
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  surface = false,
  center = false,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  surface?: boolean;
  center?: boolean;
}) {
  return (
    <section id={id} className={surface ? "bg-white" : "bg-cream"}>
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        {(eyebrow || title || intro) && (
          <Reveal className={`mb-10 ${center ? "text-center" : ""}`}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-lg leading-relaxed text-body/70 ${
                  center ? "mx-auto max-w-xl" : "max-w-xl"
                }`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
