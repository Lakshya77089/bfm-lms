'use client';
import React, { useState } from 'react';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ConnectButton } from 'thirdweb/react';
import { client } from '../../actions/wallet';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <nav className="p-5 bg-white shadow-md relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-2 md:ml-10">
          <img src="/blue_bfm_logo.png" alt="Logo" className="h-9 w-9 mr-3" />
          <span className="text-3xl text-black font-extrabold tracking-wide">academy</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <a
            href="/login"
            className="text-blue-700 font-semibold hover:underline text-lg"
          >
            Log in
          </a>

          <a
            href="/register"
            className="bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-800 transition text-lg"
          >
            Sign up
          </a>

          {/* Web3 Library Dropdown - Desktop Hover */}
          <div className="relative group">
            <button
              type="button"
              className="text-blue-700 font-semibold border border-blue-700 px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition text-lg"
            >
              Web3 Library
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-3 w-80 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50 p-5 space-y-4">
              <a
                href="/library/books"
                className="block rounded-xl px-5 py-4 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <div>
                  <h4 className="text-black font-bold text-xl mb-1">Books</h4>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Recommended reads to master Web3
                  </p>
                </div>
                <span className="text-blue-600 text-2xl">&#8594;</span>
              </a>

              <a
                href="/library/research-papers"
                className="block rounded-xl px-5 py-4 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <div>
                  <h4 className="text-black font-bold text-xl mb-1">Research Papers</h4>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Explore in-depth Web3 insights
                  </p>
                </div>
                <span className="text-blue-600 text-2xl">&#8594;</span>
              </a>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <Suspense
            fallback={
              <Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
                <span className="translate-x-[12px] transition-all group-hover:translate-x-0">
                  Enroll Now
                </span>
                <ArrowRight
                  className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
                  size={24}
                />
              </Button>
            }
          >
            <div className="bg-white border-2 border-blue-700 rounded scale-90">
              <ConnectButton
                client={client}
                connectButton={{
                  label: 'Connect Wallet',
                  className: 'connect-wallet',
                }}
                connectModal={{
                  title: 'Get started with BFMAcademy',
                  titleIcon: '/page/logo-blue.png',
                  privacyPolicyUrl: 'https://www.bfmacademy.in/privacy-policy',
                  size: 'wide',
                }}
              />
            </div>
          </Suspense>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col mt-5 space-y-4 md:hidden px-4">
          {/* Mobile Web3 Library toggle */}
          <button
            onClick={() => setLibraryOpen(!libraryOpen)}
            className="bg-gray-100 text-blue-700 px-5 py-3 rounded-lg font-semibold text-left text-lg"
          >
            Web3 Library
          </button>
          {libraryOpen && (
            <div className="ml-6 flex flex-col space-y-3 border-l-2 border-blue-700 pl-4">
              <a
                href="/library/books"
                className="text-blue-600 underline text-lg font-medium"
              >
                Books
              </a>
              <a
                href="/library/research-papers"
                className="text-blue-600 underline text-lg font-medium"
              >
                Research Papers
              </a>
            </div>
          )}

          <a
            href="/login"
            className="bg-blue-700 text-white rounded-lg px-6 py-3 text-center font-semibold text-lg"
          >
            Log in
          </a>
          <a
            href="/register"
            className="bg-blue-700 text-white rounded-lg px-6 py-3 text-center font-semibold text-lg"
          >
            Sign up
          </a>
          <button className="border border-blue-700 text-blue-700 font-bold py-3 px-6 rounded-lg text-lg">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
