import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/primitives/Reveal";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  variant?: "default" | "muted";
};

export function Section({ id, className, children, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 sm:py-28 lg:py-36",
        variant === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  index?: string;
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 sm:mb-16",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="text-muted-foreground">{index}</span>}
        <span className="h-px w-6 bg-primary/50" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
