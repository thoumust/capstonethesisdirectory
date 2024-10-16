
import React, { useState } from "react";
import "../../../css/StudentView/StudentProfile.css";
import { Link } from '@inertiajs/react';

const FacultySidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);


  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };


  return (

<nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
<ul>
  <li>
    <a href="/faculty-home" className="icon">
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
          <Link href="/faculty/ip-registered/IT-cap" className="dropdown-item">IT Capstones</Link>
        </li>
        <li>
          <Link href="/faculty/ip-registered/IS-cap" className="dropdown-item">IS Capstones</Link>
        </li>
        <li>
          <Link href="/faculty/ip-registered/CS-thes" className="dropdown-item">CS Thesis</Link>
        </li>
      </ul>
    )}
  </li>

  {/* Other Sidebar Items */}

  <li>
    <a href="/faculty/BestIT" className="icon">
      <img src="./best.png" alt="IT" className="icon-image sb-icons" />
      <span className="label">IT</span>
    </a>
  </li>
  <li>
    <a href="/faculty/BestIS" className="icon">
      <img src="./best.png" alt="IS" className="icon-image sb-icons" />
      <span className="label">IS</span>
    </a>
  </li>
  <li>
    <a href="/faculty/BestCS" className="icon">
      <img src="./best.png" alt="CS" className="icon-image sb-icons" />
      <span className="label">CS</span>
    </a>
  </li>
</ul>
<div className="profile-section">
  <a href="/faculty/profile" className="profile-button">
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

export  default FacultySidebar;
