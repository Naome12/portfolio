import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Github, Mail, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.jpg";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, defaultViewport, transition } from "@/lib/motion";

const Hero = () => {
  const { toast } = useToast();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden font-sans"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-muted opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                <img
                  src={profilePhoto}
                  alt="Tuyishime Naome"
                  className="w-full h-full object-cover"
                  width={256}
                  height={256}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={defaultViewport}
          >
            <motion.p
              variants={fadeInUp}
              transition={transition}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-3"
            >
              Full Stack Developer
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              transition={transition}
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-serif tracking-tight mb-4"
              )}
            >
              Tuyishime Naome
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={transition}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build scalable software that makes a real impact
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={transition}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Talk
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent rounded-lg font-medium"
                asChild
              >
                <a
                  href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Work
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={transition}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-muted-foreground text-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin size={16} aria-hidden />
                Rwanda
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Naome12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText("tuyishimenaome27@gmail.com");
                    toast({
                      title: "Copied!",
                      description: "Email copied to clipboard.",
                    });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy email"
                >
                  <Mail size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ...transition }}
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            aria-label="Scroll to about"
          >
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
