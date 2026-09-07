import { hours } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReservationButton } from "./ReservationButton";
import { ClockIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bone-50 px-5 pb-20 pt-16 sm:px-8 sm:pt-24"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgb(32 28 22 / 0.05) 0, rgb(32 28 22 / 0.05) 1px, transparent 1px, transparent 32px)",
      }}
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 sm:grid-cols-[1.15fr_1fr] sm:gap-8">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-ink-900 sm:text-6xl lg:text-7xl">
            Rauch. Ribs.
            <br />
            Gute Abende.
          </h1>

          <p className="max-w-md font-body text-base leading-relaxed text-ink-700 sm:text-lg">
            American Barbecue &amp; Cocktailhouse in einem Fachwerkhaus mitten
            in Fürth — hickory-geräuchert, langsam gezogen, nach dem Schnitt
            serviert.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <ReservationButton id="hero" />
            <a href="#speisekarte" className="link-quiet">
              Speisekarte entdecken
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-ink-700">
            <ClockIcon className="h-4 w-4 text-oxblood-600" />
            {hours.lines[0].days} {hours.lines[0].time}
          </div>
        </div>

        <Reveal
          as="div"
          className="reveal mx-auto flex h-52 w-52 rotate-[-6deg] items-center justify-center rounded-full border-[3px] border-oxblood-600 text-center sm:h-64 sm:w-64"
        >
          <div className="flex flex-col items-center gap-1 px-6 font-stamp uppercase tracking-[0.08em] text-oxblood-600">
            <span className="text-xs">Hickory</span>
            <span className="text-lg leading-tight sm:text-xl">Geräuchert &amp; Gezogen</span>
            <span className="mt-1 h-px w-16 bg-oxblood-600" />
            <span className="mt-1 text-xs">Fürth · Fachwerkhaus</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
