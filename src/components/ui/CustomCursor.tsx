"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX);
      moveDotY(e.clientY);
      moveRing(e.clientX);
      moveRingY(e.clientY);
    };

    const setHover = (active: boolean) => {
      ring.classList.toggle("is-hover", active);
      dot.classList.toggle("is-hover", active);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("a, button, [data-cursor='hover'], input, textarea, select")) {
        setHover(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("a, button, [data-cursor='hover'], input, textarea, select")) {
        setHover(false);
      }
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor__dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor__ring" aria-hidden="true" />
    </>
  );
}
