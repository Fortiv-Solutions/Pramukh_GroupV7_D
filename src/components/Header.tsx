"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/data";

const overlayLink = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const, delay: 0.25 + i * 0.07 },
  }),
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 py-3 shadow-[0_8px_30px_rgba(13,27,38,0.12)] backdrop-blur-md"
            : "theme-dark bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-[94%] max-w-[1380px] items-center gap-8">
          <Link href="/" aria-label="Pramukh Group — Home" className="shrink-0">
            <Image
              src="/images/pramukh-logo.svg"
              alt="Pramukh Group"
              width={132}
              height={52}
              priority
              className={`h-11 w-auto brightness-0 transition-[filter] duration-500 ${
                scrolled ? "" : "invert"
              }`}
            />
          </Link>

          {/* desktop nav */}
          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[0.8rem] uppercase tracking-[0.16em] transition-colors hover:text-gold ${
                      pathname.startsWith(item.href) ? "text-gold" : "text-linen"
                    }`}
                  >
                    {item.label}
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden>
                      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[200px] border border-gold-soft bg-charcoal/97 py-3 backdrop-blur-md">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-6 py-2 text-[0.78rem] uppercase tracking-[0.14em] text-linen-dim transition-colors hover:text-gold"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-[0.8rem] uppercase tracking-[0.16em] transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                    pathname === item.href ? "text-gold after:w-full" : "text-linen after:w-0"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="ml-auto flex items-center gap-4 lg:ml-0">
            <Link href="/contact" className="btn-luxe hidden !px-5 !py-2.5 !text-[0.72rem] md:inline-flex">
              Get in Touch
            </Link>
            {/* burger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[120] flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <span
                className={`block h-px w-7 transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45 bg-[#f5f1e8]" : "bg-linen"
                }`}
              />
              <span
                className={`block h-px w-7 bg-linen transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-7 transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45 bg-[#f5f1e8]" : "bg-linen"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-dark fixed inset-0 z-[110] flex flex-col justify-center bg-charcoal/98 px-[8%] backdrop-blur-xl"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {NAV.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.div custom={i} variants={overlayLink} initial="hidden" animate="show">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="title-display block text-[clamp(2rem,7vw,3.4rem)] text-linen transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              className="mt-10 flex flex-wrap gap-6 text-sm text-linen-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="hover:text-gold">
                {SITE.phones[0]}
              </a>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
