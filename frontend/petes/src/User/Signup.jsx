import React, { useState } from "react";
import "./Signup.css";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    fetch("http://localhost:5100/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, redirect to login or another page
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div>
      <Menu />
      <div className="signup-container">
        <form
          className="signup-form"
          onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          {/* Updated class name to avoid conflicts */}
          <button
            type="submit"
            className="signup-btn-form">
            Sign Up
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default Signup;
