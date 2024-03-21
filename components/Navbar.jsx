import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav class="w-screen bg-gray-950 h-fit overflow-hidden flex flex-row justify-center">
      <div class="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
        <div
          class="flex lg:gap-8 gap-6  tracking-wider cursor-pointer text-lg items-center"
          id="navItems"
        >
          <Link href="/server">
            <span class="group">
              Server
              <div class="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span>
          </Link>
            <Link href="/client">
            <span class="group">
              Client
              <div class="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
