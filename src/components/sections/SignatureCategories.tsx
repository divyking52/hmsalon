"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArchFrame,
  JaaliPattern,
  OrnamentDivider,
} from "@/components/ui/IndianMotifs";
import { signatureCategories, site } from "@/data/content";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SignatureCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".essential-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  const featured = signatureCategories[active];

  return (
    <section
      ref={sectionRef}
      id="essentials"
      className="relative overflow-hidden bg-cream px-4 py-24 sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 text-champagne/20">
        <JaaliPattern className="opacity-30" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-mist blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="micro-label text-champagne">Signature Categories</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-6xl">
            Curated <span className="italic text-champagne">Essentials</span>
          </h2>
          <OrnamentDivider className="mx-auto mt-6 h-6 w-56" />
          <p className="mt-5 text-sm leading-relaxed text-taupe">
            Five signature rituals — crafted for lasting beauty, from nail
            couture to bridal artistry.
          </p>
        </div>

        {/* Desktop: featured stage + selector rail */}
        <div className="mt-16 hidden gap-8 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[620px] overflow-hidden border border-champagne/30 bg-surface shadow-[0_24px_60px_rgba(26,23,20,0.08)]">
            <div className="absolute inset-3 border border-champagne/20" />
            <ArchFrame className="opacity-70" />
            <motion.div
              key={featured.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-10">
              <span className="micro-label text-champagne">
                0{active + 1} — Essentials
              </span>
              <h3 className="mt-3 font-serif text-5xl font-light text-cream">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                {featured.copy}
              </p>
              <MagneticButton
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="filled"
                className="mt-7 !bg-cream !text-ink hover:!bg-champagne"
              >
                {featured.cta}
              </MagneticButton>
            </div>

            {/* Corner ornaments */}
            <span className="absolute left-5 top-5 z-10 h-8 w-8 border-l-2 border-t-2 border-champagne/80" />
            <span className="absolute right-5 top-5 z-10 h-8 w-8 border-r-2 border-t-2 border-champagne/80" />
            <span className="absolute bottom-5 left-5 z-10 h-8 w-8 border-b-2 border-l-2 border-champagne/80" />
            <span className="absolute bottom-5 right-5 z-10 h-8 w-8 border-b-2 border-r-2 border-champagne/80" />
          </div>

          <div className="flex flex-col justify-center gap-3">
            {signatureCategories.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "essential-card group relative flex items-center gap-5 overflow-hidden border px-5 py-5 text-left transition-all duration-500",
                  active === i
                    ? "border-champagne bg-ink text-cream shadow-lg"
                    : "border-champagne/25 bg-surface text-ink hover:border-champagne/50",
                )}
                data-cursor="hover"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-champagne/30">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className={cn(
                        "font-serif text-[0.65rem] tracking-[0.2em]",
                        active === i ? "text-champagne" : "text-taupe",
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "text-[0.6rem] uppercase tracking-[0.18em] transition",
                        active === i
                          ? "text-champagne opacity-100"
                          : "text-taupe opacity-0 group-hover:opacity-100",
                      )}
                    >
                      View
                    </span>
                  </div>
                  <h3 className="mt-1 font-serif text-2xl font-light leading-tight">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 line-clamp-2 text-xs leading-relaxed",
                      active === i ? "text-cream/70" : "text-taupe",
                    )}
                  >
                    {item.copy}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: stacked editorial cards */}
        <div className="mt-12 space-y-5 lg:hidden">
          {signatureCategories.map((item, i) => (
            <article
              key={item.title}
              className="essential-card overflow-hidden border border-champagne/25 bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute left-4 top-4 micro-label rounded-sm bg-cream/90 px-2 py-1 text-ink">
                  0{i + 1}
                </span>
                <ArchFrame className="opacity-50" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-taupe">{item.copy}</p>
                <MagneticButton
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.cta}
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
