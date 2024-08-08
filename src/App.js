import React from "react";
import ProjectRoutes from "./Routes"; // Ensure this matches the filename of your routes file
import { BrowserRouter as Router } from "react-router-dom";
import {ChildProvider} from "./context/ChildContext";

function App() {
    return (
        <ChildProvider>
            <Router>
                 <ProjectRoutes />
            </Router>
        </ChildProvider>
    );
}

export default App;
