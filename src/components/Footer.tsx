import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/naome-tuyishime", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/naome-tuyishime", label: "LinkedIn" },
    { icon: Mail, href: "mailto:tuyishimenaome27@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tuyishime Naome
              </h3>
              <p className="text-muted-foreground max-w-md">
                Full Stack Developer passionate about creating innovative solutions through 
                web development, embedded systems, and cybersecurity.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Kigali, Rwanda</p>
                <a 
                  href="mailto:naome.tuyishime@gmail.com"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  tuyishimenaome27@gmail.com
                </a>
                <a 
                  href="tel:+250793099772"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  +250 793 099 772
                </a>
              </div>
              
              {/* Availability Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-sm">Available for projects</span>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-border" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Tuyishime Naome</span>
           
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Built with React + Vite + Tailwind CSS
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;