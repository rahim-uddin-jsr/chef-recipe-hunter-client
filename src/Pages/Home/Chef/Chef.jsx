import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  console.log(chef);
  const { id, picture, name, recipeCount, likes, experience } = chef;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="h-[350px]">
        <img className="w-full h-full" src={picture} />
      </figure>
      <div className="card-body border">
        <h2 className="card-title mx-auto">{name}</h2>
        <div className="flex justify-evenly">
          <span>Experience: {experience} years</span>
          <span>Total Recipe: {recipeCount}</span>
        </div>
        <p className=" flex justify-center align-middle mt-4">
          <span className="text-red-400 text-2xl mr-5">
            <FaHeart />
          </span>
          <span> Likes: {likes}</span>
        </p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/recipes/${id}`}>
            <button className="btn btn-primary">View My Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
