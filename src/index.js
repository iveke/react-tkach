import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "GlobalStyle.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Account from "components/Account/Account";
export const rootModal = document.querySelector("#modals");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter basename="mysite">
      <GlobalStyle />
      <Provider store={store}>
      <App />
      </Provider>
     
    </BrowserRouter>
    <Account />
  </Provider>
);
