import { Suspense } from "react";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/StatsBand";
import CityShowcase from "@/components/home/CityShowcase";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import Timeline from "@/components/home/Timeline";
import CTASection from "@/components/CTASection";
import SectionHead from "@/components/SectionHead";
import ArticleCard from "@/components/ArticleCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { ARTICLES, MISSION, PHILOSOPHY, PRINCIPLES, VISION } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* welcome */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[880px]">
          <SectionHead
            eyebrow="Welcome to Pramukh Group"
            title="Enduring spaces that reflect quality, trust & long-term value"
            lead="At Pramukh Group, we create enduring spaces that reflect quality, trust, and long-term value. With deep expertise in real estate development, construction, and planning, we are committed to delivering thoughtfully designed residential and commercial projects that elevate lifestyles and shape thriving communities."
          />
          <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              { h: "Our Vision", p: VISION },
              { h: "Our Mission", p: MISSION },
            ].map((v) => (
              <StaggerItem
                key={v.h}
                className="border border-gold-soft/60 bg-[linear-gradient(160deg,rgba(201,162,94,0.06),transparent_60%)] p-10"
              >
                <h3 className="title-display text-[1.6rem] text-gold">{v.h}</h3>
                <p className="mt-3 text-linen-dim">{v.p}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <StatsBand />
      <CityShowcase />
      <ProjectsCarousel />

      {/* principles */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead
            center
            eyebrow="How We Differ"
            title="Our Guiding Principles"
            lead="These three principles define how we operate and why our partners continue to trust us — a clear foundation that shapes every decision we make."
            className="mb-16"
          />
          <StaggerGroup className="grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.num} className="border-t border-gold-soft pt-9">
                <span className="title-display text-[1rem] tracking-[0.2em] text-gold">{p.num}</span>
                <h3 className="title-display mt-3 text-[1.55rem]">{p.title}</h3>
                <p className="mt-2 text-[0.97rem] text-linen-dim">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-16 grid gap-10 border-l-2 border-gold py-7 pl-10 md:grid-cols-2">
            {PHILOSOPHY.map((para, i) => (
              <p key={i} className="text-[1rem] text-linen-dim">
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <Timeline />

      {/* latest articles */}
      <section className="bg-navy-2 py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="The Latest" title="Stories & updates" />
            <Reveal>
              <Link
                href="/blogs"
                className="border-b border-gold pb-1 text-[0.76rem] uppercase tracking-[0.2em] text-gold"
              >
                View All
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} article={a} />
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
