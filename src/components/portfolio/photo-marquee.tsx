import { heroPhotos } from "@/lib/portfolio-data";

/**
 * Infinite photo marquee. Vertical on large screens (right of the heading),
 * horizontal on mobile. Photos come from `heroPhotos` in portfolio-data.ts.
 */
export function PhotoMarquee() {
  const items = [...heroPhotos, ...heroPhotos];

  return (
    <div className="group relative w-full max-w-full overflow-hidden lg:h-[26rem] lg:w-64">
      {/* Mobile / tablet: horizontal */}
      <div className="marquee-mask-x overflow-hidden lg:hidden">
        <div className="marquee-track-x flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <figure
              key={`x-${i}`}
              className="h-44 w-32 shrink-0 overflow-hidden rounded-2xl border border-hairline bg-[var(--surface-2)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>

      {/* Desktop: vertical */}
      <div className="marquee-mask-y hidden h-full overflow-hidden lg:block">
        <div className="marquee-track-y flex flex-col gap-4 group-hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <figure
              key={`y-${i}`}
              className="h-56 w-full shrink-0 overflow-hidden rounded-2xl border border-hairline bg-[var(--surface-2)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
