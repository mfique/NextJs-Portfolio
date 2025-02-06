"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Javascript, Python, PHP, Java, Dart, HTML, CSS.</li>
       <li>Framework/Libraries: React, Next.js, Node.js, Flutter, React Native, Spring Boot.</li>
      <li>Tools/Platforms: Git, Github, REST, APIs, Docker.</li>
      <li>Other Skills: MicroServices, API Development, Unit Testing, Agile Development</li>
      <li>Soft Skills: Team-Work, Communication, Problem-Solving, Adaptability, Time-Management.  </li>
      </ul>
    ),
  },
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Nursery School: Kigali Parents School</li>
        <li>Primary School: Remera Academy I</li>
        <li>Ordinary Level: Petit Semnaire Virgo Fidelis</li>
        <li>Advanced Level: Rwanda Coding Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AI Career Essentials</li>
        <li>Intro To Cyber</li>
        <li>Python Fundamentals</li>
        <li>Network Research</li>
        <li>Linux Fundamentals</li>
        <li>Remote Work Revolution for Everyone</li>
        <li>Ideation And Ideation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/11.png" width={500} height={500} className="rounded-[90px]" />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Mugisha Pacifique, a Full-Stack Developer and Software Engineer studying at Rwanda Coding Academy.
          I specialize in JavaScript, Python, PHP, Java, and Dart, with experience in React, Django, Flutter, and Spring Boot.
          Skilled in Git, REST APIs, and databases like MySQL and PostgreSQL, I build scalable and efficient applications.
          Beyond tech, I have strong leadership, teamwork, and problem-solving skills, serving as a reading club leader and
          Vice President of the Red Cross at my college. I am adaptable, eager to learn, and open to new opportunities in tech and innovation.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
