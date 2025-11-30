import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const experiences = [
    {
      title: "Mobile Developer & AI Engineer",
      company: "Aidly",
      period: "March 2024 – Present",
      description: [
        "Built Aidly mobile application using React Native and Expo.",
        "Designed reusable UI components with Tailwind CSS (via NativeWind) to match custom mockups.",
        "Integrated voice features (speech-to-text and text-to-speech) to support accessibility and enhance user interaction."
      ],
      technologies: ["React Native", "Expo", "Tailwind CSS", "NativeWind", "Voice API", "JavaScript"],
    },
    {
      title: "Backend Web Developer",
      company: "Mediconnect",
      period: "November 2023 – March 2025",
      description: [
        "Developed robust and scalable backend systems using Java and the Spring Boot framework.",
        "Designed and implemented RESTful APIs to facilitate communication between frontend and backend components.",
        "Integrated third-party services and libraries to enhance application functionality and performance.",
        "Implemented database schemas and queries using SQL and ORM frameworks like Hibernate.",
        "Collaborated with frontend developers and QA engineers to ensure seamless integration and efficient testing of backend functionalities."
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Hibernate", "SQL"]
    },
    {
      title: "Software Developer Intern",
      company: "MIGEPROF, Kigali",
      period: "August 2025–November 2025",
      description: [
        "Contributed to the development of government digital services by assisting in building web applications and internal tools.",
        "Collaborated with senior developers to integrate frontend and backend components for ministry systems.",
        "Participated in requirements gathering and system documentation to align technical work with institutional needs.",
        "Assisted in testing and debugging applications to ensure reliability and compliance with organizational standards."
      ],
      technologies: ["Web Development", "System Integration", "Testing", "Documentation"]
    },
    {
      title: "AI Engineer",
      company: "LandO'clock",
      period: "September 1, 2025 - October 31, 2025",
      description: [
        "Designed and deployed intelligent AI agents using LangChain, ReAct, RAG, and LLMs for real-world applications.",
        "Built and optimized scalable backend systems (MCP servers, APIs, data pipelines) ensuring reliable model serving and integration.",
        "Bridged AI research with production environments, retrieval systems, and agent-based reasoning."
      ],
      technologies: ["LangChain", "ReAct", "RAG", "LLMs", "MCP Servers", "APIs", "Python"]
    }
  ];

  const education = [

    {
      degree: "High School Diploma - Science",
      institution: "Rwanda Coding Academy",
      location: "Kigali, Rwanda",
      period: "2022 - 2025",
      details: [
        "Software Programming and Embedded Systems",
        "STEM club Researcher",
        "Public Speaking Club Member"
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and educational background in technology and software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                      
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <ul className="space-y-2">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                    
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
