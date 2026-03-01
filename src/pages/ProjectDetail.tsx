import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, Package, BookOpen, CircuitBoard } from "lucide-react";
import { projects } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen font-body">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h1 className="font-heading text-3xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild className="rounded-xl">
            <Link to="/projects"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen font-body">
      <Navbar />

      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="rounded-lg">
                <CircuitBoard className="w-3.5 h-3.5 mr-1.5" />
                {project.category}
              </Badge>
              <Badge variant="outline" className="rounded-lg">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {project.duration}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tools.map((tool) => (
                <Badge key={tool} className="rounded-lg text-sm px-3 py-1">
                  {tool}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold">Objectives</h2>
                </div>
                <ul className="space-y-2.5">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                      <span className="text-primary mt-1 shrink-0">&#9679;</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/15 text-accent-foreground w-10 h-10 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold">Deliverables</h2>
                </div>
                <ul className="space-y-2.5">
                  {project.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                      <span className="text-accent mt-1 shrink-0">&#9679;</span>
                      {del}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary text-foreground w-10 h-10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold">Prerequisites</h2>
                </div>
                <ul className="space-y-2.5">
                  {project.prerequisites.map((pre, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                      <span className="text-foreground/50 mt-1 shrink-0">&#9679;</span>
                      {pre}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center"
          >
            <h2 className="font-heading text-2xl font-bold mb-2">Interested in this project?</h2>
            <p className="text-muted-foreground mb-6">Get in touch to enroll or learn more about the program</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl font-semibold px-8">
                <Link to="/contact">Enquire Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold px-8">
                <Link to="/projects">Browse All Projects</Link>
              </Button>
            </div>
          </motion.div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rp) => (
                  <Link key={rp.id} to={`/projects/${rp.slug}`}>
                    <Card className="rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <CircuitBoard className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{rp.category}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">{rp.title}</h3>
                      <p className="text-sm text-muted-foreground">{rp.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
