import React, { useState } from "react";
import "./Signin.css";
import Menu from "../Components/Menu";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signin data:", formData);
    alert("Signin successful!");
    setFormData({ email: "", password: "" });
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
