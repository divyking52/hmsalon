"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  JaaliPattern,
  MandalaCorner,
  OrnamentDivider,
  PaisleyVine,
} from "@/components/ui/IndianMotifs";
import { hero, images } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const floatARef = useRef<HTMLDivElement>(null);
  const floatBRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=140%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(copyRef.current, { x: -80, opacity: 0.2, ease: "none" }, 0)
          .to(primaryRef.current, { scale: 1.08, y: -40, ease: "none" }, 0)
          .to(floatARef.current, { y: -120, x: -40, rotate: -6, ease: "none" }, 0)
          .to(floatBRef.current, { y: -160, x: 50, rotate: 8, ease: "none" }, 0)
          .to(stageRef.current, { scale: 1.04, ease: "none" }, 0)
          .to(motifRef.current, { rotate: 12, scale: 1.15, opacity: 0.35, ease: "none" }, 0);
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-svh min-h-screen items-center overflow-hidden bg-alabaster"
    >
      {/* Indian luxury atmosphere */}
      <div className="pointer-events-none absolute inset-0 text-champagne/25">
        <JaaliPattern className="opacity-[0.35]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,149,61,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-alabaster via-alabaster/80 to-alabaster" />

      <MandalaCorner className="absolute left-2 top-20 h-36 w-36 opacity-70 md:left-6 md:top-24 md:h-48 md:w-48" />
      <MandalaCorner
        flip="x"
        className="absolute right-2 top-20 h-36 w-36 opacity-70 md:right-6 md:top-24 md:h-48 md:w-48"
      />
      <MandalaCorner
        flip="y"
        className="absolute bottom-8 left-2 hidden h-32 w-32 opacity-50 md:block md:left-6"
      />
      <MandalaCorner
        flip="xy"
        className="absolute bottom-8 right-2 hidden h-32 w-32 opacity-50 md:block md:right-6"
      />

      <PaisleyVine className="absolute left-0 top-1/2 hidden h-[70vh] w-14 -translate-y-1/2 opacity-60 lg:block" />
      <PaisleyVine className="absolute right-0 top-1/2 hidden h-[70vh] w-14 -translate-y-1/2 scale-x-[-1] opacity-60 lg:block" />

      <div
        ref={motifRef}
        className="pointer-events-none absolute right-[42%] top-[18%] hidden h-40 w-40 text-champagne opacity-40 lg:block"
      >
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true" fill="none">
          <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <path
              key={deg}
              d="M60 18 C68 28 68 40 60 48 C52 40 52 28 60 18 Z"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.55"
              transform={`rotate(${deg} 60 60)`}
            />
          ))}
          <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-0">
        <div ref={copyRef} className="max-w-xl lg:pl-4">
          <p className="micro-label text-champagne">{hero.eyebrow}</p>
          <OrnamentDivider className="mt-4 h-5 w-48" />
          <h1 className="mt-5 font-serif text-5xl font-light leading-[0.95] tracking-tight text-noir sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Escape to a{" "}
            <span className="italic text-champagne">World</span>
            <br />
            of Beauty
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-taupe sm:text-base">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#contact" variant="filled">
              {hero.primaryCta}
            </MagneticButton>
            <MagneticButton href="#services">{hero.secondaryCta}</MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {hero.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-champagne/30 bg-surface/80 px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase text-ink/80 shadow-sm"
                data-cursor="hover"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto h-[58vh] w-full max-w-[640px] lg:h-[72vh] lg:max-w-none"
        >
          {/* Ornamental frame behind primary image */}
          <div className="absolute inset-y-[3%] right-[-2%] w-[82%] border border-champagne/20 bg-gradient-to-br from-champagne/5 to-transparent" />
          <div className="absolute inset-y-[3%] right-[-2%] w-[82%] text-champagne/30">
            <JaaliPattern className="opacity-40" />
          </div>

          <div
            ref={primaryRef}
            className="absolute inset-y-[6%] right-0 w-[78%] overflow-hidden rounded-[2px] border border-champagne/35 shadow-[0_30px_80px_rgba(26,23,20,0.12)]"
          >
            <Image
              src={images.heroPrimary}
              alt="Hair Masters Luxury Salon"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            {/* Inner gold corner ticks */}
            <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-champagne/70" />
            <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-champagne/70" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-champagne/70" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-champagne/70" />
          </div>

          <div
            ref={floatARef}
            className="absolute bottom-[8%] left-0 z-20 h-[38%] w-[42%] overflow-hidden rounded-[2px] border border-champagne/40 bg-surface p-[3px] shadow-xl"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={images.heroFloatA}
                alt="Hair Masters styling"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>

          <div
            ref={floatBRef}
            className="absolute right-[6%] top-0 z-20 h-[28%] w-[34%] overflow-hidden rounded-[2px] border border-champagne/40 bg-surface p-[3px] shadow-lg"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={images.heroFloatB}
                alt="Hair Masters bridal work"
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>

          <p className="absolute -bottom-2 right-0 hidden font-serif text-6xl italic text-champagne/20 lg:block xl:text-8xl">
            Atelier
          </p>
        </div>
      </div>
    </section>
  );
}
