import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Correct way to import ContextProvider
import ContextProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
