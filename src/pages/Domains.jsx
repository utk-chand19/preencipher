import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Note from '../components/Notes';

const DomainHero = () => (
  <section className="text-center mb-8 md:mb-16 py-8 md:py-12 backdrop-blur-sm rounded-xl mx-4 max-w-7xl lg:mx-auto relative overflow-hidden px-4">
    <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-5"></div>
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300 mt-10">
        Our Domains
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Explore the diverse areas of cybersecurity where we excel and innovate
      </p>
    </div>
  </section>
);

const Domains = () => {
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
                random: false,
                anim: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false
                }
              },
              line_linked: {
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
                out_mode: "out",
                bounce: false,
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
      <div className="relative z-20">
        <Navbar />
        <DomainHero />
        <Note />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Domains;
