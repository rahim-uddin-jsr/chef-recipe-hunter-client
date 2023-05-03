import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Recipes from "../../Pages/Recipes/Recipes";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      {
        path: "/recipes/:chefName",
        element: <PrivateRoute children={<Recipes />}></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.chefName}`),
      },
    ],
  },
]);
export default router;
