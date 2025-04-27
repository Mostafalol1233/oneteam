import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add support for Arabic language and RTL
document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";

createRoot(document.getElementById("root")!).render(<App />);
