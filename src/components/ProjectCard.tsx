"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      id={project.slug}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group border border-linen/10 bg-charcoal transition-colors duration-500 hover:border-gold-soft"
    >
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.type}, ${project.city}`}
          fill
          sizes="(max-width:768px) 90vw, 360px"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.07]"
        />
        <span className="absolute left-4 top-4 border border-gold-soft bg-charcoal/80 px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-gold backdrop-blur">
          {project.status === "ongoing" ? "Ongoing" : `Delivered ${project.year ?? ""}`}
        </span>
      </div>
      <div className="p-7">
        <span className="text-[0.66rem] uppercase tracking-[0.3em] text-gold">{project.city}</span>
        <h3 className="title-display mt-2 text-[1.7rem] leading-snug">{project.name}</h3>
        <p className="mt-1 min-h-[2.7em] text-[0.92rem] text-linen-dim">{project.type}</p>
        <Link
          href={`/contact?project=${encodeURIComponent(project.name)}`}
          className="mt-4 inline-block border-b border-transparent pb-0.5 text-[0.74rem] uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold"
        >
          Enquire →
        </Link>
      </div>
    </motion.article>
  );
}
