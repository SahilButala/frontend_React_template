
import AuthLayout from "../layouts/auth-layout"
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import { ROUTES } from "../routes/route-paths";
import GuestGuard from "../guards/guest-guards";
import AuthGuard from "../guards/auth-guards";

const authRoutes = {
  element: <GuestGuard />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        {
          path: ROUTES.LOGIN,
          element: <Login />,
        },
        {
          path: ROUTES.REGISTER,
          element: <Register />,
        },
      ],
    },
  ],
};
export default authRoutes;