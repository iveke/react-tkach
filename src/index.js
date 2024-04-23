import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import CompRef from "CompRef";
import Quation from "Quation";
// import { GlobalStyle } from 'GlobalStyle.jsx';
export const rootModal = document.querySelector("#modals");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Quation />
    {/* <CompRef />
    <App /> */}
  </>
);


