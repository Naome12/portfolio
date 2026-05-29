import { useEffect, useState } from "react";
import { DESKTOP_BREAKPOINT } from "@/lib/constants";

/**
 * Returns true on large screens (>= DESKTOP_BREAKPOINT), where the site renders
 * one route per section. Initial value is computed synchronously to avoid a flash.
 */
export function useIsDesktop(breakpoint: number = DESKTOP_BREAKPOINT) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true;

  const [isDesktop, setIsDesktop] = useState<boolean>(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const onChange = () => setIsDesktop(window.innerWidth >= breakpoint);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isDesktop;
}
