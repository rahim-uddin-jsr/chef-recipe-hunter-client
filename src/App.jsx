import { useContext } from "react";
import { Rings } from "react-loader-spinner";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthProvider/AuthProvider";
import router from "./routers/router/router";

function App() {
  const { isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <Rings
          height="180"
          width="180"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
