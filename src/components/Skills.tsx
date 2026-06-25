import { Code2, Server, Database, Cpu, Wrench } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Marquee } from "@/components/primitives/Marquee";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "FastAPI", "Django", "REST"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Redis"],
  },
  {
    title: "Mobile & AI",
    icon: Cpu,
    skills: ["React Native", "Expo", "Flutter", "LangChain", "RAG", "LLMs"],
  },
  {
    title: "Workflow",
    icon: Wrench,
    skills: ["Git", "CI/CD", "Agile", "Testing", "Linux"],
  },
];

const marqueeTech = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "React Native",
  "Flutter",
  "LangChain",
  "Docker",
  "AWS",
  "Tailwind",
  "MongoDB",
  "Redis",
  "Git",
];

const Pill = ({ label }: { label: string }) => (
  <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-sm text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
    {label}
  </span>
);

const Skills = () => (
  <Section id="skills" variant="muted">
    <SectionHeader
      index="02"
      label="Stack"
      title="The tools I build with"
      description="A focused stack for building software that lasts."
    />

    <Reveal className="mb-14 space-y-4">
      <Marquee duration={40}>
        {marqueeTech.map((t) => (
          <Pill key={t} label={t} />
        ))}
      </Marquee>
      <Marquee duration={48} reverse>
        {[...marqueeTech].reverse().map((t) => (
          <Pill key={t} label={t} />
        ))}
      </Marquee>
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, i) => (
        <Reveal key={cat.title} delay={i * 0.06}>
          <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-card">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <cat.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
