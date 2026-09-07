import { occasion } from "@/content/site";
import { Reveal } from "./Reveal";

export function Occasion() {
  return (
    <section id="unser-place" className="bg-ink-900 px-5 py-16 text-bone-50 sm:px-8 sm:py-24">
      <span className="perf-line mx-auto block w-full max-w-6xl bg-bone-50" aria-hidden="true" />
      <Reveal
        as="div"
        className="reveal mx-auto grid max-w-6xl gap-8 py-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-14 sm:py-16"
      >
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-display text-3xl font-bold leading-none text-bone-50 sm:text-4xl">
            {occasion.heading}
          </h2>
          <span className="h-[3px] w-12 bg-oxblood-600" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-5">
          {occasion.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="max-w-2xl text-base leading-relaxed text-bone-100 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
      <span className="perf-line mx-auto block w-full max-w-6xl bg-bone-50" aria-hidden="true" />
    </section>
  );
}
