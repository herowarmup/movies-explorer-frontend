import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
  if (loggedIn) {
    return <Component loggedIn={loggedIn} {...props} />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;
