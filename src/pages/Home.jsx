import React, { useCallback } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Sponsors from "../components/Sponsors";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const Home = () => {
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
      <div className="relative z-10">
        <Navbar />
        <Content />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
