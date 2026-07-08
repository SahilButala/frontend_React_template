import { Navigate, Outlet } from "react-router-dom";



const AuthGuard = () => {
  const isAuthenticated = true; // Redux or token

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;