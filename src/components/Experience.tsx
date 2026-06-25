import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";

const experiences = [
  {
    title: "Backend Developer · Freelance",
    company: "EdgeReach",
    location: "Remote",
    period: "Feb 2026 – May 2026",
    points: [
      "Built and maintained production backend APIs and services.",
      "Added tests, tuned queries, and strengthened auth and stability.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Testing"],
  },
  {
    title: "AI Developer Intern",
    company: "Land O'clock",
    location: "Kigali, Rwanda",
    period: "Sep 2025 – Oct 2025",
    points: [
      "Built backend services and data pipelines for AI products.",
      "Integrated RAG and LLMs, and containerized with Docker.",
    ],
    tech: ["Node.js", "Python", "RAG", "LLMs", "Docker"],
  },
  {
    title: "Software Developer Intern",
    company: "MIGEPROF",
    location: "Kigali, Rwanda",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Built web apps, dashboards, and reporting tools.",
      "Cleaned data and supported testing and documentation.",
    ],
    tech: ["React", "Dashboards", "Testing"],
  },
];

const education = {
  degree: "Software Programming & Embedded Systems",
  school: "Rwanda Coding Academy",
  location: "Kigali, Rwanda",
  period: "Sep 2022 – Jul 2025",
  highlights: [
    "Full-stack & embedded systems foundation",
    "Speaks Kinyarwanda, English, French & Swahili",
  ],
};

const Experience = () => (
  <Section id="experience" variant="muted">
    <SectionHeader
      index="04"
      label="Experience"
      title="Where I've grown"
      description="A short path through backend, AI, and government tech."
    />

    <div className="grid gap-12 lg:grid-cols-5 lg:gap-12">
      {/* Timeline */}
      <div className="lg:col-span-3">
        <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <Briefcase className="h-5 w-5 text-primary" aria-hidden />
          Work
        </h3>
        <div className="relative space-y-5 pl-7 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-7 top-2 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary ring-4 ring-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                </span>
                <div className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/30 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-primary">
                    {exp.company}
                    <span className="inline-flex items-center gap-1 text-xs font-normal text-muted-foreground">
                      <MapPin className="h-3 w-3" aria-hidden /> {exp.location}
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="lg:col-span-2">
        <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
          Education
        </h3>
        <Reveal>
          <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7">
            <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
            <h4 className="mt-2 font-display text-xl font-semibold text-foreground">
              {education.degree}
            </h4>
            <p className="mt-1 text-sm font-medium text-primary">{education.school}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" aria-hidden /> {education.location}
            </p>
            <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
              {education.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default Experience;
