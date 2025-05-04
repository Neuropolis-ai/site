"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiTerminal,
  FiDatabase,
  FiZap,
  FiMessageSquare,
  FiServer,
  FiLayers,
} from "react-icons/fi"; // Расширенный набор иконок

interface CaseTechnologiesProps {
  technologies: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Уменьшаем задержку для быстрого появления
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.4,
    },
  },
};

// Функция для выбора иконки на основе названия технологии
const getTechnologyIcon = (
  techName: string
): React.ComponentType<{ className?: string }> => {
  const lowerTech = techName.toLowerCase();
  if (lowerTech.includes("gpt")) return FiCpu;
  if (lowerTech.includes("langchain")) return FiLayers;
  if (lowerTech.includes("pinecone")) return FiDatabase;
  if (lowerTech.includes("websocket")) return FiZap;
  if (lowerTech.includes("rag")) return FiServer; // RAG часто связан с серверной частью
  if (lowerTech.includes("fastapi")) return FiTerminal;
  if (lowerTech.includes("whisper")) return FiMessageSquare;
  return FiCpu; // Иконка по умолчанию
};

export default function CaseTechnologies({
  technologies,
}: CaseTechnologiesProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🧩 Используемые технологии">
      <div // Внешний div без motion, убираем фон и тень
        className={`p-8 rounded-3xl border backdrop-blur-md ${
          isDark
            ? "border-gray-700/40" // Оставляем только рамку
            : "border-gray-200/70" // Оставляем только рамку
        }`}
      >
        <motion.div
          className="flex flex-wrap justify-center gap-4" // Центрируем плашки
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => {
            const Icon = getTechnologyIcon(tech);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  boxShadow: isDark
                    ? "0 10px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(21, 101, 192, 0.15)"
                    : "0 10px 20px rgba(0, 0, 0, 0.08), 0 0 10px rgba(66, 153, 225, 0.1)",
                }}
                className={`px-5 py-2.5 rounded-xl flex items-center space-x-2.5 text-base transition-all duration-300 border shadow-md transform ${
                  isDark
                    ? "bg-gray-800/50 border-blue-800/30 hover:border-blue-700/50 text-gray-200"
                    : "bg-white/60 border-blue-100/70 hover:border-blue-300/70 text-gray-700"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center shadow-sm ${
                    isDark
                      ? "bg-gradient-to-br from-blue-700/40 to-blue-800/40 text-blue-300 border border-blue-700/20"
                      : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{tech}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </CaseSection>
  );
}
