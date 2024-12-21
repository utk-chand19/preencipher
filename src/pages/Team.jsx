import React, { useState, useEffect, Suspense, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import particlesOptions from "../utils/particles.json";
import "../utils/ourjourney.css";

// Lazy load components
const FounderSection = React.lazy(() => import('../components/founder-section').then(module => ({ default: module.FounderSection })));
const CurrentTeamSection = React.lazy(() => import('../components/current-team-section').then(module => ({ default: module.CurrentTeamSection })));
const MentorSection = React.lazy(() => import('../components/mentor-section').then(module => ({ default: module.MentorSection })));

// Loading component
const LoadingSection = () => (
  <div className="flex justify-center items-center min-h-[300px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Team = () => {
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState({
    founder: false,
    team: false,
    mentor: false
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  useEffect(() => {
    if (init) return;

    setInit(true);
  }, [init]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const renderSection = (Component, sectionName) => (
    <div 
      className={`section-container transition-opacity duration-1000 ${isVisible[sectionName] ? 'opacity-100' : 'opacity-0'}`}
      data-section={sectionName}
    >
      <Suspense fallback={<LoadingSection />}>
        <Component />
      </Suspense>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
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
              color: "transparent"
            }
          }}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="py-12 px-4 max-w-7xl mx-auto">
          <div className="space-y-32">
            {renderSection(FounderSection, 'founder')}
            {renderSection(CurrentTeamSection, 'team')}
            {renderSection(MentorSection, 'mentor')}
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-8"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Team;
