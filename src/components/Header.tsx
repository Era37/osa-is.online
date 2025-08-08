import React, { useEffect, useState } from "react";

const tabs = ["Home", "About", "Projects", "Contact"];

export default function ThemeToggleBar() {
  const [isShifted, setIsShifted] = useState(false);

  useEffect(() => {
    const theme = localStorage.theme === "light" ? "light" : "dark";
    setIsShifted(theme !== "light");

    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    document.body.classList.remove("pre-theme");
  }, []);

  const toggleShift = () => {
    setIsShifted((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.theme = newTheme;

      document.body.classList.remove("dark", "light");
      document.body.classList.add(newTheme);

      return !prev;
    });
  };

  return (
    <div className="mt-10 absolute">
      <div className="fixed h-32 z-10 top-0 left-0 right-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent dark:from-black/20 dark:via-black/10 dark:to-transparent backdrop-blur-[2px]"></div>
      <div className="bg-black dark:bg-white p-4 flex z-30 text-white dark:text-black sm:w-[75vw] md:w-[55vw] lg:w-[45vw] rounded-2xl left-1/2 -translate-x-1/2 space-x-6 my-box fixed items-center">
        <div
          onClick={toggleShift}
          className="z-10 relative cursor-pointer pr-3"
        >
          <div className="h-8 w-8 rounded-full bg-white dark:bg-black top-1/2 absolute -translate-y-1/2"></div>
          <div
            className={`h-8 w-8 rounded-full dark:bg-white bg-black top-1/2 absolute -translate-y-4 transition-transform duration-300 ${
              isShifted ? "translate-x-8" : "translate-x-2"
            }`}
          ></div>
        </div>
        <div className="flex space-x-8 m-auto pr-4 font-bold z-40 relative text-lg sm:text-xl audiowide">
          {tabs.map((tab, i) => (
            <a
              className="transition-all hover:-translate-y-0.5 hover:text-gray-300 dark:hover:text-gray-600 cursor-pointer duration-300"
              key={i}
              href={`#${tab.toLowerCase()}`}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>
      {/* Custom shadow styling */}
      <style>{`
        .my-box {
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
