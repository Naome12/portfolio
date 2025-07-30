import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Full-stack e-commerce solution with React Native frontend, Node.js backend, and secure payment integration. Features user authentication, product management, and real-time inventory tracking.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Stripe", "Expo"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/Naome12/e-commerce",
      live: "#",
      featured: true
    },
    {
      title: "Parking Management System",
      description: "Embedded system for automated vehicle parking, monitoring, and space allocation",
      technologies: ["C++", "Arduino", "Raspberry Pi", "MQTT", "React", "Python"],
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "https://github.com/Naome12/PMS",
      live: "#",
      featured: true
    },
    {
      title: "Booking System",
      description: "Platform for managing hotel room bookings, schedules, and guest reservations.",
      technologies: ["Python", "Nmap", "Flask", "SQLite", "Metasploit", "Wireshark"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1649433391719-2e784576d044?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/Naome12/Booking-app",
      live: "#",
      featured: true
    },
    {
      title: "Social Media Platform",
      description: "A platform that connects people, enabling content sharing, messaging, and community engagement through posts, comments, and interactions.",
      technologies: ["React", "Socket.io", "Django", "Postgres", "JWT", "Cloudinary"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/Naome12/Social_Media_Django",
      live: "#",
      featured: false
    },

  ];

  const categories = ["All", "Full Stack", "Embedded Systems"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work across full stack development, embedded systems, and cybersecurity projects.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary text-primary-foreground" : "border-primary/20 text-primary hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card key={index} className="group overflow-hidden bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="group bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="flex-1 text-primary hover:bg-primary/10">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/Naome12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Github className="mr-2" size={18} />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
