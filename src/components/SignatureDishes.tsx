import { signatureDishes } from "@/content/site";
import { Reveal } from "./Reveal";
import { CutChartIllustration } from "./icons";

const CHARTS: { animal: "pig" | "cow"; highlight: { x: number; width: number; label: string } }[] = [
  { animal: "pig", highlight: { x: 94, width: 44, label: "RIBS" } },
  { animal: "cow", highlight: { x: 168, width: 42, label: "CHUCK" } },
  { animal: "cow", highlight: { x: 127, width: 34, label: "RIB" } },
];

export function SignatureDishes() {
  return (
    <section id="platte" className="bg-bone-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Von der Platte
            </h2>
            <span className="perf-line perf-line-thin mt-2 w-16" aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {signatureDishes.map((dish, i) => {
            const chart = CHARTS[i];
            return (
              <Reveal key={dish.index} as="article" className="ledger-card reveal flex flex-col gap-3 p-6">
                <div className="relative flex items-start justify-between gap-3">
                  <span className="font-stamp text-xs text-ink-700">Nr. {dish.index}</span>
                  <span className="stamp text-[0.6rem]">{dish.tag}</span>
                </div>
                <CutChartIllustration
                  animal={chart.animal}
                  highlight={chart.highlight}
                  className="relative mx-auto h-24 w-auto"
                />
                <h3 className="relative font-display text-xl font-bold leading-tight text-ink-900">
                  {dish.name}
                </h3>
                <p className="relative text-sm leading-relaxed text-ink-700">
                  {dish.description}
                </p>
                <span className="perf-line perf-line-thin relative mt-auto" aria-hidden="true" />
                <div className="relative flex items-center justify-end">
                  <span className="font-display text-lg font-bold text-oxblood-600">
                    {dish.price}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
