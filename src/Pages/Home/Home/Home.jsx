import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Home = () => {
  const { displayName } = useContext(AuthContext);
  console.log(displayName);
  return (
    <div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
