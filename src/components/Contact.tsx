import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Send, Clock, Globe, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, staggerContainer, defaultViewport, transition } from "@/lib/motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
    const formspreeUrl = formspreeId
      ? `https://formspree.io/f/${formspreeId}`
      : "";

    if (!formspreeUrl) {
      toast({
        title: "Contact form unavailable",
        description: "Please email me directly at tuyishimenaome27@gmail.com",
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
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio: ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (response.status === 404) {
        toast({
          title: "Something went wrong",
          description: "Please try again or email me at tuyishimenaome27@gmail.com",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Send failed",
          description: "Please try again or email me directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  const contactInfo = [
    { icon: Mail, label: "Email", value: "tuyishimenaome27@gmail.com", link: "mailto:tuyishimenaome27@gmail.com", copy: true },
    { icon: Phone, label: "Phone", value: "+250 793 099 772", link: "tel:+250793099772", copy: false },
    { icon: MapPin, label: "Location", value: "Kigali, Rwanda", link: "#", copy: false },
    { icon: Globe, label: "Website", value: "naome.dev", link: "https://naome-portfolio.dev", copy: false },
    { icon: Github, label: "GitHub", value: "github.com/Naome12", link: "https://github.com/Naome12", copy: false },
  ];

  const availability = [
    "Full-time opportunities",
    "Freelance projects",
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30" aria-labelledby="contact-heading">
      <div className="section-divider my-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            <motion.h2 id="contact-heading" variants={fadeInUp} transition={transition} className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4">
              Let&apos;s Work Together
            </motion.h2>
            <motion.p variants={fadeInUp} transition={transition} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch for freelance or full-time opportunities.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 bg-card border border-border rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        className="bg-background border-border focus:border-primary"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="bg-background border-border focus:border-primary"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      name="subject"
                      placeholder="Project discussion, job opportunity, etc."
                      className="bg-background border-border focus:border-primary"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    <Send className="mr-2" size={18} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>

              {/* Quick Response Promise */}
              <Card className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Quick Response</h4>
                    <p className="text-muted-foreground">I typically respond within 24 hours during business days.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact & Connect */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    info.link === "#" ? (
                    <div key={index} className="flex items-center gap-3 p-2.5 rounded-lg">
                      <info.icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={index}
                      href={info.link}
                      target={info.label === "GitHub" ? "_blank" : undefined}
                      rel={info.label === "GitHub" ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (info.copy) {
                          e.preventDefault();
                          navigator.clipboard.writeText(info.value);
                          toast({ title: "Copied!", description: "Email copied to clipboard." });
                        }
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <info.icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                      </div>
                    </a>
                  ))
                )}
                </div>
              </Card>

              {/* Availability & CV */}
              <Card className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-3">Available for</h3>
                <ul className="space-y-2 mb-6">
                  {availability.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/preview" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="sm" className="w-full border-border rounded-lg">
                    <Download className="mr-2" size={14} />
                    Download CV
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
