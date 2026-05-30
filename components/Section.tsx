import type { ReactNode } from "react";

export function Section({
  id,
  title,
  icon,
  children,
  surface = false,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  surface?: boolean;
}) {
  return (
    <section id={id} className={surface ? "bg-white" : ""}>
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="mb-7">
          <div className="flex items-center gap-3 text-ink">
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink/[0.07]"
            >
              {icon}
            </span>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          </div>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-accent" aria-hidden />
        </div>
        {children}
      </div>
    </section>
  );
}
