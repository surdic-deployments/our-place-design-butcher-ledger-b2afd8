"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { ReservationButton } from "./ReservationButton";
import { MenuGlyph } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-ink-300 bg-bone-50/95 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="#top" className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
          Our Place
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-quiet text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ReservationButton id="header-desktop" className="text-xs" />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink-300 text-ink-900 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen"
          >
            <MenuGlyph className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-14 flex w-56 flex-col gap-4 border border-ink-300 bg-bone-50 p-5 shadow-lg">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-quiet text-sm">
                {item.label}
              </a>
            ))}
            <ReservationButton id="header-mobile" className="justify-center text-xs" />
          </div>
        </details>
      </div>
    </header>
  );
}
