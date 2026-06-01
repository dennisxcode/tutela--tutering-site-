// Re-mounts on every route change, so the page content plays a calm fade + lift
// entrance each time you navigate (and on first load). The chrome (nav, footer)
// lives in layout.tsx, outside this template, so it stays put. Reduced-motion is
// handled in globals.css.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
