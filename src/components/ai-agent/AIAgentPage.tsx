"use client";

import { useState } from "react";
// Remove unused imports Image, Link if they are not used elsewhere after refactoring
// import Image from "next/image";
// import Link from "next/link";
import AIAgentHero from "./AIAgentHero";
import AIAgentProblems from "./AIAgentProblems";
import AIAgentSolutionNew from "./AIAgentSolutionNew";
import AIAgentUseCases from "./AIAgentUseCases"; // Import the updated component
import AIAgentWhyUs from "./AIAgentWhyUs"; // Import Why Us
import AIAgentProcess from "./AIAgentProcess"; // Import Process
import AIAgentFAQ from "./AIAgentFAQ"; // Import FAQ
import AIAgentContactForm from "./AIAgentContactForm"; // Import Contact Form

export default function AIAgentPage() {
  console.log("AIAgentPage component rendering with individual components"); // Updated log
  // Remove useState for mobileMenuOpen if it's no longer used
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white">
      <AIAgentHero />
      <AIAgentProblems />
      <AIAgentSolutionNew />
      <AIAgentUseCases /> {/* Render the updated Use Cases component */}
      <AIAgentProcess /> {/* Render the Process component */}
      <AIAgentWhyUs /> {/* Render the Why Us component */}
      <AIAgentFAQ /> {/* Render the FAQ component */}
      <AIAgentContactForm /> {/* Render the Contact Form component */}
      {/* Remove the old inline sections below */}
      {/* 
      // ... existing code ...
      <section id="use-cases" ... > ... </section> 
      // ... existing code ...
      <section id="process" ... > ... </section>
      // ... existing code ...
      <section id="why-us" ... > ... </section>
      // ... existing code ...
      <section id="faq" ... > ... </section>
      // ... existing code ...
      <section id="contact" ... > ... </section>
      // ... existing code ...
      <footer ... > ... </footer> 
      // NOTE: Ensure the footer is kept if it wasn't part of a specific component being replaced. 
      // If the footer should remain, remove it from the removal comments above.
      // I'll assume for now the footer is handled elsewhere or not needed in this specific refactor.
      */}
    </div>
  );
}
