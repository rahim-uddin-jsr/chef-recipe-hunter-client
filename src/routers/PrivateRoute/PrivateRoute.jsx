import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <h2>loading</h2>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
