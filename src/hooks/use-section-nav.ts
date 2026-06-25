/**
 * Single-page section navigation: smooth-scrolls to a section anchor.
 * Accepts a target like "#about", "about", or "/about".
 */
export function useSectionNav() {
  const go = (target: string) => {
    const id = target.replace(/^[#/]+/, "") || "home";
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Keep the URL hash in sync for shareable deep links.
    history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  };

  return { go };
}
