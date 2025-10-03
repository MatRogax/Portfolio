import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.classList.toggle("dark", savedTheme === "dark");

createRoot(document.getElementById("root")!).render(<App />);