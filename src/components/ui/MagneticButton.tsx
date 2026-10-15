"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "filled" | "outline" | "ghost";
  as?: "a" | "button";
  target?: string;
  rel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "outline",
  as,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.28);
    y.set(dy * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500",
    variant === "outline" &&
      "border border-champagne/55 text-noir hover:text-alabaster",
    variant === "filled" &&
      "bg-noir text-alabaster border border-noir hover:bg-champagne hover:border-champagne hover:text-noir",
    variant === "ghost" && "text-noir/80",
    className,
  );

  const content = (
    <>
      {variant === "outline" && (
        <span className="absolute inset-0 origin-left scale-x-0 bg-noir transition-transform duration-500 ease-out group-hover:scale-x-100" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  const Comp = as ?? (href ? "a" : "button");

  if (Comp === "a") {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        style={{ x: springX, y: springY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={styles}
        data-cursor="hover"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={styles}
      data-cursor="hover"
    >
      {content}
    </motion.button>
  );
}
