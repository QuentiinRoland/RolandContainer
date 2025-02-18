"use client";

import { Navigation } from "../components/Navigation";
import { useTheme } from "../context/ThemeContext";
import Spacer from "../components/Spacer";
import DiagonalSection from "../components/ServicesPage/GroundSection";
import GridFlexSections from "../components/ServicesPage/GridSection";
import OtherSection from "../components/ServicesPage/MiscellanousSection";
import ContactSection from "../components/Homepage/ContactSection";
import Footer from "../components/Homepage/Footer";
import HeroSection from "../components/ServicesPage/HeroSection";

export default function Services() {
  const { theme } = useTheme();

  return (
    <div className={`bg-${theme.colors.background} min-h-screen`}>
      <Navigation />
      <HeroSection />
      <Spacer lg />
      <div className="mx-auto px-4 max-w-7xl">
        <div>
          <h2 className="text-4xl text-center font-bold text-black mb-8">
            Notre liste de conteneurs
          </h2>
          <DiagonalSection />
          <GridFlexSections />
          <OtherSection />
        </div>
      </div>
      <Spacer lg />
      <div className="mx-auto px-4 max-w-7xl">
        <ContactSection />
      </div>

      <div className="w-screen relative -mx-[50vw] left-[50%] right-[50%] bg-gray-950">
        <Footer />
      </div>
    </div>
  );
}
