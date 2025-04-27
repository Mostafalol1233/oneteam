import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import EligibilitySection from "@/components/EligibilitySection";
import RegistrationCTA from "@/components/RegistrationCTA";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-light text-dark overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <GallerySection />
      <EligibilitySection />
      <RegistrationCTA />
      <Footer />
    </div>
  );
};

export default Home;
