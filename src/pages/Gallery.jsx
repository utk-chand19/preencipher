import React, { useCallback, memo, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GalleryImage = memo(({ src, alt, onClick }) => (
  <div 
    className="relative group cursor-pointer overflow-hidden rounded-xl backdrop-blur-sm"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
));

const GallerySection = ({ title, images, onImageClick }) => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 mt-10">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  </section>
);

const Modal = ({ image, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <div className="max-w-4xl w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      {image.description && (
        <p className="text-white text-center mt-4">{image.description}</p>
      )}
    </div>
  </div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData] = useState([
    {
      title: "Events & Workshops",
      images: [
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_4ccc51aa.jpg?raw=true",
          alt: "Workshop 1"
        },
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_6213395d.jpg?raw=true",
          alt: "Workshop 2"
        },
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_b23231c2.jpg?raw=true",
          alt: "Workshop 3"
        }
      ]
    },
    {
      title: "Forum Establishment",
      images: [
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/inaguration/WhatsApp%20Image%202024-10-01%20at%2022.07.05_b3af165a.jpg?raw=true",
          alt: "Forum 1"
        },
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/inaguration/WhatsApp%20Image%202024-10-01%20at%2022.07.05_f5b4ea31.jpg?raw=true",
          alt: "Forum 2"
        }
      ]
    },
    {
      title: "EncipherX 2.0",
      images: [
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx2/WhatsApp%20Image%202024-10-01%20at%2022.07.05_a660627a.jpg?raw=true",
          alt: "EncipherX 1"
        },
        {
          src: "https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx2/WhatsApp%20Image%202024-10-01%20at%2022.07.05_b78c306f.jpg?raw=true",
          alt: "EncipherX 2"
        }
      ]
    }
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
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
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex-grow">
        <Navbar />
        <main className="py-12 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-blue-500 tracking-tight text-center mb-1 mt-10">
            Gallery
          </h1>
          {galleryData.map((section) => (
            <GallerySection
              key={section.title}
              title={section.title}
              images={section.images}
              onImageClick={handleImageClick}
            />
          ))}
        </main>
      </div>
      <Footer className="relative z-10" />
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default Gallery;
