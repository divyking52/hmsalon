"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Feedback() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-28 text-ink sm:px-8 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <p className="micro-label text-brass">FEEDBACK</p>
        <h2 className="mt-4 font-serif text-4xl font-light md:text-6xl">
          Voices of <span className="italic text-champagne">Radiance</span>
        </h2>

        <div className="relative mt-16 min-h-[220px]">
          <Quote className="mx-auto mb-6 h-10 w-10 text-champagne/70" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55 }}
              className="font-serif text-2xl font-light leading-relaxed md:text-4xl"
            >
              “{testimonials[index]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-champagne" : "w-3 bg-ink/15"
              }`}
              data-cursor="hover"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1400px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((quote, i) => (
          <article
            key={i}
            className="border border-champagne/20 bg-surface p-6 text-left shadow-sm"
            style={{ transform: `translateY(${(i % 2) * 16}px)` }}
          >
            <p className="text-sm leading-relaxed text-ink/75">“{quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
