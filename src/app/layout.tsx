import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import FilmGrain from "@/components/ui/FilmGrain";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hair Masters Luxury Salon — Escape to a World of Beauty",
  description:
    "Hair Masters is the perfect destination for those seeking a transformative beauty experience. Luxury salon services across India.",
  openGraph: {
    title: "Hair Masters Luxury Salon",
    description:
      "Escape to a World of Beauty — luxury hair, makeup, and wellness across India.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-alabaster font-sans text-ink antialiased">
        <SmoothScroll>
          <FilmGrain />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
