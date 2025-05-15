"use client";

import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi"; // Пример иконки для задач

interface CaseTaskProps {
  description: string;
  challenges: Array<{
    text: string;
    className?: string;
  }>;
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

export default function CaseTask({ description, challenges }: CaseTaskProps) {
  return (
    <div className="relative">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-20 top-20 w-72 h-72 bg-gradient-to-tr from-blue-200/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-72 h-72 bg-gradient-to-tl from-indigo-200/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      <CaseSection title="📌 Задача клиента">
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-8 text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        {challenges.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl flex items-center space-x-4 transition-all duration-300 
                    bg-gradient-to-br from-white to-gray-50/90 border border-gray-200/80 shadow-md hover:shadow-lg hover:border-gray-300`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-100/80 text-blue-600"
                >
                  <FiAlertTriangle className="w-5 h-5" />
                </div>
                <span
                  className={`flex-1 text-gray-700 ${challenge.className || ""}`}
                >
                  {challenge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </CaseSection>
    </div>
  );
}
