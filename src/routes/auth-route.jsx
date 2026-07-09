
import AuthLayout from "../layouts/auth-layout"
import Login from "../pages/auth/login";
const LoginPage = lazy(() => import("../pages/auth/login"))
const RegisterPage = lazy(() => import("../pages/auth/register"));

// import LoginPage from "../pages/auth/login"
// import RegisterPage from "../pages/auth/register"
import { ROUTES } from "../routes/route-paths";
import GuestGuard from "../guards/guest-guards";
import AuthGuard from "../guards/auth-guards";
import { lazy } from "react";

const authRoutes = {
  element: <GuestGuard />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        {
          path: ROUTES.LOGIN,
          element: <LoginPage />,
        },
        {
          path: ROUTES.REGISTER,
          element: <RegisterPage />,
        },
      ],
    },
  ],
};
export default authRoutes;