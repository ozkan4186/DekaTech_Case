import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-bold">
        User Profiles
      </Link>
      <div>
        <Link to="/profiles" className="text-white mr-4">
          Profile List
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
