"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

/** Subtle repeating jaali (lattice) — Indian palace screen motif */
export function JaaliPattern({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const patternId = `hm-jaali-${id}`;

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 4 L44 24 L24 44 L4 24 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="24" cy="24" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="24" cy="4" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="44" cy="24" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="24" cy="44" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="4" cy="24" r="1.2" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/** Corner mandala / rangoli-inspired ornament */
export function MandalaCorner({
  className,
  flip,
}: {
  className?: string;
  flip?: "x" | "y" | "xy";
}) {
  const scale =
    flip === "x"
      ? "scale-x-[-1]"
      : flip === "y"
        ? "scale-y-[-1]"
        : flip === "xy"
          ? "scale-[-1]"
          : "";

  return (
    <svg
      viewBox="0 0 160 160"
      className={cn("pointer-events-none text-champagne", scale, className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <path
        d="M20 4 C28 12 36 16 48 18"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.65"
      />
      <path
        d="M4 20 C12 28 16 36 18 48"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.65"
      />
      <path
        d="M20 20 C40 22 58 38 62 62 M20 20 C22 40 38 58 62 62"
        stroke="currentColor"
        strokeWidth="0.55"
        opacity="0.4"
      />
      {/* Paisley petal */}
      <path
        d="M72 28 C92 18 108 32 98 52 C88 68 68 58 72 40 C74 34 72 28 72 28 Z"
        stroke="currentColor"
        strokeWidth="0.65"
        opacity="0.55"
      />
      <path
        d="M28 72 C18 92 32 108 52 98 C68 88 58 68 40 72 C34 74 28 72 28 72 Z"
        stroke="currentColor"
        strokeWidth="0.65"
        opacity="0.55"
      />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.5" />
      {/* Lotus arcs */}
      <path
        d="M55 12 Q70 8 82 18 M12 55 Q8 70 18 82"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
    </svg>
  );
}

/** Vertical paisley vine strip */
export function PaisleyVine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 420"
      className={cn("pointer-events-none text-champagne", className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 10 C30 60 10 70 30 110 C50 150 30 170 30 210 C30 250 50 270 30 310 C10 350 30 370 30 410"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
      {[40, 120, 200, 280, 360].map((y, i) => (
        <g key={y} transform={`translate(0 ${y - 40})`}>
          <path
            d={
              i % 2 === 0
                ? "M30 40 C48 28 58 42 50 58 C40 72 28 60 30 48 C31 44 30 40 30 40 Z"
                : "M30 40 C12 28 2 42 10 58 C20 72 32 60 30 48 C29 44 30 40 30 40 Z"
            }
            stroke="currentColor"
            strokeWidth="0.65"
            opacity="0.55"
          />
          <circle cx="30" cy="40" r="1.5" fill="currentColor" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

/** Ornate horizontal divider — lotus / kalash inspired */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 24"
      className={cn("pointer-events-none text-champagne", className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12 H110" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path d="M170 12 H280" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path
        d="M140 4 C148 8 152 12 140 20 C128 12 132 8 140 4 Z"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <circle cx="140" cy="11" r="2" fill="currentColor" opacity="0.55" />
      <path
        d="M118 12 Q128 6 140 12 Q152 6 162 12"
        stroke="currentColor"
        strokeWidth="0.55"
        opacity="0.5"
      />
    </svg>
  );
}

/** Arch / torana frame for image cards */
export function ArchFrame({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-champagne", className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 118 V48 Q4 8 50 8 Q96 8 96 48 V118"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.55"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M8 118 V50 Q8 14 50 14 Q92 14 92 50 V118"
        stroke="currentColor"
        strokeWidth="0.25"
        opacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
