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
                  ? "0 15px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(21, 101, 192, 0.3)"
                  : "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(66, 153, 225, 0.2)",
              }}
              className={`p-6 rounded-2xl flex flex-col text-center transition-all duration-300 border shadow-md h-full ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/40 hover:border-blue-600/50"
                  : "bg-gradient-to-br from-white to-gray-50/90 border-gray-200/70 hover:border-blue-300"
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transform transition-all duration-500 ${
                    isDark
                      ? "bg-gradient-to-br from-blue-800/70 to-blue-900/70 text-blue-300"
                      : "bg-gradient-to-br from-blue-100 to-blue-200/80 text-blue-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-3 mx-auto ${
                  isDark
                    ? "bg-blue-800/30 text-blue-300"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {stage.number}
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
                className={`text-base ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stage.duration}
              </p>
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
              ? "0 12px 24px rgba(0, 0, 0, 0.4), 0 0 15px rgba(21, 101, 192, 0.2)"
              : "0 12px 24px rgba(0, 0, 0, 0.08), 0 0 15px rgba(66, 153, 225, 0.1)",
          }}
          className={`mt-6 p-6 rounded-xl flex items-start space-x-4 border transform transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-blue-900/30 hover:border-blue-700/40"
              : "bg-gradient-to-r from-blue-50/60 to-indigo-50/40 border-blue-200/60 hover:border-blue-300/70"
          }`}
        >
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
              isDark
                ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300"
                : "bg-gradient-to-br from-blue-100 to-blue-200/80 text-blue-600"
            }`}
          >
            <FiInfo className="w-6 h-6" />
          </div>
          <div>
            <h4
              className={`font-semibold text-lg mb-2 ${
                isDark ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Интересный факт
            </h4>
            <p
              className={`text-base ${
                isDark ? "text-gray-200" : "text-gray-700"
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
