import React, { useContext } from "react";
import "./Home.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext.jsx"; // ✅ import context

const Home = () => {
  const nav = useNavigate();
  const { user } = useContext(UserContext); // ✅ get current user

  const signup = () => nav("/signup");
  const explore = () => nav("/destinations");
  const signin = () => nav("/signin");

  return (
    <>
      <div className="homeBody">
        <Menu />

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Explore the World with TravelMate</h1>
            <p>Find your next adventure and make unforgettable memories.</p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={explore}>
                Explore Destinations
              </button>
              <button className="btn-secondary">Book Now</button>
            </div>

            {/* Auth Buttons only if user is NOT logged in */}
            {!user && (
              <div className="hero-auth">
                <button
                  onClick={signin}
                  className="btn-signin">
                  Sign In
                </button>
                <button
                  onClick={signup}
                  className="btn-signup">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="destinations">
          <h2>Featured Destinations</h2>
          <div className="destination-cards">
            <div className="card">
              <img
                src="https://www.tullyluxurytravel.com/wp-content/uploads/2019/05/AdobeStock_44313077.jpeg"
                alt="Paris"
              />
              <h3>Paris</h3>
              <p>The city of lights and love awaits you.</p>
            </div>

            <div className="card">
              <img
                src="https://www.maldivescalling.com/system/images/000/567/579/285b40b92886c2dbb6693ce6ce0a2a65/banner/The-Standard-Spa_The-Standard-Huruvalhi-Maldives.jpg"
                alt="Maldives"
              />
              <h3>Maldives</h3>
              <p>Relax on pristine beaches and turquoise waters.</p>
            </div>

            <div className="card">
              <img
                src="https://www.michitravel.com/accommodation/accommodation_peninsula_entrance4.jpg"
                alt="Tokyo"
              />
              <h3>Tokyo</h3>
              <p>Experience vibrant culture and modern wonders.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
