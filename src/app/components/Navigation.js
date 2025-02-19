"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDevisClick = () => {
    router.push("/contact");
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-orange-500"
            >
              Roland Container
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-current hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={`text-base lg:text-lg transition-colors hover:text-orange-500 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className={`text-base lg:text-lg transition-colors hover:text-orange-500 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-base lg:text-lg transition-colors hover:text-orange-500 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleDevisClick}
              className={`py-2 px-4 rounded-lg transition-all text-sm lg:text-base hover:bg-orange-600 ${
                isScrolled
                  ? "bg-orange-500 text-white"
                  : "bg-transparent border border-white text-white hover:bg-white/10"
              }`}
            >
              Réservez un devis !
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500"
            >
              Contact
            </Link>
            <button
              onClick={handleDevisClick}
              className="w-full mt-2 text-left px-3 py-2 text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Réservez un devis !
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
