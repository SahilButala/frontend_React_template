
import AuthLayout from "../layouts/auth-layout"
import Login from "../pages/auth/login";
const LoginPage = lazy(() => import("../pages/auth/login"))
const RegisterPage = lazy(() => import("../pages/auth/register"));

import  frontend_paths  from "../config/frontend-route-paths";
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
          path: frontend_paths.LOGIN,
          element: <LoginPage />,
        },
        {
          path: frontend_paths.REGISTER,
          element: <RegisterPage />,
        },
      ],
    },
  ],
};
export default authRoutes;