import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-screen bg-gray-950 h-fit overflow-hidden flex flex-row justify-center">
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
        <div
          className="flex lg:gap-8 gap-6  tracking-wider cursor-pointer text-lg items-center"
          id="navItems"
        >
          <Link href="/server">
            <span className="group">
              Server
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span>
          </Link>
            <Link href="/client">
            <span className="group">
              Client
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
