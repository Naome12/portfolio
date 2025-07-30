import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, Database, Server, Smartphone, Shield, Cpu, 
  Globe, GitBranch, Terminal, Wrench, Cloud, Settings 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-tech-blue",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-tech-purple",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Django/Flask", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "text-tech-cyan",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      color: "text-orange-400",
      skills: [
        { name: "C/C++", level: 88 },
        { name: "Arduino", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "ESP32/ESP8266", level: 80 },
        { name: "RTOS", level: 75 },
        { name: "IoT Protocols", level: 82 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "text-green-400",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Testing", level: 82 },
        { name: "Monitoring", level: 78 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];



  return (
    <section id="skills" className="py-20 bg-secondary/5">
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

          {/* Technology Stack Visualization */}
          <Card className="p-8 bg-card border border-primary/10 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "React", "Node.js", "Python", "PostgreSQL", "Arduino", "AWS",
                "Docker", "Git", "Linux", "MongoDB", "Express", "TypeScript",
                "C++", "Firebase", "Redis", "Kubernetes", "Jenkins", "Grafana"
              ].map((tech, index) => (
                <Badge 
                  key={index} 
                  className="p-3 text-center bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;