import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-glow-blue animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Tuyishime Naome" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tuyishime Naome
              </h1>
              <h2 className="text-2xl lg:text-3xl text-tech-blue font-semibold">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about creating innovative solutions through full stack development, 
                embedded systems engineering, and cybersecurity. Building secure, scalable 
                applications that make a difference.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["Full Stack", "Embedded Systems", "Cybersecurity", "React", "Node.js", "Python", "IoT"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 justify-center lg:justify-start text-muted-foreground">
              <MapPin size={18} />
              <span>Rwanda</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2" size={18} />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Mail size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-tech-purple/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-tech-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;