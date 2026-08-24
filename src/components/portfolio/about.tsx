import { journey } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <SectionHeading label="02 / About" title="More than code." />

          <div className="space-y-6">
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground">
                I became interested in technology during secondary school. I started
                with web development — small pages, layouts, things that broke often —
                and slowly moved into programming as I wanted more control over what I
                was making.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-base leading-relaxed text-muted-foreground">
                What began as curiosity turned into building practical digital solutions
                for real problems around me, and into wanting to understand how
                technology can improve the everyday systems people already rely on.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} className="mt-16">
          <ol className="glass grid grid-cols-2 gap-y-6 rounded-2xl px-6 py-7 sm:grid-cols-5 sm:gap-4">
            {journey.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="font-mono text-[0.65rem] text-primary">
                  0{i + 1}
                </span>
                <span className="font-display text-sm font-semibold tracking-[0.12em] uppercase">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={180} className="mt-6">
          <div className="rounded-2xl border border-hairline p-6">
            <p className="eyebrow">CTC — Computer &amp; Technology Club</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A student technology environment covering programming, web development,
              hardware and software learning, and technology activities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
