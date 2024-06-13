import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import AppRouter from "./AppRouter";
import { UserProvider } from "./contexts/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App>
        <AppRouter />
      </App>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
