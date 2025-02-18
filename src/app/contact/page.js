"use client";

import { Navigation } from "../components/Navigation";
import { useTheme } from "../context/ThemeContext";
import Spacer from "../components/Spacer";
import DiagonalSection from "../components/ServicesPage/GroundSection";
import GridFlexSections from "../components/ServicesPage/GridSection";
import OtherSection from "../components/ServicesPage/MiscellanousSection";
import ContactSection from "../components/Homepage/ContactSection";
import Footer from "../components/Homepage/Footer";
import HeroSection from "../components/ContactPage/HeroSection";
import AboutSection from "../components/ContactPage/AboutSection";

export default function Services() {
  const { theme } = useTheme();

  return (
    <div className={`bg-${theme.colors.background} min-h-screen`}>
      <Navigation />
      <AboutSection />
      <HeroSection />
      <div className="w-screen relative -mx-[50vw] left-[50%] right-[50%] bg-gray-950">
        <Footer />
      </div>
    </div>
  );
}
