import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import StatsBand from "@/components/StatsBand";
import Timeline from "@/components/home/Timeline";
import CTASection from "@/components/CTASection";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { APPROACH, FUNDAMENTALS, LEADERSHIP, MISSION, PHILOSOPHY, VISION } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A glimpse into Pramukh Group — three decades of designing, delivering and earning trust across Surat, Vapi and Silvassa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={["A glimpse into", "Pramukh Group"]}
        lead="At Pramukh Group, we create enduring spaces that reflect quality, trust, and long-term value — thoughtfully designed residential and commercial projects that elevate lifestyles and shape thriving communities."
        image="/images/marina-bay.jpg"
        crumb={[{ label: "About", href: "/about" }]}
      />

      {/* approach */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead
            eyebrow="Our Approach"
            title="How we build, and why it works"
            className="mb-16"
          />
          <StaggerGroup className="grid gap-10 md:grid-cols-3">
            {APPROACH.map((a, i) => (
              <StaggerItem key={a.title} className="border-t border-gold-soft pt-9">
                <span className="title-display text-[1rem] tracking-[0.2em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="title-display mt-3 text-[1.55rem]">{a.title}</h3>
                <p className="mt-2 text-[0.97rem] text-linen-dim">{a.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ownership philosophy with image */}
      <section className="bg-navy-2 py-28">
        <div className="mx-auto grid w-[92%] max-w-[1240px] items-center gap-14 lg:grid-cols-2">
          <ParallaxImage
            src="/images/revanta.jpg"
            alt="Revanta residential tower by Pramukh Group"
            className="h-[420px] lg:h-[540px]"
            sizes="(max-width:1024px) 92vw, 46vw"
          />
          <Reveal>
            <p className="eyebrow mb-4">All-In Ownership™</p>
            <h2 className="title-display text-[clamp(1.9rem,3.4vw,2.8rem)]">
              We don&rsquo;t pass the buck — we take it forward
            </h2>
            {PHILOSOPHY.map((p, i) => (
              <p key={i} className="mt-5 text-[1rem] text-linen-dim">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <StatsBand />

      {/* fundamentals + vision/mission */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead center eyebrow="The Fundamentals" title="What we stand for" className="mb-14" />
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {FUNDAMENTALS.map((f) => (
              <StaggerItem
                key={f}
                className="border border-gold-soft/60 bg-[linear-gradient(160deg,rgba(201,162,94,0.06),transparent_60%)] p-9 text-center"
              >
                <p className="title-display text-[1.3rem] leading-relaxed">{f}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <StaggerGroup className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { h: "Our Vision", p: VISION },
              { h: "Our Mission", p: MISSION },
            ].map((v) => (
              <StaggerItem key={v.h} className="border-l-2 border-gold py-4 pl-8">
                <h3 className="title-display text-[1.6rem] text-gold">{v.h}</h3>
                <p className="mt-3 text-linen-dim">{v.p}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* leadership */}
      <section className="bg-charcoal py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead
            center
            eyebrow="Leadership Team"
            title="Easy to reach, easier to work with"
            lead="The people who carry All-In Ownership™ from the first conversation to the final handover."
            className="mb-16"
          />
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {LEADERSHIP.map((m) => (
              <StaggerItem key={m.name} className="group text-center">
                <div className="relative mx-auto aspect-[3/4] overflow-hidden border border-linen/10">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width:768px) 45vw, 200px"
                    className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <h3 className="title-display mt-4 text-[1.15rem] leading-tight">{m.name}</h3>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.2em] text-gold">{m.role}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Timeline />

      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
