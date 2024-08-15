import React from 'react';
import './PasswordRecovery.css';
import StudentLogin from "./StudentLogin";

const PasswordRecovery = () => {
    return (
        <div className="password-recovery-container">
            <div className="header">
                <img src="/logo.png" alt="College Logo" className="logo" />
                <h1>College of Information and Computing Sciences</h1>
                <h2>Capstone Projects and Thesis Papers Directory</h2>
            </div>
            <div className="recovery-form-container">
                <h3>Password Recovery</h3>
                <p>Enter your registered email address to receive a link to reset your password</p>
                <form className="recovery-form">
                    <label>Email Address:</label>
                    <input type="email" name="email" required />
                    <button type="submit" className="reset-button">Reset Password</button>
                </form>
                <a href="<StudentLogin/>" className="back-to-login">Return to login page</a>
            </div>
            <footer className="footer">
                <p>UST Blessed Pier Giorgio Frassati Building</p>
                <p>España Blvd, Sampaloc, Manila, 1000 Metro Manila</p>
                <div className="footer-links">
                    <a href="#">Terms of Use</a> | 
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">UST website</a>
                </div>
            </footer>
        </div>
    );
};

export default PasswordRecovery;
