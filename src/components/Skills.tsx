import { Code2, Database, Server, Cpu, Wrench } from "lucide-react";
import { Section, SectionHeader, AnimatedGrid, AnimatedItem } from "@/components/layout/Section";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "FastAPI", "Django", "REST APIs"],
  },
  {
    title: "Data & cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Redis"],
  },
  {
    title: "Mobile & AI",
    icon: Cpu,
    skills: ["React Native", "Expo", "LangChain", "LLMs", "RAG"],
  },
  {
    title: "Workflow",
    icon: Wrench,
    skills: ["Git", "CI/CD", "Agile", "Testing", "Linux"],
  },
];

const Skills = () => (
  <Section id="skills">
    <SectionHeader
      label="Skills"
      title="Tools I use to ship"
      description="A focused stack for building reliable products — from UI to APIs to deployment."
    />

    <AnimatedGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {skillCategories.map((category) => (
        <AnimatedItem key={category.title}>
          <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <category.icon className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/80 text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedGrid>
  </Section>
);

export default Skills;
