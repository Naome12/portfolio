import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps content with a soft radial spotlight that follows the cursor.
 * Position is fed to CSS vars (--mx/--my) consumed by the `.spotlight` layer.
 */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} className={cn("relative", className)}>
      <div className="spotlight pointer-events-none absolute inset-0 -z-0" aria-hidden />
      {children}
    </div>
  );
}
