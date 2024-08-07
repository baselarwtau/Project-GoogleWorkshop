import React from "react";
import { createRoot } from "react-dom/client"; // Fixed syntax error
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root"); // Removed extra space
const root = createRoot(container);
root.render(<App />);
