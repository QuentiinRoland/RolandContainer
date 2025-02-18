"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../lib/theme-config";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  });

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value = {
    theme: themes[currentTheme],
    currentTheme,
    setTheme: changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
