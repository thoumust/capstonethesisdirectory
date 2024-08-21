import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <div style={{justifyContent: "center", textAlign:"center"}}><h1>Admin Login</h1></div>
        <form className="login-form">

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
        <div className="adminfooter">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">UST website</a>  |<a href="/"> Student Log in </a> |<a href="/faculty-login"> Faculty Log in </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
