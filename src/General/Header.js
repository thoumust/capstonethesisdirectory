import React from "react";
import { useNavigate } from "react-router-dom";
import "../StudentView/StudentProfile.css";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Handle logout logic
        navigate("/");
    };

    return (
        <header className="admin-header">
            <div className="header-left">
                <img src="/logo.png" alt="Logo" className="admin-logo" />
                <div className="header-text">
                    <h1>CICS</h1>
                    <h2>Capstone Projects and Thesis Papers Directory</h2>
                </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>
                <img src="/out.png" alt="Logout" className="icon-image" /> Logout
            </button>
        </header>
    );
};

export default Header;
