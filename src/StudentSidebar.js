
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

const StudentSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Mock user data (normally this would come from a backend or authentication context)
  const userData = {
    email: "student@example.com",
    studentId: "202300001",
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate("/");
  };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
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

<nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
<ul>
  <li>
    <a href="/student-home" className="icon">
      <img
        src="/home.png"
        alt="Home"
        className="icon-image sb-icons"
      />
      <span className="label">Home</span>
    </a>
  </li>

  {/* IP Registered with Dropdown */}
  <li>
    <div className="icon" onClick={toggleIPDropdown} style={{ cursor: "pointer" }}>
      <img
        src="./manage.png"
        alt="Manage"
        className="icon-image sb-icons"
      />
      <span className="label">  IP registered</span>
      <span className="dropdown-arrow">{isIPDropdownOpen ? "▲" : "▼"}</span>
    </div>
    {isIPDropdownOpen && (
      <ul className="dropdown-list">
        <li>
          <a href="/ip-registered/ITipreg" className="dropdown-item">IT Capstones</a>
        </li>
        <li>
          <a href="/ip-registered/ISipreg" className="dropdown-item">IS Capstones</a>
        </li>
        <li>
          <a href="/ip-registered/CSipreg" className="dropdown-item">CS Thesis</a>
        </li>
      </ul>
    )}
  </li>

  {/* Other Sidebar Items */}
  <li>
    <a href="#" className="icon">
      <img src="./best.png" alt="IT" className="icon-image sb-icons" />
      <span className="label">IT</span>
    </a>
  </li>
  <li>
    <a href="#" className="icon">
      <img src="./best.png" alt="IS" className="icon-image sb-icons" />
      <span className="label">IS</span>
    </a>
  </li>
  <li>
    <a href="#" className="icon">
      <img src="./best.png" alt="CS" className="icon-image sb-icons" />
      <span className="label">CS</span>
    </a>
  </li>
</ul>
<div className="profile-section">
  <a href="/student-profile" className="profile-button">
    <img
      src="./profile.png"
      alt="Profile"
      className="icon-image sb-icons"
    />
    <span className="label">Profile</span>
  </a>
</div>
</nav>
  );
};

export  default StudentSidebar;
