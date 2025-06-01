// File: components/SectionFour.jsx
"use client";

import React from 'react';

const items = [
  {
    title: 'Certificate of Completion',
    description:
      'Showcase your skills with a verified certificate that highlights your journey through the Web3 landscape.',
  },
  {
    title: 'Access to Exclusive Web3 Resources',
    description:
      'Get lifetime access to curated toolkits, templates, and guides built to accelerate your learning and building.',
  },
  {
    title: 'Food & Drinks Covered at Every BFM IRL Event',
    description:
      'No need to worry about logistics — we’ve got refreshments covered while you focus on networking and learning.',
  },
  {
    title: 'Hands-on Guidance from Industry Mentors',
    description:
      'Learn directly from experienced builders, designers, and operators through AMA sessions and small group calls.',
  },
];

const SectionFour = () => {
  return (
    <section className="bg-white text-center py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-sharp text-[#1b1b1f] mb-12">
        What You’ll Get
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-8 text-left shadow"
          >
            <h3 className="text-xl text-black font-sharp mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="px-4 py-2 bg-gray-200 rounded text-black hover:bg-gray-300 transition">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
