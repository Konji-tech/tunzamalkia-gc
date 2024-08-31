import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

import { mainRoutes } from "./index";

export default function Navbar({ className }: { className: string }) {
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
        <ul className="flex gap-8 items-center">
          {mainRoutes.map((route) => (
            <li key={route.name}>
              <a
                href={route.href}
                className="text-black hover:text-fuchsia-400 transition-colors dark:text-gray-300 dark:hover:text-white"
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
