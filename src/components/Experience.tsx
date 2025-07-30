import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Mediconnect",
      period: "2023 - 2024",
      description: [
        "Developed robust and scalable backend systems using Java and Spring Boot framework.",
        "Designed and implemented RESTful APIs to facilitate communication between frontend and backend components.",
        "Integrated third-party services and libraries to enhance application functionality and performance.",
        "Implemented database schemas and queries using SQL and ORM frameworks like Hibernate.",
        "Collaborated with frontend developers and QA engineers to ensure seamless integration and efficient testing of backend functionalities.",
      ],
      technologies: [ "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    },
    {
      title: "Mobile Developer",
      company: "Aidly",
      period: "2024 - 2025",
      description: [
        "Developed cross-platform mobile applications for smart agriculture IoT systems",
        "Designed user-friendly interfaces for real-time environmental data visualization",
        "Integrated mobile apps with Bluetooth and Wi-Fi enabled IoT devices",
        "Collaborated with embedded engineers to ensure seamless hardware-software interaction"
      ],
      technologies: ["React Native", "TypeScript", "Firebase", "Bluetooth", "Wi-Fi", "MQTT", "Arduino", "ESP32"]
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
    <section id="experience" className="py-20 bg-background">
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