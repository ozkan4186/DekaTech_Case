import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import ProfileDetail from "./pages/ProfileDetail";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import Footer from "./components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
