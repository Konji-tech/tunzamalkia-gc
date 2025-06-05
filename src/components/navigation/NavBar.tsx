"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

import { mainRoutes } from "./index";

export default function Navbar({ className }: { className: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={
        "flex flex-wrap justify-between items-center w-full bg-purple-300 text-sm py-4 shadow-lg rounded-lg dark:bg-neutral-800 " +
        className
      }
    >
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} className="mr-2" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">TunzaMalkia</h1>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-purple-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {mainRoutes.map((route) => (
            <li key={route.name}>
              <a
                href={route.href}
                className="text-black hover:text-white transition-colors font-poppins"
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden w-full mt-4 bg-purple-300 rounded-lg shadow-lg`}
        >
          <ul className="flex flex-col gap-4 p-4">
            {mainRoutes.map((route) => (
              <li key={route.name}>
                <a
                  href={route.href}
                  className="block text-black hover:text-white transition-colors font-poppins py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
