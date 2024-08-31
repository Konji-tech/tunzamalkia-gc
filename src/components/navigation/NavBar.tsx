import React from "react";

import { mainRoutes } from "./index";

export default function Navbar({ className }: { className: string }) {
  return (
    <header
      className={
        "flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800 " +
        className
      }
    >
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <ul className="flex gap-4 items-center">
          {mainRoutes.map((route) => (
            <li key={route.name}>
              <a
                href={route.href}
                className="text-gray-500 hover:text-fuchsia-400  dark:hover:text-white"
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
