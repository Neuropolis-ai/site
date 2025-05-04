"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi"; // Иконка для технологий

interface CaseTechnologiesProps {
  technologies: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function CaseTechnologies({
  technologies,
}: CaseTechnologiesProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🧩 Использованные технологии">
      <motion.div
        className="flex flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2 } }}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 text-sm transition-colors duration-200 border shadow-sm ${
              isDark
                ? "bg-gray-800/30 border-gray-700/40 hover:bg-gray-700/50 hover:border-gray-600/60 text-blue-300"
                : "bg-white/40 border-gray-200/70 hover:bg-white/60 hover:border-gray-300 text-blue-700"
            }`}
          >
            <FiCpu
              className={`w-4 h-4 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span className={isDark ? "text-gray-200" : "text-gray-800"}>
              {tech}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </CaseSection>
  );
}
