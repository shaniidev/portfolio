"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  category: string;
  domain: string;
  featured: boolean;
  stars: number | null;
  forks: number | null;
  language: string | null;
}

const projects: Project[] = projectsData;

/** GitHub's own language colours, so the dot reads as familiar. */
const languageColors: Record<string, string> = {
  Python: "#3572A5",
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
};

const repoSlug = (url: string | null) =>
  url ? url.replace("https://github.com/", "") : null;

/**
 * Stand-in visual for repositories with no screenshot. Rather than leaving a
 * bare card, this renders the repo the way you would meet it on GitHub —
 * clone line, language, stars, forks.
 */
const RepoPanel = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => (
  <div
    className={cn(
      "relative flex flex-col justify-center overflow-hidden bg-surface-raised p-6 md:p-8",
      className
    )}
  >
    <div aria-hidden className="bg-grid-fine absolute inset-0 opacity-50" />
    <div
      aria-hidden
      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
    />

    {/* Mirrors the badge placement on cards that do have a screenshot. */}
    <span className="absolute left-4 top-4 rounded-md border border-border-strong/60 bg-background/80 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
      {project.domain}
    </span>
    {project.featured && (
      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/15 px-2.5 py-1 font-mono text-xs text-primary backdrop-blur-sm">
        <Star className="h-3 w-3 fill-current" />
        featured
      </span>
    )}

    <div className="relative pt-10">
      <p className="font-mono text-xs text-muted-foreground">$ git clone</p>
      <p className="mt-2 break-all font-mono text-base text-primary md:text-lg">
        {repoSlug(project.githubUrl)}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
        {project.language && (
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: languageColors[project.language] ?? "#94a3b8",
              }}
            />
            {project.language}
          </span>
        )}
        {project.stars !== null && project.stars > 0 && (
          <span className="inline-flex items-center gap-1.5 text-foreground">
            <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
            {project.stars}
          </span>
        )}
        {project.forks !== null && project.forks > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <GitFork className="h-3.5 w-3.5" />
            {project.forks}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const isFeatured = project.featured;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary/40",
        isFeatured && "lg:flex-row"
      )}
    >
      {!project.imageUrl && (
        <RepoPanel
          project={project}
          className={cn(
            "border-b border-border",
            isFeatured
              ? "min-h-52 lg:w-1/2 lg:border-b-0 lg:border-r"
              : // Match the screenshot cards so titles line up across the row.
                "aspect-video"
          )}
        />
      )}

      {project.imageUrl && (
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            isFeatured ? "aspect-video lg:aspect-auto lg:w-1/2" : "aspect-video"
          )}
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} interface`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className="object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"
          />

          <span className="absolute left-4 top-4 rounded-md border border-border-strong/60 bg-background/80 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            {project.domain}
          </span>

          {isFeatured && (
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/15 px-2.5 py-1 font-mono text-xs text-primary backdrop-blur-sm">
              <Star className="h-3 w-3 fill-current" />
              featured
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "flex flex-1 flex-col p-6",
          isFeatured && "lg:justify-center lg:p-8"
        )}
      >
        <p className="font-mono text-xs text-primary">{project.tagline}</p>
        <h3
          className={cn(
            "mt-2 font-semibold text-foreground",
            isFeatured ? "text-2xl md:text-3xl" : "text-lg"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border-strong/50 bg-muted px-2 py-0.5 font-mono text-xs text-secondary-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-4 pt-1">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 py-2 pr-3 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              source
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 py-2 pr-3 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              live
            </Link>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="font-mono text-xs text-muted-foreground/60">
              private
            </span>
          )}

          {/* Star count earns its place only once the repo has traction. */}
          {project.imageUrl && project.stars !== null && project.stars > 0 && (
            <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
              {project.stars}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.domain)))],
    []
  );

  const visible = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.domain === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          command="git log --oneline ./projects"
          title="Selected work"
          lead="Open-source security tooling first — bug-reaper is used by 65+ people on GitHub — followed by the applications and client work that got me here."
        />

        {/* ---------- Filter ---------- */}
        <div
          role="tablist"
          aria-label="Filter projects by domain"
          className="mb-10 flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === "All"
                ? projects.length
                : projects.filter((p) => p.domain === filter).length;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "cursor-pointer rounded-lg border px-4 py-2 font-mono text-sm transition-all duration-200",
                  isActive
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground"
                )}
              >
                {filter}
                <span className="ml-2 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* ---------- Grid ---------- */}
        <motion.div
          layout={!prefersReducedMotion}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "h-full",
                  project.featured && "md:col-span-2 xl:col-span-3"
                )}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
