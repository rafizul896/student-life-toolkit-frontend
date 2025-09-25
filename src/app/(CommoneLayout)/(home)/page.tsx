import BenefitsSection from "@/components/modules/home/BenefitsSection";
import CTASection from "@/components/modules/home/CTASection";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import HeroSection from "@/components/modules/home/HeroSection";
import HowItWorksSection from "@/components/modules/home/HowItWorksSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
