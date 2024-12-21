import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutimg from '../assets/groupphoto.png';

const AboutHero = () => (
  <section className="text-center mb-16 md:mb-32 py-12 md:py-24 backdrop-blur-sm rounded-xl mx-4 max-w-7xl lg:mx-auto relative overflow-hidden px-4">
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300">
        About Us
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Learn about our mission, vision, and the team behind Phoenix
      </p>
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

const AboutContent = () => (
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Mission and Vision Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 justify-items-center">
      <div className="backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:scale-105 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text text-center">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          To empower students with cutting-edge cybersecurity knowledge and practical skills, fostering a community of ethical hackers and security professionals who contribute to a safer digital world.
        </p>
      </div>
      <div className="backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:scale-105 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text text-center">
          Our Vision
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          To be recognized as a leading student-run cybersecurity organization that shapes the next generation of security professionals and contributes to global cybersecurity awareness.
        </p>
      </div>
    </div>

    {/* Our Story Section */}
    <div className="mb-16 max-w-3xl mx-auto">
      <div className="backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text text-center">
          Our Story
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Phoenix is a student-led cybersecurity club at SRMIST, dedicated to fostering a culture of cybersecurity awareness and excellence. We organize workshops, CTF events, and training sessions to help students develop practical skills in cybersecurity.
        </p>
      </div>
    </div>

    {/* Team Image Section */}
    <div className="backdrop-blur-sm rounded-xl overflow-hidden mb-16 max-w-5xl mx-auto">
      <img 
        src={aboutimg} 
        alt="Phoenix Team" 
        className="w-full h-auto object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
      />
      <figcaption className="mt-5 text-sm text-center text-gray-400">Our Team 2024</figcaption>
    </div>
  </div>
);

const AboutUs = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#b36047"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: false
            },
            size: {
              value: 3,
              random: true
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
              bounce : false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
      <Navbar />
      <div className="relative z-20 pt-16">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <AboutHero />
        <AboutContent />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
