import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";

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
  index?: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...transition, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
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
          "group h-full flex flex-col rounded-2xl overflow-hidden",
          "bg-card border border-border",
          "hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300",
          onClick && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-0 backdrop-blur-sm text-xs font-medium">
            {project.category}
          </Badge>
          <span className="absolute top-3 right-3 p-2 rounded-full bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </span>
        </div>

        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground flex-1 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="flex gap-2 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden />
              Code
            </a>
            {project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden />
                Live
              </a>
            ) : (
              onClick && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Details
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
