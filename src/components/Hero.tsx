import { motion } from "framer-motion";
import { MapPin, Github, Mail, ArrowDown, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.jpg";
import { cn } from "@/lib/utils";
import { GITHUB_URL, EMAIL } from "@/lib/constants";
import { useSectionNav } from "@/hooks/use-section-nav";

const Hero = () => {
  const { toast } = useToast();
  const { go } = useSectionNav();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden scroll-mt-24"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.35] dark:opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-indigo/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="relative shrink-0 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 to-indigo/30 blur-lg opacity-70" />
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-border/80 shadow-2xl bg-card">
              <img
                src={profilePhoto}
                alt="Tuyishime Naome"
                className="w-full h-full object-cover"
                width={240}
                height={240}
                fetchPriority="high"
              />
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-muted-foreground mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
              </span>
              Open to opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Full Stack · Mobile · AI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground font-display mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Naome</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I design and build web, mobile, and AI-powered products that are fast,
              accessible, and ready for production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <button
                type="button"
                onClick={() => go("#projects")}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full",
                  "bg-primary text-primary-foreground font-semibold text-sm sm:text-base",
                  "shadow-glow hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                <Sparkles className="w-4 h-4" aria-hidden />
                View projects
              </button>
              <button
                type="button"
                onClick={() => go("#contact")}
                className={cn(
                  "inline-flex items-center justify-center px-7 py-3.5 rounded-full",
                  "border border-border font-semibold text-sm sm:text-base",
                  "hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                Let&apos;s talk
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" aria-hidden />
                Kigali, Rwanda
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(EMAIL);
                  toast({ title: "Email copied", description: EMAIL });
                }}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            type="button"
            onClick={() => go("#about")}
            className="p-3 rounded-full glass hover:bg-accent/80 transition-colors animate-float"
            aria-label="Go to About"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
