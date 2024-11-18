import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#ffffff", // Background putih
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#500404", // Warna partikel
          },
          links: {
            enable: true,
            color: "#500404",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 3,
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Di belakang konten
      }}
    />
  );
};

export default ParticleBackground;
