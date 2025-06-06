'use client';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white/90 py-6 md:py-0 px-4 md:pl-13 md:pr-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left Content */}
        <div className="md:w-[30%] w-full flex flex-col justify-center space-y-4">
          <h1
  style={{ fontFamily: 'SharpGrotesk-Book25' }}
  className="text-2xl md:text-3xl font-bold mt-5 leading-relaxed"
>
  Enter the Future with <br />
  BFM Academy&apos;s WEB3 <br />
  Master-course
</h1>
          {/* Price Info */}
          <div>
            <p className="text-2xl md:text-4xl font-sharp">
              199 <span className="text-sm font-normal">USD</span>
            </p>
            <p className="text-gray-400 text-lg md:text-2xl mt-2">
              <span className="line-through text-red-500">2000</span>{' '}
              <span className="text-sm">USD</span>
            </p>
          </div>

          {/* Already joined */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-white rounded px-2 py-1">
              <Image
                src="/participantpic.png"
                alt="Participants"
                width={60}
                height={24}
                className="object-contain"
              />
              <span className="text-xs ml-4 font-sharp text-white">
                2150 already joined
              </span>
            </div>
          </div>

          {/* Pre-booking seats */}
          <p className="text-sm text-white-400">
            only 2343 pre-booking seats left
          </p>

          {/* Progress bar */}
          <div className="w-full bg-white rounded-full h-5 overflow-hidden mt-4">
            <div className="bg-blue-600 h-3 mt-1 mb-1 ml-1 w-[48%] rounded-full"></div>
          </div>

          {/* CTA Button */}
          <button
            style={{ fontFamily: 'SharpGrotesk-Medium20' }}
            className="bg-white text-blue-600 hover:bg-gray-200 mt-5 mb-5 py-3 px-9 rounded-xl w-fit"
          >
            Pre-Book Course
          </button>
        </div>

        {/* Right Video */}
<div className="md:w-[70%] w-full h-[300px] md:h-[550px] relative overflow-hidden">
  <video
    src="/landpagevideo.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>


      </div>
    </section>
  );
};

export default HeroSection;
