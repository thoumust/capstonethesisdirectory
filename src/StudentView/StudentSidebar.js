import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

const StudentSidebar = () => {
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
          <a href="/student-home" className="icon">
            <img src="/home.png" alt="Home" className="icon-image sb-icons" />
            <span className="label">Home</span>
          </a>
        </li>

        {/* IP Registered with Dropdown */}
        <li>
          <div
            className="icon"
            onClick={toggleIPDropdown}
            style={{ cursor: "pointer" }}
          >
            <img
              src="./manage.png"
              alt="Manage"
              className="icon-image sb-icons"
            />
            <span className="label"> IP registered</span>
            <span className="dropdown-arrow">
              {isIPDropdownOpen ? "▲" : "▼"}
            </span>
          </div>
          {isIPDropdownOpen && (
            <ul className="dropdown-list">
              <li>
                <a href="/ip-registered/IT-cap" className="dropdown-item">
                  IT Capstones
                </a>
              </li>
              <li>
                <a href="/ip-registered/IS-cap" className="dropdown-item">
                  IS Capstones
                </a>
              </li>
              <li>
                <a href="/ip-registered/CS-thes" className="dropdown-item">
                  CS Thesis
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Other Sidebar Items */}
        <li>
          <a href="/best-it" className="icon">
            <img src="./best.png" alt="IT" className="icon-image sb-icons" />
            <span className="label">IT</span>
          </a>
        </li>
        <li>
          <a href="/best-is" className="icon">
            <img src="./best.png" alt="IS" className="icon-image sb-icons" />
            <span className="label">IS</span>
          </a>
        </li>
        <li>
          <a href="/best-cs" className="icon">
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

export default StudentSidebar;
