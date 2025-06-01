'use client';

import Image from 'next/image';


const SectionSeven = () => {
  return (
    <section
      className="relative text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/b-3.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70 z-0" /> {/* Optional overlay for better contrast */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <Image
          src="/clock.png"
          alt="Clock Icon"
          width={64}
          height={64}
          className="mb-6"
        />

        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Time Is Ticking
        </h2>

        <p className="text-lg md:text-xl mb-6">only <strong>2343 seats</strong> left</p>

        {/* Progress bar */}
        <div className="w-full h-3 rounded-full bg-white/30 mb-8 overflow-hidden max-w-md">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: '65%' }} // Adjust dynamically if needed
          />
        </div>

        <p className="text-xl md:text-2xl mb-8">
          just for only <span className="font-bold text-4xl">199</span> USD
        </p>

        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Pre-Book Course
        </button>
      </div>
    </section>
  );
};

export default SectionSeven;
