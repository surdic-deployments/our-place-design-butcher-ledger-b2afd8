import { proofPoints } from "@/content/site";
import { Reveal } from "./Reveal";

export function ProofStrip() {
  return (
    <Reveal as="section" className="reveal bg-bone-50 px-4 pb-8 pt-2 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <span className="perf-line perf-line-thin mx-auto mb-6 w-full max-w-xs" aria-hidden="true" />
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {proofPoints.map((point) => (
            <li key={point} className="stamp stamp-ink">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
