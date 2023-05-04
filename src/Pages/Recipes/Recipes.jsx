import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ChefRecipes from "./ChefRecipes/ChefRecipes";
import RecipeBanner from "./RecipeBanner/RecipeBanner";

const Recipes = () => {
  const recipes = useLoaderData();
  const { chefsData } = useContext(AuthContext);
  const chef = chefsData.find((chef) => chef.name == recipes[0].strChefName);
  return (
    <>
      <RecipeBanner chef={chef} />
      <ChefRecipes recipes={recipes} />
    </>
  );
};

export default Recipes;
