import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>PetesTravels</h3>
          <p>Explore more. Travel better.</p>
        </div>

        <ul className="footer-links">
          <li>Home</li>
          <li>Destinations</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">🐦</a>
          <a href="#">📸</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PetesTravels
      </div>
    </footer>
  );
};

export default Footer;
