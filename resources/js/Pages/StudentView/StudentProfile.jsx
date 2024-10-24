import React, { useState } from "react";

import "../../../css/StudentView/StudentProfile.css";
import StudentSidebar from "./StudentSidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";

const StudentProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);



  // Mock user data (normally this would come from a backend or authentication context)
  const userData = {
    email: "student@example.com",
    studentId: "202300001",
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    // Perform the password change logic here (API call, etc.)
    setSuccess("Password changed successfully.");
    setError("");
  };

  const handleCancel = () => {
    // Reset all form values to their initial state
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  };

  return (
    <div className="admin-home">
        <Header/>
      <div className="content-container">
      <StudentSidebar/>
        <main className="main-content">
          <h1>Hello, student!</h1>
          <div className="change-password-form">
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Email Address:</label>
                <input type="email" value={userData.email} disabled />
              </div>
              <div className="form-group">
                <label>Student ID:</label>
                <input type="text" value={userData.studentId} disabled />
              </div>
              <div className="form-group">
                <label>Current Password:</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-text">{error}</p>}
              {success && <p className="success-text">{success}</p>}
              <div className="form-actions">
                <button type="submit" className="change-password-button">
                  Change Password
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default StudentProfile;
