import React from "react";
import { useRoutes } from "react-router-dom";
import DesktopTwo from "./pages/DesktopTwo";
import DesktopThree from "./pages/DesktopThree";

import DesktopTenPage from "./pages/DesktopTen";
import DesktopOnePage from "./pages/DesktopOne";
import Login from "./pages/Login";
import DesktopSixteenPage from "./pages/DesktopSixteen";
import DesktopSeventeenPage from "./pages/DesktopSeventeen";
import About from "./pages/Abouts";
import DesktopEighteenPage from "./pages/DesktopEighteen";
import DesktopNineteenPage from "./pages/DesktopNineTeen";
import DesktopTwentyPage from "./pages/DesktopTwenty";
import DesktopTwentyTwo from "./pages/DesktopTwentyTwo";
import DesktopTwentyThreePage from "./pages/DesktopTwentyThree";



const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/one", element: <DesktopOnePage /> },
        { path: "/two", element: <DesktopTwo /> },
        { path: "/assest", element: <DesktopThree /> },
        { path: "/result", element: <DesktopTenPage /> },
        { path: "/addGifts", element: <DesktopSixteenPage /> },
        { path: "/seventeen", element: <DesktopSeventeenPage /> },
        { path: "/about", element: <About /> },
        { path: "/addChild", element: <DesktopTwentyPage /> },
        { path: "/twentytwo", element: <DesktopTwentyTwo /> },
        { path: "/twentythree", element: <DesktopTwentyThreePage /> },

    ]);

    return element;
};

export default ProjectRoutes;
