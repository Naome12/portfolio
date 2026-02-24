import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, defaultViewport, transition } from "@/lib/motion";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "15+" },
    { icon: Award, label: "Experience", value: "3+ yrs" },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Full Stack",
      description: "React, Node.js, Python, FastAPI, PostgreSQL, TypeScript.",
      skills: ["React", "Node.js", "Python", "PostgreSQL", "TypeScript", "FastAPI"],
    },
    {
      icon: Smartphone,
      title: "Mobile & AI",
      description: "React Native, Expo, LangChain, LLMs, RAG, Voice APIs.",
      skills: ["React Native", "Expo", "LangChain", "LLMs", "RAG", "Voice APIs"],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30" aria-labelledby="about-heading">
      <div className="section-divider my-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.h2 id="about-heading" variants={fadeInUp} transition={transition} className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4">
              About Me
            </motion.h2>
            <motion.p variants={fadeInUp} transition={transition} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Developer focused on building solutions that bridge technology and real-world impact.
            </motion.p>
            <motion.div variants={fadeInUp} transition={transition}>
              <Button variant="outline" size="lg" className="rounded-lg border-border" asChild>
                <a href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/preview" target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4 mb-14" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} transition={transition}>
                <Card className="p-6 text-center bg-card border border-border rounded-xl">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            <motion.div className="space-y-4" variants={fadeInUp} transition={transition}>
              <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m Tuyishime Naome, a full stack developer focused on web, mobile, and AI. I build scalable applications and user-centric products, and enjoy open source and new technologies.
              </p>
            </motion.div>
            <div className="space-y-6">
              {expertise.map((area) => (
                <motion.div key={area.title} variants={fadeInUp} transition={transition}>
                  <Card className="p-6 bg-card border border-border rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-lg">
                        <area.icon className="w-5 h-5 text-primary" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{area.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {area.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs font-normal bg-muted/80 text-muted-foreground border-0">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
