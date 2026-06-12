"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.9, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (!ref.current) return;
      const num = decimals
        ? latest.toFixed(decimals)
        : Math.round(latest).toLocaleString("en-IN");
      ref.current.textContent = num + suffix;
    });
    return unsub;
  }, [spring, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
