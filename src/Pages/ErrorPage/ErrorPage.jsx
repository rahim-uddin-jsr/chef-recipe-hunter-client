import Lottie from "lottie-react";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

import theRobotBrokeAnd404Error from "../../../public/119322-the-robot-broke-and-404-error.json";
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  const { error, status } = useRouteError();
  return (
    <div className="  ">
      <div className="w-48 md:w-96 mx-auto my-12">
        <Lottie animationData={theRobotBrokeAnd404Error} loop={true}></Lottie>
      </div>
      <span className="text-5xl mt-5 font-bold text-accent">{status}</span>
      <br />
      <br />
      <span className="text-2xl mt-5">{error.message}</span> <br />
      <br />
      <button
        className="btn btn-accent btn-lg text-white"
        onClick={handleBackHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
