import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {
  const isAuthenticated = false; // Redux or token

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestGuard;