import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import ProfileDetail from "./pages/ProfileDetail";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
