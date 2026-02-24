import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { fadeInUp, staggerContainer, defaultViewport, transition } from "@/lib/motion";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "MIGEPROF, Kigali",
    period: "August 2025 – November 2025",
    description: [
      "Contributed to government digital services and internal tools.",
      "Integrated frontend and backend for ministry systems.",
      "Requirements gathering, documentation, and testing.",
    ],
    technologies: ["Web Development", "System Integration", "Testing"],
  },
  {
    title: "AI Engineer",
    company: "LandO'clock",
    period: "September – October 2025",
    description: [
      "Designed AI agents with LangChain, ReAct, RAG, and LLMs.",
      "Built backend systems: MCP servers, APIs, data pipelines.",
    ],
    technologies: ["LangChain", "ReAct", "RAG", "LLMs", "MCP", "Python"],
  },
];

const education = [
  {
    degree: "High School Diploma — Science",
    institution: "Rwanda Coding Academy",
    location: "Kigali, Rwanda",
    period: "2022 – 2025",
    details: ["Software Programming & Embedded Systems", "STEM club Researcher"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-muted/30" aria-labelledby="experience-heading">
      <div className="section-divider my-0" />
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
              id="experience-heading"
              variants={fadeInUp}
              transition={transition}
              className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4"
            >
              Experience & Education
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={transition}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Professional journey and education in software development.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" aria-hidden />
                Work
              </h3>
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {experiences.map((exp, index) => (
                  <motion.div key={exp.company + exp.period} variants={fadeInUp} transition={transition}>
                    <Card className="p-6 bg-card border border-border rounded-xl">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" aria-hidden />
                          {exp.period}
                        </div>
                        <ul className="space-y-1.5">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs font-normal bg-muted/80 border-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" aria-hidden />
                Education
              </h3>
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {education.map((edu, index) => (
                  <motion.div key={edu.institution} variants={fadeInUp} transition={transition}>
                    <Card className="p-6 bg-card border border-border rounded-xl">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" aria-hidden />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" aria-hidden />
                            {edu.location}
                          </span>
                        </div>
                        <ul className="space-y-1.5 pt-1">
                          {edu.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
