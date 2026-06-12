import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Commercial Projects",
  description:
    "Showrooms, offices and commercial landmarks by Pramukh Group — anchored by the Orbit district in Surat.",
};

export default function CommercialProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title={["Addresses where", "business belongs"]}
        lead="Showrooms, offices and landmark commercial spaces — anchored by the growing Orbit district on Surat's Vesu corridor."
        image="/images/projects/orbit-5.jpg"
        crumb={[
          { label: "Projects", href: "/projects" },
          { label: "Commercial", href: "/projects/commercial" },
        ]}
      />
      <Suspense>
        <ProjectsGrid lockedKind="commercial" />
      </Suspense>
      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
