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
      <div className="mx-auto max-w-content px-5 py-12">
        <div className="mb-5">
          <div className="flex items-center gap-2 text-ink">
            <span aria-hidden>{icon}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-accent" aria-hidden />
        </div>
        {children}
      </div>
    </section>
  );
}
