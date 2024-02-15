import React from "react";
import carPng from "../../assets/car.png";

const Hero = () => {
  return (
    <div
      className="dark:bg-black 
    dark:text-white duration-300"
    >
      <div className="container min-h-[620px]">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div>
            <img src={carPng} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
