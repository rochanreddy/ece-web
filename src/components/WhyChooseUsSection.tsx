import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Layers, Award, GraduationCap } from "lucide-react";

const items = [
  { icon: <Users className="w-8 h-8" />, title: "Live Industrial Mentorship", description: "Learn from industry experts with years of practical experience." },
  { icon: <Layers className="w-8 h-8" />, title: "Hardware + Software Integration", description: "Complete end-to-end project development experience." },
  { icon: <Award className="w-8 h-8" />, title: "Publication Guidance", description: "Support for research paper writing and IEEE publication." },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Career-Focused Training", description: "Industry-ready skills that employers are looking for." },
];

const WhyChooseUsSection = () => (
  <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <img
            src="/illustrations/undraw_good-team_zww8.svg"
            alt="Good team illustration"
            className="w-full max-w-sm drop-shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-muted-foreground font-body">What makes us different from others</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 rounded-xl h-full text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="bg-accent/15 text-accent-foreground w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
