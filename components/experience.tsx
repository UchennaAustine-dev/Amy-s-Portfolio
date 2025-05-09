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
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-primary/80 mb-2">
              <span className="w-8 h-px bg-primary" />
              <span>EXPERIENCE</span>
              <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl font-bold">Professional Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:translate-x-px" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 20 }}
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
                    <Card className="border-primary/10">
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
