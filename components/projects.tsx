"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/2 to-background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 left-20 w-80 h-80 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-primary/80 mb-4 uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span>Featured Projects</span>
              <span className="w-8 h-px bg-gradient-to-l from-primary to-transparent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 max-w-3xl mx-auto leading-tight"
            >
              Showcase of Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              A selection of projects that demonstrate my expertise in backend
              systems, APIs, and scalable data flows
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Card className="h-full flex flex-col overflow-hidden border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 bg-gradient-to-br from-background to-primary/2 dark:from-card dark:to-primary/5 backdrop-blur-sm">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-1"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 sm:p-6 backdrop-blur-sm">
                      <div className="flex gap-3 w-full">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-background/90 backdrop-blur-sm border border-foreground/30 hover:border-primary text-foreground hover:text-primary text-xs sm:text-sm"
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />{" "}
                            Code
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-primary/90 hover:bg-primary text-white backdrop-blur-sm text-xs sm:text-sm"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />{" "}
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow text-center text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-auto w-full justify-between group/btn text-sm"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Project Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
