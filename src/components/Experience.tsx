import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { Section, SectionHeader, AnimatedGrid, AnimatedItem } from "@/components/layout/Section";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "MIGEPROF",
    location: "Kigali, Rwanda",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Built and maintained government digital services and internal tools.",
      "Integrated frontend and backend for ministry platforms.",
      "Contributed to requirements, documentation, and QA.",
    ],
    tech: ["Web Development", "System Integration", "Testing"],
  },
  {
    title: "AI Engineer",
    company: "LandO'clock",
    location: "Remote",
    period: "Sep 2025 – Oct 2025",
    points: [
      "Designed AI agents with LangChain, ReAct, RAG, and LLMs.",
      "Built MCP servers, APIs, and data pipelines for production.",
    ],
    tech: ["LangChain", "RAG", "LLMs", "Python", "MCP"],
  },
];

const education = {
  degree: "High School Diploma — Science",
  school: "Rwanda Coding Academy",
  location: "Kigali, Rwanda",
  period: "2022 – 2025",
  highlights: ["Software programming & embedded systems", "STEM club researcher"],
};

const Experience = () => (
  <Section id="experience">
    <SectionHeader
      label="Experience"
      title="Where I've grown"
      description="Hands-on roles in government tech, AI engineering, and a strong foundation in software at Rwanda Coding Academy."
    />

    <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
      <div className="lg:col-span-3 space-y-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Building className="w-5 h-5 text-primary" aria-hidden />
          Experience
        </h3>
        <AnimatedGrid className="space-y-5">
          {experiences.map((exp) => (
            <AnimatedItem key={exp.company + exp.period}>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/25 transition-colors">
                  <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-primary font-medium mt-0.5">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGrid>
      </div>

      <div className="lg:col-span-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <GraduationCap className="w-5 h-5 text-primary" aria-hidden />
          Education
        </h3>
        <AnimatedItem>
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border h-full">
            <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
            <p className="text-primary font-medium mt-1">{education.school}</p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" aria-hidden />
                {education.period}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" aria-hidden />
                {education.location}
              </span>
            </div>
            <ul className="mt-5 space-y-2">
              {education.highlights.map((h) => (
                <li key={h} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedItem>
      </div>
    </div>
  </Section>
);

export default Experience;
