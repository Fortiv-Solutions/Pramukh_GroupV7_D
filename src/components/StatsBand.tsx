import Counter from "@/components/motion/Counter";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { STATS } from "@/lib/data";

export default function StatsBand() {
  return (
    <section className="border-y border-gold-soft/50 bg-charcoal py-16">
      <StaggerGroup className="mx-auto grid w-[92%] max-w-[1240px] grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-3 lg:grid-cols-6">
        {STATS.map((s) => (
          <StaggerItem key={s.label}>
            <Counter
              value={s.value}
              suffix={s.suffix}
              decimals={s.decimals ?? 0}
              className="title-display block text-[clamp(2.2rem,3.4vw,3.2rem)] leading-none text-gold"
            />
            <span className="mt-3 block text-[0.7rem] uppercase tracking-[0.22em] text-linen-dim">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
