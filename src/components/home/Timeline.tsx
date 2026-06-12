"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/data";
import SectionHead from "@/components/SectionHead";

gsap.registerPlugin(ScrollTrigger);

/** Pinned horizontal-scrub legacy timeline (vertical list on mobile). */
export default function Timeline() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 1024) return;
    const el = section.current;
    const tr = track.current;
    if (!el || !tr) return;

    const ctx = gsap.context(() => {
      const distance = tr.scrollWidth - el.offsetWidth;
      gsap.to(tr, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        ".tl-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="overflow-hidden bg-charcoal" id="legacy">
      <div className="flex min-h-screen flex-col justify-center py-24">
        <div className="mx-auto mb-16 w-[92%] max-w-[1240px]">
          <SectionHead eyebrow="How We Got Here" title="Three decades in the making" />
          <div className="tl-progress mt-10 hidden h-px origin-left bg-gold lg:block" />
        </div>

        {/* horizontal track on desktop */}
        <div
          ref={track}
          className="flex w-max flex-col gap-10 px-[4%] lg:flex-row lg:gap-0 lg:pl-[calc((100vw-1240px)/2+4%)] max-lg:w-full"
        >
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="relative border-l border-gold-soft/60 pl-8 lg:w-[420px] lg:shrink-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pr-16 lg:pt-10"
            >
              <span className="absolute -left-[5px] top-1 block h-[9px] w-[9px] rounded-full border-2 border-gold bg-navy lg:-top-[5px] lg:left-0" />
              <span className="title-display text-[1.5rem] text-gold">{item.year}</span>
              <h4 className="title-display mt-2 text-[1.45rem]">{item.title}</h4>
              <p className="mt-1 max-w-[36ch] text-[0.95rem] text-linen-dim">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
