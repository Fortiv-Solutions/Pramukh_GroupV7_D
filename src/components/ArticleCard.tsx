import Image from "next/image";
import Link from "next/link";
import { StaggerItem } from "@/components/motion/Reveal";

export default function ArticleCard({
  article,
}: {
  article: {
    slug: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  };
}) {
  return (
    <StaggerItem className="group border border-linen/10 bg-charcoal transition-colors duration-500 hover:border-gold-soft">
      <Link href={`/blogs#${article.slug}`} className="block">
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(max-width:768px) 90vw, 400px"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.06]"
          />
        </div>
        <div className="p-7">
          <div className="flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.26em]">
            <span className="text-gold">{article.category}</span>
            <span className="text-linen-dim">{article.date}</span>
          </div>
          <h3 className="title-display mt-3 text-[1.45rem] leading-snug transition-colors group-hover:text-gold-light">
            {article.title}
          </h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-linen-dim">{article.excerpt}</p>
        </div>
      </Link>
    </StaggerItem>
  );
}
