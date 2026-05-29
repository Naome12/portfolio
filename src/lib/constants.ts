export const CV_URL =
  "https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/preview";

export const EMAIL = "tuyishimenaome27@gmail.com";
export const GITHUB_URL = "https://github.com/Naome12";
export const PORTFOLIO_URL = "https://naome-portfolio.vercel.app";

export const NAV_ITEMS = [
  { label: "Home", href: "#home", path: "/" },
  { label: "About", href: "#about", path: "/about" },
  { label: "Skills", href: "#skills", path: "/skills" },
  { label: "Projects", href: "#projects", path: "/projects" },
  { label: "Experience", href: "#experience", path: "/experience" },
  { label: "Contact", href: "#contact", path: "/contact" },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((n) => n.href.slice(1));

/** Breakpoint (px) at/above which the site behaves as multi-page (matches Tailwind `lg`). */
export const DESKTOP_BREAKPOINT = 1024;
