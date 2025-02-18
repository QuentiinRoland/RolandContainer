"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export const Navigation = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecte le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="w-[25%]">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              Roland Container
            </Link>
          </div>

          <div className="w-[50%]">
            <div className="ml-10 flex justify-center items-center space-x-8">
              <Link
                href="/"
                className={`text-lg ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className={`text-lg ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`text-lg ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-[25%] flex justify-end">
            <button
              className={`py-2 px-4 rounded-lg transition ${
                isScrolled
                  ? "bg-orange-500 text-white"
                  : "bg-transparent border border-white text-white"
              }`}
            >
              Réservez un devis !
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
