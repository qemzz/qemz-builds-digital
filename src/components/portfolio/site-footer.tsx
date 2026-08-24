const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.34em]">QEMZ</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Student Developer &amp; Technology Builder
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="Footer" className="flex gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-xs text-muted-foreground/70">© 2026 Qemz</p>
        </div>
      </div>
    </footer>
  );
}
