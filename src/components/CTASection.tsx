"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PROJECTS, SITE } from "@/lib/data";

/** Brochure / enquiry section — submits the lead straight to WhatsApp. */
export default function CTASection() {
  const params = useSearchParams();
  const preset = params.get("project") ?? "";
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hello Pramukh Group, I am ${data.get("name")}. I would like to receive the brochure for ${data.get(
      "project"
    )}. My WhatsApp number is ${data.get("phone")}.`;
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="theme-dark relative overflow-hidden" id="enquire">
      <ParallaxImage
        src="/images/projects/central-park.jpg"
        alt=""
        className="absolute inset-0"
        strength={10}
      />
      <div className="relative z-10 bg-charcoal/90 py-28">
        <Reveal className="mx-auto w-[92%] max-w-[880px] text-center">
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="title-display text-[clamp(1.9rem,3.6vw,3rem)]">
            Your one-stop destination for designs, brochures, availability, videos &amp; real-time site updates
          </h2>
          <p className="mx-auto mt-5 max-w-[58ch] text-[1.05rem] text-linen-dim">
            Please fill in your details below and we shall send you the brochure immediately to your
            registered WhatsApp number.
          </p>

          <form onSubmit={onSubmit} className="mt-12 grid gap-4 text-left md:grid-cols-[1fr_1fr_1fr_auto]">
            <div>
              <label htmlFor="cta-name" className="sr-only">Full name</label>
              <input id="cta-name" name="name" type="text" placeholder="Full Name" required className="luxe" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="cta-phone" className="sr-only">WhatsApp number</label>
              <input id="cta-phone" name="phone" type="tel" placeholder="WhatsApp Number" required className="luxe" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="cta-project" className="sr-only">Interested project</label>
              <select id="cta-project" name="project" required defaultValue={preset} className="luxe">
                <option value="" disabled>
                  Interested Project
                </option>
                {PROJECTS.filter((p) => p.status === "ongoing").map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name} — {p.city}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-luxe" disabled={sent}>
              {sent ? "Sent ✓" : "Request Brochure"}
            </button>
          </form>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {SITE.phones.map((ph) => (
              <a
                key={ph}
                href={`tel:${ph.replace(/\s/g, "")}`}
                className="border-b border-transparent text-[1.02rem] tracking-wide text-gold transition-colors hover:border-gold"
              >
                {ph}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
