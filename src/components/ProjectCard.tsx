import { Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/primitives/TiltCard";

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <TiltCard className="group h-full" max={6}>
      <div
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60",
          "transition-colors duration-300 hover:border-primary/40 hover:bg-card",
          onClick &&
            "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur-sm">
            {project.category}
          </span>
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden />
              Code
            </a>
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
              Details
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
