import React from "react";
import banner1 from "../../../assets/banner/banner-1.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-[650px]"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            MEXICAN FOODS TO MAKE AT HOME
          </h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
