import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordRecovery.css";

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate the password reset process
    if (email) {
      // Here you can add actual API integration for password reset
      setMessage("A password reset link has been sent to your email.");

      // Redirect to the login page after a delay (e.g., 3 seconds)
      setTimeout(() => {
        navigate("/"); // Redirect to the StudentLogin page
      }, 3000);
    }
  };

  const handleBackToLogin = () => {
    navigate("/"); // Redirect to the StudentLogin page immediately
  };

  return (
    <div className="password-recovery-container">
      <div className="header">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h1>College of Information and Computing Sciences</h1>
        <h2>Capstone Projects and Thesis Papers Directory</h2>
      </div>
      <div className="recovery-form-container">
        <h3>Password Recovery</h3>
        <p>
          Enter your registered email address to receive a link to reset your
          password.
        </p>
        <form className="recovery-form" onSubmit={handleSubmit}>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
        {message && <p className="success-text">{message}</p>}
        <a href="#" className="back-to-login" onClick={handleBackToLogin}>
          Return to login page
        </a>
      </div>
      <footer className="footer">
        <p>UST Blessed Pier Giorgio Frassati Building</p>
        <p>España Blvd, Sampaloc, Manila, 1000 Metro Manila</p>
        <div className="footer-links">
          <a href="#">Terms of Use</a> |<a href="#">Privacy Policy</a> |
          <a href="#">UST website</a> |<a href="/admin-login">Admin Log in</a> |<a href="/faculty-login">Faculty Log in</a>
        </div>
      </footer>
    </div>
  );
};

export default PasswordRecovery;
