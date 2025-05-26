"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    // prefix: "",
    metric: "Users",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  // State for animated numbers
  const [displayed, setDisplayed] = useState(achievementsList.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prev) =>
        prev.map((num, idx) =>
          num < achievementsList[idx].value
            ? Math.min(num + Math.ceil(achievementsList[idx].value / 40), achievementsList[idx].value)
            : num
        )
      );
    }, 30);

    // Stop interval when all numbers reached their value
    if (displayed.every((num, idx) => num >= achievementsList[idx].value)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [displayed]);

  return (
    <section className="py-16 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-gray-200 dark:sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-white/50 dark:bg-transparent">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={displayed[index]}
                  locale="en-US"
                  className="text-black dark:text-white text-4xl font-bold"
                  configs={(_, i) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (i + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-gray-600 dark:text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;