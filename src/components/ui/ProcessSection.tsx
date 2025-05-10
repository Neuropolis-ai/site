"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { IconType } from "react-icons";
import { ReactNode } from "react";
import "../../style/dot-grid.css";
import { ArrowDown, ArrowDownRight, ArrowRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="text-center mb-16">
          <Badge>{badge}</Badge>
          <Heading
            level={2}
            align="center"
            className="mb-6"
          >
            Процесс{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              {gradientTitlePart}
            </span>
          </Heading>
          <Subheading
            align="center"
            className="max-w-3xl mx-auto"
          >
            {subtitle}
          </Subheading>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex flex-col relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                    isDark ? "bg-primary/30" : "bg-primary/10"
                  }`}
                >
                  <div className="relative w-8 h-8 flex items-center justify-center text-primary dark:text-primary-light">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                    {step.number}
                  </div>
                  <Heading
                    level={3}
                    className="font-semibold text-gray-900 dark:text-white"
                  >
                    {step.title}
                  </Heading>
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
                          <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
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
          className="relative overflow-hidden p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 backdrop-blur-sm border border-primary/20 dark:border-primary-light/30"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/40 dark:bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-light/40 dark:bg-primary-light/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex-shrink-0 flex items-center justify-center">
              {resultIcon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <Heading
                level={3}
                className="font-bold text-gray-900 dark:text-white mb-3"
              >
                {resultTitle}
              </Heading>
              <p className="text-gray-600 dark:text-gray-300">{resultText}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ProcessSection;
