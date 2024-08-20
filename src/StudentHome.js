import React, { useState } from "react";
import "./StudentHome.css"; // Include your custom styles here

const StudentHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-home">
      <header className="admin-header">
        <img src="/logo.png" alt="Logo" className="admin-logo" />
        <h1>College of Information and Computing Sciences</h1>
        <h2>Capstone Projects and Thesis Papers Directory</h2>
        <button className="logout-button">
          <img src="out.png" alt="Logout" className="icon-image sb-icons" />{" "}
          Logout
        </button>
      </header>
      <div className="content-container">
        <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" className="icon">
                <img
                  src="/home.png"
                  alt="Home"
                  className="icon-image  sb-icons"
                />
                <span className="label">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img
                  src="./manage.png"
                  alt="Manage"
                  className="icon-image sb-icons"
                />
                <span className="label">Manage papers</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img
                  src="./approval.png"
                  alt="Approval"
                  className="icon-image  sb-icons"
                />
                <span className="label">Approval</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img src="./it.png" alt="IT" className="icon-image  sb-icons" />
                <span className="label">IT</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img src="./is.png" alt="IS" className="icon-image sb-icons" />
                <span className="label">IS</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img src="./cs.png" alt="CS" className="icon-image sb-icons" />
                <span className="label">CS</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon">
                <img
                  src="./accs.png"
                  alt="Account Management"
                  className="icon-image sb-icons"
                />
                <span className="label">Manage Accounts</span>
              </a>
            </li>
          </ul>
          <div className="profile-section">
            <a href="#" className="profile-button">
              <img
                src="./profile.png"
                alt="Profile"
                className="icon-image sb-icons"
              />
              <span className="label">Profile</span>
            </a>
          </div>
        </nav>
        <main className="main-content">
          <h1>Homepage</h1>
          <div className="info-section">
            <div className="info-box">
              <h2>About UST</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                rutrum euismod maximus. Fusce semper, felis ac laoreet
                condimentum, libero diam mattis libero, non posuere nunc tellus
                nec enim.
              </p>
            </div>
            <div className="info-box">
              <h2>Student Handbook</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                rutrum euismod maximus. Fusce semper, felis ac laoreet
                condimentum, libero diam mattis libero, non posuere nunc tellus
                nec enim.
              </p>
            </div>
            <div className="info-box">
              <h2>Others</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                rutrum euismod maximus. Fusce semper, felis ac laoreet
                condimentum, libero diam mattis libero, non posuere nunc tellus
                nec enim.
              </p>
            </div>
          </div>
        </main>
      </div>
      <footer className="admin-footer">
        <p>Terms of Use | Privacy Policy | UST website</p>
        <p>
          UST Blessed Pier Giorgio Frassati Building, España Blvd, Sampaloc,
          Manila, 1000 Metro Manila
        </p>
      </footer>
    </div>
  );
};

export default StudentHome;
