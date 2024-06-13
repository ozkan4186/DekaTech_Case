import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import "./App.css";

import AppRouter from "./AppRouter";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppRouter />
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;
