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
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background to-primary/3"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 left-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl"
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto lg:mx-0 w-full max-w-md"
            >
              <div className="absolute -top-8 -left-8 w-20 h-20 sm:w-32 sm:h-32 border-2 border-primary/30 rounded-2xl hidden sm:block" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/20 rounded-xl hidden sm:block" />

              <Card className="overflow-hidden border-primary/20 w-full shadow-2xl hover:shadow-3xl transition-all duration-500 group rounded-2xl p-0">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    <Image
                      src="/OA.jpeg"
                      alt="Portrait of Ammy Ogunbiyi"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      style={{ objectPosition: "center 20%" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center backdrop-blur-sm">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-primary/80 mb-3 uppercase tracking-widest"
                      >
                        <span className="w-6 h-px bg-primary/60" />
                        <span>About Me</span>
                        <span className="w-6 h-px bg-primary/60" />
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white drop-shadow-lg">
                        My Journey
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-primary/80 uppercase tracking-widest"
              >
                <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <span>About Me</span>
                <span className="w-8 h-px bg-gradient-to-l from-primary to-transparent hidden lg:block" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl font-display font-bold leading-tight max-w-xl"
              >
                Building Robust Systems
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-5 text-base sm:text-lg text-foreground/70 max-w-2xl leading-relaxed"
              >
                <p className="text-lg leading-relaxed">
                  Hi, I&apos;m{" "}
                  <span className="text-primary font-semibold">
                    Ammy Ogunbiyi
                  </span>
                  , a backend developer in Lagos. I like taking rough sketches
                  of ideas and turning them into APIs and data pipelines that
                  stay calm when traffic spikes.
                </p>
                <p className="text-base leading-relaxed text-foreground/60">
                  I grew up curious about how systems hold together, so I
                  gravitated to TypeScript and Node.js for building services
                  with clear logs, strong tests, and room to grow. I care about
                  observability, sensible data models, and keeping things fast
                  without getting fragile.
                </p>
                <p className="text-base leading-relaxed text-foreground/60">
                  Away from the keyboard, you&apos;ll find me tinkering with new
                  tools, swapping ideas with other devs, or writing notes about
                  what I learn so others can skip the potholes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
