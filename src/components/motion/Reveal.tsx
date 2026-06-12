"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/** Fade-up reveal triggered when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/** Container that staggers its motion children on scroll. */
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** Line-masked headline reveal: each line slides up from a clipped mask. */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  inView = true,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  inView?: boolean;
}) {
  const anim = {
    initial: { y: "110%" },
    animate: { y: "0%" },
  };
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            initial={anim.initial}
            {...(inView
              ? {
                  whileInView: anim.animate,
                  viewport: { once: true, amount: 0.6 },
                }
              : { animate: anim.animate })}
            transition={{
              duration: 1,
              ease: EASE,
              delay: delay + i * 0.12,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
