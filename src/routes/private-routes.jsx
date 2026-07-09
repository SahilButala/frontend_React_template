
import { lazy } from "react";
import AuthGuard from "../guards/auth-guards"
import MainLayout from "../layouts/main-layout";
const HomePage = lazy(()=>import("../pages/home"))
const AboutPage = lazy(()=>import("../pages/about")) 
import frontend_paths from "../config/frontend-route-paths";

const privateRoutes = {
    element: <AuthGuard />,
    children: [
        {
            element: <MainLayout />,
            children: [
                {
                    path: frontend_paths.HOME,
                    element: <HomePage />,
                },
                {
                    path: frontend_paths.ABOUT,
                    element: <AboutPage />,
                },
            ],
        },
    ],
};

export default privateRoutes;