"use client";
import Link from "next/link";
import { useState } from "react";
import { FiSun, FiMoon, FiLogIn, FiUserPlus, FiGrid } from "react-icons/fi";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MyApp
        </h1>

        {/* Links (Desktop) */}
        <nav className="space-x-8 hidden md:flex">
          <Link
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300 flex items-center"
          >
            <FiGrid className="mr-1" /> Dashboard
          </Link>
          <Link
            href="/register"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 font-medium transition-colors duration-300 flex items-center"
          >
            <FiUserPlus className="mr-1" /> Register
          </Link>
          <Link
            href="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-300 flex items-center"
          >
            <FiLogIn className="mr-1" /> Login
          </Link>
        </nav>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiGrid className="mr-1" /> Dashboard
            </Link>
            <Link
              href="/register"
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 font-medium transition-colors duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiUserPlus className="mr-1" /> Register
            </Link>
            <Link
              href="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiLogIn className="mr-1" /> Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
