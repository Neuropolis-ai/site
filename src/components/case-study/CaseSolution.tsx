"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import {
  FiZap,
  FiSettings,
  FiTerminal,
  FiBox,
  FiMessageSquare,
  FiPhoneCall,
  FiMail,
  FiGlobe,
} from "react-icons/fi"; // Иконки

interface SolutionFeature {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>; // Тип для иконки
}

interface CaseSolutionProps {
  description: string;
  features: SolutionFeature[];
  technicalDetails?: string;
  techPoints?: string[];
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

// Маппинг для иконок Features
const featureIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  "Многоканальное присутствие": FiGlobe,
  "Основные функции": FiSettings,
  Default: FiBox, // Иконка по умолчанию
};

export default function CaseSolution({
  description,
  features,
  technicalDetails,
  techPoints,
}: CaseSolutionProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🤖 Предложенное решение">
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-8 text-lg leading-relaxed"
      >
        {description}
      </motion.p>

      {features.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => {
            const Icon =
              feature.icon ||
              featureIconMap[feature.title] ||
              featureIconMap.Default; // Используем переданную иконку или маппинг
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl flex flex-col transition-all duration-300 border shadow-sm ${
                  isDark
                    ? "bg-gray-800/30 border-gray-700/40 hover:border-blue-700/60 hover:bg-gray-800/50"
                    : "bg-white/40 border-gray-200/70 hover:border-gray-300 hover:bg-white/60"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      isDark
                        ? "bg-blue-900/50 text-blue-400"
                        : "bg-blue-100/80 text-blue-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`font-semibold text-lg ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <ul
                  className={`list-disc pl-5 space-y-2 text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {technicalDetails && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3
            className={`font-semibold text-xl mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Технические особенности
          </h3>
          <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {technicalDetails}
          </p>
          {techPoints && techPoints.length > 0 && (
            <ul className="space-y-3">
              {techPoints.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start p-3 rounded-lg border ${
                    isDark
                      ? "bg-gray-800/40 border-gray-700/50"
                      : "bg-gray-100/60 border-gray-200/80"
                  }`}
                >
                  <FiTerminal
                    className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <span
                    className={isDark ? "text-gray-300" : "text-gray-700"}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </CaseSection>
  );
}
