import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, themes } from "@frontend/ui";
import * as ReactDOMClient from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.adminPortal}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
