import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { scaleOnHover, transition } from "@/lib/motion";

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
  compact?: boolean;
}

export function ProjectCard({ project, index = 0, onClick, compact }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...transition, delay: index * 0.06 }}
      whileHover={scaleOnHover.hover}
      whileTap={scaleOnHover.tap}
    >
      <Card
        className={cn(
          "group overflow-hidden bg-card border border-border rounded-xl",
          "hover:border-primary/30 hover:shadow-lg transition-all duration-300",
          "cursor-pointer h-full flex flex-col"
        )}
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge
            className="absolute top-3 left-3 bg-primary/90 text-primary-foreground border-0 text-xs font-medium"
            variant="secondary"
          >
            {project.category}
          </Badge>
        </div>
        <div className={cn("flex flex-col flex-1", compact ? "p-4" : "p-5")}>
          <h3 className="font-semibold text-foreground font-sans mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p
            className={cn(
              "text-muted-foreground text-sm flex-1",
              compact ? "line-clamp-2" : "line-clamp-3"
            )}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
            {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal bg-muted/80 text-muted-foreground border-0"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > (compact ? 3 : 4) && (
              <Badge variant="secondary" className="text-xs bg-muted/80 border-0">
                +{project.technologies.length - (compact ? 3 : 4)}
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1"
            >
              <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                <Github size={16} aria-hidden />
                Code
              </span>
            </a>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1"
              >
                <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  <ExternalLink size={16} aria-hidden />
                  Live
                </span>
              </a>
            )}
            {project.live === "#" && onClick && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View details
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
