import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Recipes = () => {
  const recipes = useLoaderData();
  const { chefsData } = useContext(AuthContext);
  console.log({ chefsData });
  console.log({ recipes });
  const chef = chefsData.find((chef) => chef.name == recipes[0].strChefName);
  console.log(chef);
  return (
    <div>
      <h2>My recipes</h2>
    </div>
  );
};

export default Recipes;
