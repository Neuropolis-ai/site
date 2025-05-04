"use client";

import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CaseSectionProps {
  title: string;
  children: ReactNode;
  customBackground?: boolean;
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CaseSection({
  title,
  children,
  className = "",
}: CaseSectionProps) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`container mx-auto px-4 max-w-screen-xl ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <h2
        className={`text-2xl md:text-3xl font-semibold mb-6 md:mb-8 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h2>
      <div
        className={`text-base md:text-lg ${
          isDark ? "text-gray-300" : "text-gray-700"
        } leading-relaxed space-y-4 md:space-y-6`}
      >
        {children}
      </div>
    </motion.div>
  );
}
