"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Database,
  Server,
  Code,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };
    sequence();
  }, [controls]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          style={{ y, opacity }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            opacity,
          }}
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 150]),
            opacity,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      {/* Floating tech icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-[20%] left-[15%] bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary/20 hidden md:block"
        >
          <Terminal className="h-6 w-6 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-[30%] right-[20%] bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary/20 hidden md:block"
        >
          <Database className="h-6 w-6 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-[25%] left-[25%] bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary/20 hidden md:block"
        >
          <Server className="h-6 w-6 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 3,
          }}
          className="absolute bottom-[35%] right-[15%] bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary/20 hidden md:block"
        >
          <Code className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-10 -left-10 w-20 h-20 border border-primary/30 rounded-full hidden md:block"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-10 -right-10 w-16 h-16 border border-primary/30 rounded-full hidden md:block"
              />

              {/* Animated gradient line */}
              <div className="relative mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -top-2 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-primary/80 mb-3 font-medium text-center lg:text-left"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight relative text-center lg:text-left"
              >
                <span className="relative inline-block pb-4">
                  Amy Ogunbiyi
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-0 left-0 h-1 bg-primary/50 rounded-full"
                  />
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative mb-8"
              >
                <div className="h-px w-24 bg-primary absolute top-1/2 -left-32 hidden lg:block" />
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                  A{" "}
                  <span className="text-primary font-medium">
                    Full Stack Software Developer
                  </span>{" "}
                  based in Lagos, Nigeria. I love coding and specialize in
                  building efficient applications using TypeScript, Node.js, and
                  modern web technologies. Passionate about creating solutions
                  that make a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-6 relative overflow-hidden"
                >
                  <Link href="#projects">
                    <span className="relative z-10">View Projects</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <motion.span
                      initial={{ scale: 0, x: "-50%", y: "100%" }}
                      whileHover={{ scale: 1.5, y: "-50%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute left-0 top-1/2 w-full h-full bg-primary/20 rounded-full"
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 border-primary/30 hover:border-primary/60"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors relative group"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">GitHub</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors relative group"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">LinkedIn</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link
                  href="mailto:example@example.com"
                  className="text-foreground/70 hover:text-primary transition-colors relative group"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Email</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated gradient background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl"
              />

              {/* Animated rings */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute inset-0 rounded-full border-2 border-primary/30 flex items-center justify-center"
                />

                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute inset-0 scale-[0.85] rounded-full border-2 border-primary/50 flex items-center justify-center"
                />

                {/* Animated particles */}
                <motion.div
                  className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-primary/80"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    translateX: "-50%",
                    transformOrigin: "0 40px",
                  }}
                />

                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    translateX: "-50%",
                    transformOrigin: "0 60px",
                  }}
                />

                <motion.div
                  className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-primary/40"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    translateX: "-50%",
                    transformOrigin: "0 80px",
                  }}
                />

                {/* Center avatar */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary/10 border border-primary/70 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-primary"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    OA
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
