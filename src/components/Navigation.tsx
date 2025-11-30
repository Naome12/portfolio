import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => {
    const isActive = activeSection === href.slice(1) || (href === "#home" && activeSection === "");
    
    return (
      <button
        onClick={() => scrollToSection(href)}
        className={`
          relative px-3 py-2 text-sm font-medium transition-all duration-300
          ${mobile ? "w-full text-left" : ""}
          ${isActive 
            ? "text-primary" 
            : "text-muted-foreground hover:text-foreground"
          }
          ${!mobile ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300" : ""}
          ${isActive && !mobile ? "after:w-full" : "after:w-0"}
          hover:after:w-full
        `}
      >
        {label}
      </button>
    );
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-transparent"
      }
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Naome.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/export?format=pdf" download>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onClose={() => setOpen(false)}>
            <Button onClick={() => setOpen(true)} className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="w-80 bg-background border-l border-border">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Naome.dev
                  </span>
                  <ThemeToggle />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 py-8">
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <NavLink 
                        key={item.href} 
                        href={item.href} 
                        label={item.label} 
                        mobile 
                      />
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="space-y-4 py-6 border-t border-border">
                  <a href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/export?format=pdf" download className="block">
                    <Button
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-primary/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </a>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
