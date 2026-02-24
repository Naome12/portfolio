import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 dark:bg-background/60 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="text-lg font-bold text-foreground font-serif hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Naome.dev
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative text-sm font-medium py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/export?format=pdf"
              download
            >
              <Button
                variant="outline"
                size="sm"
                className="border-border hover:bg-accent rounded-lg"
              >
                <Download className="w-4 h-4 mr-2" aria-hidden />
                Resume
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium"
            >
              Let&apos;s Talk
            </Button>
          </div>

          <>
            <Button
              onClick={() => setOpen(true)}
              className="md:hidden"
              variant="ghost"
              size="icon"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Sheet open={open} onClose={() => setOpen(false)}>
              <div className="w-80 max-w-[85vw] bg-background border border-border rounded-lg shadow-xl p-6 flex flex-col">
              <span className="text-lg font-bold font-serif text-foreground mb-8">
                Naome.dev
              </span>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-left py-3 px-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                      activeSection === item.href.slice(1) && "text-primary font-medium"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-border space-y-3">
                <ThemeToggle />
                <a
                  href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/export?format=pdf"
                  download
                  className="block"
                >
                  <Button variant="outline" className="w-full rounded-lg">
                    <Download className="w-4 h-4 mr-2" /> Resume
                  </Button>
                </a>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                  onClick={() => scrollToSection("#contact")}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
            </Sheet>
          </>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
