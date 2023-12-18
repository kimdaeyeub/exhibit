"use client";

import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import toggle = Simulate.toggle;

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div className="w-full px-44 py-6 flex justify-between items-center dark:bg-gray-950">
      {/*로고*/}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-blue-600 bg-clip-text text-transparent">
        Website
      </h1>
      <div className="flex justify-center items-center space-x-8">
        <button className="font-medium text-xl px-4 py-2 border border-black rounded-md dark:text-white dark:border-white">
          Home
        </button>
        <button className="font-medium text-xl px-4 py-2  dark:text-white">
          Website
        </button>
        <button className="font-medium text-xl px-4 py-2  dark:text-white">
          Components
        </button>
        {darkMode ? (
          // 해 이모티콘
          <button
            onClick={toggleDarkMode}
            className="p-2 border border-white bg-gray-500 rounded-md text-yellow-400"
          >
            <svg
              width={22}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
          </button>
        ) : (
          //달 이모티콘
          <button
            onClick={toggleDarkMode}
            className="p-2 border border-gray-600 rounded-md text-yellow-400"
          >
            <svg
              width={22}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
