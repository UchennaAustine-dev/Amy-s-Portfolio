"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Server,
  Cloud,
  Lock,
  Terminal,
  Globe,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "DynamoDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Serverless"],
  },
  {
    title: "API Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
      "gRPC",
      "API Gateway",
      "Swagger/OpenAPI",
    ],
  },
  {
    title: "Security",
    icon: <Lock className="h-6 w-6 text-primary" />,
    skills: [
      "Authentication",
      "Authorization",
      "OAuth",
      "JWT",
      "Data Encryption",
      "Security Best Practices",
    ],
  },
  {
    title: "Frontend Knowledge",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML/CSS",
      "Next.js",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & Utilities",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Bash/Shell"],
  },
  {
    title: "Architecture",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [
      "Microservices",
      "Event-Driven",
      "Serverless",
      "System Design",
      "Performance Optimization",
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-primary/2 via-background to-primary/3"
    >
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/8 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/6 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
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
              <span>Skills & Expertise</span>
              <span className="w-8 h-px bg-gradient-to-l from-primary to-transparent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 max-w-3xl mx-auto leading-tight"
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              A comprehensive suite of technologies and tools I work with to
              build exceptional applications
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 bg-gradient-to-br from-background to-primary/2 dark:from-card dark:to-primary/5 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                    {/* Icon with animated background */}
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                    >
                      {category.icon}
                    </motion.div>

                    {/* Category title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-display font-semibold mb-6 text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                      {category.title}
                    </motion.h3>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge
                            variant="default"
                            className="px-3 py-1.5 text-xs font-medium bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 hover:border-primary/50 transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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
