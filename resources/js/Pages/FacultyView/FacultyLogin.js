import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StudentView/StudentLogin.css";
import TermsOfUseModal from "../General/TermsOfUseModal";

const FacultyLogin = () => {
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
          <h1>Faculty Login</h1>
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
        <div className="divider">or</div>
        <div className="g-signin2" data-onsuccess="onSignIn">
          <button className="google-button">Sign in with Google</button>
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
          <a href="/"> Student Log in</a>
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

export default FacultyLogin;
