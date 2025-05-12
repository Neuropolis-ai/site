"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// Remove unused imports Image, Link if they are not used elsewhere after refactoring
// import Image from "next/image";
// import Link from "next/link";
import AIAgentHero from "./AIAgentHero";
import AIAgentProblems from "./AIAgentProblems";
import AIAgentSolutionNew from "./AIAgentSolutionNew";
import AIAgentUseCases from "./AIAgentUseCases"; // Import the updated component
import AIAgentWhyUs from "./AIAgentWhyUs"; // Импортируем AIAgentWhyUs вместо WorkflowAutomationWhyUs
import AIAgentProcess from "./AIAgentProcess"; // Import Process
import AIAgentFAQ from "./AIAgentFAQ"; // Import FAQ
import AIAgentContactForm from "./AIAgentContactForm"; // Import Contact Form

export default function AIAgentPage() {
  // console.log("AIAgentPage component rendering with individual components"); // Updated log
  // Remove useState for mobileMenuOpen if it's no longer used
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Вариант для плавной анимации появления всей страницы
  const pageFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    // Оборачиваем все в motion.div для общей анимации
    <motion.div
      className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white"
      variants={pageFadeIn}
      initial="hidden"
      animate="show"
    >
      <AIAgentHero />
      <AIAgentProblems />
      <AIAgentSolutionNew />
      <AIAgentUseCases /> {/* Render the updated Use Cases component */}
      <AIAgentProcess /> {/* Render the Process component */}
      <AIAgentWhyUs /> {/* Используем адаптированный компонент AIAgentWhyUs */}
      <AIAgentFAQ /> {/* Render the FAQ component */}
      <AIAgentContactForm /> {/* Render the Contact Form component */}
      {/* Удаленные секции остаются удаленными */}
    </motion.div>
  );
}
