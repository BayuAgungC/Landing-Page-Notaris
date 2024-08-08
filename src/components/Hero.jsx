import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="hero" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-white font-bold p-2 sm:text-4xl">Kantor Notaris Agus Santoso</p>
        <h1 className="md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
          Kepastian Hukum Anda
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Menyediakan layanan{" "}
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["AKTA", "SURAT", "Dll"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
