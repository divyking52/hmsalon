"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { locations, navLinks, site } from "@/data/content";
import { cn } from "@/lib/cn";

const regions = Object.keys(locations);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-champagne/20 bg-alabaster/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" data-cursor="hover">
          <Image
            src={site.logo}
            alt="Hair Masters"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <div>
            <p className="font-serif text-xl tracking-[0.06em] text-ink sm:text-2xl">
              Hair <span className="italic text-champagne">Masters</span>
            </p>
            <p className="micro-label mt-0.5 text-[0.55rem]">Luxury Salon — India</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navLinks.map((link) => {
            if ("mega" in link && link.mega === "locations") {
              return (
                <div key={link.label} className="relative group/loc">
                  <button
                    type="button"
                    className="micro-label flex items-center gap-1 text-ink/70 transition hover:text-champagne"
                    data-cursor="hover"
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,720px)] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover/loc:visible group-hover/loc:translate-y-0 group-hover/loc:opacity-100">
                    <div className="glass overflow-hidden rounded-sm shadow-xl">
                      <div className="grid grid-cols-[180px_1fr]">
                        <div className="max-h-80 overflow-y-auto border-r border-champagne/15 bg-mist/60 p-2">
                          {regions.map((region) => (
                            <button
                              key={region}
                              type="button"
                              onMouseEnter={() => setActiveRegion(region)}
                              className={cn(
                                "block w-full px-3 py-2.5 text-left text-[0.65rem] uppercase tracking-[0.16em] transition",
                                activeRegion === region
                                  ? "bg-surface text-champagne"
                                  : "text-ink/70 hover:text-champagne",
                              )}
                              data-cursor="hover"
                            >
                              {region}
                            </button>
                          ))}
                        </div>
                        <div className="max-h-80 overflow-y-auto p-4">
                          <p className="micro-label mb-3 text-champagne">
                            {activeRegion}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {locations[activeRegion].map((branch) => (
                              <a
                                key={branch}
                                href={site.whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-sm border border-champagne/15 bg-surface px-3 py-2 text-xs text-ink/80 transition hover:border-champagne/40 hover:text-champagne"
                                data-cursor="hover"
                              >
                                {branch}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (link.children) {
              return (
                <div key={link.label} className="relative group/nav">
                  <button
                    type="button"
                    className="micro-label flex items-center gap-1 text-ink/70 transition hover:text-champagne"
                    data-cursor="hover"
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                    <div className="glass rounded-sm p-3 shadow-lg">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-[0.7rem] tracking-[0.16em] uppercase text-ink/75 transition hover:text-champagne"
                          data-cursor="hover"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="micro-label text-ink/70 transition hover:text-champagne"
                data-cursor="hover"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton href="#contact" className="hidden sm:inline-flex">
            Book Appointment
          </MagneticButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-champagne/15 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-6 py-6">
              {navLinks.map((link) => {
                if ("mega" in link && link.mega === "locations") {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left font-serif text-2xl text-ink"
                        onClick={() => setLocationsOpen((v) => !v)}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition",
                            locationsOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {locationsOpen && (
                        <div className="space-y-3 pb-4 pl-1">
                          {regions.map((region) => (
                            <div key={region}>
                              <p className="micro-label mb-2 text-champagne">
                                {region}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {locations[region].map((branch) => (
                                  <a
                                    key={branch}
                                    href={site.whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full border border-champagne/20 px-3 py-1.5 text-[0.65rem] text-ink/75"
                                  >
                                    {branch}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.children) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left font-serif text-2xl text-ink"
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {servicesOpen &&
                        link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 pl-3 text-sm tracking-[0.18em] uppercase text-taupe"
                          >
                            {child.label}
                          </a>
                        ))}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-3 font-serif text-2xl text-ink"
                  >
                    {link.label}
                  </a>
                );
              })}
              <MagneticButton href="#contact" className="mt-4 w-full">
                Book Appointment
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
