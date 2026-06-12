import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { StaggerGroup } from "@/components/motion/Reveal";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Stories from Pramukh Group — riverside living in Surat, community development in Vapi and Silvassa, and three decades of building trust.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title={["Stories from", "the skyline"]}
        lead="Riverside living on the Tapi, community-first development, and the journey from a single building in Silvassa to 17 million square feet."
        image="/images/projects/one-tapi.jpg"
        crumb={[{ label: "Blogs", href: "/blogs" }]}
      />

      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
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
