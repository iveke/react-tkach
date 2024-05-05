import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import CompRef from "CompRef";
import Quation from "Quation";
import GlobalStyle from "GlobalStyle.jsx";
import Theme from "components/Theme/Theme";
import { BrowserRouter } from "react-router-dom";
export const rootModal = document.querySelector("#modals");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter basename="mysite">
      <GlobalStyle />
      <App />
      {/* <Theme /> */}
    </BrowserRouter>

    {/* <Quation /> */}
    {/* <CompRef />
    <App /> */}
  </>
);
