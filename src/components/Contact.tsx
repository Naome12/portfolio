import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail, Phone, MapPin, Github,
  Send, Clock, Globe, Download
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
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

    try {
      const response = await fetch("https://formspree.io/f/xwpzndzb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New message from ${formData.name}: ${formData.subject}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tuyishimenaome27@gmail.com",
      link: "mailto:tuyishimenaome27@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 793 099 772",
      link: "tel:+250793099772"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      link: "#"
    },
    {
      icon: Globe,
      label: "Website",
      value: "naome-portfolio.dev",
      link: "https://naome-portfolio.dev"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Naome12",
      link: "https://github.com/Naome12",
      color: "hover:text-gray-400"
    },
    {
      icon: Mail,
      label: "Email",
      username: "tuyishimenaome27@gmail.com",
      link: "mailto:tuyishimenaome27@gmail.com",
      color: "hover:text-blue-400"
    }
  ];

  const availability = [
    "Full-time opportunities",
    "Freelance projects",
    "Consulting services",
    "Open source collaboration"
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can collaborate on your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 bg-card border border-primary/10 animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        className="bg-background border-primary/20 focus:border-primary"
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
                        className="bg-background border-primary/20 focus:border-primary"
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
                      className="bg-background border-primary/20 focus:border-primary"
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
                      className="bg-background border-primary/20 focus:border-primary resize-none"
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
              <Card className="p-6 bg-card border border-primary/10 animate-fade-in">
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

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-6 bg-card border border-primary/10 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        if (info.label === "Email") {
                          navigator.clipboard.writeText("tuyishimenaome27@gmail.com");
                          toast({
                            title: "Copied!",
                            description: "Email copied to clipboard."
                          });
                        } else if (info.link && info.link !== "#") {
                          window.location.href = info.link;
                        }
                      }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 bg-card border border-primary/10 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        if (social.label === "Email") {
                          navigator.clipboard.writeText("tuyishimenaome27@gmail.com");
                          toast({
                            title: "Copied!",
                            description: "Email copied to clipboard."
                          });
                        } else {
                          window.open(social.link, "_blank");
                        }
                      }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium text-foreground">{social.username}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-6 bg-card border border-primary/10 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-4">Available For</h3>
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <a href="https://docs.google.com/document/d/1Yjijx5uknmNRIK4H5WxKhSq4kVsN3tzS46j3h8eNPdE/export?format=pdf" download className="block">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      <Download className="mr-2" size={16} />
                      Download CV
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Current Status */}
              <Card className="p-6 bg-card border border-primary/10 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500 text-sm font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new opportunities and collaborations.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
