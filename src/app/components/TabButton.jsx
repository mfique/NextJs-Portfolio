"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-black dark:text-white border-b border-primary-500"
    : "text-gray-600 dark:text-[#ADB7BE] hover:text-black dark:hover:text-white";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-black dark:hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;