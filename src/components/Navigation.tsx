import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSectionNav } from "@/hooks/use-section-nav";
import { NAV_ITEMS, CV_URL } from "@/lib/constants";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { go, isDesktop } = useSectionNav();
  const location = useLocation();
  const activeSection = useActiveSection(NAV_ITEMS.map((i) => i.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (target: string) => {
    go(target);
    setMobileOpen(false);
  };

  const isItemActive = (item: (typeof NAV_ITEMS)[number]) =>
    isDesktop
      ? location.pathname === item.path
      : activeSection === item.href.slice(1);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
        <nav
          className={cn(
            "mx-auto max-w-6xl rounded-2xl transition-all duration-300",
            scrolled
              ? "glass shadow-lg shadow-black/5 py-2.5 px-4 sm:px-6"
              : "bg-transparent py-3 px-2 sm:px-4"
          )}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => handleNav("#home")}
              className="font-bold text-lg sm:text-xl text-foreground tracking-tight hover:text-primary transition-colors"
            >
              Naome<span className="text-primary">.</span>dev
            </button>

            <ul className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = isItemActive(item);
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border hover:bg-accent transition-colors"
              >
                <FileText className="w-4 h-4" aria-hidden />
                Resume
              </a>
              <button
                type="button"
                onClick={() => handleNav("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Hire me
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2.5 rounded-xl border border-border hover:bg-accent transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[min(100vw-3rem,320px)] glass border-l border-border p-6 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-accent"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1 flex-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(item.href)}
                      className={cn(
                        "w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                        isItemActive(item)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-3 pt-6 border-t border-border">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border font-medium"
                >
                  <FileText className="w-4 h-4" /> Resume
                </a>
                <button
                  type="button"
                  onClick={() => handleNav("#contact")}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold"
                >
                  Hire me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
