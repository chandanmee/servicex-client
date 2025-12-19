import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";
import { AppProvider } from "./app/provider";
import App from "./app/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
