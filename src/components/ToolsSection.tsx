import { motion } from "framer-motion";
import { useState } from "react";
import { tools, type Tool } from "@/data/siteData";

function ToolIcon({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false);

  if (tool.logo && !failed) {
    return (
      <img
        src={tool.logo}
        alt={tool.name}
        className="w-10 h-10 object-contain"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg"
      style={{ backgroundColor: tool.color }}
    >
      {tool.name[0]}
    </span>
  );
}

const ToolsSection = () => (
  <section id="tools" className="py-24 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold">Tools & Platforms</h2>
        <p className="mt-4 text-muted-foreground font-body">Industry-standard tools we work with</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="bg-card border border-border/50 rounded-xl p-5 flex flex-col items-center gap-3 cursor-default shadow-sm hover:shadow-md transition-shadow"
          >
            <ToolIcon tool={tool} />
            <span className="text-sm font-heading font-semibold text-center">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
