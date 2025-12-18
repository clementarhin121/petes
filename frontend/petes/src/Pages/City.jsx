import React, { useEffect, useState } from "react";
import "./City.css";
import Menu from "../Components/Menu";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";

const City = () => {
  const { id } = useParams();
  const [city, setCity] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5100/city/${id}`)
      .then((response) => response.json())
      .then((data) => setCity(data[0]))
      .catch((error) => console.error("Error fetching city data:", error));
  }, []);

  return (
    <div className="cityBody">
      <Menu />
      <section className="About-city">
        <div className="city-content">
          <p>
            <h2>{city.name}</h2>
            {city.description}
          </p>
        </div>
        <div className="city">
          <img
            src={city.image_url}
            alt={city.name}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default City;
