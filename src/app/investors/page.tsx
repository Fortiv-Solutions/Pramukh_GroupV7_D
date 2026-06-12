import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import StatsBand from "@/components/StatsBand";
import CTASection from "@/components/CTASection";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { APPROACH, PRINCIPLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Investors & Partners",
  description:
    "Partner with Pramukh Group — joint development, land partnerships and redevelopment opportunities across Surat, Vapi and Silvassa.",
};

const PARTNER_MODELS = [
  {
    title: "Joint Development",
    text: "Bring your land, we bring three decades of execution. Aligned goals, transparent structures and a track record of partners who return project after project.",
  },
  {
    title: "Land Partnerships",
    text: "We focus on overlooked and undervalued sites in urban infill and emerging neighbourhoods — and we structure partnerships that protect long-term value for owners.",
  },
  {
    title: "Redevelopment",
    text: "From ageing societies to under-utilised commercial plots, we manage approvals, construction and delivery end-to-end under All-In Ownership™.",
  },
  {
    title: "NRI Services",
    text: "Dedicated assistance for non-resident investors — documentation, home loans, EMI guidance and real-time site updates, wherever you are.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors & Partners"
        title={["Transparency", "that performs"]}
        lead="Every project starts with collaboration. Clear expectations, honest communication, and aligned goals set the stage for success — that's why so many of our partners choose to work with us again and again."
        image="/images/projects/orbit-5.jpg"
        crumb={[{ label: "Investors", href: "/investors" }]}
      />

      <StatsBand />

      {/* partnership models */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead
            eyebrow="Partner With Us"
            title="Four ways to build together"
            className="mb-16"
          />
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {PARTNER_MODELS.map((m, i) => (
              <StaggerItem
                key={m.title}
                className="border border-linen/10 bg-charcoal p-10 transition-colors duration-500 hover:border-gold-soft"
              >
                <span className="title-display text-[1rem] tracking-[0.2em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="title-display mt-3 text-[1.7rem]">{m.title}</h3>
                <p className="mt-3 text-[0.97rem] text-linen-dim">{m.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* why pramukh */}
      <section className="bg-navy-2 py-28">
        <div className="mx-auto grid w-[92%] max-w-[1240px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Why Pramukh</p>
            <h2 className="title-display text-[clamp(1.9rem,3.4vw,2.8rem)]">
              A developer&rsquo;s foresight, a stakeholder&rsquo;s commitment
            </h2>
            <div className="mt-8 space-y-7">
              {APPROACH.map((a) => (
                <div key={a.title} className="border-l-2 border-gold pl-6">
                  <h3 className="title-display text-[1.3rem]">{a.title}</h3>
                  <p className="mt-1 text-[0.95rem] text-linen-dim">{a.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <ParallaxImage
            src="/images/projects/central-park.jpg"
            alt="Central Park development by Pramukh Group"
            className="h-[420px] lg:h-[560px]"
            sizes="(max-width:1024px) 92vw, 46vw"
          />
        </div>
      </section>

      {/* principles strip */}
      <section className="bg-navy py-24">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <StaggerGroup className="grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.num} className="border-t border-gold-soft pt-9">
                <h3 className="title-display text-[1.4rem]">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-linen-dim">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
