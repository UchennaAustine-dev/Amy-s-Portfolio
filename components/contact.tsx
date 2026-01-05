"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-primary/2 via-background to-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/12 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-primary/80 mb-4 uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span>Get In Touch</span>
              <span className="w-8 h-px bg-gradient-to-l from-primary to-transparent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 max-w-3xl mx-auto leading-tight"
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              Have a question or ready to start a project? Feel free to reach
              out.
            </motion.p>
          </div>

          <Card className="border-2 border-primary/10 hover:border-primary/30 max-w-5xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-400 bg-gradient-to-br from-background to-primary/3 dark:from-card dark:to-primary/5 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 min-h-[600px]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-primary/8 to-primary/3"
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                        Contact Information
                      </h3>
                      <p className="text-foreground/70 text-base leading-relaxed">
                        I&apos;m always interested in hearing about new projects
                        and opportunities. Let&apos;s discuss how I can help.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4"
                      >
                        <div className="bg-primary/20 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-foreground/70">
                            Ogunbiyiamidat65@gmail.com
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4"
                      >
                        <div className="bg-primary/20 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-foreground/70">
                            +234 123 456 7890
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4"
                      >
                        <div className="bg-primary/20 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-foreground/70">Lagos, Nigeria</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-12 hidden md:block">
                    <div className="relative">
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/30 rounded-lg" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 md:p-12"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-primary/20 focus:border-primary/50 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-primary/20 focus:border-primary/50 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-32 border-primary/20 focus:border-primary/50 rounded-lg"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group bg-primary hover:bg-primary/90 text-white rounded-lg h-11 font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
