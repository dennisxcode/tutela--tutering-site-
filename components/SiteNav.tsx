"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";
import { TutelaWordmark } from "@/components/TutelaWordmark";

type NavLink = { href: string; label: typeof content.nav.program };

const links: NavLink[] = [
  { href: "/program", label: content.nav.program },
  { href: "/guides", label: content.nav.guides },
];

export function SiteNav() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-ink/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 text-ink" aria-label="Tutela">
          <Logo className="h-7 w-7" />
          <TutelaWordmark name={t(content.meta.brand)} />
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition hover:text-ink ${
                isActive(l.href) ? "text-ink" : "text-ink/70"
              }`}
            >
              {t(l.label)}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                  isActive(l.href) ? "w-full" : "w-0"
                }`}
                aria-hidden
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CtaButton className="hidden sm:inline-block" />
          {/* mobile menu button — clearly visible touch target */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t(open ? content.ui.close : content.ui.menu)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20 text-ink transition hover:bg-ink/5 sm:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* mobile menu sheet */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-ink/10 bg-cream transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto flex max-w-content flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`flex items-center justify-between border-b border-ink/10 py-4 text-lg font-medium ${
                  isActive(l.href) ? "text-accent" : "text-ink"
                }`}
              >
                {t(l.label)}
                <span className="text-ink/30">→</span>
              </Link>
            ))}
            <CtaButton className="mt-4 !block !rounded-lg !px-5 !py-3 text-center !text-base" />
          </div>
        </div>
      </div>
    </header>
  );
}
