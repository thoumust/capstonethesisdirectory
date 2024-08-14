import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <form className="login-form">
          <h1> Admin log in</h1>

          <label>Email Address:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div className="footer">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">UST website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
