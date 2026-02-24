import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Server, Cpu, Wrench } from "lucide-react";
import { fadeInUp, staggerContainer, defaultViewport, transition } from "@/lib/motion";

const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["HTML/CSS", "React", "Next.js", "Tailwind", "TypeScript", "Vue.js"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["REST APIs", "Express", "Node.js", "Python", "Django", "FastAPI"],
    },
    {
      title: "Data & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Redis"],
    },
    {
      title: "Mobile & AI",
      icon: Cpu,
      skills: ["React Native", "Expo", "LangChain", "LLMs", "RAG"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "Linux", "Agile", "CI/CD", "Testing"],
    },
];

const Skills = () => (
    <section id="skills" className="py-20 lg:py-28 bg-background" aria-labelledby="skills-heading">
      <div className="section-divider my-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            <motion.h2 id="skills-heading" variants={fadeInUp} transition={transition} className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4">
              Skills & Tools
            </motion.h2>
            <motion.p variants={fadeInUp} transition={transition} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies I work with to ship products.
            </motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={fadeInUp} transition={transition}>
                <Card className="p-6 bg-card border border-border rounded-xl h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-md bg-muted/80 text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

export default Skills;
