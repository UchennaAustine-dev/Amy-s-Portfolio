"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-primary/10 overflow-hidden bg-primary text-primary-foreground">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary-foreground/5 blur-2xl" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Section with Logo and Back to Top */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-12">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl sm:text-2xl font-mono font-bold hover:text-primary-foreground/80 transition-colors mb-6 md:mb-0 text-center"
            >
              <span className="text-primary-foreground/80">&lt;</span> amidat{" "}
              <span className="text-primary-foreground/80">/&gt;</span>
            </Link>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/30 group"
            >
              <ArrowUp className="h-5 w-5 group-hover:text-primary-foreground/80 transition-colors" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12 text-center md:text-left">
            <div className="md:col-span-5">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Ogunbiyi Amidat
              </h3>
              <p className="text-primary-foreground/70 mb-6 text-sm sm:text-base">
                Full Stack Software Developer specializing in backend
                development, building robust and scalable systems with modern
                technologies and cloud infrastructure.
              </p>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 sm:p-2.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 sm:p-2.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 sm:p-2.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 sm:p-2.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="mailto:example@example.com"
                  className="bg-primary-foreground/10 p-2 sm:p-2.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 right-0 mx-auto md:mx-0 md:left-0 md:right-auto w-12 h-0.5 bg-primary-foreground/50" />
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    Home
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    About
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("skills")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    Skills
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("experience")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    Experience
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    Projects
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-1 left-0 right-0 mx-auto md:mx-0 md:left-0 md:right-auto w-12 h-0.5 bg-primary-foreground/50" />
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="text-primary-foreground/70 flex items-start justify-center md:justify-start">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 text-primary-foreground/70" />
                  <span>example@example.com</span>
                </p>
                <p className="text-primary-foreground/70">
                  Available for backend development projects and full-time
                  positions. Let's collaborate on building scalable and
                  efficient systems.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/30 text-primary-foreground"
                  >
                    <Link
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-6 border-t border-primary-foreground/10 text-center"
          >
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Ogunbiyi Amidat. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
