import { exploring, workedWith } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function Tag({
  children,
  tone = "solid",
}: {
  children: React.ReactNode;
  tone?: "solid" | "outline";
}) {
  return (
    <span
      className="group inline-flex items-center gap-2 rounded-xl border border-hairline bg-foreground/[0.03] px-4 py-3 font-display text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-foreground/[0.06]"
      style={
        tone === "outline"
          ? { borderColor: "color-mix(in oklab, var(--violet) 28%, transparent)" }
          : undefined
      }
    >
      <span
        className="size-1.5 rounded-full opacity-70"
        style={{ background: tone === "outline" ? "var(--violet)" : "var(--primary)" }}
      />
      {children}
    </span>
  );
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="03 / Stack"
          title="What I Work With"
          description="An honest view of what I've used and what I'm currently digging into — not a list of things I claim to have mastered."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <p className="eyebrow">Worked With</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {workedWith.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <p className="eyebrow">Currently Exploring</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {exploring.map((t) => (
                  <Tag key={t} tone="outline">
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
