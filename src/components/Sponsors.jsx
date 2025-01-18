import React from 'react';
import './css/Sponsors.css';

const Sponsors = () => {
  const learningPartner = {
    name: "EC-Council",
    logo: "https://raw.githubusercontent.com/cutiepie2468/phxwebpic/refs/heads/main/ec-council.jpg",
    type: "Learning Partner"
  };

  return (
    <div className="sponsors-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Learning Partner</h2>
        <p className="text-center text-white/80 mb-8">Empowering our community with world-class cybersecurity education</p>
        <div className="flex justify-center">
          <div className="max-w-[400px]">
            <div className="sponsor-item">
              <div className="sponsor-logo bg-white/10 rounded-lg p-8 flex items-center justify-center">
                <img 
                  src={learningPartner.logo} 
                  alt={`${learningPartner.name} Logo`} 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-medium text-xl">{learningPartner.name}</p>
                <p className="text-white/80 text-sm mt-1">{learningPartner.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
