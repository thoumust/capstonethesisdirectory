import React, { useState } from "react";

import "../../../css/StudentView/StudentLogin.css";
import TermsOfUseModal from "../General/TermsOfUseModal";

const StudentLogin = () => {

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate email
    if (name === "email") {
      if (!/\S+@ust\.edu\.ph$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email must be a valid UST email.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    // Validate password
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long.",
        }));
      } else if (!/[A-Z]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one uppercase letter.",
        }));
      } else if (!/[a-z]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one lowercase letter.",
        }));
      } else if (!/\d/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one number.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@ust\.edu\.ph$/.test(formValues.email)) {
      newErrors.email =
        "Email must be a valid UST email (e.g., Group10@ust.edu.ph).";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(formValues.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formValues.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(formValues.password)) {
      newErrors.password = "Password must contain at least one number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const mockDatabase = {
        email: "Group10@ust.edu.ph",
        password: "@Group10",
      };

      if (
        formValues.email === mockDatabase.email &&
        formValues.password === mockDatabase.password
      ) {
        router.visit("/student-home");
      } else {
        setErrors({ password: "Invalid email or password." });
      }
    }
  };

  const handleForgotPassword = () => {
    router.visit("/password-recovery");
  };

  const handlePrivacyPolicy = () => {
    window.location.href = "https://www.ust.edu.ph/privacy-policy/";
  };

  const handleTermsOfUse = () => {
    setShowTermsModal(true);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <div style={{ justifyContent: "center", textAlign: "center" }}>
          <h1>Student Login</h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
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
        <div className="studentfooter">
          <a href="#" onClick={handleTermsOfUse}>
            Terms of Use
          </a>{" "}
          |
          <a href="#" onClick={handlePrivacyPolicy}>
            Privacy Policy
          </a>{" "}
          |
          <a
            href="https://www.ust.edu.ph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UST website
          </a>{" "}
          |<a href="/admin-login"> Admin Log in</a> |
          <a href="/faculty-login"> Faculty Log in</a>
        </div>
      </div>
      {/* Add the Terms of Use Modal */}
      <TermsOfUseModal
        show={showTermsModal}
        handleClose={() => setShowTermsModal(false)}
      />
    </div>
  );
};

export default StudentLogin;
