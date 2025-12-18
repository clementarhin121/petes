import React, { useState, useEffect, use } from "react";
import "./Destinations.css";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Destinations = () => {
  const [dest, setDest] = useState([]);

  const nav = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5100/data") // <-- Use service name inside Docker
      .then((response) => response.json())
      .then((data) => setDest(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function lead(id) {
    nav(`/city/${id}`);
  }

  return (
    <div>
      <Menu />
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {dest.map((item, index) => (
            <div
              onClick={(id) => lead(item.id)}
              className="card"
              key={index}>
              <img
                src={item.image_url}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Destinations;
