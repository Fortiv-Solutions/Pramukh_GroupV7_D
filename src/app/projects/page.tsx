import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Pramukh Group's residential and commercial projects across Surat, Vapi and Silvassa — ongoing and delivered.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title={["Spaces that shape", "thriving communities"]}
        lead="From riverside residences in Surat to community developments in Vapi and Silvassa — every Pramukh project carries the same promise: designed, delivered, trusted."
        image="/images/projects/one-tapi.jpg"
        crumb={[{ label: "Projects", href: "/projects" }]}
      />
      <Suspense>
        <ProjectsGrid />
      </Suspense>
      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
