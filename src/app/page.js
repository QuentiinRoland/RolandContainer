"use client";
import Homepage from "./components/Homepage/Homepage";
import { Navigation } from "./components/Navigation";
import { useTheme } from "./context/ThemeContext";
import HeroSection from "./components/Homepage/HeroSection";
import Spacer from "./components/Spacer";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`bg-${theme.colors.background} min-h-screen`}>
      <Navigation /> {/* Navbar */}
      <HeroSection /> {/* Hero Section en plein écran */}
      <Spacer lg />
      <div className="mx-auto px-4 max-w-7xl">
        <Homepage />
      </div>
    </div>
  );
}
