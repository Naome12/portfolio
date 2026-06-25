import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSectionNav } from "@/hooks/use-section-nav";
import { NAV_ITEMS, SECTION_IDS, CV_URL } from "@/lib/constants";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { go } = useSectionNav();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const handleNav = (href: string) => {
    go(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4",
            scrolled ? "glass shadow-card" : "border border-transparent bg-transparent"
          )}
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="group flex items-center gap-2 pl-1 font-display text-base font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand font-mono text-sm text-primary-foreground shadow-glow">
              N
            </span>
            <span className="text-foreground">
              naome<span className="text-primary">.dev</span>
            </span>
          </button>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10 ring-1 ring-primary/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <FileText className="h-4 w-4" aria-hidden />
              Resume
            </a>
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </button>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl border border-border p-2.5 text-foreground transition-colors hover:bg-accent"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
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
              className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100vw-3rem,340px)] flex-col border-l border-border bg-card p-6 lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 hover:bg-accent"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-1 flex-col gap-1">
                {NAV_ITEMS.map((item, i) => {
                  const id = item.href.slice(1);
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNav(item.href)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          0{i + 1}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="space-y-3 border-t border-border pt-6">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 font-medium"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
                <button
                  type="button"
                  onClick={() => handleNav("#contact")}
                  className="w-full rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground"
                >
                  Let&apos;s talk
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
