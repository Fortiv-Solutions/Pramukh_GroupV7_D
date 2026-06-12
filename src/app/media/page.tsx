import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { ARTICLES, TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Media Centre",
  description:
    "Press, milestones and announcements from Pramukh Group — three decades of changing Gujarat's skyline.",
};

export default function MediaPage() {
  const press = ARTICLES.filter((a) => a.category === "Press");

  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title={["News, milestones", "& announcements"]}
        lead="Follow the Pramukh Group story — project launches, delivery milestones and three decades of changing Gujarat's skyline."
        image="/images/surat.jpg"
        crumb={[{ label: "Media", href: "/media" }]}
      />

      {/* press */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead eyebrow="In the Press" title="Latest coverage" className="mb-14" />
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {press.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* milestones */}
      <section className="bg-charcoal py-28">
        <div className="mx-auto w-[92%] max-w-[880px]">
          <SectionHead
            center
            eyebrow="Milestones"
            title="Moments that made Pramukh"
            className="mb-16"
          />
          <StaggerGroup className="relative space-y-2 before:absolute before:bottom-0 before:left-[104px] before:top-0 before:w-px before:bg-[linear-gradient(rgba(201,162,94,0.35),rgba(201,162,94,0.06))] max-md:before:left-[84px]">
            {TIMELINE.map((t) => (
              <StaggerItem key={t.year + t.title} className="relative flex items-baseline gap-10 py-4 max-md:gap-7">
                <span className="title-display w-[84px] shrink-0 text-right text-[1.2rem] text-gold max-md:w-[64px] max-md:text-[1rem]">
                  {t.year}
                </span>
                <span className="absolute left-[100px] top-[1.55rem] block h-[9px] w-[9px] rounded-full border-2 border-gold bg-navy max-md:left-[80px]" />
                <div>
                  <h3 className="title-display text-[1.35rem]">{t.title}</h3>
                  <p className="mt-1 text-[0.93rem] text-linen-dim">{t.text}</p>
                </div>
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
