import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import NavigationBar from "../../shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="my-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
