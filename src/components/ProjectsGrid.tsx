"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, type City, type ProjectKind, type ProjectStatus } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

type CityFilter = "all" | Lowercase<City>;

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
        active
          ? "border-gold text-gold"
          : "border-linen/25 text-linen-dim hover:border-gold hover:text-gold"
      }`}
    >
      {label}
    </button>
  );
}

/** Filterable, layout-animated project grid; status/kind can be locked per page. */
export default function ProjectsGrid({
  lockedStatus,
  lockedKind,
}: {
  lockedStatus?: ProjectStatus;
  lockedKind?: ProjectKind;
}) {
  const params = useSearchParams();
  const initialCity = (params.get("city") as CityFilter | null) ?? "all";
  const [city, setCity] = useState<CityFilter>(initialCity);
  const [status, setStatus] = useState<ProjectStatus | "all">(lockedStatus ?? "all");

  const list = useMemo(
    () =>
      PROJECTS.filter((p) => {
        if (lockedKind && p.kind !== lockedKind) return false;
        if (lockedStatus && p.status !== lockedStatus) return false;
        if (!lockedStatus && status !== "all" && p.status !== status) return false;
        if (city !== "all" && p.city.toLowerCase() !== city) return false;
        return true;
      }),
    [city, status, lockedKind, lockedStatus]
  );

  return (
    <section className="bg-navy py-24">
      <div className="mx-auto w-[92%] max-w-[1240px]">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by city">
            {(["all", "surat", "vapi", "silvassa"] as CityFilter[]).map((c) => (
              <FilterButton
                key={c}
                active={city === c}
                label={c === "all" ? "All Cities" : c}
                onClick={() => setCity(c)}
              />
            ))}
          </div>
          {!lockedStatus && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
              {(["all", "ongoing", "completed"] as const).map((s) => (
                <FilterButton
                  key={s}
                  active={status === s}
                  label={s === "all" ? "All Status" : s}
                  onClick={() => setStatus(s)}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="py-20 text-center text-linen-dim">
            No projects match this filter yet — try another city or status.
          </p>
        )}
      </div>
    </section>
  );
}
