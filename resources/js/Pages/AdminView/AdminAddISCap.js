import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook
import AdminSidebar from "./AdminSidebar";
import Header from "../../General/Header";
import Footer from "../../General/Footer";
import "./AdminIPreg.css";

const AdminAddISCap = () => {
  const navigate = useNavigate(); // Initialize the hook for navigation

  const [formData, setFormData] = useState({
    ipRegistration: "",
    specialization: "",
    capstoneTitle: "",
    author1: "",
    author2: "",
    author3: "",
    author4: "",
    technicalAdviser: "",
    yearPublished: "",
    fullDocument: null,
    acmPaper: null,
    sourceCode: null,
    approvalForm: null,
    keywords: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  const handleCancel = () => {
    // Redirect to the desired route
    navigate("/admin/ip-registered/IS-cap");
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <main className="main-content">
          <div className="capstone-container">
            <h1>Add IS Capstone Project</h1>
            <form className="capstone-form">
              {/* Form Fields */}
              <div className="form-group">
                <label>IP Registration #:</label>
                <input
                  type="text"
                  name="ipRegistration"
                  value={formData.ipRegistration}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Specialization:</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Capstone Title:</label>
                <input
                  type="text"
                  name="capstoneTitle"
                  value={formData.capstoneTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Author 1:</label>
                <input
                  type="text"
                  name="author1"
                  value={formData.author1}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Author 2:</label>
                <input
                  type="text"
                  name="author2"
                  value={formData.author2}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Author 3:</label>
                <input
                  type="text"
                  name="author3"
                  value={formData.author3}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Author 4:</label>
                <input
                  type="text"
                  name="author4"
                  value={formData.author4}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Technical Adviser:</label>
                <input
                  type="text"
                  name="technicalAdviser"
                  value={formData.technicalAdviser}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Year Published:</label>
                <input
                  type="text"
                  name="yearPublished"
                  value={formData.yearPublished}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Full Document:</label>
                <input
                  type="file"
                  name="fullDocument"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label>ACM Paper:</label>
                <input
                  type="file"
                  name="acmPaper"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label>Source Code:</label>
                <input
                  type="file"
                  name="sourceCode"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label>Approval Form:</label>
                <input
                  type="file"
                  name="approvalForm"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label>Keywords:</label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                />
              </div>

              <div className="form-actions">
                <button type="button" className="submit-button" onClick={handleSubmit}>
                  Add IS Capstone Project
                </button>
                <button type="button" className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAddISCap;
