import { useNavigate } from "react-router-dom";
import { useIsDesktop } from "./use-is-desktop";
import { NAV_ITEMS } from "@/lib/constants";

/**
 * Unified navigation between sections.
 * - Desktop (>= lg): navigates to the section's route (multi-page).
 * - Mobile: smooth-scrolls to the section anchor on the single page.
 *
 * Accepts a target like "#about", "about", or "/about".
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  const go = (target: string) => {
    const id = target.replace(/^[#/]+/, "");
    const item = NAV_ITEMS.find((i) => i.href.slice(1) === id);
    const path = item ? item.path : `/${id}`;

    if (isDesktop) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { go, isDesktop };
}
