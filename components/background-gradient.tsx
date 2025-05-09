"use client";

import { motion } from "framer-motion";

export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-[120px]"
      />
    </div>
  );
}
