import { menuTeaser } from "@/content/site";
import { Reveal } from "./Reveal";

export function MenuTeaser() {
  return (
    <section id="speisekarte" className="bg-bone-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Von der Karte
          </h2>
          <span className="stamp text-[0.6rem]">Stand {menuTeaser.updated}</span>
        </div>
        <span className="perf-line perf-line-thin mb-10 w-16" aria-hidden="true" />

        <Reveal as="div" className="stagger reveal grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {menuTeaser.categories.map((category) => (
            <div key={category.name} className="ledger-card relative p-5">
              <span className="relative font-stamp text-xs uppercase tracking-[0.08em] text-oxblood-600">
                {category.name}
              </span>
              <ul className="relative mt-4 flex flex-col gap-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 border-t border-ink-300/50 pt-3 first:border-t-0 first:pt-0">
                    <span className="text-sm text-ink-900">{item.name}</span>
                    <span className="font-stamp text-sm text-ink-700">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <p className="mt-10 text-xs text-ink-700">
          Preise &amp; Verfügbarkeit können sich ändern. Es gilt die Karte im
          Restaurant.
        </p>
      </div>
    </section>
  );
}
