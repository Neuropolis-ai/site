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
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета

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
      <div // Внешний div: убрана рамка (border)
        className={`p-8 rounded-3xl backdrop-blur-md`}
        // Убраны классы border и связанные с ним цвета
      >
        <motion.div
          className="flex flex-wrap justify-start gap-4" // Изменено: justify-center -> justify-start
          animate={{ opacity: 1 }}
        >
          {technologies.map((tech, index) => {
            const Icon = getTechnologyIcon(tech);
            return (
              <motion.div
                key={index}
                animate={{ opacity: 1 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  boxShadow: isDark
                    ? `0 10px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.15)`
                    : `0 10px 20px rgba(0, 0, 0, 0.08), 0 0 10px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.1)`,
                }}
                // Стили для плашек технологий остаются прежними
                className={`px-5 py-2.5 rounded-xl flex items-center space-x-2.5 text-base transition-all duration-300 border shadow-md transform ${
                  isDark
                    ? `bg-gray-800/50 border-[${brandColors.primary}]/30 hover:border-[${brandColors.primary}]/50 text-gray-200`
                    : `bg-white/60 border-[${brandColors.primary}]/20 hover:border-[${brandColors.primary}]/40 text-gray-700`
                }`}
              >
                {/* ... иконка и текст ... */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center shadow-sm ${
                    isDark
                      ? `bg-gradient-to-br from-[${brandColors.primary}]/40 to-[${brandColors.secondary}]/30 text-[${brandColors.secondary}] border border-[${brandColors.primary}]/20`
                      : `bg-gradient-to-br from-[${brandColors.primary}]/10 to-[${brandColors.secondary}]/10 text-[${brandColors.primary}] border border-[${brandColors.primary}]/20`
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
