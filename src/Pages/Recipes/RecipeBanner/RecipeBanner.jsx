import React from "react";
import { FaBookOpen, FaBriefcase, FaHeart } from "react-icons/fa";

const RecipeBanner = ({ chef }) => {
  const { id, picture, description, name, recipeCount, likes, experience } =
    chef;

  return (
    <div
      className="hero min-h-screen"
      style={{
        background:
          'url("https://i.ibb.co/ZxtmpYm/92323-dot-pattern-background.gif")',
      }}
    >
      <div className="hero-content md:px-12 sm:px-0  flex-col lg:flex-row-reverse">
        <img src={picture} className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <div className="card-body md:px-12 sm:px-0">
            <h2 className="font-bold">{description}</h2>
            <div className="card-body md:px-12 sm:px-0">
              <div className="flex justify-center">
                <span className="text-2xl mr-5">
                  <FaBriefcase />
                </span>{" "}
                <span>Experience: {experience} years</span>
              </div>
              <div className="flex justify-center">
                <span className=" text-2xl mr-5">
                  <FaBookOpen />
                </span>{" "}
                <span>Total Recipe: {recipeCount}</span>
              </div>
              <p className=" flex justify-center align-middle">
                <span className="text-red-400 text-2xl mr-5">
                  <FaHeart />
                </span>
                <span> Likes: {likes}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;
