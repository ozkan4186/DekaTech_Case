import React from "react";

import "./App.css";

import AppRouter from "./AppRouter";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppRouter />
      </div>
    </UserProvider>
  );
}

export default App;
