import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
