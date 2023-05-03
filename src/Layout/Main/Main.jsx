import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import NavigationBar from "../../shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavigationBar />
      <div className="my-auto">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
