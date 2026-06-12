import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "20+ ongoing Pramukh Group developments — 6,700+ homes under construction across Surat, Vapi and Silvassa.",
};

export default function OngoingProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ongoing Projects"
        title={["Rising now,", "ready for tomorrow"]}
        lead="20+ ongoing developments and 6,700+ homes under construction — follow every project with real-time site updates."
        image="/images/projects/agastya.jpg"
        crumb={[
          { label: "Projects", href: "/projects" },
          { label: "Ongoing", href: "/projects/ongoing" },
        ]}
      />
      <Suspense>
        <ProjectsGrid lockedStatus="ongoing" />
      </Suspense>
      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
