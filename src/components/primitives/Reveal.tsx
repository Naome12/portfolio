import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { defaultViewport, EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "section" | "span";
};

/** Lightweight scroll-into-view reveal. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}
