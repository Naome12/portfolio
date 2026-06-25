import { ArrowUp, Github, Mail } from "lucide-react";
import { useSectionNav } from "@/hooks/use-section-nav";
import { EMAIL, GITHUB_URL } from "@/lib/constants";

const Footer = () => {
  const { go } = useSectionNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" aria-label="Footer">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} Naome Tuyishime · Kigali, Rwanda
        </p>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => go("#home")}
            className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
