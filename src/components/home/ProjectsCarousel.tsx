"use client";

import { useRef, useState } from "react";
import { PROJECTS, type City } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import SectionHead from "@/components/SectionHead";
import { AnimatePresence } from "framer-motion";

const FILTERS: ("All" | City)[] = ["All", "Surat", "Vapi", "Silvassa"];

export default function ProjectsCarousel() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const track = useRef<HTMLDivElement>(null);

  const list = PROJECTS.filter(
    (p) => p.status === "ongoing" && (filter === "All" || p.city === filter)
  );

  const scrollBy = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 392, behavior: "smooth" });

  return (
    <section className="bg-navy-2 py-28" id="ongoing">
      <div className="mx-auto w-[92%] max-w-[1240px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Ongoing Projects" title="Crafted for the way you live" />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by city">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`cursor-pointer border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  filter === f
                    ? "border-gold text-gold"
                    : "border-linen/25 text-linen-dim hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={track}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <div key={p.slug} className="w-[min(360px,82vw)] shrink-0 snap-start">
                  <ProjectCard project={p} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* arrows */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous projects"
            className="absolute -left-6 top-[36%] z-10 hidden h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-gold-soft bg-charcoal/90 p-4 text-xl text-gold transition-colors hover:bg-gold hover:text-charcoal lg:flex"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next projects"
            className="absolute -right-6 top-[36%] z-10 hidden h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-gold-soft bg-charcoal/90 p-4 text-xl text-gold transition-colors hover:bg-gold hover:text-charcoal lg:flex"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
