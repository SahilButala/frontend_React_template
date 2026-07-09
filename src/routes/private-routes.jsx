
import { lazy } from "react";
import AuthGuard from "../guards/auth-guards"
import MainLayout from "../layouts/main-layout";
const HomePage = lazy(()=>import("../pages/home"))
const AboutPage = lazy(()=>import("../pages/about")) 
import { ROUTES } from "./route-paths";

const privateRoutes = {
    element: <AuthGuard />,
    children: [
        {
            element: <MainLayout />,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <HomePage />,
                },
                {
                    path: ROUTES.ABOUT,
                    element: <AboutPage />,
                },
            ],
        },
    ],
};

export default privateRoutes;