import { motion } from "framer-motion";
import { User } from "lucide-react";

const FounderSection = () => (
  <section className="py-12 bg-gradient-to-br from-accent/5 via-background to-primary/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold">
          Meet Our <span className="text-primary">Founder</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body">
          The vision behind Component Integrator Pro
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Dr. Prabhakar Rapaka
          </h3>
          <p className="text-primary font-semibold mb-6">
            Founder &amp; CEO
          </p>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              With a deep passion for electronics and embedded systems, Dr. Prabhakar
              founded Component Integrator Pro to bridge the gap between
              academic learning and industry-ready skills for ECE, EEE &amp;
              MECH students.
            </p>
            <p>
              Having mentored hundreds of students through live industrial
              projects, his mission is to empower the next generation of
              engineers with hands-on experience, research exposure, and the
              confidence to build real-world solutions.
            </p>
            <p>
              Under his leadership the team has delivered cutting-edge projects
              spanning IoT, VLSI, embedded systems, and power electronics —
              helping students turn their ideas into published research and
              successful careers.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl shadow-xl w-full max-w-md aspect-[5/6] bg-muted/50 border border-border/50 flex items-center justify-center">
              <User className="w-32 h-32 text-muted-foreground/40" strokeWidth={1} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderSection;
