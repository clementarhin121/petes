import React, { useState, useEffect } from "react";
import "./Destinations.css";
import Menu from "../Components/Menu";

const Destinations = () => {
  const [dest, setDest] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/data") // <-- Use service name inside Docker
      .then((response) => response.json())
      .then((data) => setDest(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Menu />
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {dest.map((item, index) => (
            <div
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
    </div>
  );
};

export default Destinations;
