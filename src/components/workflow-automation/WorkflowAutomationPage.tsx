"use client";

import { motion } from "framer-motion";
import WorkflowAutomationHero from "./WorkflowAutomationHero";
import WorkflowAutomationProblems from "./WorkflowAutomationProblems";
import WorkflowAutomationSolution from "./WorkflowAutomationSolution";
import WorkflowAutomationUseCases from "./WorkflowAutomationUseCases";
import WorkflowAutomationProcess from "./WorkflowAutomationProcess";
import WorkflowAutomationWhyUs from "./WorkflowAutomationWhyUs";
import WorkflowAutomationFAQ from "./WorkflowAutomationFAQ";
import WorkflowAutomationContactForm from "./WorkflowAutomationContactForm";

export default function WorkflowAutomationPage() {
  // Анимация для плавного появления страницы
  const pageFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white"
      variants={pageFadeIn}
      initial="hidden"
      animate="show"
    >
      <WorkflowAutomationHero />
      <WorkflowAutomationProblems />
      <WorkflowAutomationSolution />
      <WorkflowAutomationUseCases />
      <WorkflowAutomationProcess />
      <WorkflowAutomationWhyUs />
      <WorkflowAutomationFAQ />
      <WorkflowAutomationContactForm />
    </motion.div>
  );
}
