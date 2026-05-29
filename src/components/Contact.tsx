import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Send, Globe, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Section, SectionHeader } from "@/components/layout/Section";
import { CV_URL, EMAIL, GITHUB_URL, PORTFOLIO_URL } from "@/lib/constants";
import { defaultViewport, transition } from "@/lib/motion";

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
    { icon: Globe, label: "Portfolio", value: "naome-portfolio.vercel.app", href: PORTFOLIO_URL },
    { icon: Github, label: "GitHub", value: "Naome12", href: GITHUB_URL },
  ];

  return (
    <Section id="contact" variant="muted">
      <SectionHeader
        label="Contact"
        title="Let's build something together"
        description="Open to full-time roles, freelance projects, and collaborations. Send a message — I usually reply within 24 hours."
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={transition}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="rounded-xl border-border bg-background h-11"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="rounded-xl border-border bg-background h-11"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1.5 block">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
              className="rounded-xl border-border bg-background h-11"
              placeholder="Project, role, or question"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              className="rounded-xl border-border bg-background resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-4 h-4" aria-hidden />
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </motion.form>

        <motion.aside
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ ...transition, delay: 0.1 }}
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-4">Direct contact</h3>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "GitHub" || item.label === "Portfolio" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (item.copy) {
                          e.preventDefault();
                          navigator.clipboard.writeText(item.value);
                          toast({ title: "Copied", description: item.value });
                        }
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-accent transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-2.5">
                      <item.icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-sm font-medium text-foreground mb-2">Available for</p>
            <ul className="text-sm text-muted-foreground space-y-1.5 mb-5">
              <li>• Full-time software roles</li>
              <li>• Freelance & contract work</li>
            </ul>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <FileText className="w-4 h-4" aria-hidden />
              View resume
            </a>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
};

export default Contact;
