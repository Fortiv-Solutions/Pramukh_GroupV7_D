"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CITIES } from "@/lib/data";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Three city panels; the hovered panel expands like an accordion. */
export default function CityShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="theme-dark flex min-h-[78vh] flex-col lg:flex-row" aria-label="Our cities">
      {CITIES.map((city, i) => {
        const expanded = active === i;
        return (
          <motion.div
            key={city.name}
            className="group relative min-h-[54vh] cursor-pointer overflow-hidden lg:min-h-0"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            animate={{ flexGrow: expanded ? 1.7 : 1 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ flexBasis: 0, flexGrow: 1 }}
          >
            <Image
              src={city.image}
              alt={`${city.name} skyline`}
              fill
              sizes="(max-width:1024px) 100vw, 34vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,20,28,0.92)_8%,rgba(10,20,28,0.3)_55%,rgba(10,20,28,0.12))] transition-opacity duration-500" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-9 lg:p-10">
              <span className="eyebrow !text-[0.68rem]">0{i + 1}</span>
              <h2 className="title-display mt-2 text-[2.4rem] leading-tight">{city.name}</h2>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 max-w-[42ch] text-[0.95rem] text-linen-dim">{city.text}</p>
                  <Link
                    href={`/projects?city=${city.name.toLowerCase()}`}
                    className="mt-6 inline-block border-b border-gold pb-1 text-[0.76rem] uppercase tracking-[0.2em] text-gold"
                  >
                    Explore {city.name}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
