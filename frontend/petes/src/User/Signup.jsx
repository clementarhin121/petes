import React, { useState } from "react";
import "./Signup.css";
import Menu from "../Components/Menu";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    alert("Signup successful!");
    setFormData({ name: "", email: "", password: "" });
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
