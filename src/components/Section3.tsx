'use client';

import React from 'react';
import {
  FaUniversity,
  FaWallet,
  FaCode,
  FaRocket,
  FaGlobe,
  FaMagic,
} from 'react-icons/fa';

const SectionThree = () => {
  return (
    <section className="bg-white text-center py-16 px-4 sm:px-6 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sharp text-[#1b1b1f] mb-10 sm:mb-12">
        What You'll Learn
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto relative">
        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaUniversity size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              Foundations of Web3 & Blockchain
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Grasp the core principles of blockchain technology and the Web3 revolution.
            </p>
          </div>
        </div>

        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaWallet size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              Crypto, Wallets & DeFi Essentials
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Understand how cryptocurrencies, wallets, and decentralized finance work.
            </p>
          </div>
        </div>

        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaCode size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              Smart Contracts & dApps
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Learn to build and deploy smart contracts and decentralized applications.
            </p>
          </div>
        </div>

        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaRocket size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              Tokenomics & Launch Strategies
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Master token design, launch frameworks, and ecosystem growth tactics.
            </p>
          </div>
        </div>

        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaGlobe size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              DAOs, DePIN & Real-World Assets
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Explore decentralized organizations and physical infrastructure networks.
            </p>
          </div>
        </div>

        <div className="feature-card flex items-start space-x-4 px-4 py-3 sm:px-6">
          <FaMagic size={30} className="text-white flex-shrink-0" />
          <div>
            <h3 className="font-sharp text-left text-white text-md sm:text-lg">
              AI x Web3 Integration & Startup Playbook
            </h3>
            <p className="text-sm sm:text-base text-white/80 text-left mt-1">
              Learn how to integrate AI into Web3 and build in the decentralized era.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
