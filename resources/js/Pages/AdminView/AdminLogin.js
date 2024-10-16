import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import TermsOfUseModal from "../General/TermsOfUseModal";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showTermsModal, setShowTermsModal] = useState(false);

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
          <h1>Admin Login</h1>
        </div>
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
          |<a href="/"> Student Log in </a> |
          <a href="/faculty-login"> Faculty Log in </a>
        </div>
      </div>

      {/* Render the Terms of Use Modal */}
      <TermsOfUseModal
        show={showTermsModal}
        handleClose={() => setShowTermsModal(false)}
      />
    </div>
  );
};

export default AdminLogin;
