import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { AppProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
