import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/landing/home.page.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";

const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(
  <React.StrictMode>
    <HomePage title="Home Page"></HomePage>
  </React.StrictMode>
);
