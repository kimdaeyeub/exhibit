"use client";

import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import toggle = Simulate.toggle;
import Link from "next/link";

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
    <div className="w-full px-44 py-6 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-blue-600 bg-clip-text text-transparent">
          Website
        </h1>
      </Link>
      <div className="flex justify-center items-center space-x-8">
        <button className="font-medium text-xl px-4 py-2 rounded-lg bg-slate-800 text-white">
          로그아웃
        </button>
        {darkMode ? (
          // 해 이모티콘
          <button
            onClick={toggleDarkMode}
            className="p-2 border bg-white rounded-md text-yellow-400"
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
            className="p-2 rounded-md bg-slate-800 text-yellow-400"
          >
            <svg
              width={20}
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              ></path>
            </svg>
          </button>
        )}
        <div className="w-12 h-12 rounded-full bg-red-400" />
      </div>
    </div>
  );
};

export default Nav;
