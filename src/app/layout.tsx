import type { Metadata } from "next";
import { Bitter, PT_Serif, Special_Elite } from "next/font/google";
import "./globals.css";

const display = Bitter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = PT_Serif({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const stamp = Special_Elite({
  variable: "--font-stamp",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Our Place — Barbecue & Cocktailhouse in Fürth",
  description:
    "American Barbecue und Cocktailhouse in einem historischen Fachwerkhaus in Fürth. Hickory-geräucherte Ribs, Smokehouse-Burger und Cocktails — Tisch reservieren.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${body.variable} ${stamp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
