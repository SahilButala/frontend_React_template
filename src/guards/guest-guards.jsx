import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {
  const {isAuthenticated} = useSelector((state)=>state.auth)
  

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestGuard;