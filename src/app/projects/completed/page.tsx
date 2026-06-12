import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Completed Projects",
  description:
    "60+ projects delivered and 13,000+ homes built since 1993 — Pramukh Group's completed portfolio across Gujarat.",
};

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Completed Projects"
        title={["A legacy,", "delivered"]}
        lead="60+ projects delivered and 13,000+ homes built since 1993 — from Paras Palace in Silvassa to Aranya 2 in Surat."
        image="/images/timeline/timeline.jpg"
        crumb={[
          { label: "Projects", href: "/projects" },
          { label: "Completed", href: "/projects/completed" },
        ]}
      />
      <Suspense>
        <ProjectsGrid lockedStatus="completed" />
      </Suspense>
      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
