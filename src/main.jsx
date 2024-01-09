import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/landing/home.page.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/main.css";
import LoginPage from "./pages/home/auth/login/index.jsx";

const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(
  <React.StrictMode>
    <LoginPage></LoginPage>
    {/* <HomePage title="Home Page"></HomePage> */}
  </React.StrictMode>
);
