"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/** Image that drifts vertically inside a clipped frame while scrolling. */
export default function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  strength = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  const positioned = className?.split(/\s+/).includes("absolute");
  return (
    <div ref={ref} className={`overflow-hidden ${positioned ? "" : "relative"} ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 will-change-transform">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}
