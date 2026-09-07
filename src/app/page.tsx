import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { SignatureDishes } from "@/components/SignatureDishes";
import { Occasion } from "@/components/Occasion";
import { MenuTeaser } from "@/components/MenuTeaser";
import { VisitBook } from "@/components/VisitBook";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bone-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-oxblood-600 focus:px-4 focus:py-2 focus:text-bone-50"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <Hero />
        <ProofStrip />
        <SignatureDishes />
        <Occasion />
        <MenuTeaser />
        <VisitBook />
      </main>
      <Footer />
    </div>
  );
}
