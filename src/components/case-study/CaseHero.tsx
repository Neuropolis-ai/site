"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";

interface CaseHeroProps {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
}

export default function CaseHero({
  title,
  subtitle,
  imagePath,
  imageAlt,
}: CaseHeroProps) {
  const { isDark } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
        <motion.header
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 ${
              isDark ? "bg-[#0d1635] text-blue-400" : "bg-blue-50 text-blue-600"
            }`}
          >
            Кейс
          </div>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        </motion.header>

        {/* Основное изображение кейса */}
        <motion.div
          variants={itemVariants}
          className="mb-16 rounded-xl overflow-hidden relative h-80 md:h-[500px] shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent z-10"></div>
          <Image src={imagePath} alt={imageAlt} fill className="object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
}
