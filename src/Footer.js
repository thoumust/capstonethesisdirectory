import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

const Footer = () => {
    return (
        <footer className="admin-footer">
        <p>Terms of Use | Privacy Policy | UST website</p>
        <p>
          UST Blessed Pier Giorgio Frassati Building, España Blvd, Sampaloc,
          Manila, 1000 Metro Manila
        </p>
      </footer>
    );
};

export default Footer;