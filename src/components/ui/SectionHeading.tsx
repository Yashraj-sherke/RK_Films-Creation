"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
      className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
        {subtitle}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-black" : "text-warm-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed ${
            alignment === "center" ? "mx-auto" : ""
          } ${light ? "text-black/50" : "text-warm-white/50"}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 ${
          alignment === "center" ? "gold-line-center" : "gold-line"
        }`}
      />
    </motion.div>
  );
}
