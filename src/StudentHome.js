import React, { useState } from "react";
import "./StudentHome.css"; 
import StudentSidebar from "./StudentSidebar";
import Header from "./Header";
import Footer from "./Footer";


const StudentHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };
  return (
    <div className="admin-home">
      <Header/>
      <div className="content-container">
      <StudentSidebar/>
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
    <Footer/>
    </div>
  );
};

export default StudentHome;
