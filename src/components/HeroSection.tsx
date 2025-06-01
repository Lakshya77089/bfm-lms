'use client';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Enter the Future with <br /> BFM Academy’s WEB3 <br /> Master-course
          </h1>

          {/* Price Info */}
          <div>
            <p className="text-xl md:text-3xl font-bold">2000 <span className="text-sm font-normal">USD</span></p>
            <p className="text-4xl font-bold text-gray-400 line-through -mt-2">199 <span className="text-sm">USD</span></p>
          </div>

          {/* Already joined */}
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2 border border-white rounded px-2 py-1 w-fit">
                  <div className="relative">
                    <Image
                      src="/participantpic.png"
                      alt="Participants"
                      width={60}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs ml-5 font-bold text-white">
                    2150
                  </span>
                </div>
          </div>

          {/* Pre-booking seats */}
          <p className="text-sm text-gray-400">only 2343 pre-booking seats left</p>

          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div className="bg-blue-600 h-full w-[48%] rounded-full"></div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-blue-600 hover:bg-gray-200 font-semibold py-3 px-6 rounded-xl text-lg w-fit">
            Pre-Book Course
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative md:h-[500px] h-[300px] w-full">
          <Image
            src="/herosectionimg.png" 
            alt="Hero Course"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
