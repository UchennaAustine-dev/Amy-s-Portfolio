"use client";

import type React from "react";

import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]"
      >
        {Array.from({ length: 41 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="col-span-1 col-start-[var(--col)] row-span-full border-r border-foreground/20"
            style={{ "--col": i + 1 } as React.CSSProperties}
          />
        ))}
        {Array.from({ length: 41 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="row-span-1 row-start-[var(--row)] col-span-full border-b border-foreground/20"
            style={{ "--row": i + 1 } as React.CSSProperties}
          />
        ))}
      </motion.div>
    </div>
  );
}
