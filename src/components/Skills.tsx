import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Code2, Database, Server, Smartphone, Cpu,
  Terminal, Wrench
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-tech-blue",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React/Next.js", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-tech-purple",
      skills: [
        { name: "REST APIs", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Django/FastAPI", level: 85 },
        { name: "Java/Spring Boot", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "text-tech-cyan",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "Mobile & AI Development",
      icon: Cpu,
      color: "text-orange-400",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Expo", level: 85 },
        { name: "LLM Integration", level: 82 },
        { name: "LangChain", level: 80 },
        { name: "Speech APIs", level: 80 },
        { name: "RAG Systems", level: 78 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "text-green-400",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Linux", level: 85 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 82 },
        { name: "CI/CD", level: 80 },
        { name: "Monitoring", level: 78 }
      ]
    }
  ];



  return (
    <section id="skills" className="py-20 bg-secondary/5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills across different domains of software development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="p-6 bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-primary/10 rounded-lg ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-secondary"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technical Stack */}
          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            {/* Programming Languages */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Terminal className="w-6 h-6 text-primary" />
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "JavaScript", level: 90, color: "bg-yellow-500" },
                  { name: "TypeScript", level: 85, color: "bg-blue-500" },
                  { name: "Python", level: 85, color: "bg-green-500" },
                  { name: "C/C++", level: 88, color: "bg-purple-500" },
                  { name: "Java", level: 75, color: "bg-red-500" },
                  { name: "Go", level: 70, color: "bg-cyan-500" }
                ].map((lang, index) => (
                  <div key={index} className="p-4 bg-card border border-primary/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${lang.color}`}
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

    
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
