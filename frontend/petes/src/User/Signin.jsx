import React, { useState } from "react";
import "./Signin.css";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:5100/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, redirect to another page upon successful signin
      });
    navigate("/");
    e.preventDefault();
  };

  return (
    <div>
      <Menu />
      <div className="signin-container">
        <form
          className="signin-form"
          onSubmit={handleSubmit}>
          <h2>Sign In</h2>

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

          <button
            type="submit"
            className="signin-btn-form">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
