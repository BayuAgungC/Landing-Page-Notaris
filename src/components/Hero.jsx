import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AKTA", "SURAT", "Dll"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="hero" className="section text-white text-center">
      <div className="max-w-[800px] mx-auto flex flex-col justify-center">
        <p className="font-bold text-lg">Kantor Notaris Agus Santoso</p>
        <h1 className="text-4xl md:text-7xl font-bold my-4">Kepastian Hukum Anda</h1>
        <div className="flex justify-center items-center">
          <p className="text-xl md:text-4xl font-bold">Menyediakan layanan</p>
          <span ref={el} className="text-xl md:text-4xl font-bold pl-2"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
