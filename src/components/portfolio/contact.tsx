import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export function Contact() {
  const primary = contactLinks.find((l) => l.href);

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="hero-glow absolute inset-0 -z-20 opacity-80" />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">04 / Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.045em]">
            GOT A PROBLEM WORTH{" "}
            <span className="text-gradient">BUILDING FOR?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Let&apos;s connect, exchange ideas or build something useful.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href={primary?.href ?? "#contact"}
            className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 font-display text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-lift)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <Reveal as="li" key={link.label} delay={i * 70}>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 border-b border-hairline px-6 py-6 transition-colors duration-300 hover:bg-foreground/[0.04]"
                >
                  <span className="eyebrow">{link.label}</span>
                  <span className="flex items-center gap-2 font-display text-sm">
                    {link.handle}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ) : (
                <div className="flex items-center justify-between gap-4 border-b border-hairline px-6 py-6">
                  <span className="eyebrow">{link.label}</span>
                  <span className="font-mono text-xs text-muted-foreground/70">
                    {link.handle}
                  </span>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
