"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { IconType } from "react-icons";
import { ReactNode } from "react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon?: ReactNode;
}

export interface ProcessSectionProps {
  processSteps: ProcessStep[];
  title: string;
  subtitle: string;
  badge?: string;
  sectionId: string;
  resultTitle?: string;
  resultIcon?: ReactNode;
  resultText?: string;
  gradientTitlePart?: string;
}

export default function ProcessSection({
  processSteps,
  title,
  subtitle,
  badge = "Как мы работаем",
  sectionId,
  resultTitle = "Результат нашей работы",
  resultIcon,
  resultText,
  gradientTitlePart,
}: ProcessSectionProps) {
  const { isDark } = useTheme();

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
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  function renderTitle() {
    if (!gradientTitlePart) {
      return <span className="text-gray-900 dark:text-white">{title}</span>;
    }

    const parts = title.split(gradientTitlePart);
    return (
      <>
        <span className="text-gray-900 dark:text-white">{parts[0]}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
          {gradientTitlePart}
        </span>
        {parts.length > 1 && parts[1] && (
          <span className="text-gray-900 dark:text-white">{parts[1]}</span>
        )}
      </>
    );
  }

  return (
    <motion.section
      id={sectionId}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-sky-400/10 dark:from-blue-500/10 dark:to-sky-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-sky-400/10 dark:from-blue-500/10 dark:to-sky-400/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center border border-[#0167F3]/20 dark:border-[#399AFC]/50 gap-2 px-4 py-1.5 rounded-full text-base mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:text-[#399AFC]"
          >
            {badge}
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-bold text-center mb-6"
            style={{ fontSize: "36px" }}
          >
            {renderTitle()}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
            style={{ fontSize: "18px" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#0167F3]/30 dark:bg-[#399AFC]/30 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-12 md:pl-14 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-lg shadow-md">
                {step.number}
              </div>
              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-sm border border-[#0167F3]/10 dark:border-[#399AFC]/10 hover:border-[#0167F3]/30 dark:hover:border-[#399AFC]/30 transition-colors">
                <h3
                  className="font-semibold mb-4 text-gray-800 dark:text-white"
                  style={{ fontSize: "18px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed mb-6 text-gray-600 dark:text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  {step.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex-shrink-0"></div>
                      <span
                        className="text-gray-600 dark:text-gray-300"
                        style={{ fontSize: "16px" }}
                      >
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {resultText && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-24 text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="font-semibold text-gray-900 dark:text-white mb-8"
              style={{ fontSize: "36px" }}
            >
              {resultTitle}
            </motion.h3>
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 20px 40px rgba(57, 154, 252, 0.2)"
                  : "0 20px 40px rgba(1, 103, 243, 0.15)",
              }}
              className={`max-w-4xl mx-auto p-8 rounded-xl transition-all ${
                isDark
                  ? "bg-gradient-to-br from-[#399AFC]/10 to-[#0167F3]/5 backdrop-blur-sm border border-[#399AFC]/30"
                  : "bg-gradient-to-br from-[#0167F3]/5 to-[#399AFC]/10 border border-[#0167F3]/20"
              }`}
            >
              {resultIcon && (
                <div className="flex flex-col items-center mb-5">
                  <div className="w-20 h-20 mb-5 rounded-full flex items-center justify-center bg-gradient-to-r from-[#0167F3] to-[#399AFC] shadow-xl shadow-[#0167F3]/20">
                    {resultIcon}
                  </div>
                  <div className="h-0.5 w-24 bg-gradient-to-r from-[#0167F3] to-[#399AFC]"></div>
                </div>
              )}
              <p
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                style={{ fontSize: "18px" }}
              >
                {resultText}
              </p>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </motion.section>
  );
}
