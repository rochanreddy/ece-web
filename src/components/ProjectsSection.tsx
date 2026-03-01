import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { projects, categories } from "@/data/siteData";
import { CircuitBoard, ArrowRight } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold">Our Project Categories</h2>
        <p className="mt-4 text-muted-foreground font-body">Choose from a wide range of industry-relevant projects</p>
      </motion.div>

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8 justify-center">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl px-4 py-2 text-sm"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.category === cat)
                .map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="bg-primary/5 p-4 flex items-center gap-3 border-b border-border/50">
                        <CircuitBoard className="w-5 h-5 text-primary" />
                        <span className="text-xs font-body text-muted-foreground">{project.category}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground font-body mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="rounded-lg text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-body">{project.duration}</span>
                          <Button asChild size="sm" className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                            <Link to={`/projects/${project.slug}`}>
                              View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-8">
          <Link to="/projects">
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
