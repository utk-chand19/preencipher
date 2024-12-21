import React from 'react';

export function HeroSection() {
  return (
    <section className="text-center mb-16 md:mb-32 py-12 md:py-24 bg-black/20 backdrop-blur-sm rounded-xl mx-4 max-w-7xl lg:mx-auto relative overflow-hidden px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-2xl leading-relaxed py-2">
          The Phoenix Story
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-2 md:px-4 leading-relaxed mt-6 md:mt-10">
          From humble beginnings to a thriving community of cybersecurity enthusiasts.
          Join us as we trace our path from sparks to an eternal flame.
        </p>
        
        {/* Animated arrow */}
        <div className="mt-8 md:mt-16">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 mx-auto text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}