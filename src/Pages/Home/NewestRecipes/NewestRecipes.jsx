import React, { useEffect, useState } from "react";
import Recipe from "../../Recipes/Recipe/Recipe";

const NewestRecipes = () => {
  const [showAll, setShowAll] = useState(false);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://foodie-crush-server-dev-rahim.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div>
      <h1 className="my-24 text-3xl font-bold uppercase">Our Recipes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
        {!showAll &&
          recipes
            .slice(0, 6)
            .map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
        {showAll &&
          recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
      </div>
      {!showAll && (
        <button
          className="my-8 btn btn-primary mx-auto btn-lg"
          onClick={handleShowAll}
        >
          Show All Recipes
        </button>
      )}
    </div>
  );
};

export default NewestRecipes;
