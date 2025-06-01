'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-2 md:ml-10">
          <img src="/blue_bfm_logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-2xl text-black font-bold">academy</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          <a href="#" className="mr-4 text-blue-700">Log in</a>
          <button className="bg-blue-700 text-white rounded px-4 py-2">
            <a href="#" className="flex items-center">
              <span>Sign up</span>
            </a>
          </button>
          <button className="border border-blue-700 text-blue-700 ml-2 font-bold py-2 px-4 rounded">
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          <button className="bg-blue-700 text-white rounded px-4 py-2">
          <a href="#">Log in</a>
          </button>
          <button className="bg-blue-700 text-white rounded px-4 py-2">
            <a href="#" className="flex items-center justify-center">
              <span>Sign up</span>
            </a>
          </button>
          <button className="border border-blue-700 text-blue-700 font-bold py-2 px-4 rounded">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
