import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

function StatusPill({ status }: { status: Project["status"] }) {
  const inProgress = status === "In Progress";
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 self-start rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.16em] uppercase",
        inProgress
          ? "border-violet/40 text-violet"
          : "border-primary/40 text-primary",
      )}
      style={inProgress ? { borderColor: "color-mix(in oklab, var(--violet) 45%, transparent)", color: "var(--violet)" } : undefined}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ background: inProgress ? "var(--violet)" : "var(--primary)" }}
      />
      {status}
    </span>
  );
}

/** Clean placeholder mockup — swap for a real screenshot when available. */
function Mockup({ index }: { index: string }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-hairline bg-[var(--surface-2)]">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 flex flex-col p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
        </div>
        <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
          <div className="rounded-md border border-hairline bg-foreground/[0.04]" />
          <div className="col-span-2 space-y-2">
            <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
            <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
            <div className="h-full rounded-md border border-hairline bg-foreground/[0.03]" />
          </div>
        </div>
        <span className="mt-3 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
          {index} / preview placeholder
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  delay,
}: {
  project: Project;
  onOpen: () => void;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        aria-label={`Open details for ${project.title}`}
        className="group glass relative flex h-full cursor-pointer flex-col gap-5 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-lift)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:p-6"
      >
        <div className="overflow-hidden rounded-xl">
          <Mockup index={project.index} />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
              {project.index} —
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/10">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <StatusPill status={project.status} />
      </article>
    </Reveal>
  );
}

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hairline pt-4">
      <p className="eyebrow">{label}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="01 / Work"
          title="Selected Work"
          description="A few things I've built while learning, experimenting and solving real problems."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 90}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass max-h-[88vh] overflow-y-auto rounded-2xl border-border sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader className="text-left">
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                  {active.index} — Project
                </span>
                <DialogTitle className="font-display text-3xl font-bold tracking-tight">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <StatusPill status={active.status} />
              </div>

              <div className="mt-4 space-y-5">
                <DetailBlock label="Problem">{active.problem}</DetailBlock>
                <DetailBlock label="Solution">{active.solution}</DetailBlock>
                <DetailBlock label="Technology">
                  <div className="flex flex-wrap gap-2">
                    {active.technology.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.65rem]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </DetailBlock>
                <DetailBlock label="Learning">{active.learning}</DetailBlock>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
