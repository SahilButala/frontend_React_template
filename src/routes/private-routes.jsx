
import AuthGuard from "../guards/auth-guards"
import MainLayout from "../layouts/main-layout";
import About from "../pages/about";
import Home from "../pages/home";
import { ROUTES } from "./route-paths";

const privateRoutes = {
    element: <AuthGuard />,
    children: [
        {
            element: <MainLayout />,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home />,
                },
                {
                    path: ROUTES.ABOUT,
                    element: <About />,
                },
            ],
        },
    ],
};

export default privateRoutes;