import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const [readMore, setReadMore] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, strMealThumb, strInstructions, strRating, strCategory, strMeal } =
    recipe;
  const handleFavorite = (id) => {
    toast.success("Successfully added to favorite");
    setIsFavorite(true);
    console.log(id);
  };
  const keysOfRecipe = Object.keys(recipe);

  let ingredients = [];
  keysOfRecipe.map(
    (keys) => keys.includes("strIngredient") && ingredients.push(keys)
  );
  let measures = [];
  keysOfRecipe.map(
    (keys) => keys.includes("strMeasure") && measures.push(keys)
  );
  console.log(ingredients);
  return (
    <div className="card md:w-96 w-[250px] bg-base-100 shadow-xl">
      <figure>
        <LazyLoad  >
          <img src={strMealThumb} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">{strMeal}</h2>
        <h4 className="text-left opacity-60 font-thin mt-0">{strCategory}</h4>
        <div className="text-justify">
          {" "}
          <h2 className="text-xl text-center mb-5">Instruction: </h2>
          {!readMore && strInstructions.slice(0, 180)}
          {readMore && strInstructions}
          <span
            onClick={() => {
              setReadMore(!readMore);
            }}
            className=" btn-sm btn-link inline cursor-pointer"
          >
            {readMore ? "Read Less" : "Read More"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div style={{ maxWidth: 180, width: "100%" }}>
            <Rating readOnly value={strRating} />
          </div>
        </div>
        <div className="">
          <h2 className="text-xl mb-5">Ingredients</h2>

          <div className="text-left flex justify-between">
            <ul>
              {ingredients.map((ingredient, idx) => (
                <>
                  <li key={idx}>{recipe[ingredient]}</li>
                  <hr />
                </>
              ))}
            </ul>
            <ul>
              {measures.map((measure, idx) => (
                <>
                  <li key={idx}>{recipe[measure]}</li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        </div>
        {isFavorite ? (
          <div className="card-actions mt-auto justify-center">
            <button
              onClick={() => {
                handleFavorite(id);
              }}
              disabled
              className="btn btn-secondary"
            >
              {" "}
              <span className="mr-4">
                <FaHeart></FaHeart>
              </span>{" "}
              Added To favorite
            </button>
          </div>
        ) : (
          <div className="card-actions mt-auto justify-center">
            <button
              onClick={() => {
                handleFavorite(id);
              }}
              className="btn btn-secondary"
            >
              {" "}
              <span className="mr-4">
                <FaHeart></FaHeart>
              </span>{" "}
              Add To favorite
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
