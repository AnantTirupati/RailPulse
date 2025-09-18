import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("railcontrol_auth_token");
  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
