import React from "react";
import {useRoutes} from "react-router-dom";
import DesktopTwo from "./pages/DesktopTwo";
import DesktopThree from "./pages/DesktopThree";

import DesktopTenPage from "./pages/DesktopTen";
import DesktopOnePage from "./pages/DesktopOne";
import Login from "./pages/Login";
import DesktopSixteenPage from "./pages/DesktopSixteen";
import DesktopSeventeenPage from "./pages/DesktopSeventeen";
import About from "./pages/Abouts";
import DesktopTwentyPage from "./pages/DesktopTwenty";
import DesktopTwentyTwo from "./pages/DesktopTwentyTwo";
import DesktopTwentyThreePage from "./pages/DesktopTwentyThree";


const ProjectRoutes = () => {
    return useRoutes([
        {path: "/", element: <DesktopOnePage/>},
        {path: "/login", element: <Login/>},
        {path: "/home", element: <DesktopOnePage/>},
        {path: "/product", element: <DesktopTwo/>},
        {path: "/assest", element: <DesktopThree/>},
        {path: "/result", element: <DesktopTenPage/>},
        {path: "/addGifts", element: <DesktopSixteenPage/>},
        {path: "/children", element: <DesktopSeventeenPage/>},
        {path: "/about", element: <About/>},
        {path: "/addChild", element: <DesktopTwentyPage/>},
        {path: "/thanks", element: <DesktopTwentyTwo/>},
        {path: "/invite", element: <DesktopTwentyThreePage/>},

    ]);
};

export default ProjectRoutes;
