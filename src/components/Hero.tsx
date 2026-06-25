import { motion } from "framer-motion";
import { MapPin, Github, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.jpg";
import { GITHUB_URL, EMAIL } from "@/lib/constants";
import { useSectionNav } from "@/hooks/use-section-nav";
import { Spotlight } from "@/components/primitives/Spotlight";
import { TiltCard } from "@/components/primitives/TiltCard";
import { EASE } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: EASE },
  }),
};

const codeLines: { tokens: { t: string; c?: string }[] }[] = [
  { tokens: [{ t: "const", c: "text-brand-2" }, { t: " engineer", c: "text-foreground" }, { t: " = {", c: "text-muted-foreground" }] },
  { tokens: [{ t: "  role:", c: "text-primary" }, { t: " 'Full-Stack + AI'", c: "text-brand-3" }, { t: ",", c: "text-muted-foreground" }] },
  { tokens: [{ t: "  stack:", c: "text-primary" }, { t: " ['React','Node','Python']", c: "text-brand-3" }, { t: ",", c: "text-muted-foreground" }] },
  { tokens: [{ t: "  based:", c: "text-primary" }, { t: " 'Kigali, RW'", c: "text-brand-3" }, { t: ",", c: "text-muted-foreground" }] },
  { tokens: [{ t: "  status:", c: "text-primary" }, { t: " 'available'", c: "text-brand-3" }, { t: ",", c: "text-muted-foreground" }] },
  { tokens: [{ t: "};", c: "text-muted-foreground" }] },
];

const Hero = () => {
  const { toast } = useToast();
  const { go } = useSectionNav();

  return (
    <Spotlight>
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden"
        aria-label="Introduction"
      >
        {/* Background layers */}
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div
          className="animate-aurora pointer-events-none absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--brand) / 0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[40rem] w-[40rem] translate-x-1/3 translate-y-1/3 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--brand-2) / 0.16), transparent 60%)",
          }}
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* Left — copy */}
            <div className="text-center lg:text-left">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new opportunities
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Tuyishime{" "}
                <span className="text-gradient">Naome</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-primary sm:text-base"
              >
                Software Developer&nbsp;·&nbsp;AI Engineer
              </motion.p>

              <motion.p
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                I build intelligent software — clean APIs, thoughtful interfaces, and AI
                that quietly does its job.
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
              >
                <button
                  type="button"
                  onClick={() => go("#projects")}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
                >
                  View my work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go("#contact")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
                >
                  Get in touch
                </button>
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground lg:justify-start"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden />
                  Kigali, Rwanda
                </span>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL);
                    toast({ title: "Email copied", description: EMAIL });
                  }}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> Copy email
                </button>
              </motion.div>
            </div>

            {/* Right — 3D code-window card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
              className="mx-auto w-full max-w-md lg:mx-0"
            >
              <TiltCard className="group" max={7}>
                <div className="gradient-border overflow-hidden rounded-2xl bg-card/80 shadow-card backdrop-blur">
                  {/* window chrome */}
                  <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      naome.engineer.ts
                    </span>
                  </div>

                  {/* photo banner */}
                  <div className="relative">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={profilePhoto}
                        alt="Tuyishime Naome"
                        className="h-full w-full object-cover"
                        width={448}
                        height={308}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>
                  </div>

                  {/* code body */}
                  <div className="space-y-1.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
                    {codeLines.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="select-none text-muted-foreground/40">{i + 1}</span>
                        <span className="whitespace-pre">
                          {line.tokens.map((tk, j) => (
                            <span key={j} className={tk.c}>
                              {tk.t}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* floating chips */}
                <div className="animate-float pointer-events-none absolute -right-3 -top-3 rounded-xl border border-border bg-card px-3 py-1.5 font-mono text-xs text-primary shadow-card">
                  {"<AI/>"}
                </div>
                <div
                  className="animate-float pointer-events-none absolute -bottom-3 -left-3 rounded-xl border border-border bg-card px-3 py-1.5 font-mono text-xs text-brand-2 shadow-card"
                  style={{ animationDelay: "1.2s" }}
                >
                  {"{ }"}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.button
          type="button"
          onClick={() => go("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground sm:flex"
          aria-label="Scroll to About"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-float" />
        </motion.button>
      </section>
    </Spotlight>
  );
};

export default Hero;
