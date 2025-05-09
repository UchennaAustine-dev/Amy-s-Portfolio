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
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20">
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
              <span>CONTACT</span>
              <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>

          <Card className="border-primary/10 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary/10 p-8 md:p-12 flex flex-col justify-between">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <p className="text-foreground/70 mb-8">
                      Feel free to reach out through any of these channels. I'll
                      get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-foreground/70">
                          example@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-foreground/70">+234 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-foreground/70">Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 hidden md:block">
                    <div className="relative">
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/30 rounded-lg" />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
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
                        className="border-primary/20 focus:border-primary/50"
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
                        className="border-primary/20 focus:border-primary/50"
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
                        className="min-h-32 border-primary/20 focus:border-primary/50"
                      />
                    </div>
                    <Button type="submit" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
