"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiDatabase, FiCpu, FiCheckSquare, FiInfo } from "react-icons/fi";
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета

interface ImplementationStage {
  number: string;
  title: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  details?: string;
}

interface CaseImplementationProps {
  stages: ImplementationStage[];
  additionalInfo?: string;
  transparent?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const stageIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  "1": FiDatabase,
  "2": FiCpu,
  "3": FiCheckSquare,
};

export default function CaseImplementation({
  stages,
  additionalInfo,
}: CaseImplementationProps) {
  const { isDark } = useTheme();
  
  // Преобразуем hex-цвет в RGB для использования в тенях
  const primaryRGB = {
    r: parseInt("01", 16), 
    g: parseInt("67", 16), 
    b: parseInt("F3", 16)
  };

  return (
    <CaseSection title="⚙️ Процесс внедрения" transparent={true}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        animate={{ opacity: 1 }}
      >
        {stages.map((stage, index) => {
          const Icon =
            stage.icon || stageIconMap[stage.number] || FiCheckSquare;
          return (
            <motion.div
              key={index}
              animate={{ opacity: 1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`
                  : `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
              }}
              className={`p-6 rounded-2xl flex flex-col text-center transition-all duration-300 border shadow-lg h-full backdrop-blur-sm ${
                isDark
                  ? "bg-gray-800/50 border-gray-700/40 hover:border-[#0167F3]/50"
                  : "bg-white/70 border-gray-200/70 hover:border-[#0167F3]/30"
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transform transition-all duration-500 shadow-md ${
                    isDark
                      ? "bg-gradient-to-br from-[#0167F3]/50 to-[#399AFC]/30 text-[#399AFC] border border-[#0167F3]/30"
                      : "bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] border border-[#0167F3]/20"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3
                className={`font-bold text-xl mb-3 ${isDark ? "text-gray-100" : "text-gray-900"}`}
              >
                {stage.title}
              </h3>
              {stage.details && (
                <p
                  className={`text-base flex-grow implementation-details-text ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stage.details}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {additionalInfo && (
        <motion.div
          animate={{ opacity: 1 }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
            boxShadow: isDark
              ? `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 12px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`
              : `0 12px 24px rgba(0, 0, 0, 0.06), 0 0 12px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
          }}
          className={`mt-12 p-6 rounded-2xl flex items-start space-x-5 border transform transition-all duration-300 shadow-md backdrop-blur-sm ${
            isDark
              ? "bg-gray-800/50 border-gray-700/40 hover:border-[#0167F3]/50"
              : "bg-white/70 border-gray-200/70 hover:border-[#0167F3]/30"
          }`}
        >
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
              isDark
                ? "bg-gradient-to-br from-[#0167F3]/40 to-[#399AFC]/30 text-[#399AFC] border border-[#0167F3]/30"
                : "bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] border border-[#0167F3]/20"
            }`}
          >
            <FiInfo className="w-6 h-6" />
          </div>
          <div>
            <h4
              className={`font-semibold text-lg mb-1 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Интересный факт
            </h4>
            <p
              className={`text-base leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {additionalInfo}
            </p>
          </div>
        </motion.div>
      )}
    </CaseSection>
  );
}
