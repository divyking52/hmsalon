"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { whatWeDo } from "@/data/content";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(
    () => {
      const reveals = gsap.utils.toArray<HTMLElement>(".clip-reveal");
      reveals.forEach((el) => {
        const img = el.querySelector("img");
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 30%",
                scrub: true,
              },
            },
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-alabaster px-4 py-28 sm:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="micro-label text-champagne">{whatWeDo.sectionHeader}</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight text-ink md:text-6xl">
          Your Complete Beauty Journey{" "}
          <span className="italic text-champagne">Starts</span>
        </h2>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whatWeDo.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="group relative min-h-[380px] overflow-hidden border border-champagne/20 bg-surface"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-cursor="hover"
            >
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  hovered === i ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/45" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-7">
                <span
                  className={cn(
                    "micro-label",
                    hovered === i ? "text-champagne" : "text-champagne",
                  )}
                >
                  0{i + 1}
                </span>
                <h3
                  className={cn(
                    "mt-3 font-serif text-3xl transition-colors",
                    hovered === i ? "text-cream" : "text-ink",
                  )}
                >
                  {pillar.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed transition-colors",
                    hovered === i ? "text-cream/85" : "text-taupe",
                  )}
                >
                  {pillar.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {whatWeDo.portals.map((portal) => (
            <a
              key={portal.id}
              id={portal.id}
              href="#contact"
              className="clip-reveal relative block min-h-[420px] overflow-hidden border border-champagne/25"
              data-cursor="hover"
            >
              <Image
                src={portal.image}
                alt={portal.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <p className="micro-label text-champagne">Service Portal</p>
                <h3 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
                  {portal.title}
                </h3>
                <motion.span
                  className="mt-6 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-cream"
                  whileHover={{ x: 8 }}
                >
                  Discover →
                </motion.span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
