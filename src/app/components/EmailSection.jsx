"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-black dark:text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] dark:text-[#6B7280] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/mfique" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mugisha-pacifique-347811367/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-lg border border-sky-200/10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black dark:text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] dark:bg-[#f0f0f0] border border-sky-500/20 placeholder-[#9CA2A9] dark:placeholder-[#6B7280] text-gray-100 dark:text-black text-sm rounded-xl block w-full p-3 transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                placeholder="pacifiquem58@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black dark:text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] dark:bg-[#f0f0f0] border border-sky-500/20 placeholder-[#9CA2A9] dark:placeholder-[#6B7280] text-gray-100 dark:text-black text-sm rounded-xl block w-full p-3 transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                placeholder="What's up"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black dark:text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-[#18191E] dark:bg-[#f0f0f0] border border-sky-500/20 placeholder-[#9CA2A9] dark:placeholder-[#6B7280] text-gray-100 dark:text-black text-sm rounded-xl block w-full p-3 transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
                placeholder="Let's talk business ..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-medium py-3 px-5 rounded-xl w-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;