import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";
const Home = () => {
  const { displayName } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
