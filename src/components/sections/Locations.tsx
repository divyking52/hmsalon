"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { comingSoon, locations } from "@/data/content";
import { cn } from "@/lib/cn";

const regions = Object.keys(locations);

export default function Locations() {
  const [active, setActive] = useState(regions[0]);
  const [query, setQuery] = useState("");

  const branches = useMemo(() => {
    const list = locations[active] ?? [];
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter((b) => b.toLowerCase().includes(q));
  }, [active, query]);

  const filteredRegions = useMemo(() => {
    if (!query.trim()) return regions;
    const q = query.toLowerCase();
    return regions.filter(
      (region) =>
        region.toLowerCase().includes(q) ||
        locations[region].some((b) => b.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <section
      id="locations"
      className="relative bg-alabaster px-4 py-28 sm:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="micro-label text-champagne">Pan-India Presence</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light text-ink md:text-6xl">
          Locations <span className="italic text-champagne">Directory</span>
        </h2>

        <div className="relative mt-10 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city or branch…"
            className="w-full rounded-full border border-champagne/25 bg-surface px-11 py-3 text-sm text-ink outline-none placeholder:text-taupe focus:border-champagne/60"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filteredRegions.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setActive(region)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] transition",
                active === region
                  ? "border-champagne bg-champagne/15 text-champagne"
                  : "border-champagne/25 text-taupe hover:text-ink",
              )}
              data-cursor="hover"
            >
              {region}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {branches.map((branch) => (
            <div
              key={branch}
              className="gold-border flex items-center gap-3 rounded-sm bg-surface px-5 py-4 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              <span className="text-sm text-ink/90">{branch}</span>
            </div>
          ))}
          {branches.length === 0 && (
            <p className="text-sm text-taupe">No branches match your search.</p>
          )}
        </div>

        <div className="mt-16 overflow-hidden border-y border-champagne/20 py-5">
          <p className="micro-label mb-4 px-1 text-champagne">Coming Soon</p>
          <div className="flex whitespace-nowrap">
            <div className="ticker flex gap-8 pr-8">
              {[...comingSoon, ...comingSoon].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="inline-flex items-center gap-3 text-sm text-taupe"
                >
                  <span className="h-1 w-1 rounded-full bg-brass" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
