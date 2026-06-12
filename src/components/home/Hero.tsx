"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;
const SLIDE_MS = 6500;

const SLIDES = [
  {
    image: "/images/marina-bay.jpg",
    eyebrow: "Pramukh Group",
    lines: ["Designed.", "Delivered. Trusted."],
    sub: "Premium residential & commercial landmarks across Gujarat",
    cta: { label: "Explore Projects", href: "/projects" },
  },
  {
    image: "/images/projects/one-tapi.jpg",
    eyebrow: "One Tapi — Surat",
    lines: ["A Class of", "Its Own"],
    sub: "Exclusive riverside 5 BHK residences & penthouses",
    cta: { label: "Discover More", href: "/projects/ongoing" },
  },
  {
    image: "/images/revanta.jpg",
    eyebrow: "Three Decades of Trust",
    lines: ["Shaping the", "Skyline of Gujarat"],
    sub: "60+ projects delivered · 13,000+ homes built",
    cta: { label: "Our Story", href: "/about" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      SLIDE_MS
    );
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const slide = SLIDES[index];

  return (
    <section className="theme-dark relative h-dvh min-h-[640px] overflow-hidden bg-charcoal" aria-label="Featured developments">
      {/* slides — crossfade + ken burns */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${slide.image}')` }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7.5, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,20,28,0.85)_18%,rgba(10,20,28,0.45)_55%,rgba(10,20,28,0.15))]" />
        </motion.div>
      </AnimatePresence>

      {/* copy */}
      <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-[1240px] items-center">
        <div key={index} className="max-w-3xl">
          <motion.p
            className="eyebrow mb-6 !tracking-[0.4em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          >
            {slide.eyebrow}
          </motion.p>

          <h1 className="title-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[1.05]">
            {slide.lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.05, ease: EASE, delay: 0.45 + i * 0.13 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 text-lg tracking-wide text-linen-dim"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          >
            {slide.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
            className="mt-10"
          >
            <Link href={slide.cta.href} className="btn-luxe">
              {slide.cta.label}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* progress dots */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              restart();
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-11 w-12 cursor-pointer"
          >
            <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 overflow-hidden bg-linen/25">
              {i === index && (
                <motion.span
                  className="absolute inset-y-0 left-0 bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 right-10 z-20 hidden flex-col items-center gap-3 md:flex">
        <span className="text-[0.66rem] uppercase tracking-[0.3em] text-linen-dim">Scroll</span>
        <motion.span
          className="block h-12 w-px bg-gold"
          animate={{ scaleY: [0, 1, 1, 0], originY: ["0%", "0%", "100%", "100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
