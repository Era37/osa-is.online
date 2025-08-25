import React, { useEffect, useState } from "react";

const tabs = ["Home", "About", "Projects", "Contact"];

export default function ThemeToggleBar() {
  const [isShifted, setIsShifted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="mt-10 absolute">
      <div className="fixed h-32 z-10 top-0 left-0 right-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent dark:from-black/20 dark:via-black/10 dark:to-transparent backdrop-blur-[2px]"></div>
      <div className="bg-black dark:bg-white p-4 flex z-30 text-white dark:text-black w-[calc(100%-2rem)] sm:w-[75vw] md:w-[55vw] lg:w-[45vw] rounded-2xl left-1/2 -translate-x-1/2 space-x-6 sm:my-box fixed items-center">
        <div
          onClick={toggleShift}
          className="z-10 relative cursor-pointer pr-8"
        >
          <div className="h-8 w-8 rounded-full bg-white dark:bg-black top-1/2 absolute -translate-y-1/2"></div>
          <div
            className={`h-8 w-8 rounded-full dark:bg-white bg-black top-1/2 absolute -translate-y-4 transition-transform duration-300 ${
              isShifted ? "translate-x-8" : "translate-x-2"
            }`}
          ></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-4 md:space-x-8 m-auto pr-4 font-bold z-40 relative text-md sm:text-xl audiowide">
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

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex flex-1 justify-end">
          <button
            onClick={toggleMobileMenu}
            className="z-40 relative p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-6 h-0.5 bg-white dark:bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : "mb-1.5"
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white dark:bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "mb-1.5"
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white dark:bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-black dark:bg-white rounded-xl z-20 my-box transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen
            ? "opacity-100 transform translate-y-0 max-h-96"
            : "opacity-0 transform -translate-y-4 max-h-0 pointer-events-none"
        }`}
      >
        <div className="p-4">
          <div className="flex flex-col space-y-3 font-bold text-white dark:text-black audiowide">
            {tabs.map((tab, i) => (
              <a
                className="transition-all hover:text-gray-300 dark:hover:text-gray-600 cursor-pointer duration-300 text-center py-3 rounded-lg hover:bg-gray-900/10 dark:hover:bg-gray-100/10"
                key={i}
                href={`#${tab.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tab}
              </a>
            ))}
          </div>
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
