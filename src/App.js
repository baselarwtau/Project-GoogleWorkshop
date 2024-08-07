import React from "react";
import ProjectRoutes from "./Routes"; // Ensure this matches the filename of your routes file
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <ProjectRoutes />
        </Router>
    );
}

export default App;
