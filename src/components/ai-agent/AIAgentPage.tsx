"use client";

import { useState } from "react";
import AIAgentHero from "./AIAgentHero";
import AIAgentProblems from "./AIAgentProblems";
import AIAgentSolutionNew from "./AIAgentSolutionNew";
import AIAgentUseCases from "./AIAgentUseCases";
import AIAgentProcess from "./AIAgentProcess";
import AIAgentWhyUs from "./AIAgentWhyUs";
import AIAgentContactForm from "./AIAgentContactForm";
import AIAgentFAQ from "./AIAgentFAQ";

export default function AIAgentPage() {
  console.log("AIAgentPage component rendering");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white">
      <AIAgentHero />
      <AIAgentProblems />
      <AIAgentSolutionNew />
      <AIAgentUseCases />
      <AIAgentProcess />
      <AIAgentWhyUs />
      <AIAgentContactForm />
      <AIAgentFAQ />
    </div>
  );
}
