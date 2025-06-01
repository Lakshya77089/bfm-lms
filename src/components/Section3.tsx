// File: components/SectionThree.jsx
"use client";

import React from 'react';
import { FaUniversity, FaWallet, FaCode, FaRocket, FaGlobe, FaMagic } from 'react-icons/fa';

const features = [
  {
    icon: <FaUniversity size={30} />,
    title: 'Foundations of Web3 & Blockchain',
    description: 'Grasp the core principles of blockchain technology and the Web3 revolution.',
  },
  {
    icon: <FaWallet size={30} />,
    title: 'Crypto, Wallets & DeFi Essentials',
    description: 'Understand how cryptocurrencies, wallets, and decentralized finance work.',
  },
  {
    icon: <FaCode size={30} />,
    title: 'Smart Contracts & dApps',
    description: 'Learn to build and deploy smart contracts and decentralized applications.',
  },
  {
    icon: <FaRocket size={30} />,
    title: 'Tokenomics & Launch Strategies',
    description: 'Master token design, launch frameworks, and ecosystem growth tactics.',
  },
  {
    icon: <FaGlobe size={30} />,
    title: 'DAOs, DePIN & Real-World Assets',
    description: 'Explore decentralized organizations and physical infrastructure networks.',
  },
  {
    icon: <FaMagic size={30} />,
    title: 'AI x Web3 Integration & Startup Playbook',
    description: 'Learn how to integrate AI into Web3 and build in the decentralized era.',
  },
];

const SectionThree = () => {
  return (
    <section className="bg-white text-center py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#1b1b1f] mb-12">
        What You’ll Learn
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="puzzle-piece bg-[#1d1dff] text-white rounded-xl p-6 flex gap-4 items-start shadow-lg"
          >
            <div className="mt-1 text-white">{feature.icon}</div>
            <div className="text-left">
              <h3 className="font-semibold text-md md:text-lg">{feature.title}</h3>
              <p className="text-sm md:text-base opacity-80 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;



