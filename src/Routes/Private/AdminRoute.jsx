/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Pages/Loading";
import useUserData from "../../Hooks/useUserData";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const userData = useUserData();

  if (loading || !userData.role) {
    return <Loading />;
  }
  if (user && userData.role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
