import React, { useState, useContext } from "react";
import "./Signin.css";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext.jsx";

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5100/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert("Invalid credentials or server error");
        return;
      }

      const data = await response.json().catch(() => null);

      if (!data || !data.user) {
        alert("Login failed: server did not return user");
        return;
      }

      // Save user in context
      login(data.user);

      // Redirect AFTER login
      navigate("/");
    } catch (err) {
      console.error("Signin error:", err);
      alert("Network or server error");
    }
  };

  return (
    <div>
      <Menu />
      <div className="signin-container">
        <form
          className="signin-form"
          onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
