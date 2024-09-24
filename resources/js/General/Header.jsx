import React, { useState } from "react";

import "../../css/StudentView/StudentProfile.css";

const Header = () => {

    const handleLogout = () => {
        // Handle logout logic
        window.location.href = "/";
      };

    return (
        <header className="admin-header">
        <img src="/logo.png" alt="Logo" className="admin-logo" />
        <h1>College of Information and Computing Sciences</h1>
        <h2>Capstone Projects and Thesis Papers Directory</h2>
        <button className="logout-button" onClick={handleLogout}>
          <img src="out.png" alt="Logout" className="icon-image sb-icons" /> Logout
        </button>
      </header>
    );
};

export default Header;