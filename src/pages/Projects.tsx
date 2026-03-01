import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircuitBoard, ArrowRight, Clock } from "lucide-react";
import { projects, categories } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const allCategories = ["All", ...categories];
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen font-body">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our complete range of industry-oriented live projects across multiple domains
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                layout
              >
                <Card className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="bg-primary/5 p-4 flex items-center gap-3 border-b border-border/50">
                    <CircuitBoard className="w-5 h-5 text-primary" />
                    <span className="text-xs font-body text-muted-foreground">{project.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="rounded-lg text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-muted-foreground font-body flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {project.duration}
                      </span>
                      <Button asChild size="sm" className="rounded-xl font-semibold">
                        <Link to={`/projects/${project.slug}`}>
                          View Details <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No projects found in this category.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
