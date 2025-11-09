"use client";
import React from "react";
import Link from "next/link"; // ✅ Import Link for navigation
import Signup from "../components/Signup";

export default function Page() {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden [background-image:linear-gradient(118.88deg,hsla(0,0%,0%,1)_0%,rgba(139,61,255,0.5)_100%)] bg-cover bg-center">
      
      
      <img
        src="/assets/Group39705.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      
      <nav className="relative z-10 w-full flex flex-wrap justify-between items-center px-6 sm:px-10 py-4 sm:py-5">
        
        
        <img
          src="/assets/Asset2.png"
          alt="Logo"
          className="w-[140px] sm:w-[163px] h-auto"
        />

        
        <ul className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-10 md:gap-20 text-white font-medium text-sm sm:text-base md:text-lg">
          <li>
            <Link href="/" className="hover:text-purple-400 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-400 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-purple-400 transition duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-400 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      
      <main className="relative z-10 flex justify-center items-center h-full">
        <Signup />
      </main>
    </div>
  );
}
