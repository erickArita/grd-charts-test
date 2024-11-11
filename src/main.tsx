import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid

const rootElement = document.getElementById("root");


if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
