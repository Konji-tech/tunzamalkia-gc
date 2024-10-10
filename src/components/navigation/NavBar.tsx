import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import { mainRoutes } from "./index";

export default function Navbar({ className }: { className: string }) {
  return (
    <header className={"w-full py-4 shadow-md flex justify-center " + className}>
      <nav className="w-[80%] max-w-[70rem] mx-auto flex items-center justify-between bg-white rounded-full shadow-lg py-6 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" />

          <h1 className="text-xl font-bold text-pink-400 ">AliDada</h1>
          <h1 className="text-xl font-bold text-pink-400 ">        </h1>

        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          {mainRoutes.map((route) => (
            <li key={route.name}>
              <a
                href={route.href}
                className="text-sm text-gray-700 hover:text-pink-300 transition-colors font-poppins lowercase"
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Log In Button */}
        <div className="ml-auto">
          <a
            href="/login"
            className="text-sm text-gray-700 hover:text-pink-300 transition-colors"
          >
            Log in
          </a>
        </div>
      </nav>
    </header>
  );
}
