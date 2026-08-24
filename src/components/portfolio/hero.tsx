import { ArrowUpRight } from "lucide-react";
import { heroFlow } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const lines = ["I BUILD", "DIGITAL", "SOLUTIONS."];

function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function FlowStrip() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl px-5 py-6 sm:px-8">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-1/2 hidden h-px -translate-y-8 sm:block"
        viewBox="0 0 600 2"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="1"
          x2="600"
          y2="1"
          className="flow-line stroke-primary/60"
          strokeWidth="2"
        />
      </svg>

      <ol className="relative grid grid-cols-2 gap-x-4 gap-y-6 sm:flex sm:items-start sm:justify-between">
        {heroFlow.map((step, i) => (
          <li key={step} className="flex items-center gap-3 sm:flex-col sm:gap-3">
            <span className="relative grid size-2.5 shrink-0 place-items-center">
              <span
                className="flow-node absolute inset-0 rounded-full bg-primary"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <span className="absolute inset-0 rounded-full bg-primary/30" />
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.7rem]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden className="hero-glow absolute inset-0 -z-20" />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-70" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p
          className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          Student Developer · Technology Builder
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,7.5rem)] leading-[0.92] font-bold tracking-[-0.045em]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className={cn(
                  "animate-in slide-in-from-bottom-full fade-in block duration-1000 ease-out",
                  i === 2 && "text-gradient",
                )}
                style={{
                  animationDelay: `${150 + i * 130}ms`,
                  animationFillMode: "backwards",
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p
            className="animate-in fade-in slide-in-from-bottom-3 max-w-xl text-base leading-relaxed text-muted-foreground duration-1000 sm:text-lg"
            style={{ animationDelay: "620ms", animationFillMode: "backwards" }}
          >
            I explore technology by turning real-world problems into digital ideas,
            interfaces and systems.
          </p>

          <div
            className="animate-in fade-in slide-in-from-bottom-3 flex flex-wrap gap-3 duration-1000"
            style={{ animationDelay: "760ms", animationFillMode: "backwards" }}
          >
            <button
              type="button"
              onClick={() => scrollTo("#work")}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-lift)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Explore My Work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-16 duration-1000"
          style={{ animationDelay: "900ms", animationFillMode: "backwards" }}
        >
          <FlowStrip />
        </div>
      </div>
    </section>
  );
}
