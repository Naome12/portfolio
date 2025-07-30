import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Cpu, Globe, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "20+" },
    { icon: Award, label: "Years Experience", value: "3+" },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with modern technologies like React, Node.js, Python, and databases.",
      skills: [
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "TypeScript",
        "Next.js",
      ],
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description:
        "Designing and programming embedded systems for IoT devices, microcontrollers, and real-time applications.",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "RTOS", "IoT", "Sensors"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer dedicated to creating innovative solutions
              that bridge the gap between technology and real-world problems.
            </p>
          </div>

          <div className="text-center mb-8 animate-fade-in">
            <a href="/Naome_Tuyishime_CV.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 mt-4"
              >
                Download CV
              </Button>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Tuyishime Naome, a dedicated full stack developer with a
                  passion for technology that spans across web development,
                  embedded systems, and cybersecurity. My journey began with a
                  curiosity about how things work and has evolved into a
                  comprehensive skill set that allows me to tackle complex
                  challenges.
                </p>
                <p>
                  With experience in building scalable web applications,
                  designing embedded systems for IoT devices, and implementing
                  robust security measures, I bring a unique perspective to
                  every project. I believe in writing clean, efficient code and
                  creating solutions that are not just functional but also
                  secure and user-friendly.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and sharing knowledge
                  with the developer community. I'm always excited about the
                  next challenge and opportunity to learn something new.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground">
                Expertise Areas
              </h3>
              <div className="space-y-6">
                {expertise.map((area, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <area.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {area.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 text-sm">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
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

export default About;
