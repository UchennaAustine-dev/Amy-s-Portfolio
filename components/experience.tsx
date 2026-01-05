"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "Tech Innovations Ltd",
    period: "2022 - Present",
    description:
      "Lead the backend development team in designing and implementing scalable microservices architecture. Optimized database performance and API response times, resulting in a 40% improvement in system throughput.",
    technologies: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description:
      "Developed and maintained RESTful APIs and backend services for multiple client applications. Implemented authentication systems and data processing pipelines. Collaborated with frontend teams to ensure seamless integration.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "React", "CI/CD"],
  },
  {
    title: "Software Engineer",
    company: "WebCraft Agency",
    period: "2018 - 2020",
    description:
      "Built backend services and databases for web applications. Implemented payment processing integrations and automated reporting systems. Contributed to system architecture decisions and performance optimizations.",
    technologies: ["Python", "Django", "MySQL", "RESTful APIs", "Git", "AWS"],
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/2 to-background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 right-20 w-80 h-80 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-primary/80 mb-4 uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span>Experience</span>
              <span className="w-8 h-px bg-gradient-to-l from-primary to-transparent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 max-w-3xl mx-auto leading-tight"
            >
              Professional Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              Years of experience building scalable applications and leading
              teams
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 transform md:translate-x-px origin-top"
            />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0
                      ? "md:text-right"
                      : "md:text-left md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-2.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-background" />
                  </div>

                  <div
                    className={`${
                      index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-sm text-primary/80 justify-center md:justify-end">
                      <Briefcase className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center md:text-right">
                      {experience.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-center md:text-right">
                      {experience.company}
                    </p>
                  </div>

                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:order-1 md:text-right"
                        : "md:order-1 md:text-left"
                    }`}
                  >
                    <Card className="border-primary/15 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card/50 dark:bg-card/30 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <p className="mb-4 text-center md:text-left">
                          {experience.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 justify-center ${
                            index % 2 === 0
                              ? "md:justify-end"
                              : "md:justify-start"
                          }`}
                        >
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
