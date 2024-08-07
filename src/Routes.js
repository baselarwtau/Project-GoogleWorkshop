import React from "react";
import { useRoutes } from "react-router-dom";
import DesktopTwo from "./pages/DesktopTwo";
import DesktopThree from "./pages/DesktopThree";
import DesktopFour from "./pages/DesktopFour";
import DesktopFive from "./pages/DesktopFive";
import DesktopSix from "./pages/DesktopSix";
import DesktopSevenPage from "./pages/DesktopSeven";
import DesktopEight from "./pages/DesktopEight";
import DesktopNine from "./pages/DesktopNine";
import DesktopTenPage from "./pages/DesktopTen";
import DesktopOnePage from "./pages/DesktopOne";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ChildrenPage from "./pages/Children";
import DesktopSeventeenPage from "./pages/DesktopSeventeen";
import About from "./pages/Abouts";
import DesktopEighteenPage from "./pages/DesktopEighteen";
import DesktopNineteenPage from "./pages/DesktopNineTeen";
import DesktopTwentyPage from "./pages/DesktopTwenty";
import DesktopTwentyThreePage from "./pages/DesktopTwentyThree";



const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/one", element: <DesktopOnePage /> },
        { path: "/two", element: <DesktopTwo /> },
        { path: "/three", element: <DesktopThree /> },
        { path: "/four", element: <DesktopFour /> },
        { path: "/five", element: <DesktopFive /> },
        { path: "/six", element: <DesktopSix /> },
        { path: "/seven", element: <DesktopSevenPage /> },
        { path: "/eight", element: <DesktopEight /> },
        { path: "/nine", element: <DesktopNine /> },
        { path: "/ten", element: <DesktopTenPage /> },
        { path: "/seventeen", element: <DesktopSeventeenPage /> },
        { path: "/about", element: <About /> },
        { path: "/twenty", element: <DesktopTwentyPage /> },
        { path: "/twenty", element: <DesktopTwentyPage /> },
        { path: "/twentythree", element: <DesktopTwentyThreePage /> },

    ]);

    return element;
};

export default ProjectRoutes;
