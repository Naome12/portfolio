import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { ProjectCard, type ProjectItem } from "./ProjectCard";
import { AppDialog } from "@/components/ui/dialog";
import { fadeInUp, defaultViewport, transition, staggerContainer } from "@/lib/motion";

interface ProjectWithFeatured extends ProjectItem {
  featured?: boolean;
}

const projects: ProjectWithFeatured[] = [
  {
    title: "Parking Management System",
    description:
      "Embedded system for automated vehicle parking, monitoring, and space allocation.",
    technologies: ["C++", "Arduino", "Raspberry Pi", "MQTT", "React", "Python"],
    category: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    github: "https://github.com/Naome12/PMS",
    live: "#",
    featured: true,
  },
  {
    title: "Mediconnect",
    description:
      "Healthcare application with Flutter frontend, Node.js backend, and Firebase for real-time data synchronization and authentication.",
    technologies: ["Flutter", "Node.js", "Firebase"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    github: "https://github.com/Naome12/Mediconnect",
    live: "#",
    featured: true,
  },
  {
    title: "Aidly",
    description:
      "Mobile application with voice features, accessible UI, and speech-to-text and text-to-speech integration.",
    technologies: ["React Native", "Expo", "NativeWind", "Tailwind CSS", "Voice API"],
    category: "Full Stack",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F160b886f4f6049a7a81b58c84259efec%2Fe744a9975ee84062a9ab44b0f0e41fef?format=webp&width=800",
    github: "https://github.com/Naome12/Aidly",
    live: "#",
    featured: true,
  },
];

const allProjects = projects;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-background" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.h2
              id="projects-heading"
              variants={fadeInUp}
              transition={transition}
              className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4"
            >
              Selected Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={transition}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A selection of my work across full stack development and embedded systems.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
          >
            <a
              href="https://github.com/Naome12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-border hover:bg-accent font-medium"
              >
                <Github className="mr-2" size={18} aria-hidden />
                View all on GitHub
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <AppDialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
          <div className="rounded-2xl overflow-hidden max-w-2xl max-h-[90vh] overflow-y-auto -m-6">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-primary/90 text-primary-foreground border-0">
                  {selectedProject.category}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted text-muted-foreground border-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full rounded-lg" variant="outline">
                    <Github className="mr-2" size={18} /> Code
                  </Button>
                </a>
                {selectedProject.live !== "#" && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="mr-2" size={18} /> Live
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </AppDialog>
    </section>
  );
};

export default Projects;
