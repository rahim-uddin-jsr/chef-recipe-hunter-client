import React from "react";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = ({ recipes }) => {
  return (
    <div>
      <h1 className="my-24 text-3xl font-bold uppercase">Recipes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
