import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, BookOpen, TrendingUp } from "lucide-react";

const features = [
  { icon: <Cpu className="w-8 h-8" />, title: "Industry-Oriented Projects", description: "Real-world projects aligned with current industry requirements and standards." },
  { icon: <Zap className="w-8 h-8" />, title: "Real-Time Implementation", description: "Hands-on experience with live hardware and software integration." },
  { icon: <BookOpen className="w-8 h-8" />, title: "R&D & IEEE Projects", description: "Research-focused projects with publication opportunities in IEEE conferences." },
  { icon: <TrendingUp className="w-8 h-8" />, title: "Placement Guidance", description: "Career support and interview preparation for top tech companies." },
];

const FeaturesSection = () => (
  <section className="py-24 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Bridging Academia & Industry</h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl">
            We empower engineering students with industry-oriented live projects that transform theoretical knowledge into practical expertise.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="/illustrations/undraw_organizing-projects_heze.svg"
            alt="Organizing projects illustration"
            className="w-full max-w-sm drop-shadow-md"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 rounded-xl h-full hover:shadow-lg transition-shadow border-border/50">
              <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
