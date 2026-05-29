import { Code, Smartphone, Award, Download } from "lucide-react";
import { Section, SectionHeader, AnimatedGrid, AnimatedItem } from "@/components/layout/Section";
import { CV_URL } from "@/lib/constants";

const stats = [
  { icon: Code, label: "Projects shipped", value: "15+" },
  { icon: Award, label: "Years building", value: "3+" },
];

const expertise = [
  {
    icon: Code,
    title: "Full stack engineering",
    description:
      "End-to-end web apps with React, Node.js, Python, and PostgreSQL — from API design to polished UI.",
    skills: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile & intelligent systems",
    description:
      "Cross-platform apps with React Native and production AI features using LangChain, RAG, and voice APIs.",
    skills: ["React Native", "Expo", "LangChain", "LLMs", "RAG"],
  },
];

const About = () => (
  <Section id="about" variant="muted">
    <SectionHeader
      label="About"
      title="Building software that matters"
      description="I'm a developer who cares about clean architecture, thoughtful UX, and shipping work that holds up in the real world."
    />

    <AnimatedGrid className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-14">
      {stats.map((stat) => (
        <AnimatedItem key={stat.label}>
          <div className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300">
            <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" aria-hidden />
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedGrid>

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <AnimatedItem>
        <h3 className="text-xl font-semibold text-foreground mb-4">Who I am</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I&apos;m <strong className="text-foreground font-medium">Tuyishime Naome</strong>, a
          full stack developer based in Rwanda. I work across frontend, backend, mobile, and AI —
          always with an eye on performance, accessibility, and maintainable code.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Whether it&apos;s a government platform, a healthcare app, or an AI agent pipeline, I
          focus on clarity, collaboration, and delivering value on deadline.
        </p>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-medium text-sm hover:bg-accent transition-colors"
        >
          <Download className="w-4 h-4" aria-hidden />
          View resume
        </a>
      </AnimatedItem>

      <AnimatedGrid className="space-y-4">
        {expertise.map((area) => (
          <AnimatedItem key={area.title}>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/25 transition-all duration-300">
              <div className="flex gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10">
                  <area.icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </div>
  </Section>
);

export default About;
