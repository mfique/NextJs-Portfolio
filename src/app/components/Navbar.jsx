"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference in localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed mx-auto border-b border-gray-200 dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link 
          href={"/"} 
          className="text-black dark:text-white font-semibold hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          Home
        </Link>
        <div className="flex items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.path} 
              className="text-gray-600 dark:text-gray-300 ml-4 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;