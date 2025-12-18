import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import { UserContext } from "../Contexts/UserContext.jsx";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="menu">
      <Link to="/">
        <div className="logo">PetesTravelsTrips</div>
      </Link>

      {user ? (
        <button className="username">Hi, {user.name} 👋</button>
      ) : (
        <button
          className="username"
          onClick={() => navigate("/signin")}>
          Sign In
        </button>
      )}

      <div
        className="hamburger"
        onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/destinations")}>Destinations</li>
        <li>Packages</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Menu;
