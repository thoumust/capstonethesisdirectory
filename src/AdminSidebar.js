
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentProfile.css";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);

  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };

  return (

<nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
<ul>
  <li>
    <a href="/admin-home" className="icon">
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
          <Link to="/admin/ip-registered/IT-cap" className="dropdown-item">IT Capstones</Link>
        </li>
        <li>
          <Link to="/admin/ip-registered/IS-cap" className="dropdown-item">IS Capstones</Link>
        </li>
        <li>
          <Link to="/admin/ip-registered/CS-thes" className="dropdown-item">CS Thesis</Link>
        </li>
      </ul>
    )}
  </li>

  {/* Other Sidebar Items */}
  <li>
    <a href="#" className="icon">
    <img src="./approval.png" alt="Approval" className="icon-image  sb-icons" />
      <span className="label">Approval</span>
    </a>
  </li>

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
  <li>
                            <a href="#" className="icon">
                                <img src="./accs.png" alt="Account Management" className="icon-image sb-icons" />
                                <span className="label">Manage Accounts</span>
                            </a>
                        </li>
</ul>
<div className="profile-section">
  <a href="/admin-profile" className="profile-button">
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

export  default AdminSidebar;
