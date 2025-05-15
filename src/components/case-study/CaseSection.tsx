"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { brandColors } from "./CaseHero";

interface CaseSectionProps {
  title: string;
  children: ReactNode;
  customBackground?: boolean;
  className?: string;
  isLightBg?: boolean;
}

export default function CaseSection({
  title,
  children,
  className = "",
  isLightBg = false,
}: CaseSectionProps) {
  // Определяем фоновые классы
  const bgClass = isLightBg
    ? "bg-gray-50/70"
    : "bg-white";

  return (
    <motion.section
      className={`py-16 md:py-20 ${bgClass} ${className}`}
      animate={{ opacity: 1 }}
    >
      <div className={`container mx-auto px-4 max-w-screen-lg ${className}`}>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-900"
        >
          <span className="relative inline-block text-gray-900">
            {title}
          </span>
        </h2>
        <div
          className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 md:space-y-6"
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
} 