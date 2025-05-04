"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface RelatedCase {
  title: string;
  description: string;
  url: string;
}

interface CaseRelatedProps {
  cases: RelatedCase[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function CaseRelated({ cases }: CaseRelatedProps) {
  const { isDark } = useTheme();

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className={`text-3xl font-semibold mb-10 md:mb-12 text-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Другие истории успеха
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {cases.map((relatedCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={relatedCase.url}>
                <div
                  className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 h-full flex flex-col justify-between border shadow-sm ${
                    isDark
                      ? "bg-gray-800/30 border-gray-700/40 hover:border-blue-700/60 hover:bg-gray-800/50"
                      : "bg-white/40 border-gray-200/70 hover:border-gray-300 hover:bg-white/60"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0167F3] group-hover:to-[#399AFC] transition-colors duration-300`}
                    >
                      {relatedCase.title}
                    </h3>
                    <p
                      className={`mb-4 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } text-base`}
                    >
                      {relatedCase.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center text-sm font-medium mt-auto ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Узнать больше <FiArrowRight className="ml-1.5 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
