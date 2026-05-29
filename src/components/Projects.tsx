import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ProjectCard, type ProjectItem } from "./ProjectCard";
import { AppDialog } from "@/components/ui/dialog";
import { Section, SectionHeader, AnimatedGrid } from "@/components/layout/Section";
import { GITHUB_URL } from "@/lib/constants";
import { defaultViewport, transition } from "@/lib/motion";

const projects: ProjectItem[] = [
  {
    title: "Parking Management System",
    description:
      "Embedded system for automated vehicle parking, monitoring, and space allocation with real-time dashboards.",
    technologies: ["C++", "Arduino", "Raspberry Pi", "MQTT", "React", "Python"],
    category: "Embedded",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    github: "https://github.com/Naome12/PMS",
    live: "#",
  },
  {
    title: "Mediconnect",
    description:
      "Healthcare platform with Flutter mobile app, Node.js backend, and Firebase for sync and authentication.",
    technologies: ["Flutter", "Node.js", "Firebase"],
    category: "Full stack",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    github: "https://github.com/Naome12/Mediconnect",
    live: "#",
  },
  {
    title: "Aidly",
    description:
      "Accessible mobile app with voice input/output, built with React Native and modern UI tooling.",
    technologies: ["React Native", "Expo", "NativeWind", "Voice API"],
    category: "Mobile",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F160b886f4f6049a7a81b58c84259efec%2Fe744a9975ee84062a9ab44b0f0e41fef?format=webp&width=800",
    github: "https://github.com/Naome12/Aidly",
    live: "#",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <Section id="projects" variant="muted">
      <SectionHeader
        label="Work"
        title="Selected projects"
        description="Real builds across embedded systems, healthcare, and mobile — with code you can explore on GitHub."
      />

      <AnimatedGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onClick={() => setSelected(project)}
          />
        ))}
      </AnimatedGrid>

      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={transition}
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:bg-accent transition-colors"
        >
          <Github className="w-5 h-5" aria-hidden />
          More on GitHub
        </a>
      </motion.div>

      <AppDialog open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="-m-6 max-h-[85vh] overflow-y-auto rounded-2xl">
            <div className="relative aspect-video">
              <img src={selected.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-primary mb-1">{selected.category}</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{selected.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-lg bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium"
              >
                <Github className="w-4 h-4" /> View repository
              </a>
            </div>
          </div>
        )}
      </AppDialog>
    </Section>
  );
};

export default Projects;
