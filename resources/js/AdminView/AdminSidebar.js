
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../StudentView/StudentProfile.css";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);
  const [isApprovalDropdownOpen, setIsApprovalDropdownOpen] = useState(false);


  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };

  const toggleApprovalDropdown = () => {
    setIsApprovalDropdownOpen(!isApprovalDropdownOpen);
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
  {/* Approval with Dropdown */}
  <li>
    <div className="icon" onClick={toggleApprovalDropdown} style={{ cursor: "pointer" }}>
      <img
        src="./approval.png"
        alt="Approval"
        className="icon-image sb-icons"
      />
      <span className="label"> Pendings </span>
      <span className="dropdown-arrow">{isApprovalDropdownOpen ? "▲" : "▼"}</span>
    </div>
    {isApprovalDropdownOpen && (
      <ul className="dropdown-list">
        <li>
          <Link to="/admin/approval-IT" className="dropdown-item">IT Capstones</Link>
        </li>
        <li>
          <Link to="/admin/approval-IS" className="dropdown-item">IS Capstones</Link>
        </li>
        <li>
          <Link to="/admin/approval-CS" className="dropdown-item">CS Thesis</Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <a href="/admin/BestIT" className="icon">
      <img src="./best.png" alt="IT" className="icon-image sb-icons" />
      <span className="label">IT</span>
    </a>
  </li>
  <li>
    <a href="/admin/BestIS" className="icon">
      <img src="./best.png" alt="IS" className="icon-image sb-icons" />
      <span className="label">IS</span>
    </a>
  </li>
  <li>
    <a href="/admin/BestCS" className="icon">
      <img src="./best.png" alt="CS" className="icon-image sb-icons" />
      <span className="label">CS</span>
    </a>
  </li>
  <li>
                            <a href="/admin/roles" className="icon">
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
