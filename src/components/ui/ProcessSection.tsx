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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge>{badge}</Badge>
          <Heading
            level={2}
            align="center"
            className="mb-6 relative inline-flex"
          >
            <span className="relative z-10">
              Процесс{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light relative">
                {gradientTitlePart}
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/40 to-primary-light/40"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </span>
            <div className="absolute -top-6 -right-6 w-12 h-12 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
                <path d="M45.3,-59.1C58.9,-51.9,70.2,-38.7,74.9,-23.5C79.6,-8.3,77.6,8.9,70.5,22.8C63.3,36.7,50.9,47.4,37.5,53.1C24.1,58.8,9.7,59.5,-3.2,63.8C-16.2,68.1,-27.7,76,-41.3,74.8C-54.9,73.6,-70.5,63.4,-78.5,48.3C-86.5,33.3,-86.9,13.3,-82.8,-4.1C-78.8,-21.5,-70.3,-36.4,-57.9,-43.5C-45.5,-50.7,-29.2,-50.1,-14.7,-57.1C-0.2,-64.1,12.6,-78.7,27.2,-79.9C41.9,-81.2,58.3,-69.1,75.6,-51.8" transform="translate(100 100)" />
              </svg>
            </div>
          </Heading>
          <Subheading
            align="center"
            className="max-w-3xl mx-auto leading-relaxed px-4"
          >
            {subtitle}
          </Subheading>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary/40 to-primary-light/40 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600/70"
                  : "bg-white hover:shadow-xl border border-gray-200 hover:border-primary/20"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col relative z-10"
              >
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                    isDark ? "bg-primary/30 group-hover:bg-primary/40" : "bg-primary/10 group-hover:bg-primary/20"
                  } transition-colors duration-300`}
                >
                  <div className="relative flex items-center justify-center text-primary dark:text-primary-light group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                    {step.number}
                  </div>
                  <Heading
                    level={3}
                    className="font-semibold text-gray-900 dark:text-white group-hover:text-primary/90 dark:group-hover:text-primary-light/90 transition-colors duration-300"
                  >
                    {step.title}
                  </Heading>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700/50 group-hover:border-primary/10 dark:group-hover:border-primary-light/10 transition-colors duration-300">
                  <ul className="space-y-3">
                    {step.details.map((detail: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item"
                      >
                        <div className="flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                          <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
                            <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-sm leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="relative overflow-hidden p-8 md:p-10 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 backdrop-blur-sm border border-primary/20 dark:border-primary-light/30 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/40 dark:bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-light/40 dark:bg-primary-light/20 rounded-full blur-3xl opacity-30"></div>
          
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
              <path d="M44.3,-76.1C58.2,-69.5,71.2,-59.6,79.2,-46.3C87.3,-33,90.5,-16.5,89.4,-0.6C88.3,15.2,82.9,30.4,74.7,43.9C66.4,57.4,55.3,69.2,41.7,76.1C28.1,82.9,12,84.9,-1.7,87.7C-15.5,90.5,-31,94,-45.4,89.9C-59.8,85.7,-73.1,73.9,-81.7,59.3C-90.3,44.7,-94.3,27.4,-94.5,10.9C-94.8,-5.6,-91.4,-21.3,-83.9,-34.5C-76.3,-47.7,-64.6,-58.3,-50.9,-64.9C-37.2,-71.5,-21.4,-74,-5.8,-65C9.9,-56.1,30.4,-82.7,44.3,-76.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="absolute bottom-0 left-10 w-20 h-20 opacity-10 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary-light">
              <path d="M54.4,-67.3C68.8,-59.8,77.8,-40.7,81.6,-21.1C85.4,-1.5,84,18.6,75.5,34.8C67,51,51.3,63.2,34.3,70.8C17.2,78.4,-1.2,81.4,-19.9,77.9C-38.6,74.4,-57.8,64.3,-68.9,48.7C-80.1,33.1,-83.3,11.9,-79.4,-7.2C-75.5,-26.3,-64.5,-43.2,-49.8,-50.7C-35.1,-58.3,-16.7,-56.5,2,-59.2C20.8,-61.9,40,-74.8,54.4,-67.3Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex-shrink-0 flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/10"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {resultIcon}
            </motion.div>
            <div className="flex-grow text-center md:text-left">
              <Heading
                level={3}
                className="font-bold text-gray-900 dark:text-white mb-3 leading-tight"
              >
                {resultTitle}
              </Heading>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{resultText}</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ProcessSection;
