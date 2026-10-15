"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  JaaliPattern,
  OrnamentDivider,
} from "@/components/ui/IndianMotifs";
import { portfolioFilters, portfolioItems } from "@/data/content";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Filter = (typeof portfolioFilters)[number] | "All";

const layoutPattern = [
  "lg:col-span-2 lg:row-span-2 min-h-[420px] lg:min-h-[560px]",
  "min-h-[260px] lg:min-h-[270px]",
  "min-h-[260px] lg:min-h-[270px]",
  "lg:col-span-2 min-h-[280px] lg:min-h-[300px]",
  "min-h-[280px] lg:min-h-[320px]",
  "min-h-[280px] lg:min-h-[320px]",
];

export default function WorksPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof portfolioItems)[number] | null>(
    null,
  );

  const filtered = useMemo(() => {
    const base =
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((i) => i.category === active);
    return expanded ? base : base.slice(0, 6);
  }, [active, expanded]);

  const canExpand =
    (active === "All"
      ? portfolioItems.length
      : portfolioItems.filter((i) => i.category === active).length) > 6;

  useGSAP(
    () => {
      const tiles = gsap.utils.toArray<HTMLElement>(".lookbook-tile");
      gsap.fromTo(
        tiles,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [filtered.length, active] },
  );

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden bg-mist px-4 py-24 sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 text-champagne/15">
        <JaaliPattern className="opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="micro-label text-champagne">
              WORKS PORTFOLIO — Our Latest Work
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-6xl">
              Lookbook <span className="italic text-champagne">Gallery</span>
            </h2>
            <OrnamentDivider className="mt-5 h-5 w-48" />
          </div>

          <div className="flex max-w-2xl flex-wrap gap-x-1 gap-y-2 lg:justify-end">
            <button
              type="button"
              onClick={() => {
                setActive("All");
                setExpanded(false);
              }}
              className={cn(
                "relative px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition",
                active === "All" ? "text-champagne" : "text-taupe hover:text-ink",
              )}
              data-cursor="hover"
            >
              All
              {active === "All" && (
                <motion.span
                  layoutId="lookbook-filter"
                  className="absolute inset-x-2 -bottom-0.5 h-px bg-champagne"
                />
              )}
            </button>
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActive(filter);
                  setExpanded(false);
                }}
                className={cn(
                  "relative px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition",
                  active === filter
                    ? "text-champagne"
                    : "text-taupe hover:text-ink",
                )}
                data-cursor="hover"
              >
                {filter}
                {active === filter && (
                  <motion.span
                    layoutId="lookbook-filter"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-champagne"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active + String(expanded)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5"
          >
            {filtered.map((item, i) => (
              <button
                key={`${item.title}-${item.category}-${i}`}
                type="button"
                onClick={() => setLightbox(item)}
                className={cn(
                  "lookbook-tile group relative overflow-hidden border border-champagne/20 bg-surface text-left shadow-sm transition duration-500 hover:border-champagne/45 hover:shadow-xl",
                  layoutPattern[i % layoutPattern.length],
                )}
                data-cursor="hover"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

                <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-champagne/70 opacity-0 transition group-hover:opacity-100" />
                <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-champagne/70 opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-champagne/70 opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-champagne/70 opacity-0 transition group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 md:p-7">
                  <div>
                    <p className="micro-label text-champagne">{item.category}</p>
                    <h3 className="mt-2 font-serif text-2xl text-cream md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition group-hover:border-champagne group-hover:bg-champagne group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {i === 0 && active === "All" && (
                  <span className="absolute left-5 top-5 z-10 hidden rounded-sm bg-cream/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ink md:inline-block">
                    Featured
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {(canExpand || expanded) && (
          <div className="mt-12 flex justify-center">
            <MagneticButton onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show Less" : "View More"}
            </MagneticButton>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden border border-champagne/30 bg-cream shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 bg-cream/90 text-ink"
                aria-label="Close"
                data-cursor="hover"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/11]">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  className="object-cover"
                  sizes="900px"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-champagne/20 px-6 py-5">
                <div>
                  <p className="micro-label text-champagne">{lightbox.category}</p>
                  <h3 className="mt-1 font-serif text-3xl text-ink">
                    {lightbox.title}
                  </h3>
                </div>
                <p className="hidden text-right text-xs tracking-[0.16em] uppercase text-taupe sm:block">
                  Hair Masters — Lookbook
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
