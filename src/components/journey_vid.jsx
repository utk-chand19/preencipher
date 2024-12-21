import React from "react";

const BVideo = () => {
  return (
    <section className="mb-16 md:mb-20 max-w-7xl mx-auto px-4">
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            Relive Our Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-6 md:mb-8 max-w-3xl mx-auto">
            Watch our story unfold through the moments that defined us
          </p>
          <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/4QNcRBwGv0o"
                title="Phoenix Cybersecurity Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BVideo;