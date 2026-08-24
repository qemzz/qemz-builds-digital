import { Reveal } from "./reveal";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="eyebrow">{label}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.035em]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
