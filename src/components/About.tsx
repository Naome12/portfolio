import { Code2, Smartphone, BrainCircuit } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years building" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Commitment" },
];

const focus = [
  {
    icon: Code2,
    title: "Full-stack engineering",
    description: "Web apps end to end — React, Node, Python, and clean, well-tested APIs.",
  },
  {
    icon: Smartphone,
    title: "Mobile development",
    description: "Cross-platform apps with React Native that feel native and inclusive.",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI",
    description: "AI agents and RAG pipelines with LangChain — intelligence that ships.",
  },
];

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { value: n, ref } = useCountUp(value);
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 text-center transition-colors hover:border-primary/30">
      <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        <span ref={ref}>{n}</span>
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

const About = () => (
  <Section id="about">
    <SectionHeader
      index="01"
      label="About"
      align="left"
      title={
        <>
          Engineering software that <span className="text-gradient">holds up</span> in the
          real world.
        </>
      }
    />

    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal className="order-2 lg:order-1">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a full-stack developer and AI engineer in Kigali, Rwanda. I build
            intelligent systems, clean APIs, and the small details that make software feel
            right.
          </p>
          <p>
            I test before I trust it — I&apos;d rather find what breaks than ship and hope.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Reveal>

      <div className="order-1 space-y-4 lg:order-2">
        {focus.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div className="group flex gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card sm:p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <f.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
