"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    // play the brand intro only once per browsing session
    if (sessionStorage.getItem("pramukh-intro")) return;
    sessionStorage.setItem("pramukh-intro", "1");
    setDone(false);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
    }, 1900);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="theme-dark fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-charcoal"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Image
              src="/images/pramukh-logo.svg"
              alt="Pramukh Group"
              width={180}
              height={72}
              priority
              className="brightness-0 invert"
            />
          </motion.div>
          <motion.div
            className="mt-8 h-px w-44 origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
          />
          <motion.p
            className="eyebrow mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Designed. Delivered. Trusted.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
