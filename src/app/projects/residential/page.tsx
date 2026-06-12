import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Residential Projects",
  description:
    "Premium residences by Pramukh Group — from 1.5 BHK smart homes to exclusive riverside 5 BHK penthouses.",
};

export default function ResidentialProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title={["Homes designed for", "the way you live"]}
        lead="From smartly planned 1.5 BHK apartments to exclusive riverside 5 BHK penthouses — premium living, within reach."
        image="/images/projects/aranya-3.jpg"
        crumb={[
          { label: "Projects", href: "/projects" },
          { label: "Residential", href: "/projects/residential" },
        ]}
      />
      <Suspense>
        <ProjectsGrid lockedKind="residential" />
      </Suspense>
      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
