import { Reveal } from "@/components/motion/Reveal";

export default function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "text-center" : ""} ${className}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="title-display text-[clamp(2rem,4vw,3.2rem)]">{title}</h2>
      {lead && (
        <p className={`mt-5 max-w-[64ch] text-[1.06rem] text-linen-dim ${center ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
