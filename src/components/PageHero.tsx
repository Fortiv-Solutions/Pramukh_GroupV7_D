import Link from "next/link";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { MaskedLines } from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string[];
  lead?: string;
  image: string;
  crumb: { label: string; href: string }[];
}) {
  return (
    <section className="theme-dark relative flex min-h-[62vh] items-end overflow-hidden bg-charcoal pb-16 pt-40">
      <ParallaxImage src={image} alt="" className="absolute inset-0" strength={8} priority />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,20,28,0.95)_10%,rgba(10,20,28,0.55)_55%,rgba(10,20,28,0.35))]" />
      <div className="relative z-10 mx-auto w-[92%] max-w-[1240px]">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-linen-dim">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          {crumb.map((c) => (
            <span key={c.href}>
              <span className="mx-1 text-gold">/</span>
              <Link href={c.href} className="hover:text-gold">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="title-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.06]">
          <MaskedLines lines={title} inView={false} delay={0.15} />
        </h1>
        {lead && <p className="mt-6 max-w-[62ch] text-[1.08rem] text-linen-dim">{lead}</p>}
      </div>
    </section>
  );
}
