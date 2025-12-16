// Menu.jsx
import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="menu">
      <a href="/">
        <div className="logo">PetesTravelsTrips</div>
      </a>

      <div
        className="hamburger"
        onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <a href="/destinations">
          {" "}
          <li>Destinations</li>
        </a>
        <li>Packages</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
