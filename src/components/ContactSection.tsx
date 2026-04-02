import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { categories } from "@/data/siteData";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    category: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", email: "", phone: "", department: "", category: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground font-body">Ready to start your journey? Contact us today</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-6 sm:p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-body font-medium mb-1.5 block">Full Name</label>
                  <Input placeholder="Your name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="rounded-xl" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-body font-medium mb-1.5 block">Email</label>
                    <Input type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="rounded-xl" required />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium mb-1.5 block">Phone</label>
                    <Input placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className="rounded-xl" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-body font-medium mb-1.5 block">Department</label>
                    <Select value={formData.department} onValueChange={(v) => handleChange("department", v)}>
                      <SelectTrigger className="rounded-xl w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["ECE", "EEE", "MECH", "CSE"].map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium mb-1.5 block">Project Category</label>
                    <Select value={formData.category} onValueChange={(v) => handleChange("category", v)}>
                      <SelectTrigger className="rounded-xl w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-body font-medium mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us about your requirements..." value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className="rounded-xl min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full rounded-xl py-6 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="rounded-xl p-6 bg-secondary/50">
              {[
                { icon: <Phone className="w-5 h-5" />, title: "Phone", lines: ["+91 9063913262", "+91 9963282240"] },
                { icon: <Mail className="w-5 h-5" />, title: "Email", lines: ["lalityatechnologies@gmail.com"] },
                { icon: <MapPin className="w-5 h-5" />, title: "Location", lines: ["Gandhi Maisamma & Kranthi Colony", "Hyderabad - 500092, India"] },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 mb-6 last:mb-0">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                    {item.lines.map((l) => (
                      <p key={l} className="text-sm text-muted-foreground font-body">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
