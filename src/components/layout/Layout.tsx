import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { NAV_ITEMS } from "@/lib/constants";

const Layout = () => {
  const isDesktop = useIsDesktop();
  const location = useLocation();

  // Desktop: jump to top on route change.
  // Mobile: if deep-linked to a section route, scroll to that section once mounted.
  useEffect(() => {
    if (isDesktop) {
      window.scrollTo({ top: 0 });
      return;
    }
    const item = NAV_ITEMS.find((i) => i.path === location.pathname);
    if (item && item.path !== "/") {
      const id = item.href.slice(1);
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [location.pathname, isDesktop]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden flex flex-col">
      <Navigation />

      <main className="flex-1">
        {isDesktop ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
