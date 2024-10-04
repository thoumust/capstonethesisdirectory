import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../StudentView/StudentProfile.css";

const Sidebar = ({ role }) => {
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
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? "←" : "→"}
      </div>
      <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          {/* Home Link - Common for all roles */}
          <li>
            <Link to={`/${role}-home`} className="icon">
              <img src="/home.png" alt="Home" className="icon-image sb-icons" />
              <span className="label">Home</span>
            </Link>
          </li>

          {/* IP Registered Section (Dropdown) - Common for all roles */}
          <li>
            <div className="icon" onClick={toggleIPDropdown} style={{ cursor: "pointer" }}>
              <img src="./manage.png" alt="Manage" className="icon-image sb-icons" />
              <span className="label">IP Registered</span>
              <span className="dropdown-arrow">{isIPDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {isIPDropdownOpen && (
              <ul className="dropdown-list">
                <li>
                  <Link to={`/${role}/ip-registered/IT-cap`} className="dropdown-item">IT Capstones</Link>
                </li>
                <li>
                  <Link to={`/${role}/ip-registered/IS-cap`} className="dropdown-item">IS Capstones</Link>
                </li>
                <li>
                  <Link to={`/${role}/ip-registered/CS-thes`} className="dropdown-item">CS Thesis</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Conditionally Rendered Items Based on Role */}
          {role === "admin" && (
            <>
              {/* Admin-only items */}
              <li>
                <div className="icon" onClick={toggleApprovalDropdown} style={{ cursor: "pointer" }}>
                  <img src="./approval.png" alt="Approval" className="icon-image sb-icons" />
                  <span className="label">Pendings</span>
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
                <Link to="/admin/roles" className="icon">
                  <img src="./accs.png" alt="Manage Accounts" className="icon-image sb-icons" />
                  <span className="label">Manage Accounts</span>
                </Link>
              </li>
            </>
          )}

          {/* Best Projects Section (Common for all roles) */}
          <li>
            <Link to={`/${role}/best-it`} className="icon">
              <img src="./best.png" alt="IT" className="icon-image sb-icons" />
              <span className="label">Best IT Projects</span>
            </Link>
          </li>
          <li>
            <Link to={`/${role}/best-is`} className="icon">
              <img src="./best.png" alt="IS" className="icon-image sb-icons" />
              <span className="label">Best IS Projects</span>
            </Link>
          </li>
          <li>
            <Link to={`/${role}/best-cs`} className="icon">
              <img src="./best.png" alt="CS" className="icon-image sb-icons" />
              <span className="label">Best CS Projects</span>
            </Link>
          </li>

          {/* Profile Section (Common for all roles) */}
          <div className="profile-section">
            <Link to={`/${role}/profile`} className="profile-button">
              <img src="./profile.png" alt="Profile" className="icon-image sb-icons" />
              <span className="label">Profile</span>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
