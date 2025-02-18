import React from "react";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import Spacer from "../Spacer";
import ServicesSection from "./ServicesSection";
import RequirementsSection from "./RequirementSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div className="mx-auto px-4 max-w-7xl">
        <AboutSection />
        <Spacer lg />
        <ServicesSection />
        <Spacer lg />
      </div>

      {/* Section Requirements en pleine largeur */}
      <div className="w-screen relative -mx-[50vw] left-[50%] right-[50%] bg-black">
        <RequirementsSection />
      </div>

      <Spacer lg />

      {/* Contact Section contrainte et centrée */}
      <div className="mx-auto px-4 max-w-7xl">
        <ContactSection />
      </div>

      {/* Footer en pleine largeur */}
      <div className="w-screen relative -mx-[50vw] left-[50%] right-[50%] bg-gray-950">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
