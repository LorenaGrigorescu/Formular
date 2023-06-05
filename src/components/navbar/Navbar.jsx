import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/profile.png";
import searchImage from "../../../assets/search.png";
import logoutImage from "../../../assets/logout.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/profile">
          <img src={profileImage} alt="Profile" />
        </Link>
        <Link to="/search">
          <img src={searchImage} alt="Search" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <img src={logoutImage} alt="Logout" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
