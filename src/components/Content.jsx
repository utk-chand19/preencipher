import React, { useState, useEffect, useMemo } from "react";
import Video from "./Video";
import img1 from '../assets/colagenemf.png'
import img2 from '../assets/banner.png'

const Content = () => {
  return (
    <div>
      <div>
        <section>
                <div className="max-w-screen-xl pt-10 lg:pt-0 xl:pt-0 md:pt-0 px-4 mx-auto lg:px-6 ">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="w-auto h-auto">
                      <img src={img1} alt="Phoenix" />
                    </div>
                    <div className="text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Department of Computer Science and Engineering <br />(Cyber Security)
                    </div>
                    
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight mt-8">
                      <img
                        src={img2}
                        alt="Phoenix"
                        className="inline-block"
                      />{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
                        Welcome to Phoenix Cybersecurity
                      </span>
                    </h1>
                  
                    <h3 className="mt-6 text-2xl font-semibold text-gray-400">
                      "Elevating the Cyber Space"
                    </h3>

                    {/* EncipherX 3.0 Announcement */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-lg shadow-xl backdrop-blur-sm">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
                          EncipherX 3.0 - Annual CTF Event
                        </span>
                      </h2>
                      <div className="mb-6">
                        <img 
                          src="https://raw.githubusercontent.com/utk-chand19/BannerEncipherX3.O/main/encipbanner.png" 
                          alt="EncipherX 3.0 Banner" 
                          className="w-full rounded-lg shadow-2xl" 
                        />
                      </div>
                      <p className="text-gray-300 text-lg mb-4">
                        Join us for Phoenix's Annual Capture The Flag Competition
                      </p>
                      <p className="text-blue-400 font-semibold">
                        Test your cybersecurity skills, solve challenges, and compete with the best!
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Video />
                  </div>
                </div>
            </section>
      </div>
    </div>
  );
};

export default Content;
