import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Naome12", label: "GitHub" },
    { icon: Mail, href: "mailto:tuyishimenaome27@gmail.com", label: "Email", isEmail: true }
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
    <footer className="bg-background border-t border-border" aria-label="Footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} Tuyishime Naome</span>
            <nav className="flex gap-6" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Naome12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("tuyishimenaome27@gmail.com");
                toast({ title: "Copied!", description: "Email copied to clipboard." });
              }}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Copy email"
            >
              <Mail size={18} />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
