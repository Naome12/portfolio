import { Github, Mail, ArrowUp, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSectionNav } from "@/hooks/use-section-nav";
import { EMAIL, GITHUB_URL, NAV_ITEMS } from "@/lib/constants";

const Footer = () => {
  const { toast } = useToast();
  const { go } = useSectionNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" aria-label="Footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-bold text-lg text-foreground mb-1">
              Naome<span className="text-primary">.</span>dev
            </p>
            <p className="text-sm text-muted-foreground max-w-sm">
              Full stack developer crafting web, mobile, and AI solutions from Kigali, Rwanda.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer links">
            {NAV_ITEMS.filter((i) => i.href !== "#home").map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border hover:bg-accent hover:border-primary/30 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(EMAIL);
                toast({ title: "Email copied", description: EMAIL });
              }}
              className="p-2.5 rounded-xl border border-border hover:bg-accent hover:border-primary/30 transition-colors"
              aria-label="Copy email"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2.5 rounded-xl border border-border hover:bg-accent hover:border-primary/30 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {year} Tuyishime Naome. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Built with care
            <Heart className="w-3.5 h-3.5 text-primary fill-primary/30" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
