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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-primary/80 mb-2">
              <span className="w-8 h-px bg-primary" />
              <span>SKILLS</span>
              <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 justify-center">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {skill}
                        </Badge>
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
