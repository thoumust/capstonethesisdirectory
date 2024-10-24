import React, { useState } from "react";

import "../../../css/StudentView/StudentProfile.css";
import logo from '@/assets/logo.svg';

const Header = () => {

    const handleLogout = () => {
        // Handle logout logic
        window.location.href = "/";
      };

    return (
        <header className="flex items-center p-4 bg-[#A4231C] text-white sticky top-0 z-50">
        <img src={logo} alt="Logo" className="w-12 mr-12 ml-8" />
        <div className="header-text">
        <h1>College of Information and Computing Sciences</h1>
        <h2>Capstone Projects and Thesis Papers Directory</h2>
        </div>
        <button className="logout-button mr-8" onClick={handleLogout}>
          <img src="out.png" alt="Logout" className="icon-image sb-icons" /> Logout
        </button>
      </header>
    );
};

export default Header;