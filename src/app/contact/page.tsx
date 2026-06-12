import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTASection from "@/components/CTASection";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { OFFICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let's build something together. Reach Pramukh Group offices in Surat, Vapi and Silvassa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={["Let's build", "something together"]}
        lead="We're easy to reach and even easier to work with. Call, write, or walk into any Pramukh office across Surat, Vapi and Silvassa."
        image="/images/vapi.jpg"
        crumb={[{ label: "Contact", href: "/contact" }]}
      />

      {/* offices */}
      <section className="bg-navy py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead eyebrow="Pramukh Offices" title="Showrooms & offices" className="mb-16" />
          <StaggerGroup className="grid gap-8 lg:grid-cols-3">
            {OFFICES.map((o) => (
              <StaggerItem
                key={o.city}
                className="flex flex-col border border-linen/10 bg-charcoal p-10 transition-colors duration-500 hover:border-gold-soft"
              >
                <h3 className="title-display text-[1.8rem]">{o.city}</h3>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-linen-dim">{o.address}</p>
                <a
                  href={`tel:${o.phone.replace(/\s/g, "")}`}
                  className="mt-6 inline-block text-gold transition-colors hover:text-gold-light"
                >
                  {o.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `Pramukh Group ${o.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block border-b border-transparent pb-0.5 text-[0.74rem] uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold"
                >
                  Get Directions →
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-8 border border-gold-soft/50 bg-[linear-gradient(160deg,rgba(201,162,94,0.06),transparent_60%)] p-8">
            <a href={`mailto:${SITE.email}`} className="text-lg text-gold hover:text-gold-light">
              {SITE.email}
            </a>
            {SITE.phones.map((ph) => (
              <a
                key={ph}
                href={`tel:${ph.replace(/\s/g, "")}`}
                className="text-lg text-linen-dim transition-colors hover:text-gold"
              >
                {ph}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="bg-charcoal py-28">
        <div className="mx-auto w-[92%] max-w-[1240px]">
          <SectionHead eyebrow="Find Us" title="Surat head office" className="mb-12" />
          <Reveal className="overflow-hidden border border-linen/10">
            <iframe
              title="Pramukh Group Surat office on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Orbit-2, Vesu Canal Road, Vesu, Surat 395007"
              )}&output=embed`}
              className="h-[440px] w-full grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <Suspense>
        <CTASection />
      </Suspense>
    </>
  );
}
