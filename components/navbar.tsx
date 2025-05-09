"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Terminal,
  Braces,
  Home,
  User,
  CodeIcon,
  Briefcase,
  FolderKanban,
  Mail,
  ChevronRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
  { name: "About", href: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Skills", href: "#skills", icon: <CodeIcon className="h-4 w-4" /> },
  {
    name: "Experience",
    href: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background-rgb), 0)", "rgba(var(--background-rgb), 0.9)"]
  );

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Smooth scroll function
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Calculate offset based on navbar height
      const navHeight = navRef.current?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const navHeight = navRef.current?.offsetHeight || 0;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= navHeight + 50 && rect.bottom >= navHeight + 50;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const bracketVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.2 },
    },
  };

  const codeIconVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const menuBackgroundVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      ref={navRef}
      style={
        {
          backgroundColor: navBackground,
          "--background-rgb": scrolled
            ? "var(--background)"
            : "var(--background)",
        } as any
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "py-2 shadow-lg border-b border-primary/10" : "py-3 sm:py-4"
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="relative group"
          >
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              {/* Animated Logo */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-primary/10 rounded-lg overflow-hidden group-hover:bg-primary/20 transition-colors">
                <motion.div
                  variants={codeIconVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 opacity-5"
                >
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Braces className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </motion.div>
              </div>

              <div className="flex items-center">
                <motion.span
                  variants={bracketVariants}
                  className="text-primary font-bold text-lg sm:text-xl"
                >
                  &lt;
                </motion.span>
                <div className="flex">
                  {Array.from("amidat").map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      className="font-mono font-bold text-lg sm:text-xl relative overflow-hidden group-hover:text-primary transition-colors"
                    >
                      {letter}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  variants={bracketVariants}
                  className="text-primary font-bold text-lg sm:text-xl"
                >
                  /&gt;
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-muted/50 backdrop-blur-sm rounded-full px-1 py-1 mr-4 border border-primary/10"
            >
              <ul className="flex items-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors block ${
                        activeSection === item.href.substring(1)
                          ? "text-primary-foreground"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {activeSection === item.href.substring(1) && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute inset-0 bg-primary rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              <ModeToggle />
            </motion.div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full border-primary/20 hover:bg-primary/10 relative z-50"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: isOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 45 : -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5 text-primary" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-lg z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu container */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-x-0 top-[4.5rem] p-4 z-40 md:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <motion.div
                variants={menuBackgroundVariants}
                className="relative bg-card/80 backdrop-blur-md rounded-2xl border border-primary/10 shadow-xl overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-xl" />

                <div className="relative z-10 p-4">
                  <div className="text-center mb-4">
                    <p className="text-sm text-primary/80 font-mono">
                      navigation
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        variants={menuItemVariants}
                        custom={index}
                        className="overflow-hidden"
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                            activeSection === item.href.substring(1)
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                              : "hover:bg-muted/80 text-foreground/80 hover:text-foreground"
                          }`}
                        >
                          <div
                            className={`p-2 rounded-lg ${
                              activeSection === item.href.substring(1)
                                ? "bg-primary-foreground/20"
                                : "bg-primary/10"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight
                            className={`ml-auto h-4 w-4 transition-transform ${
                              activeSection === item.href.substring(1)
                                ? "opacity-100"
                                : "opacity-40"
                            }`}
                          />

                          {/* Progress indicator for active item */}
                          {activeSection === item.href.substring(1) && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground rounded-r-full"
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Call to action */}
                  <motion.div
                    variants={menuItemVariants}
                    className="mt-6 pt-4 border-t border-primary/10"
                  >
                    <Button
                      asChild
                      className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md shadow-primary/20"
                    >
                      <Link
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
