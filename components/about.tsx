"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto lg:mx-0"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/30 rounded-lg" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/30 rounded-lg" />

              <Card className="overflow-hidden border-primary/20 max-w-md mx-auto">
                <CardContent className="p-0">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="About me"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <div className="flex items-center justify-center gap-2 text-sm text-primary/80 mb-2">
                        <span className="w-4 h-px bg-primary" />
                        <span>ABOUT ME</span>
                        <span className="w-4 h-px bg-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">My Journey</h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-primary/80 mb-2">
                <span className="w-8 h-px bg-primary" />
                <span>ABOUT ME</span>
                <span className="w-8 h-px bg-primary hidden lg:block" />
              </div>
              <h2 className="text-3xl font-bold mb-8">
                Building Robust Systems
              </h2>

              <div className="space-y-4 text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
                <p>
                  I&apos;m a passionate Full Stack Software Developer with a
                  strong focus on backend development. I specialize in designing
                  and implementing scalable, efficient, and secure server-side
                  applications and APIs that power modern web and mobile
                  experiences.
                </p>
                <p>
                  My journey in software development began with a fascination
                  for solving complex problems and building systems that can
                  handle millions of requests. I&apos;ve since dedicated myself
                  to mastering backend technologies like Node.js, Python,
                  databases, and cloud infrastructure while maintaining a solid
                  understanding of frontend technologies.
                </p>
                <p>
                  When I&apos;m not coding, you can find me writing technical
                  articles about system design and backend architecture,
                  contributing to open-source projects, or exploring new
                  technologies. I believe in continuous learning and am always
                  looking for new challenges to expand my skill set.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
