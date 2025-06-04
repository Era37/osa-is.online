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
      <div className="fixed h-10 z-10 inset-0 backdrop-blur-md w-screen"></div>
      <div className="fixed -translate-y-5 blur w-screen h-15 backdrop-blur-md z-20"></div>
      <div className="bg-black dark:bg-white p-2 flex z-30 text-white dark:text-black sm:w-[75vw] md:w-[50vw] rounded-full left-1/2 -translate-x-1/2 space-x-4 my-box fixed">
        <div
          onClick={toggleShift}
          className="z-10 relative cursor-pointer pr-4"
        >
          <div className="h-5 w-5 rounded-full bg-white dark:bg-black top-1/2 absolute -translate-y-1/2"></div>
          <div
            className={`h-5 w-5 rounded-full dark:bg-white bg-black top-1/2 absolute -translate-y-3 transition-transform duration-300 ${
              isShifted ? "translate-x-5" : "translate-x-1.5"
            }`}
          ></div>
        </div>
        <div className="flex space-x-6 m-auto pr-6 font-bold z-40 relative sm:text-md text-sm ">
          {tabs.map((tab, i) => (
            <a
              className="transition-all hover:-translate-y-0.5 cursor-pointer duration-500"
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
          box-shadow: 0px 0px 50px rgba(0, 0, 0, 1);
        }
      `}</style>
    </div>
  );
}
