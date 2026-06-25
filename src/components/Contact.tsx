import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { EMAIL } from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
    const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : "";

    if (!formspreeUrl) {
      toast({
        title: "Contact form unavailable",
        description: `Please email me directly at ${EMAIL}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio: ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent", description: "I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: `Please try again or email me at ${EMAIL}`,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please try again or email me at ${EMAIL}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
    { icon: Phone, label: "Phone", value: "+250 793 099 772", href: "tel:+250793099772" },
    { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
  ] as const;

  const field =
    "h-11 rounded-xl border-border bg-background/60 focus-visible:ring-primary";

  return (
    <Section id="contact">
      <SectionHeader
        index="05"
        label="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">together</span>
          </>
        }
        description="Open to roles and collaborations — I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card/60 p-6 shadow-card sm:p-8"
          >
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className={field}
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                className={field}
                placeholder="Project, role, or question"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="resize-none rounded-xl border-border bg-background/60 focus-visible:ring-primary"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden />
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="mb-4 font-display font-semibold text-foreground">Direct contact</h3>
              <ul className="space-y-1">
                {links.map((item) => {
                  const Inner = (
                    <>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if ("copy" in item && item.copy) {
                              e.preventDefault();
                              navigator.clipboard.writeText(item.value);
                              toast({ title: "Copied", description: item.value });
                            }
                          }}
                          className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent"
                        >
                          {Inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 p-2.5">{Inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-display font-semibold text-foreground">Available for</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Full-time software roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Freelance &amp; contract work
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
