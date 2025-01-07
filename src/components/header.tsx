"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed z-10 w-full p-4 md:px-12 shadow-lg flex justify-between items-center">
      <div className="relative h-10 w-11">
        <Link href="/">
          <Image src="/logo1.svg" alt="" fill className="object-cover" />
        </Link>
      </div>

      <button className="md:hidden text-gray-600" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      <ul
        className={`absolute md:relative md:flex md:items-center md:gap-5 bg-white md:bg-transparent transition-all font-Inter ${
          isOpen ? "top-12 left-0 w-full md:w-auto p-4" : "hidden md:flex"
        }`}
      >
        <li className="group">
          <Link href="/">
            Home
            <span className="absolute bottom-0 h-[2px] "></span>
          </Link>
        </li>
        <li className="group">
          <Link href="/about">
            About
            <span className="absolute bottom-0 h-[2px] "></span>
          </Link>
        </li>
        <li className="group">
          <Link href="/service">
            Service
            <span className="absolute bottom-0 h-[2px] "></span>
          </Link>
        </li>
        <li className="group">
          <Link href="/teams">
            Teams
            <span className="absolute bottom-0 h-[2px] "></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
