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
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-black dark:text-white">
          Home
        </Link>
        <div className="flex items-center">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.path} className="text-black ml-4 dark:text-white">
              {link.title}
            </Link>
          ))}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
          >
            {darkMode ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;