"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { images, whoWeAre } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const insetRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const words = wordsRef.current?.querySelectorAll(".word");
      if (!words?.length) return;

      gsap.set(words, { opacity: 0.2 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.035,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "center 35%",
          scrub: true,
        },
      });

      gsap.fromTo(
        frameRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        insetRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: insetRef.current,
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const parts = whoWeAre.statement.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-mist px-4 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div
            ref={frameRef}
            className="relative aspect-[4/5] overflow-hidden border border-champagne/25"
          >
            <Image
              src={images.aboutMain}
              alt="Hair Masters Salon"
              fill
              className="object-cover scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div
            ref={insetRef}
            className="absolute -bottom-8 -right-4 z-10 hidden w-[46%] overflow-hidden border border-champagne/30 bg-surface p-2 shadow-2xl sm:block lg:-right-8"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={images.aboutInset}
                alt="Hair Masters look"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <p className="mt-2 px-1 pb-1 text-[0.58rem] tracking-[0.22em] uppercase text-taupe">
              Hair Masters — India
            </p>
          </div>

          <div className="absolute -left-3 top-10 hidden h-28 w-20 overflow-hidden border border-champagne/20 opacity-90 lg:block">
            <Image
              src={images.aboutAccent}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        <div className="lg:pl-4">
          <p className="micro-label text-champagne">{whoWeAre.tag}</p>
          <div className="mt-4 h-px w-16 bg-champagne/50" />
          <p
            ref={wordsRef}
            className="mt-8 font-serif text-2xl font-light leading-[1.4] tracking-tight text-ink md:text-3xl lg:text-[2.15rem]"
          >
            {parts.map((word, i) => (
              <span key={`${word}-${i}`} className="word inline-block">
                {word}
                {i < parts.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </p>
          <p className="mt-10 font-serif text-4xl italic text-champagne/40 md:text-5xl">
            Excellence, one makeover at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
