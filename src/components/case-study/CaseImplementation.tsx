"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiDatabase, FiCpu, FiCheckSquare, FiInfo } from "react-icons/fi";

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

  return (
    <CaseSection title="⚙️ Процесс внедрения">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {stages.map((stage, index) => {
          const Icon =
            stage.icon || stageIconMap[stage.number] || FiCheckSquare;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(21, 101, 192, 0.2)"
                  : "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(66, 153, 225, 0.15)",
              }}
              className={`p-6 rounded-2xl flex flex-col text-center transition-all duration-300 border shadow-lg h-full backdrop-blur-sm ${
                isDark
                  ? "bg-blue-900/10 border-blue-800/30 hover:border-blue-700/50"
                  : "bg-blue-500/5 border-blue-100/60 hover:border-blue-200/80"
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transform transition-all duration-500 shadow-md ${
                    isDark
                      ? "bg-gradient-to-br from-blue-700/50 to-blue-800/50 text-blue-200 border border-blue-600/30"
                      : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 border border-blue-200/50"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3
                className={`font-bold text-xl mb-3 ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                }`}
              >
                {stage.title}
              </h3>
              <p
                className={`text-sm font-medium mb-3 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {stage.duration}
              </p>
              {stage.details && (
                <p
                  className={`text-base flex-grow ${
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
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
            boxShadow: isDark
              ? "0 12px 24px rgba(0, 0, 0, 0.3), 0 0 12px rgba(21, 101, 192, 0.15)"
              : "0 12px 24px rgba(0, 0, 0, 0.06), 0 0 12px rgba(66, 153, 225, 0.1)",
          }}
          className={`mt-12 p-6 rounded-2xl flex items-start space-x-5 border transform transition-all duration-300 shadow-md backdrop-blur-sm ${
            isDark
              ? "bg-gray-800/50 border-gray-700/40 hover:border-blue-700/50"
              : "bg-white/70 border-gray-200/70 hover:border-blue-300/60"
          }`}
        >
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
              isDark
                ? "bg-gradient-to-br from-blue-700/40 to-blue-800/40 text-blue-200 border border-blue-600/30"
                : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 border border-blue-200/50"
            }`}
          >
            <FiInfo className="w-6 h-6" />
          </div>
          <div>
            <h4
              className={`font-semibold text-lg mb-1 ${
                isDark ? "text-blue-300" : "text-blue-700"
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
