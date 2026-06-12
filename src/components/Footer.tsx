import Link from "next/link";
import Image from "next/image";
import { PROJECTS, SITE, OFFICES } from "@/lib/data";

const social = [
  { label: "LinkedIn", href: SITE.social.linkedin },
  { label: "Instagram", href: SITE.social.instagram },
  { label: "Facebook", href: SITE.social.facebook },
  { label: "YouTube", href: SITE.social.youtube },
];

export default function Footer() {
  const surat = PROJECTS.filter((p) => p.city === "Surat" && p.status === "ongoing");
  const south = PROJECTS.filter((p) => p.city !== "Surat" && p.status === "ongoing");

  return (
    <footer className="theme-dark bg-charcoal pt-20">
      <div className="mx-auto grid w-[92%] max-w-[1240px] grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/pramukh-logo.svg"
            alt="Pramukh Group"
            width={140}
            height={56}
            className="mb-5 h-14 w-auto brightness-0 invert"
          />
          <p className="max-w-[30ch] text-sm text-linen-dim">{SITE.description}</p>
          <div className="mt-6 flex gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.18em] text-linen-dim transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Surat projects">
          <h5 className="eyebrow mb-5 !text-[0.72rem]">Surat</h5>
          <ul className="space-y-2.5">
            {surat.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects#${p.slug}`} className="text-sm text-linen-dim transition-colors hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Vapi and Silvassa projects">
          <h5 className="eyebrow mb-5 !text-[0.72rem]">Vapi &amp; Silvassa</h5>
          <ul className="space-y-2.5">
            {south.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects#${p.slug}`} className="text-sm text-linen-dim transition-colors hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h5 className="eyebrow mb-5 !text-[0.72rem]">Company</h5>
          <ul className="space-y-2.5">
            {[
              ["About", "/about"],
              ["Projects", "/projects"],
              ["Investors", "/investors"],
              ["Media", "/media"],
              ["CSR", "/csr"],
              ["Blogs", "/blogs"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-linen-dim transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h5 className="eyebrow mb-5 !text-[0.72rem]">Contact</h5>
          <ul className="space-y-2.5">
            {SITE.phones.map((ph) => (
              <li key={ph}>
                <a href={`tel:${ph.replace(/\s/g, "")}`} className="text-sm text-linen-dim transition-colors hover:text-gold">
                  {ph}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SITE.email}`} className="text-sm text-linen-dim transition-colors hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-linen-dim/70">{OFFICES[0].address}</p>
        </div>
      </div>

      <div className="border-t border-linen/10 py-6">
        <div className="mx-auto flex w-[92%] max-w-[1240px] flex-wrap items-center justify-between gap-3">
          <p className="text-xs tracking-wide text-linen-dim/60">
            © {new Date().getFullYear()} Pramukh Group. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-linen-dim/60">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
