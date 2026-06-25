import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { ProjectCard, type ProjectItem } from "./ProjectCard";
import { AppDialog } from "@/components/ui/dialog";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { GITHUB_URL } from "@/lib/constants";
import koziImage from "@/assets/kozi.png";

const projects: ProjectItem[] = [
  {
    title: "Kozi AI Agent",
    description:
      "A multi-agent system that routes employers and jobseekers, powered by LangChain and a dual-source RAG pipeline.",
    technologies: ["LangChain", "RAG", "Node.js", "TypeScript", "MySQL"],
    category: "AI Agent",
    image: koziImage,
    github: "https://github.com/Naome12",
    live: "#",
  },
  {
    title: "Aidly",
    description:
      "An accessible mobile app with speech-to-text and text-to-speech, built with React Native.",
    technologies: ["React Native", "Expo", "Voice API"],
    category: "Mobile & AI",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F160b886f4f6049a7a81b58c84259efec%2Fe744a9975ee84062a9ab44b0f0e41fef?format=webp&width=800",
    github: "https://github.com/Naome12/Aidly",
    live: "#",
  },
  {
    title: "Mediconnect",
    description:
      "A healthcare platform with scalable REST APIs and data models tuned for web and mobile.",
    technologies: ["Spring Boot", "REST", "Java", "MySQL"],
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    github: "https://github.com/Naome12/Mediconnect",
    live: "#",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        label="Work"
        title="Selected projects"
        description="A few things I've built — explore the code on GitHub."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08} className="[perspective:1200px]">
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
        >
          <Github className="h-5 w-5" aria-hidden />
          See more on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </a>
      </Reveal>

      <AppDialog open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="-m-6 max-h-[85vh] overflow-y-auto rounded-2xl">
            <div className="relative aspect-video">
              <img src={selected.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-foreground backdrop-blur-sm">
                {selected.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-foreground">{selected.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-muted px-3 py-1 font-mono text-sm text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <Github className="h-4 w-4" /> View repository
                </a>
                {selected.live !== "#" && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </AppDialog>
    </Section>
  );
};

export default Projects;
