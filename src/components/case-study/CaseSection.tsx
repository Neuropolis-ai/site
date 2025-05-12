"use client";

import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { brandColors } from "./CaseHero";

interface CaseSectionProps {
  title: string;
  children: ReactNode;
  customBackground?: boolean;
  className?: string;
}

export default function CaseSection({
  title,
  children,
  className = "",
}: CaseSectionProps) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`container mx-auto px-4 max-w-screen-xl ${className}`}
      animate={{ opacity: 1 }}
    >
      <h2
        className={`text-2xl md:text-3xl font-semibold mb-6 md:mb-8 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <span className={`relative inline-block ${isDark ? "text-gray-100" : "text-gray-900"}`}>
          {title}
        </span>
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
