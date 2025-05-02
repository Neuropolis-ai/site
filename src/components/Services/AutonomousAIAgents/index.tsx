"use client";

import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import BenefitsSection from "./BenefitsSection";
import ResourcesSection from "./ResourcesSection";
import WhyUsSection from "./WhyUsSection";
import Contact from "@/components/Contact/Contact";

export default function AutonomousAIAgents() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <ResourcesSection />
      <WhyUsSection />
      <Contact />
    </main>
  );
}
