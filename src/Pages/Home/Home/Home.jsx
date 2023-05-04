import React from "react";
import Banner from "../Banner/Banner";
import ChefSection from "../ChefSection/ChefSection";
import NewestRecipes from "../NewestRecipes/NewestRecipes";
import Subscribe from "./Subscribe/Subscribe";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection />
      <NewestRecipes />
      <Subscribe />
    </div>
  );
};

export default Home;
