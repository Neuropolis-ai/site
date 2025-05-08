"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { IconType } from "react-icons";
import { ReactNode } from "react";
import "../../style/dot-grid.css";
import { ArrowDown, ArrowDownRight, ArrowRight } from "lucide-react";

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

const ProcessSection: React.FC<ProcessSectionProps> = ({
  processSteps,
  title,
  subtitle,
  badge = "Как мы работаем",
  sectionId,
  resultTitle = "Результат нашей работы",
  resultIcon,
  resultText,
  gradientTitlePart,
}) => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black -z-10"></div>
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0167F3]/5 via-[#0167F3]/10 to-[#399AFC]/5 dark:from-[#0167F3]/10 dark:via-[#0167F3]/5 dark:to-[#399AFC]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#399AFC]/5 via-[#399AFC]/10 to-[#0167F3]/5 dark:from-[#399AFC]/10 dark:via-[#399AFC]/5 dark:to-[#0167F3]/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:text-[#399AFC] border border-[#0167F3]/20 dark:border-[#399AFC]/50 backdrop-blur-sm">
            {badge}
          </div>
          <h2 className="text-h1 font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Процесс{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              {gradientTitlePart}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                  : "bg-white hover:shadow-xl border border-gray-200"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0167F3]/5 to-[#399AFC]/5 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#0167F3]/10 dark:bg-[#0167F3]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex flex-col relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                    isDark ? "bg-[#0167F3]/30" : "bg-[#0167F3]/10"
                  }`}
                >
                  <div className="relative w-8 h-8 flex items-center justify-center text-[#0167F3] dark:text-[#399AFC]">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700/50">
                  <ul className="space-y-2">
                    {step.details.map((detail: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className="min-w-[14px] h-[14px] mt-[5px]">
                          <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex items-center justify-center">
                            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/20 dark:to-[#399AFC]/20 backdrop-blur-sm border border-[#0167F3]/20 dark:border-[#399AFC]/30"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0167F3]/40 dark:bg-[#0167F3]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#399AFC]/40 dark:bg-[#399AFC]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex-shrink-0 flex items-center justify-center">
              {resultIcon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {resultTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {resultText}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ProcessSection;
