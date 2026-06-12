import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTASection from "@/components/CTASection";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { FUNDAMENTALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "CSR",
  description:
    "Community, equality, ethics and excellence — how Pramukh Group gives back to the cities that built it.",
};

const COMMITMENTS = [
  {
    title: "Communities First",
    text: "Our largest developments in Vapi and Silvassa are community developments by design — shared green spaces, gathering places and amenities that belong to everyone who lives there.",
  },
  {
    title: "Building Local Livelihoods",
    text: "Three decades of construction across Surat, Vapi and Silvassa means three decades of local employment — from skilled trades on site to long-term roles in operations and management.",
  },
  {
    title: "Equality, Ethics, Excellence",
    text: "The fundamentals we build by apply beyond our sites: fair dealing with every partner and worker, transparent commitments, and quality that outlasts the handover.",
  },
  {
    title: "Responsible Development",
    text: "We plan around what a neighbourhood needs — green cover at Yogi Woods and Green County, riverfront care at One Tapi, and infrastructure that improves the streets around every project.",
  },
];

export default function CSRPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Social Responsibility"
        title={["Building more", "than buildings"]}
        lead="The cities of Surat, Vapi and Silvassa built Pramukh Group. Giving back to them — through community-first development, local livelihoods and ethical practice — is part of how we work."
        image="/images/silvassa.jpg"
        crumb={[{ label: "CSR", href: "/csr" }]}
      />

      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead
            eyebrow="Our Commitments"
            title="How we give back"
            className="mb-16"
          />
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {COMMITMENTS.map((c, i) => (
              <StaggerItem
                key={c.title}
                className="border border-linen/10 bg-charcoal p-10 transition-colors duration-500 hover:border-gold-soft"
              >
                <span className="title-display text-[1rem] tracking-[0.2em] text-gold">0{i + 1}</span>
                <h3 className="title-display mt-3 text-[1.7rem]">{c.title}</h3>
                <p className="mt-3 text-[0.97rem] text-linen-dim">{c.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-navy-2 py-28">
        <div className="mx-auto grid w-[92%] max-w-[1240px] items-center gap-14 lg:grid-cols-2">
          <ParallaxImage
            src="/images/projects/green-county.jpg"
            alt="Green County community development"
            className="h-[420px] lg:h-[540px]"
            sizes="(max-width:1024px) 92vw, 46vw"
          />
          <Reveal>
            <p className="eyebrow mb-4">The Fundamentals</p>
            <h2 className="title-display text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Values we measure ourselves against
            </h2>
            <ul className="mt-8 space-y-5">
              {FUNDAMENTALS.map((f) => (
                <li key={f} className="border-l-2 border-gold pl-6">
                  <p className="title-display text-[1.25rem]">{f}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
