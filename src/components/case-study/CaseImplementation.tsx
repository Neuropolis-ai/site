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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl flex flex-col text-center transition-all duration-300 border shadow-sm ${
                isDark
                  ? "bg-gray-800/30 border-gray-700/40 hover:border-purple-700/60 hover:bg-gray-800/50"
                  : "bg-white/40 border-gray-200/70 hover:border-gray-300 hover:bg-white/60"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-purple-900/50 text-purple-400"
                      : "bg-purple-100/80 text-purple-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div
                className={`font-bold text-sm uppercase tracking-wider mb-2 ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Этап {stage.number}
              </div>
              <h3
                className={`font-semibold text-lg mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {stage.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
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
          className={`mt-6 p-5 rounded-xl flex items-start space-x-4 border ${
            isDark
              ? "bg-gray-800/50 border-gray-700/50"
              : "bg-gray-50/80 border-gray-200/80"
          }`}
        >
          <FiInfo
            className={`w-6 h-6 mt-1 flex-shrink-0 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`}
          />
          <p
            className={`text-base ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {additionalInfo}
          </p>
        </motion.div>
      )}
    </CaseSection>
  );
}
