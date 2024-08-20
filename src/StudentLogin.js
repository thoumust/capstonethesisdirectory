import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate fields as the user types
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email address is invalid.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic email validation
    if (!formValues.email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Password validation
    if (!formValues.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
      // Assuming login is successful, redirect to StudentHome
      navigate("/student-home");
    }
  };

  const handleForgotPassword = () => {
    navigate("/password-recovery");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Student Login</h1>

          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <a
            href="#"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div className="register-section">
          <span>Don't have an Account? </span>
          <a href="/student-register" className="register-link">
            Register Here!
          </a>
        </div>
        <div className="footer">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">UST website</a>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
