import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Code } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "satheeshma2005@gmail.com",
      link: "mailto:satheeshma2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9345894132",
      link: "tel:+919345894132"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/satheeshma",
      link: "https://github.com/satheeshma"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "LeetCode Profile",
      link: "https://leetcode.com/satheeshma"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/satheeshma"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's connect and build something intelligent together!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="glow-effect-hover"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="glow-effect-hover"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="glow-effect-hover resize-none"
                  />
                </div>
                <Button type="submit" className="w-full glow-effect-hover">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-4">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactLinks.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 glow-effect-hover group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-foreground">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
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
