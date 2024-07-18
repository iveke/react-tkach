import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "GlobalStyle.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persister, store } from "./redux/store";
import Account from "components/Account/Account";
import Theme from "components/Theme/Theme";
import { PersistGate } from "redux-persist/integration/react";
export const rootModal = document.querySelector("#modals");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter basename="mysite">
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persister}>
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    {/* <Account />
    <Theme /> */}
  </Provider>
);
